/**
 * Quantity is encoded into the item summary as a `<quantity: N>` marker.
 * Encoding it in plain text keeps the data portable:
 *
 *   - Survives a roundtrip through HA's todo API untouched.
 *   - Power users can edit YAML or use HA's UI directly without losing it.
 *   - When the quantity feature is disabled, the marker is just visible
 *     text — no data migration needed to toggle the feature on/off.
 *
 * On parse we are deliberately tolerant:
 *   - The marker can appear anywhere in the summary (we still strip it).
 *   - Multiple markers are accepted; the last numeric value wins.
 *   - Whitespace around the colon and inside the brackets is allowed.
 *
 * On format we are strict and canonical: always written at the end of the
 * summary as `<name> <quantity: N>`. When N == 1 we omit the marker so
 * single-quantity items stay clean in the underlying todo list.
 */

const MARKER_RE = /<quantity:\s*(\d+)\s*>/gi;

export interface ParsedSummary {
  name: string;
  quantity: number;
}

export function parseQuantity(summary: string): ParsedSummary {
  let last: number | null = null;
  for (const m of summary.matchAll(MARKER_RE)) {
    const n = Number.parseInt(m[1], 10);
    if (Number.isFinite(n) && n > 0) last = n;
  }
  const name = summary.replace(MARKER_RE, "").replace(/\s+/g, " ").trim();
  return { name, quantity: last ?? 1 };
}

export function formatQuantity(name: string, quantity: number): string {
  const trimmed = name.trim();
  if (quantity <= 1) return trimmed;
  return `${trimmed} <quantity: ${quantity}>`;
}

/**
 * Snap a quantity into the [1, max] range. `max <= 0` means unlimited.
 * Non-finite or fractional inputs are floored and clamped at 1.
 */
export function clampQuantity(quantity: number, max: number): number {
  const floored = Math.floor(Number(quantity) || 1);
  const min1 = Math.max(1, floored);
  if (max && max > 0) return Math.min(min1, max);
  return min1;
}
