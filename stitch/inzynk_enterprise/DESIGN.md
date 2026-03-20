```markdown
# The Design System: High-End Editorial for B2B Enterprise

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Precision Curator."** 

In the world of Account-Based Marketing (ABM), success is derived from signal over noise. This design system moves away from the "cluttered dashboard" trope of SaaS, instead adopting a high-end editorial aesthetic. We treat data like a luxury publication—utilizing intentional asymmetry, vast breathing room, and sophisticated layering to guide the user’s eye toward high-value insights. 

By breaking the rigid 12-column grid with overlapping elements and shifting tonal planes, we create an experience that feels custom-built and authoritative, establishing immediate trust with enterprise stakeholders.

---

## 2. Color & Tonal Architecture
The palette is rooted in a deep, sophisticated "Ink and Gold" foundation. We move beyond flat UI by utilizing a hierarchy of surfaces that mimic physical materials.

### The "No-Line" Rule
**Strict Directive:** 1px solid borders are prohibited for sectioning. 
Structure must be defined through background color shifts. Use `surface-container-low` for secondary sections and `surface-container-highest` for highlighted zones. Transitions between modules should feel like different weights of fine paper meeting, not like boxes drawn on a screen.

### Surface Hierarchy & Nesting
- **Base Layer:** `surface` (#f6f9ff) – The expansive canvas.
- **Structural Nesting:** Place a `surface-container-lowest` (#ffffff) card inside a `surface-container-low` (#f0f4fa) section to create a soft, natural lift. This "paper-on-slate" effect provides depth without the visual noise of borders.
- **The Glass & Gradient Rule:** For floating navigation or modal overlays, use **Glassmorphism**. Apply `surface_variant` with a 70% opacity and a `24px` backdrop-blur. 
- **Signature Textures:** Use a subtle linear gradient (Top-Left to Bottom-Right) from `primary` (#7b5800) to `primary_container` (#f5b51b) for hero CTAs. This creates a "metallic luster" effect that feels premium and intentional.

---

## 3. Typography: Editorial Authority
We use a high-contrast typographic scale to differentiate between "Data" and "Narrative."

- **Display & Headlines (Plus Jakarta Sans):** These are our "Editorial" voices. They should be set with tight letter-spacing (-0.02em) and generous line-heights. Use `display-lg` for hero moments to command attention.
- **Body & Labels (Inter):** Our "Functional" voice. Inter provides high legibility for complex ABM data. 
- **The Hierarchy Strategy:** Use `headline-sm` in `primary` (#7b5800) for section headers to provide a warm, sophisticated anchor, while keeping `body-md` in `on_surface_variant` (#504533) for a softer, more readable secondary text layer.

---

## 4. Elevation & Depth
In this system, depth is a feeling, not a feature. We use **Tonal Layering** to convey hierarchy.

- **The Layering Principle:** Avoid shadows where possible. Achieve elevation by placing "Bright" surfaces on "Dim" backgrounds. For example, an active state or a primary card should use `surface_bright` sitting on a `surface_dim` environment.
- **Ambient Shadows:** When a float is required (e.g., a dropdown menu), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(23, 28, 33, 0.06)`. Note the 6% opacity—it should feel like a soft glow, not a dark smudge.
- **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline_variant` token at **15% opacity**. It should be barely perceptible, serving only to catch the eye's edge.
- **Glassmorphism:** Use for persistent utility bars (like sidebars or top navs). This integrates the UI by allowing colors from the background to bleed through, preventing the interface from feeling "pasted on."

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `9999px` (Full) roundedness. No border. White text.
- **Secondary:** Transparent background with a `Ghost Border` (outline-variant at 20%).
- **Tertiary:** Pure text using `primary` color, with a subtle underline appearing only on hover.

### Cards & Lists
- **The No-Divider Rule:** Forbid the use of horizontal rules (`<hr>`). 
- **Alternative:** Separate list items using `spacing-4` (1rem) of vertical white space or by alternating background colors between `surface-container-low` and `surface-container-lowest`.

### Input Fields
- **Styling:** Use `surface-container-highest` for the input background. On focus, transition the background to `surface-container-lowest` and apply a `Ghost Border` of `primary` at 40% opacity. 
- **Labels:** Always use `label-md` in `on_surface_variant`, positioned strictly above the field—never inside.

### Action Chips
- **Selection:** Use `secondary_container` (#cfe5f8) with `on_secondary_container` (#526777) text. Use `md` (0.75rem) roundedness to maintain a professional, slightly angular feel.

---

## 6. Do’s and Don’ts

### Do
- **Use Asymmetry:** Place a large `display-md` headline on the left with a small `body-lg` paragraph offset to the right. This "Editorial" layout feels more premium than centered text.
- **Trust the White Space:** Use `spacing-20` (5rem) between major sections. High-end brands aren't afraid of "empty" space.
- **Layer Surfaces:** Always ask: "Can I define this area with a background color shift instead of a line?"

### Don’t
- **Don’t use 100% Black:** Use `on_background` (#171c21) for text to maintain a sophisticated, ink-like softness.
- **Don’t use Standard Shadows:** Avoid "Material Design" style heavy shadows. Keep them diffused, light, and tinted.
- **Don’t Over-Round:** Stick to `DEFAULT` (0.5rem) for cards and containers. Only use `full` (pill-shape) for interactive elements like buttons and chips.
- **No Borders:** Never use a solid 1px border to separate the sidebar from the main content; use a tonal shift from `surface_dim` to `surface`.

---

## 7. Signature ABM Component: The "Account Insight" Card
To elevate the platform, use a "Layered Insight" component:
A large `surface-container-lowest` card that features a `secondary_fixed` background header. Inside, data points are presented in a 3-column "no-line" grid, separated only by `spacing-8` (2rem) gutters. This creates a clean, dashboard-as-a-document feel that enterprise users find authoritative.```