function LoginScreen({ phone, setPhone, onNext }) {
  const { TextField, Button } = window.RanginDesignSystem_06512a;
  const ok = phone.replace(/[^0-9۰-۹]/g, '').length >= 10;
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '32px 16px 24px', gap: 24 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 1.25 }}>رنگین</span>
      <div>
        <h1 className="h1" style={{ margin: 0 }}>ورود یا ثبت‌نام</h1>
        <p className="body" style={{ margin: '4px 0 0', color: 'var(--ink-muted)' }}>شمارهٔ موبایلتان را وارد کنید تا کد تأیید بفرستیم.</p>
      </div>
      <TextField label="شمارهٔ موبایل" type="tel" inputMode="numeric" dir="ltr" placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹" affix="+۹۸" autoComplete="tel"
        value={phone} onChange={(e) => setPhone(e.target.value)} help="کد تأیید به این شماره پیامک می‌شود." />
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button variant="primary" size="lg" block disabled={!ok} onClick={onNext}>دریافت کد</Button>
        <p className="caption" style={{ margin: 0, color: 'var(--ink-muted)', textAlign: 'center' }}>ورود شما یعنی پذیرش <a href="#" style={{ color: 'var(--blue)' }}>قوانین رنگین</a>.</p>
      </div>
    </div>
  );
}
window.LoginScreen = LoginScreen;
