function OtpScreen({ phone, onBack, onDone }) {
  const { OtpInput } = window.RanginDesignSystem_06512a;
  const [s, setS] = React.useState(120);
  const [err, setErr] = React.useState(false);
  React.useEffect(() => { const t = setInterval(() => setS((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(t); }, []);
  const shown = phone || '۰۹۱۲ ۳۴۵ ۶۷۸۹';
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <ScreenHeader title="" onBack={onBack} />
      <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <h1 className="h1" style={{ margin: 0 }}>کد تأیید را وارد کنید</h1>
          <p className="body" style={{ margin: '4px 0 0', color: 'var(--ink-muted)' }}>کد پنج‌رقمی به <span dir="ltr">{shown}</span> پیامک شد.</p>
        </div>
        <OtpInput seconds={s} onResend={() => setS(120)} onEditNumber={onBack}
          onComplete={(c) => { if (c === '00000') setErr(true); else setTimeout(onDone, 250); }} />
        {err && <span className="rg-field-help" style={{ color: 'var(--danger)' }}>کد اشتباه است. دوباره وارد کنید.</span>}
        <p className="caption" style={{ margin: 0, color: 'var(--ink-muted)' }}>با پر شدن خانهٔ آخر خودکار وارد می‌شوید. (نمونه: هر کدی جز ۰۰۰۰۰)</p>
      </div>
    </div>
  );
}
window.OtpScreen = OtpScreen;
