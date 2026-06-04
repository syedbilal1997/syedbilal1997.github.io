# Brand logos

Drop the official logo files here using **exactly** these filenames. The moment a
file exists, the site swaps the styled monogram tile for the real logo — no code
changes needed. Until then, each tile shows a clean fallback monogram, so nothing
looks broken.

| File | Used for | Shape that looks best |
|------|----------|-----------------------|
| `shift.svg` | SHIFT Management Consulting (experience) | square / wide, transparent bg |
| `growdash.svg` | Growdash (experience + GrowDash project) | square / wide, transparent bg |
| `itknocks.svg` | ITKnocks (experience) | square / wide, transparent bg |
| `adnoc.svg` | ADNOC (project) | square, transparent bg |
| `adcb.svg` | ADCB (project) | square, transparent bg |
| `emirates.svg` | Emirates (project) | square, transparent bg |
| `amkor.svg` | AMKOR (project) | square, transparent bg |

## Notes

- **SVG is preferred** (crisp at any size). `.png` also works — if you use PNG,
  change the `src` extension in `index.html` to match, or just keep the `.svg`
  name on a PNG file (browsers sniff the type, but matching the extension is cleaner).
- Logos render on a **white rounded tile** with padding, so transparent-background
  marks look best. A full-color logo on transparent bg is ideal.
- Recommended canvas: ~200×200 px (or any square SVG viewBox). Wide wordmarks also
  work — they're contained, not cropped.
- **Trademark note:** these are third-party brand marks shown to indicate employers
  and client engagements. Make sure your usage is consistent with any NDA or brand
  guidelines that apply to you.
