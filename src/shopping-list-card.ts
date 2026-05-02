import { LitElement, html, nothing, type TemplateResult, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "./ha-types.js";

import { CARD_TAG, CARD_VERSION, DEFAULT_CONFIG, EDITOR_TAG } from "./const.js";
import type { ShoppingListCardConfig, TodoItem } from "./types.js";
import { cardStyles } from "./styles.js";

// Editor side-effect import so HA can lazy-load it.
import "./shopping-list-card-editor.js";

/* ───────────────────────────────────────────────────────────────────────────
 * Register card with the HA frontend.
 * ─────────────────────────────────────────────────────────────────────────── */
const win = window as unknown as {
  customCards?: Array<{
    type: string;
    name: string;
    description: string;
    preview?: boolean;
    documentationURL?: string;
  }>;
};
win.customCards = win.customCards || [];
if (!win.customCards.find((c) => c.type === CARD_TAG)) {
  win.customCards.push({
    type: CARD_TAG,
    name: "Shopping List Card",
    description: "Work in progress — a Lovelace shopping list card.",
    preview: true,
    documentationURL: "https://github.com/MCuello17/ha-shopping-list",
  });
}

console.info(
  `%c SHOPPING-LIST-CARD %c v${CARD_VERSION} `,
  "color: white; background: #03a9f4; font-weight: 700;",
  "color: #03a9f4; background: white; font-weight: 700;",
);

/* ─────────────────────────────────────────────────────────────────────────── */

@customElement(CARD_TAG)
export class ShoppingListCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: ShoppingListCardConfig;
  @state() private _items: TodoItem[] = [];
  @state() private _loading = false;
  @state() private _error?: string;
  @state() private _draft = "";

  private _unsub?: () => void;
  private _lastEntity?: string;

  static styles = cardStyles;

  /* ─── Card public API ──────────────────────────────────────────────── */

  public static getStubConfig(): ShoppingListCardConfig {
    return { ...DEFAULT_CONFIG };
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement(EDITOR_TAG) as unknown as LovelaceCardEditor;
  }

  public setConfig(config: ShoppingListCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    this._config = { ...DEFAULT_CONFIG, ...config };
  }

  public getCardSize(): number {
    const base = this._config?.show_header ? 2 : 1;
    return base + Math.min(this._items.length, 6);
  }

  /* ─── Lifecycle ────────────────────────────────────────────────────── */

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this._teardownSubscription();
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    const entity = this._config?.entity;
    if (!entity || !this.hass) return;
    if (entity !== this._lastEntity) {
      this._lastEntity = entity;
      void this._setupSubscription(entity);
    }
  }

  /* ─── HA Todo API plumbing ─────────────────────────────────────────── */

  private async _setupSubscription(entity: string): Promise<void> {
    this._teardownSubscription();
    if (!this.hass) return;
    this._loading = true;
    this._error = undefined;
    try {
      // Initial fetch.
      const result = await this.hass.callWS<{ items: TodoItem[] }>({
        type: "todo/item/list",
        entity_id: entity,
      });
      this._items = result.items ?? [];

      // Subscribe to updates.
      this._unsub = await this.hass.connection.subscribeMessage<{ items: TodoItem[] }>(
        (msg) => {
          this._items = msg.items ?? [];
        },
        { type: "todo/item/subscribe", entity_id: entity },
      );
    } catch (err) {
      this._error = err instanceof Error ? err.message : String(err);
    } finally {
      this._loading = false;
    }
  }

  private _teardownSubscription(): void {
    if (this._unsub) {
      try {
        this._unsub();
      } catch {
        /* ignore */
      }
      this._unsub = undefined;
    }
  }

  private async _addItem(): Promise<void> {
    const entity = this._config?.entity;
    const summary = this._draft.trim();
    if (!entity || !summary || !this.hass) return;
    try {
      await this.hass.callService("todo", "add_item", { entity_id: entity, item: summary });
      this._draft = "";
    } catch (err) {
      this._error = err instanceof Error ? err.message : String(err);
    }
  }

  private async _toggleItem(item: TodoItem): Promise<void> {
    const entity = this._config?.entity;
    if (!entity || !this.hass) return;
    const next = item.status === "completed" ? "needs_action" : "completed";
    try {
      await this.hass.callService("todo", "update_item", {
        entity_id: entity,
        item: item.uid,
        status: next,
      });
    } catch (err) {
      this._error = err instanceof Error ? err.message : String(err);
    }
  }

  private async _removeItem(item: TodoItem): Promise<void> {
    const entity = this._config?.entity;
    if (!entity || !this.hass) return;
    try {
      await this.hass.callService("todo", "remove_item", {
        entity_id: entity,
        item: item.uid,
      });
    } catch (err) {
      this._error = err instanceof Error ? err.message : String(err);
    }
  }

  /* ─── Sorting / filtering ──────────────────────────────────────────── */

  private _visibleItems(): TodoItem[] {
    const cfg = this._config;
    if (!cfg) return [];
    let items = [...this._items];
    if (!cfg.show_completed) {
      items = items.filter((i) => i.status !== "completed");
    }
    switch (cfg.sort) {
      case "alpha":
        items.sort((a, b) => a.summary.localeCompare(b.summary));
        break;
      case "created":
        // Items already arrive in creation order from HA.
        break;
      case "manual":
      default:
        // Preserve the user's manual order from HA.
        break;
    }
    return items;
  }

  /* ─── Render ───────────────────────────────────────────────────────── */

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;

    const cfg = this._config;
    const items = this._visibleItems();
    const customStyle = this._extractCustomStyle();

    return html`
      <ha-card>
        ${cfg.show_header ? this._renderHeader() : nothing}
        ${this._error ? html`<div class="error">${this._error}</div>` : nothing}
        ${!cfg.entity
          ? html`<div class="empty">No todo entity selected. Open the editor to pick one.</div>`
          : this._loading && this._items.length === 0
            ? html`<div class="empty">Loading…</div>`
            : items.length === 0
              ? html`<div class="empty">${cfg.empty_message}</div>`
              : html`<ul class="items">
                  ${items.map((i) => this._renderItem(i))}
                </ul>`}
        ${cfg.show_add_input && cfg.entity ? this._renderAddRow() : nothing}
      </ha-card>
      ${customStyle ? html`<style>${customStyle}</style>` : nothing}
    `;
  }

  private _renderHeader(): TemplateResult {
    const cfg = this._config!;
    return html`
      <div class="header">
        ${cfg.icon ? html`<ha-icon .icon=${cfg.icon}></ha-icon>` : nothing}
        <span>${cfg.title}</span>
      </div>
    `;
  }

  private _renderItem(item: TodoItem): TemplateResult {
    const completed = item.status === "completed";
    return html`
      <li
        class="item ${completed ? "completed" : ""}"
        @click=${(ev: MouseEvent) => {
          // Avoid double-toggle when clicking the checkbox itself.
          if ((ev.target as HTMLElement).tagName === "HA-CHECKBOX") return;
          void this._toggleItem(item);
        }}
      >
        <ha-checkbox
          .checked=${completed}
          @change=${() => this._toggleItem(item)}
        ></ha-checkbox>
        <span class="summary">${item.summary}</span>
        <ha-icon-button
          class="delete"
          .label=${"Remove"}
          @click=${(ev: MouseEvent) => {
            ev.stopPropagation();
            void this._removeItem(item);
          }}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </li>
    `;
  }

  private _renderAddRow(): TemplateResult {
    const cfg = this._config!;
    return html`
      <div class="add-row">
        <ha-textfield
          .value=${this._draft}
          .placeholder=${"Add an item…"}
          @input=${(ev: Event) => (this._draft = (ev.target as HTMLInputElement).value)}
          @keydown=${(ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              void this._addItem();
            }
          }}
        ></ha-textfield>
        <mwc-button raised @click=${() => this._addItem()}>${cfg.add_button_label}</mwc-button>
      </div>
    `;
  }

  /**
   * Allow users to inject custom CSS via either:
   *   style: |
   *     ha-card { ... }
   * or the card-mod compatible:
   *   card_mod:
   *     style: |
   *       ha-card { ... }
   */
  private _extractCustomStyle(): string | undefined {
    const cfg = this._config;
    if (!cfg) return undefined;
    if (typeof cfg.style === "string" && cfg.style.trim()) return cfg.style;
    if (cfg.card_mod) {
      if (typeof cfg.card_mod === "string") return cfg.card_mod;
      if (typeof cfg.card_mod === "object" && cfg.card_mod.style) return cfg.card_mod.style;
    }
    return undefined;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: ShoppingListCard;
  }
}
