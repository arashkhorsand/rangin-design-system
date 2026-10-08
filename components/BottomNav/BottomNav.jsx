import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function BottomNav({ items, current, onChange, label = 'ناوبری اصلی', style }) {
  return (
    <nav className="rg-nav" aria-label={label} style={style}>
      {items.map((it) => {
        const on = it.id === current;
        return (
          <button key={it.id} type="button" className={cx('rg-nav-item', it.dot && 'rg-nav-dot')} aria-current={on ? 'page' : undefined}
            aria-label={on ? undefined : (it.dotLabel || it.label)} onClick={() => onChange && onChange(it.id)}>
            {typeof it.icon === 'string' ? <Icon name={it.icon} /> : it.icon}<span>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
