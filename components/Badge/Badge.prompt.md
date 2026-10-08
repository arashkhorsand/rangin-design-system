Small non-clickable badge for order status, feature labels and discount percent.

```jsx
<Badge tone="success" icon="check">تحویل شد</Badge>
<Badge tone="off">٪۲۵</Badge>
```

**Props:** tone: neutral | brand | pink | blue | sun | success | danger | off. Status tones always carry an icon.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


نشان کوچک برای وضعیت سفارش، ویژگی و درصد تخفیف.

`span.rg-badge` به‌علاوهٔ یک کلاس رنگ. شما متن کوتاه و در نشان وضعیت یک آیکون ۱۴ پیکسلی می‌دهید.

| کلاس | کاربرد |
| --- | --- |
| `rg-badge-success` · `-blue` · `-sun` · `-danger` | وضعیت: انجام‌شده، در جریان، منتظر، ناموفق. همیشه با آیکون. |
| `rg-badge-brand` · `-pink` | ویژگی و برچسب تبلیغاتی. |
| بدون کلاس رنگ | خنثی، مثل «ناموجود». |
| `rg-badge-off` | برچسب درصد تخفیف: `pink` توپر و کمی کج. فقط عدد و «٪». |

- نشان کلیک‌پذیر نیست؛ برای انتخاب `Chip` را بردارید.
- وضعیت را فقط با رنگ نگویید؛ واژه و آیکون هر دو باشند.
- روی هر کارت حداکثر دو نشان.
