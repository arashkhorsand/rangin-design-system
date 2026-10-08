import * as React from 'react';
/**
 * Bento layout: unequal, very round tiles for feature intros, landing pages and dashboard summaries. 4 cols (2 on mobile), 132px rows.
 * @startingPoint section="Layout" subtitle="Bento feature grid with one dominant color tile" viewport="700x320"
 */
export interface BentoProps { children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Bento(props: BentoProps): JSX.Element;
export interface BentoCellProps {
  /** Solid fills use on-… text. aura = soft tint halo (once per grid). none = surface. Max three solid tiles. */
  tone?: 'brand' | 'pink' | 'blue' | 'sun' | 'ink' | 'aura';
  wide?: boolean;
  tall?: boolean;
  /** Decorative corner disc on colored tiles. */
  shape?: boolean;
  /** Big display number, e.g. «٪۴۰». */
  num?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function BentoCell(props: BentoCellProps): JSX.Element;
