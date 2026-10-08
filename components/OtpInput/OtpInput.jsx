import React from 'react';
import { Button } from '../Button/Button.jsx';

const FA = '۰۱۲۳۴۵۶۷۸۹';
const toFa = (s) => String(s).replace(/[0-9]/g, (d) => FA[d]);
const toEn = (s) => String(s).replace(/[۰-۹]/g, (d) => FA.indexOf(d));

export function OtpInput({ length = 5, value, defaultValue = '', onChange, onComplete, label, seconds, onResend, onEditNumber }) {
  const [inner, setInner] = React.useState(toEn(defaultValue));
  const v = value != null ? toEn(value) : inner;
  const refs = React.useRef([]);
  const set = (next) => {
    next = next.slice(0, length);
    if (value == null) setInner(next);
    onChange && onChange(next);
    if (next.length === length && onComplete) onComplete(next);
  };
  const onInput = (i, e) => {
    const d = toEn(e.target.value).replace(/\D/g, '');
    if (!d) return;
    const arr = v.split('');
    if (d.length > 1) { set(d); refs.current[Math.min(d.length, length - 1)]?.focus(); return; }
    arr[i] = d.slice(-1);
    set(arr.join('').slice(0, length));
    refs.current[i + 1]?.focus();
  };
  const onKey = (i, e) => {
    if (e.key === 'Backspace') {
      const arr = v.split('');
      if (arr[i]) { arr[i] = ''; set(arr.join('')); }
      else if (i > 0) { arr[i - 1] = ''; set(arr.join('')); refs.current[i - 1]?.focus(); }
      e.preventDefault();
    }
  };
  const mm = seconds != null ? toFa(String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0')) : null;
  return (
    <div className="rg-stack">
      {label && <span className="rg-field-label">{label}</span>}
      <div className="rg-otp" role="group" aria-label={'کد تأیید ' + toFa(length) + ' رقمی'}>
        {Array.from({ length }).map((_, i) => (
          <input key={i} ref={(el) => (refs.current[i] = el)} className={v[i] ? 'is-filled' : undefined} inputMode="numeric" maxLength={i === 0 ? length : 1}
            autoComplete={i === 0 ? 'one-time-code' : undefined} aria-label={'رقم ' + toFa(i + 1)} value={v[i] ? toFa(v[i]) : ''}
            onChange={(e) => onInput(i, e)} onKeyDown={(e) => onKey(i, e)} />
        ))}
      </div>
      {(mm != null || onEditNumber) && (
        <div className="rg-otp-meta">
          {seconds > 0 ? <span>ارسال دوباره تا <b>{mm}</b></span> : seconds === 0 ? <Button variant="tint" size="sm" onClick={onResend}>ارسال دوباره</Button> : <span></span>}
          {onEditNumber && <Button variant="tint" size="sm" onClick={onEditNumber}>ویرایش شماره</Button>}
        </div>
      )}
    </div>
  );
}
