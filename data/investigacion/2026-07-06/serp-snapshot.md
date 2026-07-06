# Snapshot de investigación SERP — 2026-07-06

> Metodología: skill `serp-pattern-detector` del repo de la Clase 1, adaptada a las herramientas disponibles.

## ⚠️ Limitaciones de este análisis (leer antes de usar)

- **Sin SERP geolocalizada real**: no había SerpAPI/DataForSEO ni navegador con salida libre en el entorno (la política de red bloquea dominios no permitidos). Los datos vienen del **índice de un buscador sin geo Madrid forzado ni dispositivo móvil**.
- **No capturado**: Map Pack / fichas GBP, People Also Ask, AI Overview, anuncios, featured snippets.
- **Sin auditoría técnica**: no se pudo descargar el HTML de los competidores (proxy devuelve 403 a esos dominios) → sin Lighthouse, sin schema, sin conteo real de palabras.
- **Recomendación**: repetir con SerpAPI + Places API desde un entorno con red abierta antes de dar el blueprint por cerrado. Aun así, los patrones de posicionamiento, arquitectura y mensaje detectados son sólidos (coinciden entre 4 consultas distintas).

## Keywords analizadas

1. `mago para eventos de empresa madrid`
2. `mago para eventos madrid contratar`
3. `mago para fiestas privadas cumpleaños adultos madrid`
4. `magia de cerca madrid contratar close-up`
5. `cuánto cuesta contratar un mago madrid precio` (informacional/precio)

## Resultados por keyword (dominios, tipo)

### 1. mago para eventos de empresa madrid

| # | URL | Tipo |
|---|-----|------|
| 1 | magosmadrid.com | Agencia multi-artista |
| 2 | ivanmorailusionista.com/mago-para-empresas-madrid/ | Mago individual — landing servicio+ciudad |
| 3 | magotamarit.com/magos-en-madrid.html | Mago individual — landing ciudad |
| 4 | magosmadrid.com/espectaculos/magia-para-empresas/ | Agencia — landing servicio |
| 5 | angelruiz.world/blog/mago-eventos-empresa-madrid-guia | Mago individual — guía blog (año en title) |
| 6 | mago.madrid | Mago individual (Jon Ander) — home |
| 7 | pepocapel.com/mago-para-evento-de-empresa-en-madrid/ | Mago individual — landing servicio+ciudad |
| 8 | magomadrid.es/eventos-de-empresa/ | Mago individual (Alfonso V) — landing servicio |
| 9 | megajarana.com/magos-madrid/ | Agencia de animación |
| 10 | espectalium.com/…/madrid/ | Agencia — landing ciudad |

### 2. mago para eventos madrid contratar

Top: magosmadrid.net, espectalium, magosmadrid.com, mago.madrid, ivanmorailusionista.com/mago-madrid/, magotamarit.com, **cronoshare** (directorio), estoesmagia.com, megajarana, **artistealo** (directorio).

### 3. mago fiestas privadas / cumpleaños adultos madrid

Top: **lafactoriadelshow** (directorio), **cronoshare** (directorio), magoenmadrid.com (The Magic Factory), magoborruel.es/fiestas-familiares/, magosdemaravilla.com/mago-para-adultos/, recontramago.com/mago-madrid/, ivantorresmagia.com/mago-para-adultos/, tumago.com/mago-en-madrid/, **celebrents** (directorio), magomadrid.es.

→ SERP más débil: dominan directorios y magos menos especializados. **Hueco competitivo** frente a la de empresas.

### 4. magia de cerca madrid

Top: magotamarit.com/magia-de-cerca.html, angelruiz.world/contratar-mago-madrid, contratarartistas.com, scarlettentertainment.com, magos.club, ivanmorailusionista.com (guía), pepocapel.com (guía blog 2026), mago.madrid (home + /mago-para-empresas/).

### 5. cuánto cuesta contratar un mago madrid

Top: **ivanmorailusionista.com/precio-mago-madrid/** (página de precios dedicada), celebrents, artistealo, **angelruiz.world/contratar-mago-madrid** (guía con precios), magosmadrid.com, **cronoshare/cuanto-cuesta/** (calculadora), pepocapel.com, tumago.com, magotamarit.com, estoesmagia.com.

Señales de precio publicadas: rango general 300–1.500 €; media directorios ~290–595 €; corporativo desde ~600 €/jornada; Ángel Ruiz publica "desde 400 € (privado) / 600 € (empresa)".

Fuente: búsquedas web del 2026-07-06 (índice sin geo forzado). Detalle de competidores en `competidores.md`; patrones e hipótesis en `patrones-e-hipotesis.md`.
