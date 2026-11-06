# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Público prioritario: reclutadores y líderes técnicos que evalúan a Erick Vergara para oportunidades laborales de desarrollo Full Stack.
- Necesitan comprender su perfil, trayectoria, tecnologías y resultados, y encontrar cómo contactarlo.

## Product Purpose

Portafolio profesional de Erick Andres Vergara Noriega. Presenta su experiencia, capacidades técnicas, logros y formación para facilitar la evaluación de su candidatura.

El resultado principal esperado es el contacto por una oportunidad laboral a través de LinkedIn, el canal preferido por el usuario. GitHub complementa la evaluación técnica.

## Positioning

Desarrollador Full Stack con experiencia profesional desde 2019 en React, Angular, .NET Core, Node.js y Python. Su experiencia combina desarrollo de interfaces, APIs e integraciones, microservicios, automatización, procesamiento masivo de datos y optimización de sistemas y bases de datos.

Cargo actual: Desarrollador Fullstack Senior en CINTE Colombia. El contenido debe explicar capacidades y resultados concretos, sin inventar diferenciadores, proyectos ni garantías de rendimiento.

## Operating Context

- Contenido principal en español; conservar los nombres técnicos y de productos cuando corresponda.
- El sitio actual es una página con presentación, tecnologías, experiencia profesional, educación y enlaces de contacto.
- Canal público principal de contacto: LinkedIn. No mostrar el correo electrónico ni enlaces de correo en la nueva interfaz.
- LinkedIn: `https://www.linkedin.com/in/erick-avn/`.
- GitHub: `https://github.com/Galaoox`.
- Dominio configurado en Astro: `https://www.erick-avn.xyz`. Esto documenta la configuración del repositorio, no una comprobación del despliegue.

## Capabilities and Constraints

### Trayectoria de referencia

El CV de LinkedIn aportado durante la inicialización es la referencia más reciente para cargos y fechas; el CV anterior aporta detalle técnico complementario.

| Organización | Cargo | Periodo |
| --- | --- | --- |
| CINTE Colombia | Desarrollador Fullstack Senior | Mayo de 2026 – actual |
| Periferia IT Group | Desarrollador Fullstack | Abril de 2025 – mayo de 2026 |
| R5 | Desarrollador Fullstack | Enero de 2023 – marzo de 2025 |
| MVM Ingeniería de Software | Analista de software | Julio de 2021 – enero de 2023 |
| Logical Software Factory | Desarrollador de software | Enero de 2021 – julio de 2021 |
| Tecnologías Sinergia S.A.S | Desarrollador de software | Junio de 2019 – enero de 2021 |

### Experiencia técnica actual

El usuario confirmó para CINTE las siguientes responsabilidades y tecnologías:

- Diseño e implementación de microservicios de procesamiento masivo con Python, FastAPI, SQLAlchemy y C# / .NET 6–8; contenedores con Docker.
- Ingesta y distribución de archivos mediante Google Cloud Storage, con gestión de credenciales y accesos.
- APIs REST de alto rendimiento, operaciones masivas de lectura/escritura y validaciones transaccionales.
- Desarrollo de vistas en Angular 19, estados, formularios y tablas conectadas al backend.
- Modelado y optimización de consultas Oracle / PL/SQL para cargas batch y procesos near-real-time.
- Pipelines de limpieza, validación, Data Quality y agregación con consistencia y trazabilidad.
- Optimización de procesamiento con pandas y Polars, perfilado, E/S y pooling de conexiones.
- Automatización de validaciones, documentación técnica y handoff para mantenimiento y escalamiento.

### Formación

Fundación Escuela Tecnológica de Neiva «Jesús Oviedo Pérez»:

- Ingeniería de Software: febrero de 2018 – enero de 2023.
- Tecnólogo en Desarrollo de Sistemas de Información y Redes: febrero de 2020 – enero de 2021.
- Técnico Profesional en Soporte de Sistemas Informáticos y Redes: febrero de 2018 – junio de 2020.

### Límites y decisiones pendientes

- El sitio existente usa Astro 5, TypeScript y Tailwind CSS 4. Los comandos disponibles están en `package.json`; el comando de desarrollo documentado es `pnpm dev`.
- `src/data/portfolio.ts` centraliza actualmente los datos mostrados en la interfaz, pero aún presenta Periferia como empleo actual y no incluye CINTE. Este registro captura la información actualizada; la inicialización no actualiza la interfaz.
- Disponibilidad para cambiar de empleo, modalidad de trabajo, ubicaciones objetivo e idiomas adicionales: pendientes de confirmar. El texto existente «OPEN TO WORK» no basta para confirmar disponibilidad actual.
- No publicar automáticamente datos personales adicionales de los CV ni incorporar los PDF al sitio por el solo hecho de haberlos recibido como fuentes.
- Cada experiencia debe asociar de forma visible las tecnologías confirmadas de ese empleo. No ocultar herramientas relevantes tras un límite arbitrario de etiquetas ni atribuir a todos los empleos el stack global; agrupar por área cuando facilite la lectura.
- La trayectoria profesional tiene prioridad sobre los casos individuales. Cada caso debe quedar ligado explícitamente al empleo correspondiente, como detalle de esa experiencia, no como un bloque destacado independiente que desplace la cronología.
- Los detalles largos de una experiencia deben aprovechar el ancho de su bloque, sin reservar columnas vacías para fecha o empresa durante todo el desarrollo. La identificación del empleo debe permanecer agrupada en su encabezado.

