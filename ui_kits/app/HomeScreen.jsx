function HomeScreen({ onService, onAdd, cartCount }) {
  const { ServiceGrid, ProductCard, Bento, BentoCell, Button, Icon } = window.RanginDesignSystem_06512a;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '8px 16px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span className="caption" style={{ color: 'var(--ink-muted)' }}>تحویل به</span>
          <div className="label" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>خانه، خیابان ولیعصر، کوچهٔ نسترن</div>
        </div>
        <Button iconOnly aria-label={'سبد خرید، ' + window.fa(cartCount) + ' کالا'} icon="bag" className={cartCount ? 'rg-nav-dot' : undefined} />
      </div>
      <button type="button" onClick={() => onService({ id: 'market' })} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 52, padding: '0 16px', border: 0, borderRadius: 999, background: 'var(--surface)', color: 'var(--ink-muted)', font: 'inherit', fontSize: 15, cursor: 'pointer' }}>
        <Icon name="search" size={20} /><span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'start' }}>جست‌وجو در غذا، کالا و سرویس‌ها</span>
      </button>
      <ServiceGrid items={window.KIT_SERVICES} onSelect={onService} style={{ maxWidth: 'none' }} />
      <Bento style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gridAutoRows: 'minmax(132px, auto)' }}>
        <BentoCell tone="pink" wide shape num="٪۴۰" title="تخفیف سفارش اول" text="تا سقف ۱۵۰٬۰۰۰ تومان، فقط این هفته." />
      </Bento>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="h2" style={{ margin: 0 }}>پیشنهادهای امروز</h2>
          <Button variant="tint" size="sm" iconEnd="arrow-left" onClick={() => onService({ id: 'market' })}>مشاهدهٔ همه</Button>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', margin: '0 -16px', padding: '0 16px 4px', scrollbarWidth: 'none' }}>
          {window.KIT_PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} {...p} style={{ flex: '0 0 164px' }} onAdd={() => onAdd(p)} />)}
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
