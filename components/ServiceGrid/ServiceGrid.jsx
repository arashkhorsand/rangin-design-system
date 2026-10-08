import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Service({ tone, icon, onClick, children }) {
  return (
    <button type="button" className={cx('rg-service', tone && 'rg-service-' + tone)} onClick={onClick}>
      <span className="rg-service-icon">{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>{children}
    </button>
  );
}

export function ServiceGrid({ items, onSelect, children, style }) {
  return (
    <div className="rg-services" style={style}>
      {items ? items.map((it, i) => <Service key={it.id || i} tone={it.tone} icon={it.icon} onClick={() => onSelect && onSelect(it)}>{it.label}</Service>) : children}
    </div>
  );
}
