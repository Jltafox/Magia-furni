# DESIGN.md — Sistema de diseño

> Sistema canónico del proyecto: tokens, lenguaje visual y patrones aprobados.
> **Nota técnica**: los agentes no cargan este archivo automáticamente — está referenciado desde `AGENTS.md`.
> Estado: **BORRADOR v0** — pendiente de validar con el cliente y con las fotos/vídeos reales.

## Dirección visual

Elegancia de teatro clásico con un giro contemporáneo: **oscuro, dorado, mucho aire**. La web debe transmitir "mago premiado de verdad" — magia de cerca premium para público adulto (empresas y celebraciones privadas). Nada de imaginería infantil ni de "animación de fiestas".

## Tokens base

*(Fundacionales: cambiarlos exige justificación en `memory/feedback_diseno_*.md`.)*

### Color

| Token | Valor propuesto | Uso |
|-------|-----------------|-----|
| `--bg` | `#101014` | Fondo principal (casi negro, cálido) |
| `--bg-raised` | `#1a1a21` | Tarjetas, superficies elevadas |
| `--text` | `#f2efe9` | Texto principal (blanco roto) |
| `--muted` | `#a39e93` | Texto secundario |
| `--accent` | `#c9a227` | Dorado — CTAs, detalles, separadores |
| `--accent-hover` | `#e0b93e` | Hover del acento |
| `--border` | `#2c2c35` | Bordes sutiles |

### Tipografía

- **Titulares**: serif con carácter (propuesta: *Fraunces* o *Playfair Display*), pesos 500/700.
- **Cuerpo**: sans humanista legible (propuesta: *Inter* o *Source Sans 3*), pesos 400/600.
- Escala: 1.25 (major third). Base 16px móvil / 18px desktop.

### Espaciado y radios

- Escala de espaciado: 4 / 8 / 16 / 24 / 40 / 64 / 96 px.
- Border-radius canónicos: `4px` (chips), `12px` (tarjetas), `999px` (botones pill).

## Lenguaje visual (v1 editorial — tras feedback 2026-07-06)

El hilo conductor es la **cartomagia**: el diseño toma prestado el lenguaje del naipe clásico, con mesura.

- **Eyebrows**: etiqueta small-caps dorada con letter-spacing amplio sobre cada H1 y título de sección ("Eventos de empresa · Madrid").
- **Cursiva editorial**: una palabra clave del titular en Fraunces italic. Nunca frases enteras.
- **Composición asimétrica**: heros a dos columnas desiguales; la pieza visual ligeramente rotada (~2°).
- **Cifras como gráfica**: filas de números grandes en serif (años, premios) y timeline en la bio.
- Ornamento de sección: un ◆ pequeño dorado. Separadores finos dorados (1px, opacidad 40%).
- Botón primario: pill dorado sobre fondo oscuro, texto oscuro. Un solo CTA primario por pantalla: **"Pide presupuesto"**. CTA secundario: WhatsApp outline.
- Tarjetas de servicio: fondo `--bg-raised`, borde sutil, sin sombras duras; el borde superior se ilumina en dorado al hover.
- Fotos: protagonistas, radio 12px. **Placeholders "dorso de naipe"** mientras no haya material: retícula diagonal dorada sutil + doble marco + pip ♠ + pie "Foto en preparación". Ratios 3:2 y 4:5.
- Pips de naipe (♠ ♦) solo como acento puntual — jamás como decoración repetida por toda la página.

## Componentes y patrones

- **Hero**: titular grande + subtítulo + CTA + (futuro) vídeo/foto de actuación.
- **Bloque credenciales**: fila de premios (Almería 1999, FLASOMA 2004, Memorial Ascanio 2006) — sobrio, tipo "press bar".
- **Testimonios**: cita + nombre + tipo de evento. *Solo reales, nunca inventados.*
- **FAQ** por servicio (acordeón accesible, `<details>`).

## Responsive

- Breakpoints: móvil ≤ 720px · desktop > 720px.
- Tap targets mínimos 44×44px. Hover solo en desktop (nada "nervioso").
- Titulares: reducir un paso de escala en móvil.

## Lo que NO funciona

*(Se irá llenando con decisiones validadas como fallidas.)*

- Clichés de mago genérico: chisteras con conejos, varitas con estrellas, cortinas rojas de clipart.
- **2026-07-06** — Variante clara "infantil" eliminada del sistema: la magia infantil queda fuera del alcance del proyecto. Un solo tema visual (oscuro elegante) para toda la web.
- **2026-07-06** — **Placeholders como caja vacía plana**: feedback del usuario, "huele a IA". Sustituidos por el placeholder "dorso de naipe". Detalle en `memory/feedback_diseno_2026-07-06.md`.
- **2026-07-06** — Layout 100% simétrico y uniforme (hero centrado + grid de tarjetas idénticas sin acentos): mismo feedback. Ahora composición asimétrica y jerarquía editorial.

## Cuándo este archivo miente

Si el código contradice este documento: manda el código, avisa al usuario y actualiza la doc en el mismo commit.
