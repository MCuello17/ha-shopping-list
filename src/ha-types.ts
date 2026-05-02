/**
 * Minimal Home Assistant type surface needed by this card.
 *
 * Defined locally instead of pulling in the abandoned `custom-card-helpers`
 * package. We only declare what we actually consume.
 *
 * References:
 *   - https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/
 *   - https://github.com/home-assistant/frontend (LovelaceCard et al.)
 */

export interface HassEntityState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}

export interface UnsubscribeFunc {
  (): void;
}

export interface HassConnection {
  subscribeMessage<T>(
    callback: (message: T) => void,
    subscribeMessage: { type: string; [key: string]: unknown },
  ): Promise<UnsubscribeFunc>;
}

/**
 * The subset of `hass` we use. The real object has dozens more fields, but
 * Lovelace cards are fed the same instance so we just narrow our view.
 */
export interface HomeAssistant {
  states: Record<string, HassEntityState>;
  language: string;
  locale?: { language: string; number_format?: string };
  themes?: { darkMode?: boolean };
  connection: HassConnection;
  callWS<T = unknown>(msg: { type: string; [key: string]: unknown }): Promise<T>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>,
  ): Promise<unknown>;
}

/** Base shape of any Lovelace card config. */
export interface LovelaceCardConfig {
  type: string;
  [key: string]: unknown;
}

/**
 * Interface that every custom card must implement so HA's dashboard
 * code can size, configure, and re-render it.
 */
export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: LovelaceCardConfig): void;
  getCardSize(): number | Promise<number>;
}

/** Interface that the visual editor element implements. */
export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: LovelaceCardConfig): void;
}
