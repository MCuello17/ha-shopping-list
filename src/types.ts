import type { LovelaceCardConfig } from "./ha-types.js";

export type SortMode = "manual" | "alpha" | "created";

export interface ShoppingListCardConfig extends LovelaceCardConfig {
  type: string;
  entity?: string;
  title?: string;
  icon?: string;
  show_header?: boolean;
  show_completed?: boolean;
  show_add_input?: boolean;
  add_button_label?: string;
  empty_message?: string;
  sort?: SortMode;
  /** Free-form CSS appended to the card's shadow root for power users / theming. */
  card_mod?: { style?: string } | string;
  /** Direct style overrides without card-mod. Same idea, simpler. */
  style?: string;
}

/**
 * Shape of an item returned by the `todo/item/list` WebSocket call.
 * See: https://www.home-assistant.io/integrations/todo/
 */
export interface TodoItem {
  uid: string;
  summary: string;
  status: "needs_action" | "completed";
  description?: string;
  due?: string;
}
