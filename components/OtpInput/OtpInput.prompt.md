SMS one-time-code boxes for mobile-number login; auto-submits when full.

```jsx
<OtpInput label="کد تأیید پیامک‌شده به ۰۹۱۲ ۳۴۵ ۶۷۸۹" seconds={107} onComplete={verify} onEditNumber={back} />
```

**Props:** length (default 5), value/defaultValue, onChange, onComplete, seconds (resend countdown), onResend, onEditNumber.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


خانه‌های کد تأیید پیامکی برای ورود با شمارهٔ موبایل.

`div.rg-otp` با پنج `input` تک‌رقمی. شما تعداد رقم، شمارهٔ مقصد و زمان‌سنج ارسال دوباره را می‌دهید؛ جابه‌جایی فوکوس بین خانه‌ها با کد شماست (نمونه در پیش‌نمایش).

- خانه‌ها همیشه چپ‌به‌راست پر می‌شوند، حتی در صفحهٔ راست‌به‌چین.
- روی خانهٔ اول `autocomplete="one-time-code"` بگذارید تا کد از پیامک خوانده شود. چسباندن کد کامل را هم بپذیرید.
- با پر شدن خانهٔ آخر خودکار ارسال کنید؛ دکمهٔ جدا لازم نیست.
- خانهٔ پر کلاس `is-filled` می‌گیرد.
- زمان‌سنج (`rg-otp-meta`) تا صفر نشده «ارسال دوباره» را نشان ندهید. «ویرایش شماره» همیشه در دسترس است.
