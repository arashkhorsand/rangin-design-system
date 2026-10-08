import React from 'react';

export function Sheet({ title, children, actions, id = 'rg-sheet-title', style }) {
  return (
    <section className="rg-sheet" role="dialog" aria-labelledby={id} style={style}>
      <span className="rg-sheet-grab"></span>
      {title && <h3 className="rg-sheet-title" id={id}>{title}</h3>}
      {typeof children === 'string' ? <p className="rg-sheet-body">{children}</p> : children}
      {actions && <div className="rg-sheet-actions">{actions}</div>}
    </section>
  );
}
