Shop product card with image, two-line name, rating, Toman price and add button.

```jsx
<ProductCard discount={25} title="زعفران سرگل قائنات، یک مثقال" rating={4.7} ratingCount={1280} oldPrice={860000} price={645000} onAdd={add} />
```

**Props:** Numbers auto-format to Persian digits with «٬». outOfStock swaps to neutral badge + «خبرم کن». placeholder: sun | brand | pink | blue when no image.

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


کارت محصول برای فهرست و اسلایدر فروشگاه: تصویر، نام، امتیاز، قیمت به تومان و دکمهٔ افزودن.

`article.rg-product` با `rg-product-media`، `rg-product-title`، `rg-product-meta` و `rg-product-foot`. شما تصویر مربعی (`img` درون `rg-product-media`)، نام، امتیاز و قیمت را می‌دهید. پهنای کارت را شبکهٔ والد تعیین می‌کند (حداکثر ۲۰۰ پیکسل).

- قیمت: عدد با `rg-price-now`، واژهٔ «تومان» درون `small`. با تخفیف، قیمت قبلی بالای آن با `rg-price-old` و برچسب `rg-badge-off` روی گوشهٔ تصویر.
- رقم فارسی با جداکنندهٔ «٬».
- نام حداکثر دو سطر است و بریده می‌شود؛ واحد و وزن را در نام بیاورید.
- دکمهٔ افزودن یک `rg-btn-icon` سبز است با `aria-label`. کالای ناموجود: نشان خنثی و دکمهٔ «خبرم کن».
- پیش‌نمایش به‌جای عکس جای‌نگهدار رنگی دارد؛ عکس واقعی با زمینهٔ سفید یا `surface` بگذارید.
