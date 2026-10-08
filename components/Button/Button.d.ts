import * as React from 'react';
/**
 * Pill button for every action. One green primary per view.
 * @startingPoint section="Actions" subtitle="Pill buttons: primary, ink, pink, tint, outline, danger" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = brand + glow (main action). ink = second main / final pay. pink = campaign. tint = light secondary. outline = cancel/neutral. danger = irreversible delete. surface = default grey. */
  variant?: 'surface' | 'primary' | 'ink' | 'pink' | 'tint' | 'outline' | 'danger';
  /** sm 36px · md 48px (default) · lg 56px */
  size?: 'sm' | 'md' | 'lg';
  /** Full width (mobile page bottom, sheets). */
  block?: boolean;
  /** Square icon-only button; pass aria-label. */
  iconOnly?: boolean;
  /** Icon name (see Icon) or node, before label. */
  icon?: string | React.ReactNode;
  /** Icon after label (e.g. 'arrow-left' for "view all" in RTL). */
  iconEnd?: string | React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