## Brand Commitments

- Identidad profesional pública: Erick Vergara. Nombre completo: Erick Andres Vergara Noriega.
- Perfil profesional Full Stack; conservar los nombres reales de organizaciones, tecnologías y títulos.
- No añadir explicaciones sobre el motivo del cambio de empleador ni presentar especulaciones sobre esa transición.
- En los casos de trabajo para terceros, preservar la confidencialidad del cliente. El cliente del caso de órdenes de compra solo puede identificarse como una empresa del sector retail de materiales de construcción.
- No se establecieron nuevas restricciones visuales durante la inicialización.

## Evidence on Hand

- `D:/descargas/Profile.pdf`: exportación de LinkedIn aportada por el usuario; fuente más reciente para la trayectoria, con CINTE desde mayo de 2026 y Periferia hasta mayo de 2026. Archivo externo al repositorio, no distribuido con el proyecto.
- `D:/descargas/1 - Hoja de vida actualizada.pdf`: CV anterior a CINTE con detalle de responsabilidades, tecnologías, formación y resultados. Archivo externo al repositorio.
- Confirmación directa del usuario: las responsabilidades y tecnologías descritas para la experiencia reciente también pueden utilizarse para CINTE.
- `src/data/portfolio.ts`: contenido existente de perfil, contactos, tecnologías, trayectoria, formación y métricas.
- `public/photo.webp` y `src/assets/photo.webp`: imágenes disponibles en el repositorio. `public/favicon.svg`: icono actual.
- Otros resultados declarados en los CV incluyen una reducción de carga de 3,0 s a 2,1 s y ~83% de reducción de tiempos de consulta SQL Server. Las métricas de los CV y de los casos son declaraciones del titular, no resultados comprobados independientemente. No reinterpretar porcentajes ni sumar o presentar un mismo resultado como logros independientes en varios empleadores.
- Hay diferencias entre fuentes antiguas y recientes: el CV anterior sitúa el inicio en Periferia en marzo de 2025 y denomina el cargo de MVM de otra forma; para la cronología y los cargos se toma LinkedIn como referencia más reciente. No fusionar métricas distintas de rendimiento web como si midieran lo mismo.
- No se aportaron testimonios de terceros, repositorios de proyectos concretos ni casos de estudio públicos que respalden independientemente las métricas. No inventarlos.

### Caso técnico confirmado: integración de órdenes de compra

- Título acordado: «Desarrollo de un sistema de integración y procesamiento masivo de órdenes de compra entre filiales».
- Atribución: trabajo realizado a través de Periferia IT Group para un cliente del sector retail de materiales de construcción. No publicar el nombre del cliente ni presentar el sistema como una herramienta interna de Periferia.
- Contribución individual: Erick confirmó que implementó el sistema completo él solo, no una modificación puntual.
- Alcance: aproximadamente diez microservicios; cada uno leía un archivo CSV diferente, con tratamientos de datos diferenciados.
- Flujo: recepción de archivos de otra filial en GCP, descarga, limpieza y procesamiento, carga en Oracle y utilización de la información por los microservicios del proyecto.
- Decisiones: Polars sustituyó a pandas por su mejor comportamiento de memoria observado en este flujo. La carga mediante ORM se sustituyó por inserción masiva en Oracle; el nombre exacto de la API no está confirmado.
- Problema operativo: el agotamiento de memoria reiniciaba pods y obligaba a repetir el procesamiento. Erick realizó pruebas locales incrementales con memoria limitada en contenedores para estimar recursos de memoria y CPU y ajustar el paralelismo.
- Compromiso técnico: encontró menos control del deseado sobre registros por lote y aspectos del paralelismo en Polars. No convertir esta experiencia en una limitación universal de la biblioteca.
- Resultados aproximados atribuidos expresamente a este sistema por el usuario: mejora del 60% en procesamiento y reducción del 40% en consumo de recursos. La metodología y el recurso específico no se han detallado; no convertir la mejora en una reducción porcentual de tiempo ni afirmar una reducción específica de memoria o CPU.
- No afirmar que se eliminaron definitivamente los reinicios ni trasladar las métricas del caso a CINTE.


## Product Principles

1. Facilitar que un reclutador o líder técnico entienda la experiencia relevante y encuentre los canales de contacto.
2. Priorizar trayectoria, responsabilidades, tecnologías y resultados sustentados en las fuentes del titular.
3. Mantener la cronología vigente y distinguir los hechos confirmados de la disponibilidad o preferencias aún no confirmadas.
4. Preservar la atribución y el significado de las cifras; no convertir declaraciones del CV en pruebas independientes ni duplicar resultados.
5. Publicar solo información profesional pertinente; recibir un documento como fuente no implica autorizar su publicación íntegra.
