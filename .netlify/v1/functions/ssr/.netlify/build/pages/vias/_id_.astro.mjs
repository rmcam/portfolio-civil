/* empty css                                          */
import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_PvF5H369.mjs';
import { $ as $$LightboxGallery } from '../../chunks/LightboxGallery_C_k0r5My.mjs';
import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projectsDir = path.resolve("public/Infraestructura-Vial");
  const projectFolders = fs.readdirSync(projectsDir).filter(
    (file) => fs.statSync(path.join(projectsDir, file)).isDirectory()
  );
  return projectFolders.map((id) => ({
    params: { id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const projectDir = path.resolve(`public/Infraestructura-Vial/${id}`);
  const projectDetails = {
    "1": {
      title: "Mejoramiento de V\xEDas Urbanas en Solita, Caquet\xE1",
      description: "Este proyecto se centr\xF3 en la renovaci\xF3n de la infraestructura vial del municipio de Solita, mediante la construcci\xF3n de pavimento hidr\xE1ulico de alta durabilidad y la ejecuci\xF3n de obras complementarias esenciales para garantizar la seguridad y mejorar el flujo vehicular en la zona."
    },
    "2": {
      title: "Pavimentaci\xF3n en Solita y Valpara\xEDso, Caquet\xE1",
      description: "Se llev\xF3 a cabo el mejoramiento de v\xEDas urbanas clave en los municipios de Solita y Valpara\xEDso. El proyecto incluy\xF3 la pavimentaci\xF3n con concreto hidr\xE1ulico y la realizaci\xF3n de obras complementarias para modernizar la infraestructura y beneficiar a ambas comunidades."
    },
    "3": {
      title: "Pavimentaci\xF3n en C.P. Versalles, Albania",
      description: "El proyecto consisti\xF3 en el mejoramiento de una v\xEDa urbana principal en el centro poblado de Versalles, municipio de Albania, utilizando pavimentaci\xF3n de concreto r\xEDgido para asegurar una soluci\xF3n vial de larga duraci\xF3n y bajo mantenimiento, mejorando la calidad de vida de los residentes."
    }
  };
  const details = projectDetails[id] || { title: "Proyecto Vial", description: "Descripci\xF3n no disponible." };
  const { title, description } = details;
  const imageFiles = fs.readdirSync(projectDir).filter((file) => file.endsWith(".webp")).map((file) => ({
    src: `/Infraestructura-Vial/${id}/${file}`,
    caption: `Imagen de ${title}`
    // Placeholder caption
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <a href="/vias" class="text-primary hover:underline mb-8 inline-block">&larr; Volver a Infraestructura Vial</a> <h1 class="text-4xl font-bold text-text-dark mb-4">${title}</h1> <p class="text-lg text-text-dark mb-12 leading-relaxed">${description}</p> <h2 class="text-3xl font-bold text-center mb-8 text-text-dark">Galería de Imágenes</h2> ${renderComponent($$result2, "LightboxGallery", $$LightboxGallery, { "images": imageFiles, "projectTitle": title })} </div> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias/[id].astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias/[id].astro";
const $$url = "/vias/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
