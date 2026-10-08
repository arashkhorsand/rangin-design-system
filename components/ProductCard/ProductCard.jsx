import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';
import { Badge } from '../Badge/Badge.jsx';

const FA = '۰۱۲۳۴۵۶۷۸۹';
const fa = (n) => String(n).replace(/[0-9]/g, (d) => FA[d]);
const money = (n) => typeof n === 'number' ? fa(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '٬')) : n;

const PH = {
  sun: { bg: 'var(--sun-tint)', fg: 'var(--sun)', r: 'var(--radius-pill)', t: 'none' },
  brand: { bg: 'var(--brand-tint)', fg: 'var(--brand)', r: 'var(--radius-lg)', t: 'none' },
  pink: { bg: 'var(--pink-tint)', fg: 'var(--pink)', r: 'var(--radius-md)', t: 'rotate(12deg)' },
  blue: { bg: 'var(--blue-tint)', fg: 'var(--blue)', r: 'var(--radius-pill)', t: 'none' },
};

export function ProductCard({ title, image, placeholder = 'brand', rating, ratingCount, price, oldPrice, discount, outOfStock = false, onAdd, onNotify, style }) {
  const ph = PH[placeholder] || PH.brand;
  return (
    <article className="rg-product" style={style}>
      {discount != null && <Badge tone="off">{typeof discount === 'number' ? '٪' + fa(discount) : discount}</Badge>}
      <div className="rg-product-media" style={image ? undefined : { display: 'grid', placeItems: 'center', background: ph.bg }}>
        {image ? <img src={image} alt="" /> : <i style={{ width: '46%', aspectRatio: '1', borderRadius: ph.r, background: ph.fg, transform: ph.t }}></i>}
      </div>
      <h3 className="rg-product-title">{title}</h3>
      <div className="rg-product-meta">
        {outOfStock ? <Badge>ناموجود</Badge> : rating != null && <><Icon name="star" />{fa(rating).replace('.', '٫')} {ratingCount != null && <span>({money(ratingCount)})</span>}</>}
      </div>
      <div className="rg-product-foot">
        <div className="rg-price">
          {oldPrice != null && <span className="rg-price-old">{money(oldPrice)}</span>}
          <span className="rg-price-now">{money(price)}<small>تومان</small></span>
        </div>
        {outOfStock
          ? <Button variant="outline" size="sm" onClick={onNotify}>خبرم کن</Button>
          : <Button variant="primary" size="sm" iconOnly icon="plus" aria-label="افزودن به سبد" onClick={onAdd} />}
      </div>
    </article>
  );
}
