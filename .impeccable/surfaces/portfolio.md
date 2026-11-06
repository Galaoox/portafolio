# Portfolio — Trayectoria

- **Target:** `src/pages/index.astro`, route `/`.
- **Mode:** Experience, with professional evaluation and contact as the visitor outcome.
- **World:** Root `DESIGN.md` is the durable visual authority; `.impeccable/design.json` extends it with actual component previews and metadata.
- **Approved direction:** Trayectoria. The user approved `.impeccable/prototypes/trayectoria.html` for a clean migration, not another concept-selection round. Preserve the flat graphite/ochre world, condensed display and restrained, readable employer-first content. The approved prototype is a reference artifact, not a second production implementation.

## Surface hierarchy

1. Identity: Erick Vergara, Full Stack Senior, Colombia; current employment at CINTE Colombia, concise introduction and LinkedIn/GitHub contact links.
2. Four section anchors: Experiencia, Capacidades, Formación, Contacto.
3. Professional trajectory: six employers, newest first — CINTE Colombia, Periferia IT Group, R5, MVM Ingeniería de Software, Logical Software Factory and Tecnologías Sinergia S.A.S.
4. Capabilities and education: paired desktop regions, stacked on mobile.
5. “Hablemos” contact: LinkedIn primary (`https://www.linkedin.com/in/erick-avn/`), GitHub secondary (`https://github.com/Galaoox`), then return-to-top link. Do not publish email.

The first viewport establishes name, role, introduction, contact links, four anchors and the first employer. This is a portfolio composition objective, not a universal layout rule for future surfaces.

## Experience composition

Keep employer name, role and dates grouped in a compact header. Show contribution and all confirmed technology groups before expansion. Six native responsibility disclosures plus the Periferia project disclosure provide progressive detail without hiding the relevant stack.

Each expanded disclosure occupies the full employer row. The Periferia case remains attached to its employer; its project body has two columns on desktop and one at the (740px) mobile threshold. Do not promote the case above the trajectory, reserve an empty employer/date column beside long content, or truncate technical groups into an arbitrary tag count.

Project attribution, confidentiality and metric meaning remain governed by `PRODUCT.md` and `src/data/portfolio.ts`; the visual system must not invent proof or transfer Periferia outcomes to CINTE.

## Implementation and accepted evidence

The implemented authority is `src/styles/global.css`, `src/components/*.astro`, `src/pages/index.astro` and `src/layouts/Layout.astro`. Production uses `--color-*` tokens rather than the prototype's shorter variable names. The prototype comparison strip is not production navigation. Current-employer highlighting is explicit data-driven state, not a first-row styling assumption.

Prior completed review evidence, supplied to this documentation pass:
- `.impeccable/review/desktop.png`
- `.impeccable/review/mobile.png`
- `.impeccable/review/user-1486.png`
- `.impeccable/review/periferia-desktop.png`
- `.impeccable/review/periferia-mobile.png`
- `.impeccable/review/verification.json`

The supplied review reports: build passed; all seven disclosures opened and closed with mouse input on desktop and mobile; the Periferia project opened and closed with Enter; skip-link focus and section navigation exercised; six widths without overflow; minimum measured text contrast (8.41:1); detector findings `[]`; independent reviewer verdict **ship**. All seven disclosures also remained visible without overflow when opened together at desktop and mobile widths. These are prior implementation/review results, not checks rerun by the documenter. No UI changes were made after that evidence in this documentation task.

## Drift not promoted to the system

`PRODUCT.md` retains an initialization-era note saying the UI data still presents Periferia as current and omits CINTE. The current source already lists CINTE as current and Periferia as previous employment. Treat that note as stale historical context, not a visual or content rule; this documentation task does not edit PRODUCT.md.

Prototype-only comparison navigation, older visual variants, photo assets and metadata image references do not establish a new component library or a requirement for portrait-led layout. Document-only tonal ramps are preview metadata, not production palette expansion. No additional defects are asserted by this documentation pass; the supplied fresh review is the release verdict.
