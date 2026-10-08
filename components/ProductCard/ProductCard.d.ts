/**
 * Shop product card: square image, 2-line name, rating, Toman price and green add button. Max 200px wide.
 * @startingPoint section="Shop" subtitle="Product cards with discount and out-of-stock" viewport="700x380"
 */
export interface ProductCardProps {
  /** Include unit/weight in the name, e.g. «پستهٔ اکبری، ۵۰۰ گرم». Clamped to 2 lines. */
  title: string;
  /** Square image URL; white or surface background. */
  image?: string;
  /** Colored placeholder when no image. */
  placeholder?: 'sun' | 'brand' | 'pink' | 'blue';
  /** e.g. 4.7 → «۴٫۷» */
  rating?: number;
  ratingCount?: number;
  /** Number in Toman; formatted with Persian digits and «٬». */
  price: number | string;
  oldPrice?: number | string;
  /** Percent; renders the tilted pink off-badge on the image corner. */
  discount?: number | string;
  /** Neutral «ناموجود» badge + «خبرم کن» outline button. */
  outOfStock?: boolean;
  onAdd?: () => void;
  onNotify?: () => void;
  style?: React.CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
