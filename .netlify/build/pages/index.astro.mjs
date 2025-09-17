/* empty css                                       */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, j as renderSlot, i as renderComponent, d as createAstro, f as addAttribute, k as renderScript } from '../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { h as $$Camera, $ as $$Layout, a as $$BriefCase, e as $$Road, i as $$WaterDrop, j as $$Folder, k as $$User } from '../chunks/Layout_PvF5H369.mjs';
import { a as $$Tools, $ as $$Card, b as $$RoadSign } from '../chunks/Tools_gvrlZRaZ.mjs';
import 'clsx';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_BtbXjjKG.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center text-center min-h-[calc(100vh-96px)]" style="background-image: url('/Inicio/fondo-pr.webp'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-black bg-opacity-60"></div> <div class="relative z-10 w-full mx-auto flex flex-col items-center px-4"> <h1 class="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight text-pretty animate-fade-in-up">
Ingeniería Civil especializada en recursos <br> <span class="text-primary">hídricos y construcción de obras civiles.</span> </h1> <p class="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
Soluciones innovadoras en <strong class="text-white">vías, topografía, hidráulica, estructuras y consultoría</strong> para proyectos que definen el progreso.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="#servicios" class="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-800 hover:scale-105 transition duration-300">
Descubre Nuestros Servicios
</a> <a href="#proyectos" class="inline-block px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 transition duration-300">
Ver Proyectos
</a> </div> </div> </section>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/Hero.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="flex text-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/Badge.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-6 text-gray-800 md:flex-row animate-fade-in-up animation-delay-100"> <!-- <div class="order-1 md:order-2 flex justify-center items-center animate-fade-in-up animation-delay-200">
    <img
      width="250"
      height="250"
      src="/Logo/LOGO GUILLERMO-011.png"
      alt={personalImageAlt}
      class="object-cover w-64 h-full p-1 lg:p-2 lg:w-64
      aspect-square rounded-full bg-gray-100 ring-4 ring-red-700 shadow-xl"
      style="object-position: 50% 30%"
    />
  </div> --> <div class="[&>p]:mb-4 [&>p>strong]:text-red-700 [&>p>strong]:font-semibold [&>p>strong]:font-sans text-pretty order-2 md:order-1 [&>p]:text-lg [&>p]:leading-relaxed max-w-3xl animate-fade-in-up animation-delay-300"> <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">Ingeniero Civil Especialista en Infraestructura Vial y Recursos Hídricos</h2> <div class="flex flex-wrap gap-4 mb-6 justify-center md:justify-start"> <div class="bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2"> <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span><strong class="text-red-900">+10 años de experiencia</strong></span> </div> <div class="flex flex-wrap gap-2"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Diseño y Construcción de Vías y Aeropistas` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Recursos Hídricos` })} </div> </div> <p>
Soy <strong>Guillermo Quintero</strong>, Ingeniero Civil con más de una década de experiencia liderando proyectos de diseño, construcción y consultoría. Mi doble especialización en <strong class="text-red-700">Diseño y Construcción de Vías y Aeropistas</strong> y en <strong class="text-red-700">Recursos Hídricos</strong> me ha permitido desarrollar una visión integral para la ejecución de obras civiles complejas y de alto impacto.
</p> <p>
Mi enfoque se centra en la aplicación de un riguroso criterio técnico para garantizar <strong class="text-red-700">soluciones eficientes, seguras y sostenibles</strong>. He gestionado con éxito proyectos que abarcan desde la infraestructura vial y el manejo de recursos hídricos hasta estructuras complejas y levantamientos topográficos de precisión.
</p> <h3 class="text-2xl font-bold text-black mt-8 mb-4">Mi Compromiso:</h3> <ul class="list-none space-y-2 mb-4"> <li class="flex items-center gap-2"> <svg class="size-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Calidad y Precisión:</strong> Cumplimiento estricto de la normativa vigente y los más altos estándares de calidad en cada fase del proyecto.</span> </li> <li class="flex items-center gap-2"> <svg class="size-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Soluciones Integrales:</strong> Coordinación de múltiples disciplinas para entregar resultados cohesivos y optimizados.</span> </li> <li class="flex items-center gap-2"> <svg class="size-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Transparencia y Confianza:</strong> Construcción de relaciones profesionales sólidas basadas en la comunicación clara y el profesionalismo.</span> </li> </ul> </div> </article> <section class="mt-8 text-center flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400"> <a href="/contacto" class="inline-block bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-800 hover:scale-105 transition duration-300">
Hablemos de su proyecto
</a> <a href="/CV_Guillermo_Quintero.pdf" download="CV_Guillermo_Quintero.pdf" class="inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-900 hover:scale-105 transition duration-300">
Descargar CV
</a> </section>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/AboutMe.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCarousel;
  const { projects, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative w-full overflow-hidden ${className}`, "class")}> <div class="flex transition-transform duration-500 ease-in-out items-stretch justify-start gap-x-4" id="project-carousel-container"${addAttribute(projects.length, "data-projects-length")}> ${projects.map((project, index) => renderTemplate`<div class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 group"> <article class="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 h-full transform transition-transform duration-300 ease-in-out"> <div class="relative aspect-square overflow-hidden rounded-lg cursor-pointer"${addAttribute(`window.myProjectScripts.openLightbox(this.querySelector('img').src, '${project.title}', 0, ${JSON.stringify(project.images)}, '${project.title}')`, "onclick")}> <img${addAttribute(`${project.title} - Main Image`, "alt")} class="object-cover w-full h-full rounded-lg" loading="lazy"${addAttribute(project.images[0].src, "src")}> ${project.images.length > 1 && renderTemplate`<div class="absolute bottom-2 right-2 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-md"> ${renderComponent($$result, "CameraIcon", $$Camera, { "class": "size-4" })} <span>${project.images.length}</span> </div>`} </div> <div class="flex-grow flex flex-col justify-between"> <div> <h3 class="text-xl font-bold text-black mb-2 group-hover:text-red-700 transition-colors duration-300"> ${project.title} </h3> <div class="flex flex-wrap mb-2 gap-x-2"> <ul class="flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> </div> <p class="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300"> ${project.description} </p> </div> </div> </article> </div>`)} </div> <!-- Navigation Arrows --> <button id="carousel-prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10 hidden lg:block">
&#10094;
</button> <button id="carousel-next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10 hidden lg:block">
&#10095;
</button> </div> <!-- Lightbox Modal Structure (reintegrado desde Projects.astro) --> <div id="lightbox-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black"> <div class="relative w-full h-full flex flex-col lg:flex-row bg-black"> <button id="lightbox-close-btn" class="absolute top-4 right-4 z-[60] text-white text-3xl font-bold p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white">
&times;
</button> <div class="flex flex-col items-center justify-center w-full h-full overflow-hidden"> <div class="relative max-w-full max-h-full flex items-center justify-center"> <button id="lightbox-prev-btn" class="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white">
&#10094; <!-- Left arrow --> </button> <img id="lightbox-img" src="" alt="Project Image" style="width: auto; height: auto;"> <button id="lightbox-next-btn" class="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white">
&#10095; <!-- Right arrow --> </button> </div> <div id="lightbox-caption" class="w-full p-4 text-center text-white bg-black"></div> </div> <div id="lightbox-thumbnails" class="w-full lg:w-64 p-4 bg-black bg-opacity-80 flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-y-auto"> <!-- Thumbnails will be injected here by JavaScript --> </div> </div> </div> ${renderScript($$result, "C:/Users/rmcam/Documents/portfolio-civil/src/components/ProjectCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/ProjectCarousel.astro", void 0);

const $$Astro = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/LinkInline.astro", void 0);

const TAGS = {
  VIAS: {
    name: "Infraestructura Vial",
    class: "bg-blue-700 text-white",
    // Color para Vías
    icon: $$LinkInline
    // Icono genérico de enlace
  },
  TOPOGRAFIA: {
    name: "Topografía",
    class: "bg-green-700 text-white",
    // Color para Topografía
    icon: $$LinkInline
    // Icono genérico de enlace
  },
  HIDRAULICA: {
    name: "Recursos Hídricos",
    class: "bg-cyan-700 text-white",
    // Color para Hidráulica
    icon: $$LinkInline
    // Icono genérico de enlace
  }};
const PROJECTS = [
  {
    title: "Drenaje Terminal RUP 9",
    description: "Construcción del sistema de drenaje de aguas lluvias para el terminal de transporte de Villagarzón, departamento del Putumayo",
    link: "/projects/drenaje-terminal-rup-9",
    // Updated link
    images: [
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp", caption: "Vista final del sistema de drenaje." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_01.webp", caption: "Inicio de Obras de Drenaje Pluvial." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_02.webp", caption: "Eficiencia en Excavación para Infraestructura Crítica." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_03.webp", caption: "Tuberías de Drenaje con Precisión de Ingeniería." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_04.webp", caption: "Preparación del Lecho para la Red de Drenaje." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_05.webp", caption: "Construcción de Cajas de Inspección Esenciales." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_06.webp", caption: "Refuerzo y Vaciado de Concreto en Elementos Clave." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_07.webp", caption: "Finalización de Sumideros y Rejillas de Alta Capacidad." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_08.webp", caption: "Estructuras Hidráulicas para la Gestión de Flujos." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_09.webp", caption: "Pozos de Inspección para Mantenimiento y Operación Eficiente." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_10.webp", caption: "Nuevo Sistema de Drenaje para el Terminal de Transporte." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp", caption: "Vista final del sistema de drenaje." }
    ],
    tags: [TAGS.HIDRAULICA]
  },
  {
    title: "Parque Saludable Sacama RUP 17",
    description: "Construcción de parque biosaludable en el municipio de Sacama, departamento de Casanare, dentro del marco del proyecto BPPIM: 2016-85315-0007",
    link: "/projects/parque-saludable-sacama-rup17",
    // Updated link
    images: [
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_01.webp", caption: "Construcción de senderos peatonales y plataformas en concreto para la circulación y el emplazamiento de los equipos." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_02.webp", caption: "Instalación de un circuito completo de máquinas de ejercicio al aire libre, diseñadas para trabajar diferentes grupos musculares y aptas para usuarios de todas las edades." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_03.webp", caption: "Adecuación de zonas de descanso con bancas de concreto y el diseño de jardineras circulares en ladrillo visto para el embellecimiento paisajístico del parque." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_05.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." }
    ],
    tags: [TAGS.TOPOGRAFIA]
  },
  {
    title: "Pavimento Terminal RUP 16",
    description: "Mejoramiento de vías internas mediante la construcción de pavimento en concreto asfaltico para el terminal de transportes de Villagarzón S.A., departamento del Putumayo",
    link: "/projects/pavimento-terminal-rup16",
    // Updated link
    images: [
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp", caption: "Obra Finalizada: Vista Integral del Proyecto.." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-01.webp", caption: "Estado Inicial de las Vías Internas del Terminal." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-02.webp", caption: "Preparación y Nivelación de la Subrasante." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-03.webp", caption: "Instalación de Geomalla de Refuerzo." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-04.webp", caption: "Conformación de la Capa de Base Granular." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-05.webp", caption: "Aplicación y Compactación de la Primera Capa de Asfalto." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-06.webp", caption: "Avance General de la Pavimentación en Accesos." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-08.webp", caption: "Proceso de Compactación del Concreto Asfáltico." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-09.webp", caption: "Compactación Neumática para Sellado de la Superficie." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-10.webp", caption: "Trabajos de Pavimentación en Curvas y Zonas de Maniobra." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-11.webp", caption: "Vista de la Nueva Vía Interna Pavimentada." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-12.webp", caption: "Extendido y Acabado de la Mezcla Asfáltica." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-13.webp", caption: "Pavimentación en Zonas de Acceso y Control." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-14.webp", caption: "Vía Interna Concluida y en Funcionamiento." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-15.webp", caption: "Vista Superior de la Nueva Circulación Vehicular." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-16.webp", caption: "Panorámica del Terminal con Vías Renovadas." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp", caption: "Obra Finalizada: Vista Integral del Proyecto.." }
    ],
    tags: [TAGS.VIAS]
  },
  {
    title: "Placa Huella Mocoa RUP 18",
    description: "Obras de recuperación para la rehabilitación de vías afectadas por lluvia torrencial en Mocoa.",
    link: "/projects/placa-huella-mocoa-rup18",
    // Updated link
    images: [
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp", caption: "Vía Recuperada Mejorando el Acceso y la Calidad de Vida de los Residentes" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_10.webp", caption: "Condición Inicial de la Vía en la Vereda Nueva Esperanza" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_09.webp", caption: "Adecuación y Nivelación de la Subrasante con Motoniveladora" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_08.webp", caption: "Compactación de la Estructura de la Vía con Vibrocompactador" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_06.webp", caption: "Avance de los Trabajos de Preparación del Terreno en el Tramo" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_07.webp", caption: "Construcción de Obras de Drenaje y Bordillos en Concreto" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_05.webp", caption: "Tramo en Curva con Pavimento en Placa Huella Terminado" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp", caption: "Vía Recuperada Mejorando el Acceso y la Calidad de Vida de los Residentes" }
    ],
    tags: [TAGS.VIAS]
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Ingeniero Civil", "description": "Experticia en ingenier\xEDa civil: v\xEDas, topograf\xEDa, hidr\xE1ulica, estructuras y consultor\xEDa." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Hero component is now self-contained --> <!-- Services Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "px-4 lg:px-28 py-20 bg-gray-50", "id": "servicios", "fullWidth": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold flex gap-x-2 items-center mb-8 text-secondary"> ${renderComponent($$result3, "Tools", $$Tools, { "class": "inline size-7" })}
Nuestros Servicios
</h2> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderComponent($$result3, "Card", $$Card, { "title": "Consultor\xEDa", "body": "Asesor\xEDa experta y estrat\xE9gica para la optimizaci\xF3n de tus proyectos de ingenier\xEDa, garantizando resultados superiores. Descubre c\xF3mo.", "href": "/consultoria", "Icon": $$BriefCase, "imageUrl": "/Consultoria/consultoria.webp", "class": "animate-fade-in-up animation-delay-100" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Estructuras", "body": "Dise\xF1amos y calculamos estructuras seguras y eficientes, asegurando la solidez y durabilidad de tus edificaciones. Descubre c\xF3mo.", "href": "/estructuras", "Icon": $$Tools, "imageUrl": "/Estructuras/Estructuras.webp", "class": "animate-fade-in-up animation-delay-200" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Infraestructura Vial", "body": "Dise\xF1amos y construimos infraestructura vial que impulsa la movilidad y el progreso, conectando comunidades de manera eficiente. Descubre c\xF3mo.", "href": "/vias", "Icon": $$Road, "imageUrl": "/Infraestructura-Vial/vias.webp", "class": "animate-fade-in-up animation-delay-300" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Recursos H\xEDdricos", "body": "Optimizamos la gesti\xF3n del agua para tus proyectos, asegurando sostenibilidad y reduciendo costos a largo plazo. Descubre c\xF3mo.", "href": "/hidraulica", "Icon": $$WaterDrop, "imageUrl": "/Recursos-H\xEDdricos/hidraulica.webp", "class": "animate-fade-in-up animation-delay-400" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Topograf\xEDa", "body": "Realizamos mediciones precisas y representaciones detalladas del terreno para garantizar el \xE9xito y la viabilidad de tu proyecto. Descubre c\xF3mo.", "href": "/topografia", "Icon": $$RoadSign, "imageUrl": "/Topograf\xEDa/topografia.webp", "class": "animate-fade-in-up animation-delay-500" })} </ul> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "px-4 lg:px-28 py-20 bg-gray-50", "id": "proyectos", "fullWidth": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold flex gap-x-2 items-center mb-8 text-secondary"> ${renderComponent($$result3, "Folder", $$Folder, { "class": "inline size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "ProjectCarousel", $$ProjectCarousel, { "projects": PROJECTS })} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "px-0 py-20 md:py-10", "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold flex gap-x-2 items-center text-secondary"> ${renderComponent($$result3, "UserIcon", $$User, { "class": "inline size-7" })}
Sobre mi
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </main> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/index.astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
