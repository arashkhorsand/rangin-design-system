function AccountScreen({ phone, onLogout }) {
  const { Button, Bento, BentoCell } = window.RanginDesignSystem_06512a;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '0 0 120px' }}>
      <ScreenHeader title="حساب من" />
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div className="h2">سارا محمدی</div>
          <div className="caption" dir="ltr" style={{ color: 'var(--ink-muted)', textAlign: 'right' }}>{phone || '۰۹۱۲ ۳۴۵ ۶۷۸۹'}</div>
        </div>
        <Bento style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gridAutoRows: 'minmax(132px, auto)' }}>
          <BentoCell tone="brand" num="۱۲" text="سفارش این ماه" />
          <BentoCell tone="aura" num={<span style={{ fontSize: 36 }}>۸۴٬۰۰۰</span>} text="تومان اعتبار کیف پول" />
        </Bento>
        <Button variant="outline" block onClick={onLogout}>خروج از حساب</Button>
      </div>
    </div>
  );
}
window.AccountScreen = AccountScreen;
