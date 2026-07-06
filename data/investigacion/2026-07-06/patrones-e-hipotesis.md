# Patrones detectados e hipótesis accionables — 2026-07-06

> Formato de la skill `serp-pattern-detector`. Lenguaje correcto: "el top comparte X", no "necesitas X para rankear".
> Base: 5 consultas, ~25 dominios observados, 6 competidores individuales perfilados. Ver limitaciones en `serp-snapshot.md`.

## Patrones

1. **Nicho abierto a magos individuales** (señal fuerte). La SERP corporativa mezcla individuales, agencias y directorios; 6 magos con web propia rankean en top 10. Ningún dominio monopoliza.
2. **Landing dedicada "empresa + Madrid"** (señal fuerte, ~80% de los individuales). Todos los que compiten en corporativo tienen una URL específica tipo `/mago-para-empresas-madrid/` además de la home.
3. **Title pattern**: `[Servicio] en Madrid | [Nombre del mago]`, frecuente año (2024/2026) en guías y ocasionales símbolos (▷ ➤ ✨) en agencias. Los individuales premium van sin símbolos.
4. **Credenciales con nombres propios** (señal fuerte, 100% de los individuales): años de experiencia, premios, logos de clientes (Google, Apple, Porsche, ING, Ferrari…), linaje magistral (Ángel Ruiz → DaOrtiz).
5. **Ángulo diferencial explícito** (señal fuerte): cada top tiene un "apellido" — Iván Mora "elegante/moderna", Pepo Capel "Magia 3.0/IA", Jon Ander "magia y humor". Nadie compite como "mago genérico".
6. **Formatos estandarizados** (señal fuerte): magia de cerca (cóctel/mesas, grupos ~20, ~1h) + show de salón/escenario (45-60 min) + extras (mentalismo, conferencias mágicas, personalización de marca/producto dentro de los efectos).
7. **Contenido de precio funciona** (señal media-fuerte): la SERP de "cuánto cuesta" la ganan páginas de precios dedicadas (Iván Mora) y guías con precios publicados (Ángel Ruiz). Rango observado del mercado: 300–1.500 €, corporativo desde ~600 €.
8. **Guías de blog fechadas** (señal media): Pepo Capel y Ángel Ruiz capturan long-tail informacional con guías "2026" actualizadas.
9. **Landings servicio×municipio** (señal media): magosmadrid.com (Tres Cantos, Alcobendas) y Tamarit (ciudades de España) escalan por geografía. Nadie lo hace de forma fina dentro del área de Madrid → hueco.
10. **La SERP de fiestas privadas de adultos es débil** (señal media): dominada por directorios y magos generalistas, sin un especialista claro → oportunidad de `/eventos-privados/`.
11. **Dominio con keyword ayuda pero no decide** (observación): `mago.madrid` y `magomadrid.es` rankean con poco contenido, pero Iván Mora y Pepo Capel compiten con dominio de marca. Relevante para la decisión de dominio pendiente.

## Hipótesis priorizadas

```
H1 — Landing /eventos-empresa/ con "Mago para eventos de empresa en Madrid" en title+H1
Confianza: Alta (patrón 2, ~80%)   Esfuerzo: bajo   Impacto: alto

H2 — Posicionamiento diferencial "linaje Ascanio–Tamariz + premios internacionales de cartomagia"
Confianza: Alta (patrones 4 y 5; nadie en la SERP tiene ese linaje)   Esfuerzo: bajo   Impacto: alto
Nota: es el equivalente superior al "alumno de DaOrtiz" de Ángel Ruiz y al "Campeón de España" de Pepo Capel.

H3 — Formatos claros con duración/aforo (magia de cerca vs show de salón) en cada landing
Confianza: Alta (patrón 6, 100%)   Esfuerzo: bajo   Impacto: medio-alto
Requiere: confirmar formatos reales con Alejandro.

H4 — Sección/página de precios orientativos (o guía "cuánto cuesta un mago en Madrid")
Confianza: Media-alta (patrón 7)   Esfuerzo: bajo   Impacto: medio-alto
Requiere: decisión del cliente sobre publicar precios.

H5 — /eventos-privados/ atacando la SERP débil de fiestas de adultos
Confianza: Media (patrón 10)   Esfuerzo: bajo   Impacto: medio (menos volumen, menos competencia)

H6 — Guía de contratación fechada (blog) para long-tail informacional
Confianza: Media (patrón 8)   Esfuerzo: medio   Impacto: medio   Fase: post-lanzamiento

H7 — Landings por municipio del área de Madrid (Alcobendas, Pozuelo, Las Rozas…)
Confianza: Media (patrón 9)   Esfuerzo: medio-alto   Impacto: medio   Fase: post-lanzamiento, si hay tracción

H8 — Logos de clientes + testimonios con nombre y tipo de evento
Confianza: Alta (patrón 4)   Esfuerzo: bajo   Impacto: medio
Requiere: material real del cliente (nunca inventar).
```

## Qué NO hacer (aprendido de la SERP)

- No mezclar público infantil y corporativo en la misma marca (efecto Alfonso V): diluye el posicionamiento premium. Coherente con nuestra decisión de alcance.
- No usar símbolos/emojis en titles (▷ ➤): patrón de agencia/directorio, no de mago premium.
- No competir como "mago genérico barato": el hueco de Alejandro es la gama alta credencial.

## Pendientes técnicos para cerrar la fase

- [ ] Repetir captura SERP con geo Madrid + móvil (SerpAPI/DataForSEO) — entorno actual sin acceso.
- [ ] Lighthouse + on-page + schema de los 6 individuales — bloqueado por red del entorno.
- [ ] Datos GBP (reviews, fotos, categoría) de los que tengan ficha — requiere Places API.
