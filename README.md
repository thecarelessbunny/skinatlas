# Skin Atlas

An educational dermatology atlas showing how common skin conditions present
across the full Fitzpatrick spectrum, side by side. Most teaching materials
were written from a single skin tone. Skin Atlas exists to make the visual
differences across skin tones obvious.

Live: [skinatlas.info](https://skinatlas.info)

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router
- Static export, deployed to Cloudflare Pages

## Develop

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # static output → dist/
npm run preview    # preview the production build locally
```

## Adding images

Each condition has its own folder in `public/images/{slug}/`. Drop a photo
in and rename it:

- `light.jpg` — lighter-skin photo (Fitzpatrick I–III)
- `dark.jpg` — darker-skin photo (Fitzpatrick IV–VI)

Supports `.jpg`, `.jpeg`, `.png`, `.webp` (checked in that order). The
condition page replaces the placeholder automatically once the file is in
place. See [`public/images/README.md`](public/images/README.md) for more.

## Project layout

```
src/
  data/
    conditions.ts     # the 10 conditions + descriptions
    types.ts
  pages/
    Home.tsx          # search + transition
    ConditionDetail.tsx
    About.tsx
  components/
    Layout.tsx        # nav + footer
public/
  images/{slug}/      # drop your photos here
```

## Disclaimer

Educational only. Not a diagnostic tool. Consult a qualified clinician for
any health concern.
