# Skin Atlas — Image workflow

Each condition has its own folder in here. To add real images for a condition:

1. Open the folder for that condition (e.g. `acne-vulgaris/`)
2. Drop in two photos
3. Rename them to:
   - **`light.jpg`** — the lighter-skin photo (Fitzpatrick I–III)
   - **`dark.jpg`** — the darker-skin photo (Fitzpatrick IV–VI)
4. Reload the page — the placeholder is replaced automatically

Supported extensions: `.jpg`, `.jpeg`, `.png`, `.webp`
(The page checks each one in that order. JPG is preferred for file size.)

## Folders

- `acne-vulgaris/`
- `atopic-dermatitis/`
- `basal-cell-carcinoma/`
- `melanoma/`
- `melasma/`
- `psoriasis/`
- `rosacea/`
- `squamous-cell-carcinoma/`
- `tinea-versicolor/`
- `vitiligo/`

## Cloudflare deploy

When you deploy to Cloudflare Pages, this entire `public/` folder ships
with the site. Any image dropped here at `public/images/{slug}/light.jpg`
becomes available in production at `https://skinatlas.info/images/{slug}/light.jpg`
— no extra config needed.

## Image sourcing notes

- Use images you have license to use (DermNet watermarked, Wikimedia
  Commons, public-domain medical atlases, or your own).
- Crop tight on the lesion — the slot is square.
- Aim for ~800–1200px wide. Bigger isn't better for web.
