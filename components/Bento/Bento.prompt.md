Bento grid of unequal round tiles for feature intros, landing pages and dashboard summaries.

```jsx
<Bento>
  <BentoCell tone="brand" wide tall shape num="۳۰ دقیقه" title="از سفارش تا درِ خانه" text="پیک را لحظه‌به‌لحظه روی نقشه ببینید." />
  <BentoCell tone="aura" wide title="پرداخت در محل یا اعتباری" />
  <BentoCell tone="pink" num="٪۴۰" text="تخفیف سفارش اول" />
</Bento>
```

**Props:** BentoCell tone: brand | pink | blue | sun | ink | aura | (none = surface); wide, tall, shape, num, title, text.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


چیدمان بنتو: کاشی‌های نابرابر و بسیار گرد برای معرفی ویژگی‌ها، صفحهٔ فرود و خلاصهٔ داشبورد.

`div.rg-bento` (شبکهٔ چهارستونه، در موبایل دوستونه) با فرزندان `div.rg-bento-cell`. شما محتوای هر کاشی را می‌دهید: یک عدد بزرگ (`rg-bento-num`) یا یک `h3`، و یک سطر توضیح.

| کلاس | کاربرد |
| --- | --- |
| `rg-bento-wide` · `rg-bento-tall` | دو ستون یا دو ردیف. |
| `rg-bento-brand` · `-pink` · `-blue` · `-sun` · `-ink` | کاشی رنگی توپر با متن `on-…`. |
| `rg-bento-aura` | هالهٔ رنگی نرم از `…-tint`ها روی `surface-raised`. یک بار در هر شبکه. |
| `rg-bento-shape` | دایرهٔ تزئینی گوشهٔ کاشی رنگی. |

- یک کاشی بزرگ‌تر و رنگی غالب است؛ بقیه آرام‌ترند. حداکثر سه کاشی رنگی توپر.
- هر کاشی یک پیام دارد. فهرست و پاراگراف بلند در کاشی نگذارید.
- کاشی بدون کلاس رنگ روی `surface` می‌نشیند.
