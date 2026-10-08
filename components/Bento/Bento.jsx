import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function BentoCell({ tone, wide, tall, shape, num, title, text, children, style }) {
  return (
    <div className={cx('rg-bento-cell', tone && 'rg-bento-' + tone, wide && 'rg-bento-wide', tall && 'rg-bento-tall')} style={style}>
      {shape && <span className="rg-bento-shape"></span>}
      {num != null && <span className="rg-bento-num">{num}</span>}
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}

export function Bento({ children, style }) {
  return <div className="rg-bento" style={style}>{children}</div>;
}
