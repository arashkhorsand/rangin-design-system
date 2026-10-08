import * as React from 'react';
/** Line icon from the source preview set: 24px grid, 1.75 stroke, round caps, currentColor. */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: 'home' | 'search' | 'bag' | 'user' | 'check' | 'clock' | 'alert' | 'plus' | 'arrow-left' | 'star' | 'bowl' | 'car' | 'box' | 'card' | 'send' | 'medical' | 'grid';
  /** px, default 24 */
  size?: number;
  /** Accessible label; omit for decorative icons. */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const ICON_PATHS: Record<string, string>;
