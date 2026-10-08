import * as React from 'react';
/**
 * Bottom sheet for confirm, pick and short forms — always instead of a centered modal on mobile. Max 420px wide, radius-xl top corners.
 * @startingPoint section="Overlays" subtitle="Bottom sheet confirmation with two verb actions" viewport="700x330"
 */
export interface SheetProps {
  /** A clear question or action, e.g. «سفارش لغو شود؟» */
  title?: React.ReactNode;
  /** String renders as muted body text; nodes render as-is. */
  children?: React.ReactNode;
  /** One or two Buttons answering with verbs («لغو سفارش» / «نگهش دار»). Primary on the right (first). */
  actions?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Sheet(props: SheetProps): JSX.Element;
