function App() {
  const { BottomNav, Sheet, Button } = window.RanginDesignSystem_06512a;
  const saved = (() => { try { return JSON.parse(localStorage.getItem('rg-kit') || '{}'); } catch (e) { return {}; } })();
  const [route, setRoute] = React.useState(saved.route || 'home');
  const [phone, setPhone] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [orders, setOrders] = React.useState(window.KIT_ORDERS);
  const [ask, setAsk] = React.useState(null);
  const [dark, setDark] = React.useState(!!saved.dark);
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); }, [dark]);
  React.useEffect(() => { localStorage.setItem('rg-kit', JSON.stringify({ route, dark })); }, [route, dark]);
  const go = (r) => setRoute(r);
  const tabs = ['home', 'store', 'orders', 'me'];
  const add = (p) => setCart((c) => [...c, p]);
  const checkout = () => {
    const total = cart.reduce((s, p) => s + p.price, 0);
    setOrders((o) => [{ id: 'N' + Date.now(), title: 'سوپرمارکت رنگین', items: window.fa(cart.length) + ' کالا', total, status: ['blue', 'clock', 'در حال آماده‌سازی'], when: 'همین حالا', cancellable: true }, ...o]);
    setCart([]); go('orders');
  };
  const cancel = () => { setOrders((o) => o.map((x) => x.id === ask.id ? { ...x, cancellable: false, status: ['danger', 'alert', 'لغو شد'] } : x)); setAsk(null); };
  const showNav = tabs.includes(route);
  let screen;
  if (route === 'login') screen = <LoginScreen phone={phone} setPhone={setPhone} onNext={() => go('otp')} />;
  else if (route === 'otp') screen = <OtpScreen phone={phone} onBack={() => go('login')} onDone={() => go('home')} />;
  else if (route === 'store') screen = <StoreScreen onBack={() => go('home')} cart={cart} onAdd={add} onCheckout={checkout} />;
  else if (route === 'orders') screen = <OrdersScreen orders={orders} onCancelAsk={setAsk} />;
  else if (route === 'me') screen = <AccountScreen phone={phone} onLogout={() => go('login')} />;
  else screen = <HomeScreen cartCount={cart.length} onAdd={add} onService={(s) => s.id === 'market' && go('store')} />;
  const active = orders.some((o) => o.cancellable);
  const overlay = ask && (
    <div className="rg-scrim-overlay" onClick={() => setAsk(null)} style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'flex-end' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%' }}>
        <Sheet title="سفارش لغو شود؟" style={{ maxWidth: 'none', paddingBottom: 40 }} actions={<><Button variant="danger" onClick={cancel}>لغو سفارش</Button><Button variant="outline" onClick={() => setAsk(null)}>نگهش دار</Button></>}>
          {'رستوران هنوز آماده‌سازی را شروع نکرده است. مبلغ ' + window.toman(ask.total) + ' تومان تا ۷۲ ساعت به کارت شما برمی‌گردد.'}
        </Sheet>
      </div>
    </div>
  );
  return (
    <>
      <Phone overlay={overlay}>
        <div className="kit-scroll" key={route}>{screen}</div>
        {showNav && (
          <div style={{ position: 'absolute', insetInline: 16, bottom: 24, zIndex: 4 }}>
            <BottomNav current={route} onChange={go} items={[
              { id: 'home', label: 'خانه', icon: 'home' },
              { id: 'store', label: 'جست‌وجو', icon: 'search' },
              { id: 'orders', label: 'سفارش‌ها', icon: 'bag', dot: active, dotLabel: 'سفارش‌ها، یک سفارش فعال' },
              { id: 'me', label: 'حساب من', icon: 'user' },
            ]} style={{ maxWidth: 'none' }} />
          </div>
        )}
      </Phone>
      <div style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
        <span className="label">صفحه‌ها</span>
        {[['login', 'ورود'], ['otp', 'کد تأیید'], ['home', 'خانه'], ['store', 'سوپرمارکت'], ['orders', 'سفارش‌ها'], ['me', 'حساب من']].map(([r, l]) => (
          <button key={r} type="button" className="rg-chip" aria-pressed={String(route === r)} onClick={() => go(r)} style={{ justifyContent: 'flex-start' }}>{l}</button>
        ))}
        <span className="label" style={{ marginTop: 16 }}>تم</span>
        <div className="rg-chips">{[[false, 'روشن'], [true, 'تیره']].map(([v, l]) => <button key={l} type="button" className="rg-chip" aria-pressed={String(dark === v)} onClick={() => setDark(v)}>{l}</button>)}</div>
        <p className="caption" style={{ color: 'var(--ink-muted)', margin: '8px 0 0' }}>ترکیبی از الگوهای مستند در مخزن؛ صفحهٔ محصول واقعی نیست.</p>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
