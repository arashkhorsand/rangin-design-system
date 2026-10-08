import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Chip({ pressed = false, icon, className, children, ...rest }) {
  return (
    <button type="button" aria-pressed={String(!!pressed)} className={cx('rg-chip', className)} {...rest}>
      {icon && (typeof icon === 'string' ? <Icon name={icon} /> : icon)}{children}
    </button>
  );
}

export function ChipGroup({ label, className, children, ...rest }) {
  return <div className={cx('rg-chips', className)} role="group" aria-label={label} {...rest}>{children}</div>;
}
