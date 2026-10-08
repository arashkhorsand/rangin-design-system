Bottom sheet for confirmations, pickers and short forms — use instead of a centered modal.

```jsx
<Sheet title="سفارش لغو شود؟" actions={<><Button variant="danger">لغو سفارش</Button><Button variant="outline">نگهش دار</Button></>}>
  مبلغ تا ۷۲ ساعت به کارت شما برمی‌گردد.
</Sheet>
```

**Props:** You own the scrim, open/close and focus trap. Primary action first (right).

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


شیت پایین: لایه‌ای که از پایین صفحه بالا می‌آید، برای تأیید، انتخاب و فرم کوتاه.

`section.rg-sheet` با `rg-sheet-grab`، `rg-sheet-title`، `rg-sheet-body` و `rg-sheet-actions`. شما عنوان، متن و یک یا دو دکمه می‌دهید؛ پس‌زمینهٔ تیره، باز و بسته شدن و قفل اسکرول با کد شماست.

- در موبایل به‌جای پنجرهٔ وسط صفحه همیشه شیت بیاورید. در دسکتاپ همین سطح با حداکثر پهنای ۴۲۰ پیکسل وسط می‌نشیند.
- عنوان یک پرسش یا یک اقدام روشن است. دکمه‌ها همان را با فعل جواب می‌دهند: «لغو سفارش» و «نگهش دار»، نه «بله» و «خیر».
- اقدام اصلی سمت راست است.
- با کشیدن به پایین، لمس پس‌زمینه و دکمهٔ بازگشت گوشی بسته می‌شود.
- `role="dialog"` و `aria-labelledby` بدهید و فوکوس را درون شیت نگه دارید.
