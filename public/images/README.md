# Salon image drop-in guide

Replace the image files below with your own salon photography. Keep each filename exactly as written (including the `.jpg` extension) so the website can find it. Use landscape photos for the showcase and portrait / editorial photos for the hero and portfolio. Images are loaded from these local paths; if an image is missing, a soft coordinated gradient is shown instead.

## Images currently in use

The collage named for the hero (`gallery/cuts&curves hero_image.jpeg`) is used in the hero. The bridal portrait (`gallery/bride work.jpeg`) is repeated in the showcase and gallery until service-specific photos are available. The three offer artworks (`gallery/cuts&curves offer.jpeg`, `gallery/discount.jpeg`, and `gallery/mother's day skin offer.jpeg`) appear in the offers preview. Their dates, prices and terms may have expired; the page asks visitors to confirm current offers with the salon.

## Main hero

- `hero-bridal.jpg` — large bridal portrait used in the homepage hero.

## Scrolling showcase

Add these six files inside `marquee/`:

- `marquee/work-1.jpg` — Bridal HD makeovers
- `marquee/work-2.jpg` — Airbrush artistry
- `marquee/work-3.jpg` — Balayage
- `marquee/work-4.jpg` — Keratin shine
- `marquee/work-5.jpg` — Bridal updo
- `marquee/work-6.jpg` — Soft-glam moments

## Portfolio gallery

Add these files inside `gallery/`:

- `gallery/bridal-1.jpg` — Bridal glow
- `gallery/bridal-2.jpg` — Bridal eyes / close-up
- `gallery/bridal-3.jpg` — Bridal look
- `gallery/makeup-1.jpg` — Soft glam
- `gallery/makeup-2.jpg` — Makeup finishing touch
- `gallery/hair-1.jpg` — Hair styling
- `gallery/hair-2.jpg` — Hair colour / shine
- `gallery/skin-1.jpg` — Skin or nails treatment

You can add more gallery photos by adding entries to `galleryItems` in `src/data.ts` and putting the matching image in this folder.
