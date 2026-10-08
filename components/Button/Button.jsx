import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Button({ variant = 'surface', size = 'md', block = false, iconOnly = false, icon, iconEnd, type = 'button', className, children, ...rest }) {
  const ic = (n) => typeof n === 'string' ? <Icon name={n} /> : n;
  return (
    <button type={type} className={cx('rg-btn', variant !== 'surface' && 'rg-btn-' + variant, size !== 'md' && 'rg-btn-' + size, block && 'rg-btn-block', iconOnly && 'rg-btn-icon', className)} {...rest}>
      {icon && ic(icon)}{children}{iconEnd && ic(iconEnd)}
    </button>
  );
}
