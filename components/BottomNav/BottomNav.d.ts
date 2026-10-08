import * as React from 'react';
export interface BottomNavItem { id: string; label: string; icon: string | React.ReactNode; /** pink notification dot */ dot?: boolean; /** aria-label describing the dot, e.g. «سفارش‌ها، یک سفارش فعال» */ dotLabel?: string; }
/**
 * Floating glass pill bottom navigation for mobile, 3–5 destinations. Only the active item shows its label (brand-tint pill). Home is rightmost. You position it fixed.
 * @startingPoint section="Navigation" subtitle="Glass pill mobile bottom nav" viewport="700x120"
 */
export interface BottomNavProps {
  items: BottomNavItem[];
  current: string;
  onChange?: (id: string) => void;
  label?: string;
  style?: React.CSSProperties;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
