import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Badge({ tone = 'neutral', icon, className, children, ...rest }) {
  return (
    <span className={cx('rg-badge', tone !== 'neutral' && 'rg-badge-' + tone, className)} {...rest}>
      {icon && (typeof icon === 'string' ? <Icon name={icon} /> : icon)}{children}
    </span>
  );
}
