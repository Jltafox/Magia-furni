---
type: project
created: 2026-07-06
updated: 2026-07-06
status: active
---

# Estado del proyecto — Web Mago Alejandro Furnadjiev

## Why

Fuente única de verdad sobre decisiones y estado. Leer al iniciar cada sesión.

## Decisiones tomadas

- **2026-07-06** — Alcance definitivo: **eventos de empresa + eventos privados de adultos**, en **Madrid**. **Descartado por completo todo lo infantil**: magia infantil, cumpleaños infantiles y comuniones no entran ni en la web ni en el análisis. Escuela online Método Furni **fuera de alcance** (solo credencial en bio). *(Sustituye a la decisión anterior del mismo día que incluía magia infantil.)*
- **2026-07-06** — Zona de actuación confirmada: **Madrid**. Desbloquea la investigación de competidores locales.
- **2026-07-06** — Arnés basado en `genteinvencible/arnes-agentes/global` (AGENTS/CLAUDE/DESIGN/MEMORY + memory-templates).
- **2026-07-06** — Flujo de trabajo: el de la Clase 1 de YinyangSEO (investigación → blueprint → generación → QA/deploy).
- **2026-07-06** — Stack: Astro; deploy Vercel/Netlify (proveedor por decidir).
- **2026-07-06** — Fotos/vídeos: los conseguirá el cliente más adelante; mientras tanto, placeholders según `DESIGN.md`.
- **2026-07-06** — **Precios: SÍ se publicarán** en la web (decisión del usuario). Aún no existen las tarifas → página `/precios/` con estructura lista y valores `[PENDIENTE]`.
- **2026-07-06** — **Bodas: SÍ entra** como servicio, con landing propia `/bodas/` (patrón de los comparables directos).
- **2026-07-06** — **Formación presencial ENTRA** como servicio con landing `/formacion/` (clases y talleres de magia para adultos en Madrid). La escuela online Método Furni sigue **fuera**: no se vende ni enlaza, solo credencial en bio.
- **2026-07-06** — Feedback de diseño del usuario: la v0 del sitio "huele a IA" y faltan fotos → rediseño editorial (ver `memory/feedback_diseno_2026-07-06.md`). Las fotos reales siguen siendo el mayor pendiente visual.
- **2026-07-06** — Aforo: **flexible, depende de la sala y del tipo de magia** — la magia de cerca se adapta a grupos repartidos, el show de salón al aforo del espacio. Así se comunica en las FAQ; sin cifras cerradas.

## Estado por fases

| Fase | Estado |
|------|--------|
| 0 · Arnés y fundacional | ✅ Hecho (2026-07-06) |
| 1 · Investigación de competidores | ✅ Hecha (2026-07-06) con limitaciones de red — resultados en `data/investigacion/2026-07-06/`; validación técnica (SERP geo, Lighthouse, GBP) pendiente de entorno con red abierta |
| 2 · Blueprint definitivo | 🟡 v0.1 con posicionamiento e hipótesis; faltan decisiones del cliente (precios, bodas, formatos) |
| 3 · Scaffolding Astro + landings | ⬜ Pendiente |
| 4 · QA + deploy | ⬜ Pendiente |

## Bloqueos / pendientes

- *(Resuelto 2026-07-06: el proyecto vive ya en su repositorio propio `Jltafox/Magia-furni`; la copia en la rama del repo de la clase queda como histórico.)*

- Datos del cliente por confirmar (ver checklist en `user_alejandro-furnadjiev.md`).
- Tarifas concretas para `/precios/` (el usuario confirmó que se publicarán, aún no existen).
- Duración exacta de cada formato de actuación (el aforo ya está resuelto: flexible según sala y tipo de magia).
- La red del entorno actual bloquea el acceso directo a webs de competidores (proxy 403) → la auditoría técnica (Lighthouse, schema, GBP) queda para un entorno con red abierta o con SerpAPI/Places API.

## Hallazgo clave (2026-07-06)

Posicionamiento diferencial elegido: **linaje Ascanio–Tamariz + premios internacionales de cartomagia** — ningún competidor de la SERP de Madrid puede replicarlo (el más cercano: Ángel Ruiz "alumno de DaOrtiz"; Pepo Capel "Campeón de España de cartomagia"). Detalle en `data/investigacion/2026-07-06/patrones-e-hipotesis.md`.

## How to apply

Actualizar este archivo en cada sesión: nuevas decisiones con fecha, fases al cambiar de estado.
