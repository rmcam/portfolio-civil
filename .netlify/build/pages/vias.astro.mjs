/* empty css                                       */
import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { $ as $$Layout, e as $$Road, f as $$FileSearch, g as $$Building } from '../chunks/Layout_PvF5H369.mjs';
import { $ as $$Card, a as $$Tools, b as $$RoadSign } from '../chunks/Tools_gvrlZRaZ.mjs';
export { renderers } from '../renderers.mjs';

const projects = [
  {
    id: "1",
    title: "Mejoramiento de Vías Urbanas en Solita, Caquetá",
    body: "Construcción de pavimento hidráulico y obras complementarias en el municipio de Solita.",
    imageUrl: "/Infraestructura-Vial/1/1.webp",
    icon: "Road"
  },
  {
    id: "2",
    title: "Mejoramiento de Vías en Solita y Valparaíso, Caquetá",
    body: "Pavimentación en concreto hidráulico y obras complementarias en los municipios de Solita y Valparaíso.",
    imageUrl: "/Infraestructura-Vial/2/2_page-0001.webp",
    icon: "RoadSign"
  },
  {
    id: "3",
    title: "Mejoramiento de Vía Urbana en Albania, Caquetá",
    body: "Pavimentación en concreto rígido en el centro poblado de Versalles, municipio de Albania.",
    imageUrl: "/Infraestructura-Vial/3/3.webp",
    icon: "Tools"
  }
];

const $$Vias = createComponent(($$result, $$props, $$slots) => {
  const icons = {
    Road: $$Road,
    RoadSign: $$RoadSign,
    Tools: $$Tools
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Infraestructura Vial", "description": "Dise\xF1amos, construimos y rehabilitamos v\xEDas urbanas y rurales con altos est\xE1ndares de calidad y seguridad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-64 flex items-center justify-center text-center p-8" style="background-image: url('/Infraestructura-Vial/vias.webp'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-black bg-opacity-50"></div> <div class="relative z-10"> <h1 class="text-4xl md:text-6xl font-bold text-text-light mb-4 tracking-tight">
Infraestructura Vial
</h1> <p class="text-lg md:text-xl text-text-light">
Conectamos regiones, impulsamos desarrollo.
</p> </div> </section> <div class="container mx-auto px-4 py-16"> <!-- Sección de Nuestros Proyectos Viales --> <section class="py-16"> <h3 class="text-3xl font-bold text-center mb-12 text-text-dark">Nuestros Proyectos Viales</h3> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8 list-none p-0"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": `/vias/${project.id}`, "imageUrl": project.imageUrl, "title": project.title, "body": project.body, "Icon": icons[project.icon] })}`)} </ul> </section> <!-- Sección de Servicios Clave --> <section class="py-16"> <h3 class="text-3xl font-bold text-center mb-12 text-text-dark">Nuestros Servicios</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"> <div class="flex flex-col items-center p-6 border border-border-light rounded-lg shadow-md bg-background-light"> ${renderComponent($$result2, "FileSearch", $$FileSearch, { "class": "h-12 w-12 mb-4 text-primary" })} <h4 class="text-xl font-bold mb-2 text-text-dark">Diseño y Estudios</h4> <p class="text-text-dark">Realizamos estudios de factibilidad, diseño geométrico y estructural para garantizar proyectos viales eficientes y seguros.</p> </div> <div class="flex flex-col items-center p-6 border border-border-light rounded-lg shadow-md bg-background-light"> ${renderComponent($$result2, "Building", $$Building, { "class": "h-12 w-12 mb-4 text-primary" })} <h4 class="text-xl font-bold mb-2 text-text-dark">Construcción y Rehabilitación</h4> <p class="text-text-dark">Ejecutamos la construcción de nuevas vías y la rehabilitación de corredores existentes con materiales de alta calidad.</p> </div> <div class="flex flex-col items-center p-6 border border-border-light rounded-lg shadow-md bg-background-light"> ${renderComponent($$result2, "RoadSign", $$RoadSign, { "class": "h-12 w-12 mb-4 text-primary" })} <h4 class="text-xl font-bold mb-2 text-text-dark">Señalización y Seguridad Vial</h4> <p class="text-text-dark">Implementamos sistemas de señalización y medidas de seguridad para proteger a los usuarios de la vía.</p> </div> </div> </section> <div class="text-center mt-16"> <p class="text-lg text-text-dark mb-6 leading-relaxed font-semibold">
¿Necesita un proyecto vial exitoso? Conversemos y construyamos el camino juntos.
</p> <a href="/contacto" class="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-secondary transition duration-300">
Contáctenos
</a> </div> </div> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias.astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias.astro";
const $$url = "/vias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
