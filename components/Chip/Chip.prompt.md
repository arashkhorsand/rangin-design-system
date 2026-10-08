Pill filter/category chip in a horizontally scrolling row; selected state fills with ink.

```jsx
<ChipGroup label="دسته‌بندی">
  <Chip pressed>همه</Chip>
  <Chip icon="clock">زیر ۳۰ دقیقه</Chip>
</ChipGroup>
```

**Props:** pressed, icon (16px). Wrap in ChipGroup (rg-chips).

Render inside a root with `class="rg"` and `dir="rtl"`.

---

## Source guidance (fa, verbatim from repo)


چیپ قرصی برای فیلتر و دسته‌بندی، در یک ردیف افقی که اسکرول می‌خورد.

`button.rg-chip` با `aria-pressed`؛ ردیف را در `div.rg-chips` بگذارید. شما برچسب‌ها و وضعیت انتخاب را می‌دهید.

- انتخاب‌شده با `ink` پر می‌شود، نه با رنگ برند؛ رنگ تند برای اقدام می‌ماند.
- برچسب یک یا دو واژه است. آیکون ۱۶ پیکسلی اختیاری است و پیش از متن می‌آید.
- ردیف نمی‌شکند؛ از راست شروع می‌شود و به چپ اسکرول می‌خورد.
- «همه» اولین چیپ است.
