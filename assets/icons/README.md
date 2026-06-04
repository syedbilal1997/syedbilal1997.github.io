# Product icons

Official Microsoft product icons for the hero chips and the "Core Expertise"
pills. Drop the SVGs here with **exactly** these filenames. Until a file exists,
that icon falls back to the existing CSS-drawn shape, so nothing looks broken.

| File | Product |
|------|---------|
| `dynamics-365.svg` | Dynamics 365 |
| `power-platform.svg` | Power Platform |
| `power-apps.svg` | Power Apps |
| `power-automate.svg` | Power Automate |
| `dataverse.svg` | Dataverse |
| `copilot-studio.svg` | Copilot Studio |
| `pcf.svg` | PCF / Power Apps Component Framework |

## Where to get the official icons

Microsoft publishes these as free, official downloads — use those rather than
random copies, so the marks are correct and current:

- **Power Platform icons** (Power Apps, Power Automate, Power Platform, Dataverse,
  Copilot Studio): Microsoft Learn → *Power Platform icons*
  <https://learn.microsoft.com/en-us/power-platform/guidance/icons>
- **Dynamics 365 icons**: Microsoft Learn → *Dynamics 365 icons*
  <https://learn.microsoft.com/en-us/dynamics365/get-started/icons>

The download is a pack of SVGs/PNGs — rename the ones you want to match the
filenames in the table above.

## Notes

- **SVG preferred** (crisp at any size, transparent background). PNG works too —
  keep the `.svg` filename or update the `src` extensions in `index.html`.
- Icons render inside a small 24px square, so the official square/standalone
  product glyph (not a wordmark lockup) looks best.
- **`pcf.svg`** has no official standalone icon — PCF is part of Power Apps. Either
  reuse the Power Apps icon (copy `power-apps.svg` to `pcf.svg`) or use any code /
  component glyph you prefer.
- These are Microsoft trademarks shown to indicate the products you work with —
  standard practice, but keep to Microsoft's brand/icon guidelines.
