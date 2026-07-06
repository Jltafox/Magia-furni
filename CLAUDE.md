# CLAUDE.md — Reglas de colaboración del proyecto

> Este archivo complementa a `AGENTS.md` (mapa técnico). Aquí: cómo trabajar con el usuario.

## Idioma y dinámica

- Conversación y contenido web: **español de España**. Código: inglés.
- Ve al grano: acción antes que explicación larga.
- Ante ambigüedad de negocio (precios, zonas, servicios): **pregunta**, no asumas.
- Ante decisión técnica: propone una opción con criterio y avanza.

## Principios de código (4 pilares)

1. **Explicita asunciones** antes de codear.
2. **Simplicidad**: mínimo código, sin features especulativas.
3. **Cambios quirúrgicos**: toca solo lo necesario, respeta el estilo existente.
4. **Ejecución verificable**: define qué significa "hecho" (build pasa, Lighthouse ≥ 90, schema válido).

## Marca y tono

- Alejandro Furnadjiev es un mago de **prestigio real** (premios nacionales e internacionales, profesor en la escuela de Ana Tamariz): el tono es **profesional, elegante y con un punto de asombro**. Público objetivo adulto: empresas y celebraciones privadas.
- **Nada infantil** en tono, imaginería ni contenido: el posicionamiento es magia de cerca premium para adultos.
- No exagerar ni inventar: los premios y credenciales reales ya son suficientemente potentes.

## Seguridad

- Nunca mostrar valores de credenciales; preguntar antes de acceder a `.env` o secretos.
- No publicar datos personales del cliente (teléfono, email) hasta que él los confirme para la web.

## Jerarquía

Este `CLAUDE.md` de proyecto prevalece sobre cualquier configuración global.
