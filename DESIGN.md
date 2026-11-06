---
name: Trayectoria
description: Clear professional trajectory without decorative competition.
colors:
  ground: "#171a1b"
  paper: "#f2f1e9"
  muted: "#c3c5be"
  ochre: "#d9ad60"
  rule: "#494d4c"
typography:
  display:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(68px, 8.1vw, 96px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-.025em"
  headline:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(38px, 4.3vw, 58px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-.015em"
  company:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  disclosure:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
spacing:
  detail-gap: "12px"
  compact-gap: "24px"
  row-gap: "32px"
  mobile-gutter: "20px"
components:
  contact-primary:
    textColor: "{colors.paper}"
    size: "18px"
  contact-primary-hover:
    textColor: "{colors.ochre}"
  section-navigation:
    textColor: "{colors.paper}"
    size: "13px"
  disclosure:
    textColor: "{colors.paper}"
    typography: "{typography.disclosure}"
    padding: "10px 0"
  disclosure-open:
    textColor: "{colors.ochre}"
  employer-current:
    textColor: "{colors.ochre}"
    typography: "{typography.company}"
---

# Design System: Trayectoria

## Overview

**Creative North Star: "Trayectoria"**

Clear professional trajectory without decorative competition. Flat graphite, warm paper text and a restrained ochre accent frame readable, employer-first content. Condensed headings provide identity; ordinary text and native controls carry the detail.

The system is compact without becoming compressed. Hierarchy comes from type, spacing and rules rather than ornamental containers. This records the implemented world in `src/styles/global.css` and `src/components/`; page-specific priorities and prototype approval live in `.impeccable/surfaces/portfolio.md`.

**Key Characteristics:**
- Flat graphite and warm paper, with selective ochre emphasis.
- Condensed display typography paired with readable Manrope.
- Ruled rows, visible technical groups and native disclosures.
- Underlined text links, explicit focus and responsive reflow.

## Colors

One warm accent sits within a graphite-and-paper neutral system. Frontmatter colors map directly to production `--color-ground`, `--color-paper`, `--color-muted`, `--color-ochre` and `--color-rule`.

### Primary
- **Ochre:** Current-employer emphasis, disclosure markers and open states, link hover, selection background and focus outlines.

### Neutral
- **Graphite ground:** The continuous page background; also text on selected text and the skip link.
- **Warm paper:** Headings, primary text, link defaults and the strongest contact divider.
- **Muted paper:** Supporting prose, periods, role labels and technical descriptions; not disabled text.
- **Graphite rule:** Thin structural separators; not a filled card surface.

**The Selective Accent Rule.** Use ochre to identify emphasis or interaction, not to decorate every heading or fill panels.

The sidecar's eight-step tonal ramps are synthesized preview metadata only. They are not production colors, approved variants or additional CSS tokens.

## Typography

**Display Font:** Barlow Condensed, with sans-serif fallback; locally served at weight (600).
**Body Font:** Manrope, with sans-serif fallback; locally served at weights (400, 500, 600, 700). Both families use `font-display: swap`.

The narrow display face creates strong, economical landmarks. Manrope keeps long Spanish content and technical names clear. There is no imposed mathematical type scale or separate mono face.

### Hierarchy
- **Display:** Uppercase identity; frontmatter desktop clamp, tracking and line height. At widths up to (740px), size becomes `clamp(62px, 13.2vw, 96px)`.
- **Headline:** Section landmarks use the frontmatter headline role. Lower paired sections use (42px), then (38px) on mobile; contact uses `clamp(45px, 5vw, 64px)`.
- **Company:** Condensed employer names; (29px) at up to (1000px), overridden to (31px) at up to (740px).
- **Body:** Base text uses the frontmatter body role. Intro is (17px), then (16px) on mobile, limited to (57ch). Contributions are (15px), line height (1.8), up to (76ch).
- **Supporting text:** Technical groups and periods use (13px); disclosure text is semibold. Technical group labels are paper, descriptions muted. Periods use tabular numerals.

## Layout

A centered container caps at (1160px). Total horizontal subtraction is (104px) above (1000px), (64px) at or below (1000px), and (40px) at or below (740px). These are actual responsive thresholds, not framework defaults.

Rows use thin horizontal rules and (32px) vertical padding; mobile rows use (24px 28px). Employer identification stays in a compact header: name and role together, period opposite; the header stacks on mobile. Supporting content can use two columns, but expanded details span the complete row. Project detail uses equal columns with a (32px) gap, becoming one column with a (16px) gap at the mobile threshold. Text columns may stop at (76ch), rather than stretching every sentence across the container.

Navigation wraps naturally. Main two-column groups reflow to a single column at (740px). Links retain at least (44px) interaction height; desktop section anchors use (54px), and the primary contact link uses (48px). Anchor destinations have (28px) scroll margin. Smooth anchor scrolling switches to automatic scrolling under reduced-motion preference. There are no timed state transitions.

**The Full-Row Detail Rule.** Do not reserve empty employer or date columns beside expanded content.

## Elevation & Depth

No shadows, gradients, translucent layers or lifted surfaces are used. Depth is structural: paper text on one graphite field, muted supporting text, and one-pixel dividing rules. Focus uses an ochre outline (2px) with an offset (5px), not a shadow or glow.

## Shapes

The form language is straight-edged and unboxed. No reusable rounded scale exists. Rows are separated by rules, not rounded cards; technical groups are plain definition lists, not chips. Native disclosure markers remain visible. Do not introduce a radius token merely because a generic library expects one.

## Components

### Contact links

The primary action is an underlined text anchor, not a filled button. The actual destination is `https://www.linkedin.com/in/erick-avn/`, labeled “Escríbeme por LinkedIn”. The footer treatment uses (18px), or (17px) on mobile, with a (48px) minimum height. GitHub is a secondary text anchor to `https://github.com/Galaoox`. Links inherit paper, turn ochre on hover and use the global visible-focus outline; underline offset is (.28em). No custom pressed state exists.

### Section navigation

A wrapping row of plain anchors sits between two rule-colored borders. Text is (13px), desktop column gap (28px), mobile gap (23px). Anchors have no resting underline; hover adds an underline and ochre text. Focus uses the common outline. There is no active-section tracking, sticky behavior or custom menu.

### Native disclosures

Use real `details` and `summary`, initially collapsed. The full summary row toggles with native mouse and keyboard behavior; keep its marker. Summary is semibold (13px), vertically padded (10px), underlined with (.3em) offset, and at least (44px) high. The marker, hover text and open summary are ochre. Focus remains explicit. Career detail bodies use muted (14px) text and (2px) top padding; project bodies use (12px). Do not replace this interaction with a scripted accordion or hide the visible technology groups inside it.

### Employer rows and technical groups

The row is an `article` with a grouped header, contribution paragraph, visible `dl` of technical areas, and native responsibility disclosure. Current-company text alone receives the accent. Definition terms are paper and semibold; values stay muted and inline with their terms. Project disclosures remain nested within their owning employer and expand across the row. No button, input, standalone card or chip library is present or implied.

The sidecar provides drop-in, `ds-`-scoped examples of these actual patterns, using live color variables with literal fallbacks. Its snippets need no Astro or Tailwind runtime; locally hosted font declarations are included where needed.

## Do's and Don'ts

### Do:
- **Do** preserve the graphite field, paper hierarchy and selective ochre emphasis.
- **Do** keep employer identity compact and expanded details full-row.
- **Do** retain native disclosure semantics, visible markers and visible keyboard focus.
- **Do** show confirmed technical groups as readable text and allow mobile reflow.

### Don't:
- **Don't** invent a filled-button, input, card or chip library from this page.
- **Don't** add decorative shadows, gradients or rounded panels to the flat world.
- **Don't** turn preview tonal ramps into production tokens.
- **Don't** promote portfolio-specific section order into a universal screen template.
