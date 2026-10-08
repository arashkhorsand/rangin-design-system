function OrdersScreen({ orders, onCancelAsk }) {
  const { Badge, Button } = window.RanginDesignSystem_06512a;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 0 120px' }}>
      <ScreenHeader title="سفارش‌ها" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 16px' }}>
        {orders.map((o) => (
          <article key={o.id} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-raised)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <h3 className="label" style={{ margin: 0, fontSize: 15 }}>{o.title}</h3>
              <Badge tone={o.status[0]} icon={o.status[1]}>{o.status[2]}</Badge>
            </div>
            <span className="caption" style={{ color: 'var(--ink-muted)' }}>{o.items} · {o.when}</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="rg-price-now">{window.toman(o.total)}<small>تومان</small></span>
              {o.cancellable && <Button variant="outline" size="sm" onClick={() => onCancelAsk(o)}>لغو سفارش</Button>}
              {o.status[2] === 'در انتظار پرداخت' && <Button variant="ink" size="sm">پرداخت</Button>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
window.OrdersScreen = OrdersScreen;
