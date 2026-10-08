# Rangin (رنگین) Design System

Rangin is a **Persian, right-to-left design system for service-oriented websites and apps** (multi-service super-apps: taxi, food, courier, supermarket, bills, travel, doctor). White ground, four loud accent colors, very round corners, big heavy type. **Mobile first** — most Iranian users arrive on phones.

**Source:** https://github.com/arashkhorsand/rangin-design-system (branch `main`). The repo includes the CSS foundation (`tokens.css`, `styles.css` with `rg-` classes, `tokens.json`), React wrappers with declarations, component previews and prompts, foundation specimens, and a mobile service-app UI kit. The original `<Name>.prompt.md` guidance is preserved under each component's "Source guidance" section.

The UI kit demonstrates the generic service app the components are designed for. It includes reusable icons and sample product screens; there is no logo or slide template.

## Index

- `styles.css` — entry point (imports only): `tokens/fonts.css`, `tokens/tokens.css`, `tokens/aliases.css`, `components/rangin.css`
- `tokens/tokens.css` — source tokens verbatim (light on `:root`, dark on `[data-theme="dark"]`, type classes `.display .h1 .h2 .h3 .body-lg .body .label .caption`)
- `tokens/tokens.json` — same tokens as data with per-token usage notes (fa)
- `tokens/aliases.css` — semantic aliases (`--text-body`, `--surface-card`, `--action-primary`, …) *(intentional addition)*
- `tokens/fonts.css` — Vazirmatn from Google Fonts
- `components/rangin.css` — source component CSS verbatim (`.rg`, `.rg-btn`, …)
- `components/rangin-plus.css` — enhancements *(intentional addition)*: hover states (pointer devices only), chip/nav press + transitions, product-card hover lift, sheet slide-up + scrim fade (`--scrim`), bento rows that grow with content, 2-line title min-height so prices align, balanced headings. All respect `prefers-reduced-motion`.
- `components/<Name>/` — React wrapper `.jsx`, `.d.ts`, `.prompt.md`, card `.html`
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadow, glass, motion, brand)
- `assets/icons/` — 17 line icons lifted from the source previews
- `ui_kits/app/` — mobile service-app click-through (see its README)
- `SKILL.md`, `github.md`, `thumbnail.html`

### Components
All render the source `rg-` classes; the page root needs `class="rg"` and `dir="rtl"`.
- **Button** — pill; `primary · ink · pink · tint · outline · danger`, `sm/md/lg`, `block`, `iconOnly`
- **Badge** — status / feature / neutral / tilted `off` discount
- **Chip** + **ChipGroup** — scrolling filter row
- **TextField** — label, help, error, LTR affix
- **OtpInput** — 5-digit SMS code with countdown
- **ProductCard** — image, name, rating, Toman price, add button
- **ServiceGrid** + **Service** — 4-column service launcher
- **Bento** + **BentoCell** — unequal round tiles
- **BottomNav** — glass pill mobile nav
- **Sheet** — bottom sheet
- **Icon** — line icons *(intentional addition: the source inlines SVGs; this wraps those exact paths)*

### UI kits
- `ui_kits/app/index.html` — Login → OTP → Home → Store → Orders/cancel sheet → Account

## Content fundamentals

Language is **Persian (fa), conversational-polite**. The user is addressed as **«شما»** (formal you); the product never says "I". Short sentences, plain verbs.

- Good: «سفارش ثبت شد». Bad: «عملیات ثبت سفارش با موفقیت انجام پذیرفت».
- **Button labels are verbs** that say what happens: «افزودن به سبد»، «پرداخت»، «دریافت کد»، «ثبت سفارش». Never «تأیید» or «بله/خیر». Sheet answers mirror the question: «سفارش لغو شود؟» → «لغو سفارش» / «نگهش دار».
- **Persian digits** ۰–۹ with thousands separator «٬»: `۱۲۸٬۰۰۰`. Percent sign before the number: `٪۲۰`. Decimal «٫»: `۴٫۷`.
- **Prices in Toman**: number in `rg-price-now`, the word «تومان» small and `ink-muted`. Rial only on the payment gateway page.
- **Jalali dates** «۱۴ مهر ۱۴۰۵», 24-hour time «۱۸:۳۰», week starts Saturday.
- **Mobile numbers** 11 digits with leading zero `۰۹۱۲ ۳۴۵ ۶۷۸۹`. Login = mobile + SMS code; never a password field.
- **Half-space (ZWNJ)** always: «می‌شود»، «سفارش‌ها»، «راست‌به‌چین».
- **No emoji** in UI copy. Errors don't apologize; they give the fix: «کد اشتباه است. دوباره وارد کنید.»
- Labels are 1–2 words, no trailing period (services, chips). Vibe: friendly, quick, confident — a local super-app, not a bank.

## Visual foundations

