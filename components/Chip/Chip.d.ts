import * as React from 'react';
/**
 * Pill filter chip; lives in a horizontally scrolling ChipGroup. Selected = ink fill.
 * @startingPoint section="Selection" subtitle="Scrolling filter chip row" viewport="700x100"
 */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  /** Optional 16px icon before the label. */
  icon?: string | React.ReactNode;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> { label?: string; children?: React.ReactNode; }
export declare function ChipGroup(props: ChipGroupProps): JSX.Element;
