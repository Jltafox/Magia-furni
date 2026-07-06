# Web · Mago Alejandro Furnadjiev

> Web de servicios de mago para eventos en **Madrid**: **eventos de empresa** y **eventos privados de adultos**.
> Proyecto estructurado con el arnés de agentes de [arnes-agentes/global](https://github.com/genteinvencible/arnes-agentes/tree/main/global) y el flujo de trabajo de la Clase 1 de YinyangSEO.

---

## ⚠️ Estado del proyecto

**Fase actual: Fundacional.** Arnés montado, blueprint en borrador. Todavía **no hay código de la web** — falta investigación de competidores y confirmación de datos del cliente (ver `memory/project_web-mago.md`).

## Alcance

| Incluido | Excluido |
|----------|----------|
| Eventos de empresa (cenas, team building, congresos) | **Magia infantil** (descartado por completo) |
| Bodas (landing propia) | Comuniones y cumpleaños infantiles (descartado) |
| Eventos privados de adultos (cumpleaños de adultos, fiestas) | Escuela online Método Furni · venta de productos |
| Precios publicados (tarifas pendientes del cliente) + "Sobre Alejandro" + contacto | |

**Zona de actuación: Madrid.**

## Mapa del repositorio

| Ruta | Qué contiene | Cuándo consultarlo |
|------|--------------|--------------------|
| `AGENTS.md` | Mapa del proyecto para agentes: stack, comandos, reglas | **Siempre, al empezar cualquier sesión** |
| `CLAUDE.md` | Dinámica de trabajo y reglas de colaboración | Al empezar sesión |
| `DESIGN.md` | Sistema de diseño: tokens, lenguaje visual | Antes de tocar UI |
| `MEMORY.md` | Índice de memoria persistente | Al empezar sesión |
| `memory/` | Perfil del cliente, estado del proyecto, fuentes | Según indique `MEMORY.md` |
| `blueprint/BLUEPRINT.md` | Arquitectura de la web, URLs, SEO | Antes de generar cualquier página |

## Flujo de trabajo previsto

1. **Investigación** — magos de eventos de empresa y eventos privados que posicionan en Madrid, con las skills del curso (`serp-pattern-detector`, `competitor-local-seo-audit`).
2. **Blueprint** — cerrar arquitectura, keywords y schema en `blueprint/BLUEPRINT.md`.
3. **Generación** — scaffolding Astro + landings por servicio.
4. **QA + Deploy** — Lighthouse, schema válido, deploy en Vercel/Netlify.
