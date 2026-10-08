import React from 'react';
import { Icon } from '../Icon/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function TextField({ label, help, error, affix, dir, className, style, inputStyle, ...inputProps }) {
  const msg = error || help;
  return (
    <label className={cx('rg-field', error && 'rg-field-error', className)} style={style}>
      {label && <span className="rg-field-label">{label}</span>}
      <span className="rg-input">
        <input dir={dir} aria-invalid={error ? 'true' : undefined} style={inputStyle} {...inputProps} />
        {affix && <span className="rg-input-affix">{affix}</span>}
      </span>
      {msg && <span className="rg-field-help">{error && <Icon name="alert" />}{msg}</span>}
    </label>
  );
}
