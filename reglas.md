# Prompt para Agente IA: Desarrollo de Portafolio para Ingeniero Civil con Astro

Eres un desarrollador web experto especializado en la creación de sitios estáticos de alto rendimiento con Astro. Tu tarea es completar el desarrollo de un portafolio profesional para un Ingeniero Civil. El proyecto ya ha sido iniciado; se está utilizando Astro como framework y PNPM como gestor de paquetes.

A continuación, se detalla la estructura del proyecto existente y los requisitos para completarlo.

## 1. Contexto del Proyecto

Se ha creado una estructura de carpetas inicial con varios componentes y páginas. Debes utilizar estos elementos existentes, mejorarlos y conectarlos para construir un sitio web coherente y funcional.

**Estructura de archivos actual:**

*   `src/components/`: Contiene componentes reutilizables como `AboutMe.astro`, `Badge.astro`, `Card.astro`, `Experience.astro`, `ExperienceItem.astro`, `FloatingSocialPills.astro`, `Footer.astro`, `Header.astro`, `Hero.astro`, `LinkButton.astro`, `Projects.astro`, `SectionContainer.astro`, y una carpeta `icons/` con varios iconos. **Estos componentes están en gran parte implementados y listos para su integración o ya integrados.**
*   `src/layouts/`: Contiene las plantillas `components.astro` y `Layout.astro`. `Layout.astro` debe envolver todas las páginas para mantener una apariencia consistente (cabecera, pie de página, etc.).
*   `src/pages/`: Contiene las 7 vistas principales del sitio:
    *   `consultoria.astro`
    *   `contacto.astro`
    *   `estructuras.astro`
    *   `hidraulica.astro`
    *   `index.astro` (Página de inicio)
    *   `topografia.astro`
    *   `vias.astro`

## 2. Requisitos Generales

*   **Completar y conectar componentes:** La mayoría de los componentes en `src/components/` están implementados. Asegúrate de que se integren correctamente en las páginas correspondientes.
*   **Uso del Layout:** Todas las páginas en `src/pages/` ya utilizan `Layout.astro` para mantener la consistencia en el diseño, incluyendo el `Header.astro` y el `Footer.astro`.
*   **Navegación:** El componente `Header.astro` ya contiene un menú de navegación claro que enlaza a las 6 páginas de servicios y a la página de contacto. El logo enlaza a la página de inicio (`index.astro`). **Esta sección está completa.**
*   **Contenido Profesional:** Rellena todas las secciones con texto de ejemplo (Lorem Ipsum o similar) que sea relevante para un portafolio de ingeniería civil. Usa un tono profesional y técnico.
*   **Diseño y Estilo:** Aplica un diseño moderno, limpio y profesional. Puedes usar CSS plano, Tailwind CSS (ya configurado) o cualquier otra solución de estilo que consideres apropiada y que sea compatible con Astro. La paleta de colores debe ser sobria y profesional (grises, azules, blancos).

## 3. Desarrollo por Páginas

A continuación se detalla el contenido esperado para cada una de las vistas:

### `index.astro` (Página de Inicio):

*   **`Hero.astro`:** Ya está implementado como la sección principal, presentando al ingeniero con su título y una declaración de misión.
*   **`AboutMe.astro`:** La sección "Sobre Mí" ya está implementada, detallando la experiencia y competencias.
*   **`Projects.astro`:** Ya muestra una selección de proyectos destacados utilizando `Card.astro`. Se pueden añadir más proyectos o crear páginas de detalle si es necesario.
*   **`FloatingSocialPills.astro`:** Ya está integrado de forma flotante a través de `Layout.astro`. **Esta sección está completa.**

### Páginas de Servicios (`consultoria.astro`, `estructuras.astro`, `hidraulica.astro`, `topografia.astro`, `vias.astro`):

*   Cada una de estas páginas ya describe en detalle el servicio ofrecido y utiliza `SectionContainer.astro`.
*   Incluyen descripciones del servicio, metodologías y tipos de proyectos.
*   **Considera reutilizar el componente `Experience.astro` o `ExperienceItem.astro` para listar proyectos o hitos específicos relacionados con cada servicio, si aplica.**

### `contacto.astro` (Página de Contacto):

*   Actualmente es una página básica. **Debe implementarse un formulario de contacto funcional** (puedes simular el envío o integrarlo con un servicio como Formspree o Netlify Forms).
*   Los campos deben ser: Nombre, Email, Asunto y Mensaje.
*   **Debe incluirse información de contacto adicional** como un correo electrónico profesional, número de teléfono (opcional) y un enlace a LinkedIn usando el `LinkButton.astro`.
*   **Nota:** Actualmente, el `Footer.astro` contiene un formulario de contacto básico. Este formulario debe ser movido y adaptado para la página `contacto.astro` según los requisitos.

## 4. Instrucciones Finales

*   **Instalación:** Asume que el proyecto se inicia ejecutando `pnpm install` y se corre en modo de desarrollo con `pnpm dev`.
*   **Optimización:** El código debe ser limpio, bien comentado y optimizado para el rendimiento, siguiendo las mejores prácticas de Astro.
*   **Entrega:** Proporciona el código fuente completo y funcional de todas las páginas y componentes modificados. Explica brevemente las decisiones de diseño y arquitectura que tomaste.
