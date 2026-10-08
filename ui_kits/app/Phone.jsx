const FA_DIGITS='۰۱۲۳۴۵۶۷۸۹';
window.fa=(n)=>String(n).replace(/[0-9]/g,(d)=>FA_DIGITS[d]);
window.toman=(n)=>window.fa(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'٬'));

function Phone({ children, overlay }) {
  return (
    <div style={{ width: 390, height: 844, borderRadius: 48, background: 'var(--bg)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden', flex: 'none' }}>
      <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', fontSize: 14, fontWeight: 700, direction: 'ltr', position: 'relative', zIndex: 3 }}>
        <span>{window.fa('9:41')}</span><span style={{ width: 120, height: 30, borderRadius: 999, background: 'var(--ink)' }}></span><span>{window.fa('100')}٪</span>
      </div>
      <div style={{ position: 'absolute', inset: '44px 0 0 0', display: 'flex', flexDirection: 'column' }}>{children}</div>
      {overlay}
    </div>
  );
}

function ScreenHeader({ title, onBack, end }) {
  const { Button } = window.RanginDesignSystem_06512a;
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 2, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'var(--glass)', backdropFilter: 'blur(16px) saturate(1.6)', WebkitBackdropFilter: 'blur(16px) saturate(1.6)' }}>
      {onBack && <Button iconOnly size="sm" aria-label="بازگشت" onClick={onBack} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scaleX(-1)' }}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>} />}
      <h1 className="h3" style={{ margin: 0, flex: 1 }}>{title}</h1>
      {end}
    </header>
  );
}
Object.assign(window, { Phone, ScreenHeader });
