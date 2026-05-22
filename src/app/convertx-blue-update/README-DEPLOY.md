# ConvertX — Yellow → Blue color update

This bundle contains the 10 changed `.tsx` files that swap all yellow brand color
(`#f5a800` / `#F5A825` and amber/yellow Tailwind utilities) for blue
(`#1d9bf0` and `sky-300 / blue-400` gradient utilities), while keeping the
existing navy `#0f2044` intact.

## Files

```
src/app/components/Navbar.tsx
src/app/components/CTAButton.tsx
src/app/components/ServiceCarousel.tsx
src/app/pages/Home.tsx
src/app/pages/Mortgage.tsx
src/app/pages/CarWarranty.tsx
src/app/pages/HomeWarranty.tsx
src/app/pages/PersonalLoan.tsx
src/app/pages/GetStarted.tsx
src/app/pages/TermsOfUse.tsx
```

The folder layout mirrors the repo, so the files are ready to drop in.

## How to deploy (web UI, no git required)

1. Open the repo: https://github.com/GeroTzikin/lead-generation-website
2. For each file above:
   - Navigate to the file in GitHub
   - Click the pencil (Edit) icon
   - Replace the contents with the version from this bundle
   - Commit directly to `main`
3. Railway is wired to auto-deploy on push to `main`, so it'll redeploy
   within ~1–2 minutes of the last commit.

Alternatively, on GitHub you can also click "Add file → Upload files" at any
directory level and drag the matching files in — GitHub will overwrite the
existing ones in a single commit.

## Logos (still needed)

You also wanted the new all-blue logos. Those weren't included because the
images you posted came inline in chat and weren't accessible as files.
The code is already wired to load them from:

```
src/imports/convertx-full-highres-better-1.png
src/imports/convertx-icon-highres-better-1.png
```

Drop the two new PNGs at those exact paths (in GitHub or locally then push)
and they'll show up everywhere — Navbar (mobile), Footer, and the desktop
icon-only mark.

## What changed (summary)

- `#f5a800` (brand yellow)           → `#1d9bf0` (brand blue)
- `#F5A825` (TermsOfUse yellow)      → `#1d9bf0`
- `rgba(245,168,0, x)`               → `rgba(29,155,240, x)`
- `#b07800` (dark amber text)        → `#0b6cb0` (dark blue)
- Tailwind `from-yellow-300 via-amber-300 to-yellow-400` → `from-sky-300 via-blue-300 to-sky-400`
- Tailwind `from-yellow-300 to-amber-400`                → `from-sky-300 to-blue-400`
- CTA buttons & nav-pill: text switched from navy on yellow → white on blue
  (better contrast on a blue background).
