# Portafolio de Erick Vergara

Portafolio estático en español, construido con Astro 5 y Tailwind CSS 4. Implementa el diseño **Trayectoria** aprobado: presentación breve, experiencia por empresa, capacidades, formación y contacto por LinkedIn.

## Desarrollo

Requiere Node.js compatible con Astro 5 y pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para comprobar la versión de producción:

```sh
pnpm build
pnpm preview --host 127.0.0.1 --port 4321
```

El sitio se genera en `dist/`. La URL canónica, el sitemap y la integración de Partytown se configuran en `astro.config.mjs`. No se publica automáticamente al compilar.

`pnpm-workspace.yaml` autoriza únicamente los scripts de instalación de `@tailwindcss/oxide`, `esbuild` y `sharp`, necesarios para las herramientas de compilación instaladas.

## Contenido y estructura

- `src/data/portfolio.ts`: fuente de contenido de producción. Cada empleo incluye su resumen, responsabilidades y tecnologías agrupadas. El caso de órdenes de compra pertenece a Periferia IT Group.
- `src/pages/index.astro`: orden de lectura y composición de las secciones.
- `src/components/`: presentación, experiencia, capacidades, formación y contacto. Los nombres históricos `*Neo.astro` se conservan como rutas internas; ya no implementan la estética anterior.
- `src/layouts/Layout.astro`: metadatos, enlaces sociales de previsualización, analítica y enlace para saltar al contenido.
- `src/styles/global.css`: paleta de marca en `@theme`, tipografía, composición y adaptación responsive.

Las responsabilidades y el proyecto usan `<details>` nativo, cerrado inicialmente y accesible con teclado. Las tecnologías de cada empleo siempre permanecen visibles. El proyecto expandido ocupa el ancho de la entrada; no deja columnas de metadatos vacías junto a textos largos.

## Sistema visual

Grafito, texto cálido y acento ocre. Sin fondos de grilla, puntos, scanlines, títulos en degradé, resplandores ni franjas de color en tarjetas.

Manrope y Barlow Condensed se sirven desde `public/fonts/`, sin depender de Google Fonts en tiempo de ejecución. Sus licencias OFL están en ese directorio. `DESIGN.md` y `.impeccable/design.json` documentan el sistema implementado.

## Reglas editoriales

El contacto principal es LinkedIn; GitHub es secundario. No publicar direcciones de correo ni enlaces `mailto:`. No mostrar disponibilidad laboral no confirmada.

Conservar el cliente de Periferia como confidencial. Los resultados de mejora del 60% en procesamiento y reducción del 40% en recursos son aproximados y pertenecen exclusivamente al caso documentado. No reinterpretarlos como mediciones de tiempo, RAM o CPU específicas.

No añadir fotografías de stock o capturas ficticias como si fueran trabajo propio. Las capturas de producto y otros casos siguen pendientes de material y contenido reales.

## Comprobación manual

1. Abrir la versión compilada en escritorio y móvil; comprobar que no existe desplazamiento horizontal.
2. Abrir y cerrar las seis responsabilidades y el proyecto de Periferia con ratón y teclado.
3. Comprobar que las tecnologías siguen visibles y que el proyecto usa dos columnas en escritorio y una en móvil.
4. Recorrer los enlaces internos y «Saltar al contenido» con teclado; comprobar el foco visible.
5. Comprobar «Hablemos.», el destino de LinkedIn y la ausencia de correo público.

Las evidencias de la integración local se guardan en `.impeccable/review/`. Los conceptos anteriores permanecen en `.impeccable/prototypes/`, fuera del sitio publicado. Después de desplegar, volver a medir en [Antiwebslop](https://antiwebslop.com/slop-score?url=https%3A%2F%2Fwww.erick-avn.xyz%2F&medir=nueva&utm_source=agente&utm_medium=prompt); la puntuación no sustituye la revisión visual ni de accesibilidad.
