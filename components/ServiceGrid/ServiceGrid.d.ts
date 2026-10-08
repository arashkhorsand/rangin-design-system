import * as React from 'react';
export interface ServiceItem { id?: string; label: string; icon: string | React.ReactNode; tone?: 'brand' | 'pink' | 'blue' | 'sun' | 'solid'; }
/**
 * 4-column service launcher for a multi-service app home. Max two rows; 9th+ go under «بیشتر».
 * @startingPoint section="Navigation" subtitle="4-column service tile grid" viewport="700x300"
 */
export interface ServiceGridProps {
  items?: ServiceItem[];
  onSelect?: (item: ServiceItem) => void;
  /** Alternatively pass <Service> children. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ServiceGrid(props: ServiceGridProps): JSX.Element;
export interface ServiceProps { tone?: ServiceItem['tone']; icon: string | React.ReactNode; onClick?: () => void; children?: React.ReactNode; }
export declare function Service(props: ServiceProps): JSX.Element;
