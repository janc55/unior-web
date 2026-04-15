# PROMPT: Landing Page Premio Orgullo Orureño 2026 (AstroJs + Tailwind + AlpineJS)

## CONTEXTO Y OBJETIVO
Construye una landing page de una sola página en la ruta `/poo` para el **Premio Orgullo Orureño 2026 — XXIII Versión**. El proyecto debe integrarse en la estructura existente de **AstroJs**, utilizando el layout base, Tailwind CSS para estilos y AlpineJS para interactividad.

La página debe gestionar tres fases cronológicas mediante una variable de estado en el frontmatter de Astro:
1. **Fase 1: Convocatoria** (Activa actualmente)
2. **Fase 2: Postulados**
3. **Fase 3: Galardonados**

---

## IDENTIDAD VISUAL Y SISTEMA DE DISEÑO
### 1. Paleta de Colores (Tailwind)
Configurar o usar los siguientes colores:
- `gold-light`: `#F5D78E` (textos dorados secundarios)
- `gold-mid`: `#C9A84C` (dorado principal, botones, bordes)
- `gold-dark`: `#8B6914` (sombras doradas)
- `black-deep`: `#0A0705` (fondo principal)
- `black-rich`: `#120E08` (secciones alternas)
- `black-card`: `#1A1208` (tarjetas y contenedores)
- `wine-dark`: `#3D0A14` (hover states y acentos)
- `wine-mid`: `#6B1422` (bordes y separadores)

### 2. Tipografía (Google Fonts)
- **Títulos/Display**: `Playfair Display` (400, 700, 900)
- **Subtítulos/UI**: `Cormorant Garamond` (300, 400, 600)
- **Cuerpo/Datos**: `Inter` (300, 400, 500)

---

## ESTRUCTURA DE LA PÁGINA (COMPONENTES ASTRO)
La página `src/pages/poo/index.astro` debe importar y renderizar los siguientes componentes ubicados en `src/components/poo/`:

### 1. Header.astro
- Barra superior sticky con backdrop-filter: blur(8px).
- Logo UNIOR (izq) y Fundación Sebastián Pagador (der) con estética dorada elegante.
- Borde inferior: `1px solid rgba(139, 105, 20, 0.4)`.

### 2. Hero.astro
- Imagen central: `/public/assets/poo/Logo_POO_XXI_-_Con_Sombra.png` (max-width: 420px).
- Título animado "CONVOCATORIA" en Cormorant Garamond 600.
- Botón principal (Primary): "Descargar Convocatoria PDF" (`convocatoria-poo-2026.pdf`).
- Botón secundario (Ghost): "Ver Requisitos" (scroll suave a #convocatoria).

### 3. Countdown.astro (AlpineJS)
- Contador en tiempo real para el **12 de mayo de 2026, 23:59:59 (Bolivia)**.
- Estética: Bloques `black-card` con números en `gold-light` y labels en `text-muted`.

### 4. Convocatoria.astro (Fase 1)
- Texto introductorio con **Drop Cap** (letra capitular grande dorada).
- **6 Requisitos** detallados en tarjetas con borde izquierdo `wine-mid`.

### 5. Cronograma.astro
- Línea de tiempo vertical con los siguientes hitos:
  - Hoy: Apertura de postulaciones.
  - 5 mayo: Sorteo de Jurado.
  - 12 mayo: Cierre de postulaciones.
  - 13 mayo: Reunión del Jurado.
  - 29 mayo: Solemne Acto de Premiación (18:00).

### 6. Postulados.astro / Galardonados.astro (Fases 2 y 3)
- Grids de tarjetas cargadas desde un array de objetos. Visibilidad condicionada a la fase activa.

### 7. Footer.astro
- Información institucional (Dirección, Teléfono, Web) y registro SENAPI N.º 9110/2024.

---

## INTERACTIVIDAD Y ANIMACIONES
- **Gestión de Fases**: Variable `activePhase` (1, 2 o 3) en el frontmatter de `index.astro`.
- **Animaciones**: Utilizar `@midudev/tailwind-animations` para efectos de entrada (`fade-in-up`).
- **AlpineJS**: Para la lógica del cronómetro y microinteracciones.
- **Responsividad**: Mobile-first, adaptando layouts de 2 columnas a 1 columna en móviles.

---

## REGLAS DE DESARROLLO
- Usar el Layout existente `src/layouts/Layout.astro`.
- Mantener el código limpio y bien comentado.
- Asegurarse de que los activos se ubiquen en `/public/assets/poo/`.