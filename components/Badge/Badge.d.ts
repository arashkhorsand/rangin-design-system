import * as React from 'react';
/** Small non-clickable badge for order status, feature labels and discount percent. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** success/blue/sun/danger = status (always with icon). brand/pink = feature/promo. neutral = e.g. «ناموجود». off = tilted solid-pink discount tag («٪۲۵»). */
  tone?: 'neutral' | 'brand' | 'pink' | 'blue' | 'sun' | 'success' | 'danger' | 'off';
  /** Icon name or node (14px). */
  icon?: string | React.ReactNode;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