- **Color.** Page `bg` is pure white in light theme; sub-sections separate with `surface` (#f5f6f8), **not lines**. Text is only `ink` / `ink-muted`. Four loud accents — `brand` green #00c26b, `pink` #e0007a, `blue` #1552f0, `sun` #ffc800 — are **fills** (buttons, blocks, badges). Text on each uses its `on-…` token; on brand and sun the text is **dark**, not white. For colored text/icons on white use `…-deep` (and `blue` itself) — never brand/pink/sun as text. Every accent has a `…-tint` for soft badge/tile backgrounds. One dominant accent per view; brand = primary action, pink = discount/campaign, blue = info/link, sun = warning/rating. Status is never color-only.
- **Dark theme** via `data-theme="dark"`: every token remaps; brand/pink/sun fills stay identical, deep variants brighten.
- **Type.** One family for everything: Vazirmatn (the source specified IRANYekan X → IRANSans X first; those commercial fonts aren't available, so Vazirmatn is the family). Weights 400 body, 500 caption, 700 label/button, 800–900 headings. Display 56/1.25/900, h1 36/1.35/800, h2 26/1.45/800, h3 20/1.5/700, body 15/1.9, body-lg 17/1.9, label 14/1.6/700, caption 12/1.7/500 (the floor). Tall line-heights because Persian needs vertical room. **Never letter-spacing** (breaks joining), no italics, no kashida justification.
- **Shape.** Everything is round, no sharp corners: controls `radius-pill`, fields/OTP/media `radius-md` 14, cards/service tiles `radius-lg` 22, bento/sheet `radius-xl` 32, small tags `radius-sm` 8.
- **Spacing.** 4·8·12·16·24·32·48·64 (`space-1…8`). Mobile gutter 16. Touch target ≥ 48 (`space-7`) — default control height. Sections 32 apart on mobile, hero padding 64.
- **Depth.** Built from color and surface, not shadow. Shadows only in three places: floating card & bottom nav (`shadow-card`), bottom sheet (`shadow-sheet`), and a colored glow under the one primary button (`glow-brand` / `glow-pink`, once per view).
- **Cards.** `surface-raised` + 1px `line` border + `radius-lg`, no shadow unless floating. Product media on `surface` placeholder.
- **Transparency & blur.** `glass` (white 72%) with `blur(16px) saturate(1.6)` — only the bottom nav and sticky header. Sheet scrim is left to the product.
- **Backgrounds.** Flat white. No photos-as-backgrounds, no patterns, no textures. The single permitted gradient is the **aura** (`rg-bento-aura`): radial halos built only from `…-tint`s on `surface-raised`, once per page. Brand art (Cover) = stacked rounded color blocks with small `bg`-colored disc cut-outs.
- **Imagery.** Product photos square on white/surface. The source uses colored geometric placeholders (tint bg + accent circle/rounded square) — no illustration set exists.
- **Layout.** Mobile bottom nav (3–5 items, floating glass pill, home on the right). Choices/confirmations in a bottom sheet, never a center modal. Home = 4-column ServiceGrid. Filters = horizontal scrolling chip row. Bento for features/dashboards. Trust seals (Enamad etc.) and payment gateways in the footer, using their official files.
- **Direction.** Everything `dir="rtl"`, logical CSS properties; directional icons mirror. Mobile numbers, OTP, card numbers and URLs stay `dir="ltr"`.
- **Motion.** Short: 120–200ms `ease`. No bounces, no long fades. Disabled under `prefers-reduced-motion`.
- **Hover / press.** Press = `scale(.97)` (service tiles `.94`). The source defines no hover; `rangin-plus.css` adds a restrained set on `(hover: hover)` only: fills `brightness(.95)`, outline/chip border → `ink`, nav item → `surface` pill, product card lifts to `shadow-card`, service icon rises 2px.
- **Selected.** Chips select with **ink** fill (accent is reserved for action); nav active = `brand-tint` pill + `brand-deep` text and label shown.
- **Focus.** 2px solid `focus` (blue) outline, 2px offset, on every surface.
- **Borders.** 1.5px `line-strong` on controls (≥3:1), 1px `line` decorative on cards/nav.

## Iconography

- Style: **line icons, 24px grid, 1.75 stroke, round caps and joins, `currentColor`**. Sizes: 24 nav, 20 in buttons, 16 in chips, 14 in badges/help text, ~44% of a service tile.
- The source has **no icon set** — only sample inline SVGs in its previews. Those exact glyphs are copied to `assets/icons/*.svg` and exposed as `<Icon name="…">`: home, search, bag, user, check, clock, alert, plus, arrow-left, star (filled, for ratings), bowl, car, box, card, send, medical, grid.
- For anything else, the source recommends a matching line set — **Lucide** at `stroke-width: 1.75` (or Iconsax linear). Not bundled here.
- No icon font, no PNG icons. **Emoji never replace icons.** Unicode only for «٪», «٬», «·» separators.
- **No logo exists.** Write «رنگین» in `--font-display`, weight 900, `ink` (see Brand › Wordmark). Don't draw one.

## Fonts

`--font-sans` / `--font-display`: `Vazirmatn, Tahoma, …`. **Substitution:** the source stack led with IRANYekan X / IRANSans X (commercial, not in the repo); they were removed and **Vazirmatn** (Google Fonts, OFL — the source's own named fallback) is now the primary family.
