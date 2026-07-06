# AGENTS.md — Web Mago Alejandro Furnadjiev

> Mapa para agentes que arrancan en frío. **No es documentación exhaustiva**: es lo mínimo para trabajar sin romper nada.

## Antes de empezar

1. Lee este archivo entero (~3 min).
2. Lee `MEMORY.md` y los archivos marcados en **negrita** ahí.
3. Lee `blueprint/BLUEPRINT.md` si vas a tocar arquitectura o contenido.

## Stack y comandos

| Cosa | Valor |
|------|-------|
| Framework | **Astro** (decidido; scaffolding pendiente) |
| Estilos | CSS propio con tokens de `DESIGN.md` (sin framework CSS salvo decisión justificada) |
| Deploy | Vercel o Netlify (pendiente de decidir) |
| Dominio | Pendiente (el cliente tiene magiametodofurni.com pero es de la escuela, **no** de esta web) |

Comandos (cuando exista el scaffolding):

```bash
npm install       # dependencias
npm run dev       # dev server
npm run build     # build de producción
npm run preview   # previsualizar build
```

## Mapa del repositorio

Ver tabla en `README.md`. Regla: la web vivirá en `site/` cuando se genere el scaffolding, para no mezclar código con el arnés.

## Convenciones de código

- **Código y nombres** (variables, componentes, archivos de código): inglés.
- **Contenido de cara al usuario** (textos, meta tags, URLs de páginas): español de España.
- URLs en kebab-case y en español: `/eventos-empresa/`, `/eventos-privados/`.
- Comentarios solo donde el "por qué" no sea evidente.

## Reglas específicas del proyecto

1. **Nunca inventes datos del cliente**: testimonios, precios, teléfono, ciudades de actuación. Si falta un dato, usa un placeholder explícito `[PENDIENTE: …]` y anótalo en `memory/project_web-mago.md`.
2. **Alcance cerrado**: eventos de empresa + bodas + eventos privados de adultos + **formación presencial para adultos** (clases/talleres), en Madrid. **NADA infantil**: ni magia infantil, ni cumpleaños infantiles, ni comuniones — no aparecen en la web ni en el análisis. NO escuela online (Método Furni se menciona solo como credencial en la bio; la landing de formación no la vende ni la enlaza).
3. La biografía y premios de Alejandro salen de `memory/user_alejandro-furnadjiev.md` — no de tu memoria de entrenamiento.
4. SEO local es prioridad: cada página nueva debe tener title, meta description, H1 único y schema definidos en el blueprint antes de escribirla.
5. Fotos y vídeos aún no existen: usa placeholders con las dimensiones anotadas en `DESIGN.md`.

## Memoria persistente

Índice en `MEMORY.md`. Actualiza la memoria al descubrir datos nuevos del cliente o al tomar decisiones.

## Cierre de sesión

- [ ] ¿Build pasa (cuando haya código)?
- [ ] ¿Memoria actualizada con decisiones y hallazgos?
- [ ] ¿Trabajo incompleto documentado en `memory/project_web-mago.md`?

## Cuándo este archivo miente

Si el código contradice este documento: **manda el código**, avisa al usuario y actualiza la doc en el mismo commit si es crítico.
