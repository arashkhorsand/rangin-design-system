# Rangin service app — UI kit

Mobile (390×844) click-through for a multi-service Persian RTL app: **Login → OTP → Home → Store → Orders (cancel sheet) → Account**.

**Disclaimer:** the source repo ships no product screens — only components and documented patterns (mobile-first, BottomNav, ServiceGrid home, Chip filter rows, Sheet instead of modals, mobile + SMS-code login, Toman prices). These screens compose exactly those patterns with the DS components; layout between components is an assembly, not a recreation of a shipped app.

- `Phone.jsx` — device frame, status bar, glass `ScreenHeader`; `fa()` / `toman()` helpers
- `LoginScreen.jsx` — TextField (+۹۸ affix, LTR) + block primary «دریافت کد»
- `OtpScreen.jsx` — OtpInput with countdown; auto-submit (type `00000` to see the error)
- `HomeScreen.jsx` — address, search pill, ServiceGrid, pink Bento promo, ProductCard rail
- `StoreScreen.jsx` — ChipGroup filter, 2-col ProductCard grid, glass cart bar
- `OrdersScreen.jsx` — order cards with status Badges; «لغو سفارش» opens Sheet
- `AccountScreen.jsx` — Bento summary, logout
- `App.jsx` — routing, cart, BottomNav, sheet overlay; `data.js` — sample data
