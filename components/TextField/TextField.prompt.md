Text field with an always-visible label, help text and error state.

```jsx
<TextField label="شمارهٔ موبایل" type="tel" inputMode="numeric" dir="ltr" affix="+۹۸" help="کد تأیید به این شماره پیامک می‌شود." />
```

**Props:** label, help, error (danger border + icon), affix, dir="ltr" for numbers/email. Input text stays 16px.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


فیلد متنی با برچسب بالای آن، متن راهنما و حالت خطا.

ساختار: `label.rg-field` › `span.rg-field-label` + `span.rg-input` › `input` (+ `span.rg-input-affix`) + `span.rg-field-help`. شما برچسب، نوع ورودی و متن راهنما را می‌دهید.

- برچسب همیشه دیده می‌شود؛ placeholder جای برچسب نیست.
- شمارهٔ موبایل، کد پستی، شمارهٔ کارت و ایمیل `dir="ltr"` می‌گیرند و چپ‌چین می‌شوند. `inputmode="numeric"` بدهید تا صفحه‌کلید عددی باز شود.
- رقم فارسی و لاتین هر دو را بپذیرید و پیش از ارسال یکی کنید.
- خطا: `rg-field-error` روی ریشه، `aria-invalid="true"` روی input، و متن راهنما با آیکون می‌گوید چه چیزی درست است.
- اندازهٔ متن ورودی ۱۶ پیکسل است تا iOS بزرگ‌نمایی نکند؛ کوچکش نکنید.
