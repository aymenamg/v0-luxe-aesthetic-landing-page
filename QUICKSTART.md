# Quick Start Guide

Get the LuxeAesthetic landing page up and running in 5 minutes.

## 1. Install Dependencies (1 min)

```bash
pnpm install
# or
npm install
```

## 2. Run Locally (1 min)

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## 3. Test Features (2 min)

### Test the Forms
- **Quick Book Form**: Fill out and submit (logs to console)
- **Skin Quiz**: Complete 3 steps and see recommendations

### Test Mobile View
- Press `F12` to open DevTools
- Toggle device toolbar (phone icon)
- Try hamburger menu and bottom CTA bar

### Test Animations
- Scroll down to see staggered fade-ins
- Hover over service cards
- Watch the quiz transitions

## 4. Customize (1 min)

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
}
```

### Change Content
Edit `lib/data.ts`:
```typescript
export const SERVICES = [
  { id: 'your-service', name: 'Your Service', ... }
];
```

### Change Text
Edit `app/page.tsx` directly

## 5. Deploy

```bash
# Build
pnpm build

# Deploy to Vercel
git push origin main
```

---

## File Structure Quick Reference

```
components/
├── skin-quiz.tsx          ← 3-step quiz
├── quick-book-form.tsx    ← Booking form
├── mobile-nav.tsx         ← Mobile menu
├── service-grid.tsx       ← Services grid
├── pricing-section.tsx    ← Pricing cards
└── testimonials-section.tsx ← Reviews

lib/
├── data.ts                ← All content (easy to swap for CMS)
└── schemas.ts             ← Form validation

app/
├── page.tsx               ← Main landing page
├── layout.tsx             ← Metadata & fonts
├── globals.css            ← Design tokens
└── api/
    └── leads/route.ts     ← Form submission endpoint
```

---

## Next Steps

1. **Local Testing**: `pnpm dev` ✅
2. **Connect Backend**: See `INTEGRATION_GUIDE.md`
3. **Add Supabase**: Follow database setup
4. **Add Resend**: Setup email notifications
5. **Deploy**: Push to Vercel

---

## Common Tasks

### Add a New Service
1. Open `lib/data.ts`
2. Add to `SERVICES` array
3. It automatically appears in grid

### Change Booking Button URL
1. Open `app/page.tsx`
2. Find "Book Appointment" button
3. Update href/onClick

### Add New Quiz Goal
1. Open `lib/data.ts`
2. Add to `QUIZ_GOALS`
3. Add recommendation to `QUIZ_RECOMMENDATIONS`

### Customize Form Fields
1. Open `lib/schemas.ts`
2. Update validation schema
3. Update form component

---

## Documentation

- **Detailed Implementation**: `IMPLEMENTATION.md`
- **Complete Checklist**: `CHECKLIST.md`
- **Backend Integration**: `INTEGRATION_GUIDE.md`
- **Build Summary**: `BUILD_SUMMARY.md`

---

## Support

All files have clear comments and type hints. Start with:
1. `components/` to understand component structure
2. `lib/data.ts` to see all content
3. `app/page.tsx` to see layout

---

## Deployment Checklist

- [ ] Test locally: `pnpm dev`
- [ ] Build: `pnpm build`
- [ ] Push to GitHub: `git push origin main`
- [ ] Vercel auto-deploys
- [ ] Test production URL
- [ ] Add environment variables (if using backend services)

---

**That's it! Your landing page is ready to go.** 🚀

For detailed setup of backend services, see `INTEGRATION_GUIDE.md`.
