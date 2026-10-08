function StoreScreen({ onBack, cart, onAdd, onCheckout }) {
  const { Chip, ChipGroup, ProductCard, Button } = window.RanginDesignSystem_06512a;
  const cats = ['همه', 'خشکبار', 'شیرینی', 'نوشیدنی'];
  const [cat, setCat] = React.useState('همه');
  const list = window.KIT_PRODUCTS.filter((p) => cat === 'همه' || p.cat === cat);
  const total = cart.reduce((s, p) => s + p.price, 0);
  return (
    <div style={{ position: 'relative', minHeight: '100%' }}>
      <ScreenHeader title="سوپرمارکت" onBack={onBack} />
      <div style={{ padding: '0 16px' }}>
        <ChipGroup label="دسته‌بندی">{cats.map((c) => <Chip key={c} pressed={c === cat} onClick={() => setCat(c)}>{c}</Chip>)}</ChipGroup>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12, padding: '16px 16px 120px' }}>
        {list.map((p) => <ProductCard key={p.id} {...p} style={{ maxWidth: 'none' }} onAdd={() => onAdd(p)} />)}
      </div>
      {cart.length > 0 && (
        <div style={{ position: 'sticky', bottom: 16, margin: '0 16px', display: 'flex', alignItems: 'center', gap: 12, padding: 8, paddingInlineStart: 20, borderRadius: 999, border: '1px solid var(--line)', background: 'var(--glass)', backdropFilter: 'blur(16px) saturate(1.6)', WebkitBackdropFilter: 'blur(16px) saturate(1.6)', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
            <span className="caption" style={{ color: 'var(--ink-muted)' }}>{window.fa(cart.length)} کالا</span>
            <span className="rg-price-now">{window.toman(total)}<small>تومان</small></span>
          </div>
          <Button variant="primary" onClick={onCheckout}>ثبت سفارش</Button>
        </div>
      )}
    </div>
  );
}
window.StoreScreen = StoreScreen;
