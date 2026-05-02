import { css } from "lit";

/**
 * Base styles for the card.
 *
 * Everything visual is driven by CSS custom properties so the card can be
 * restyled via:
 *   - HA themes (theme YAML)
 *   - card-mod (card_mod.style)
 *   - direct `style:` config option
 *   - parent cards like Bubble Card "custom" slot
 */
export const cardStyles = css`
  :host {
    --slc-gap: var(--shopping-list-gap, 8px);
    --slc-radius: var(--shopping-list-radius, 12px);
    --slc-padding: var(--shopping-list-padding, 16px);
    --slc-bg: var(--shopping-list-bg, var(--ha-card-background, var(--card-background-color)));
    --slc-fg: var(--shopping-list-fg, var(--primary-text-color));
    --slc-muted: var(--shopping-list-muted, var(--secondary-text-color));
    --slc-accent: var(--shopping-list-accent, var(--primary-color));
    --slc-completed-fg: var(--shopping-list-completed-fg, var(--disabled-text-color));
    --slc-divider: var(--shopping-list-divider, var(--divider-color));
    display: block;
  }

  ha-card {
    background: var(--slc-bg);
    color: var(--slc-fg);
    border-radius: var(--slc-radius);
    padding: var(--slc-padding);
    display: flex;
    flex-direction: column;
    gap: var(--slc-gap);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--slc-gap);
    font-size: 1.1rem;
    font-weight: 500;
  }

  .header ha-icon {
    --mdc-icon-size: 22px;
    color: var(--slc-accent);
  }

  .empty {
    color: var(--slc-muted);
    font-style: italic;
    padding: 12px 4px;
    text-align: center;
  }

  ul.items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li.item {
    display: flex;
    align-items: center;
    gap: var(--slc-gap);
    padding: 6px 4px;
    border-bottom: 1px solid var(--slc-divider);
    cursor: pointer;
    user-select: none;
  }

  li.item:last-child {
    border-bottom: none;
  }

  li.item .summary {
    flex: 1;
    word-break: break-word;
  }

  li.item.completed .summary {
    color: var(--slc-completed-fg);
    text-decoration: line-through;
  }

  ha-checkbox {
    --mdc-checkbox-unchecked-color: var(--slc-muted);
    --mdc-theme-secondary: var(--slc-accent);
  }

  .add-row {
    display: flex;
    gap: var(--slc-gap);
    align-items: center;
    margin-top: 4px;
  }

  .add-row ha-textfield {
    flex: 1;
  }

  .delete {
    --mdc-icon-button-size: 32px;
    --mdc-icon-size: 18px;
    color: var(--slc-muted);
    opacity: 0;
    transition: opacity 120ms ease;
  }

  li.item:hover .delete,
  li.item:focus-within .delete {
    opacity: 1;
  }

  .error {
    color: var(--error-color);
    padding: 8px 0;
    font-size: 0.9rem;
  }
`;
