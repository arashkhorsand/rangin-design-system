Four-column service launcher for the home of a multi-service app.

```jsx
<ServiceGrid items={[{ label: "تاکسی", icon: "car", tone: "solid" }, { label: "غذا", icon: "bowl", tone: "pink" }]} onSelect={open} />
```

**Props:** tone: brand | pink | blue | sun | solid (once, main service) | none. Max 2 rows; extra under «بیشتر».

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


شبکهٔ چهارستونهٔ سرویس‌ها برای صفحهٔ اول اپلیکیشن چندسرویسی.

`div.rg-services` با فرزندان `button.rg-service`؛ هر کدام یک `span.rg-service-icon` (آیکون خطی) و یک برچسب. شما سرویس‌ها، آیکون و رنگ هر کاشی را می‌دهید.

- چهار ستون در هر پهنا؛ حداکثر دو ردیف. سرویس نهم به بعد زیر «بیشتر» می‌رود.
- رنگ کاشی با `rg-service-brand`، `-pink`، `-blue`، `-sun` (زمینهٔ کم‌رنگ) یا `-solid` (سبز توپر، فقط برای سرویس اصلی و یک بار).
- هر سرویس همیشه یک رنگ دارد؛ رنگ‌ها را برای زیبایی جابه‌جا نکنید.
- برچسب یک یا دو واژه، بدون نقطه.
