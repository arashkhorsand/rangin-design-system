Floating glass pill bottom navigation for mobile apps with 3–5 destinations.

```jsx
<BottomNav current="home" onChange={setTab} items={[
  { id: "home", label: "خانه", icon: "home" },
  { id: "orders", label: "سفارش‌ها", icon: "bag", dot: true, dotLabel: "سفارش‌ها، یک سفارش فعال" },
]} />
```

**Props:** Only the active item shows its label. Position it yourself: fixed, space-4 from edges + safe-area.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


نوار ناوبری پایین موبایل: قرص شیشه‌ای شناور با سه تا پنج مقصد.

`nav.rg-nav` با فرزندان `button.rg-nav-item` (یا `a`)؛ هر کدام یک آیکون ۲۴ پیکسلی و یک `span` برچسب. مقصد فعلی `aria-current="page"` می‌گیرد. شما مقصدها را می‌دهید و نوار را خودتان پایین صفحه ثابت می‌کنید (`position: fixed`، با فاصلهٔ `space-4` از لبه‌ها و `env(safe-area-inset-bottom)`).

- فقط مقصد فعال برچسب نشان می‌دهد و با `brand-tint` پر می‌شود؛ بقیه آیکون‌اند و `aria-label` می‌خواهند.
- «خانه» سمت راست است.
- `rg-nav-dot` نقطهٔ سرخابی اعلان می‌گذارد؛ معنایش را در `aria-label` بنویسید.
- سطح `glass` است؛ زیرش محتوا اسکرول می‌خورد. روی دسکتاپ این نوار را نشان ندهید و ناوبری را به هدر ببرید.
