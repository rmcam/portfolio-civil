/* empty css                                       */
import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_PvF5H369.mjs';
export { renderers } from '../renderers.mjs';

const $$Topografia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Topograf\xEDa", "description": "Precisi\xF3n que transforma planos en realidad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-64 flex items-center justify-center text-center p-8" style="background-image: url('/Topografía/topografia.webp'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-black bg-opacity-50"></div> <div class="relative z-10"> <h1 class="text-4xl md:text-6xl font-bold text-text-light mb-4 tracking-tight">
Topografía
</h1> <p class="text-lg md:text-xl text-text-light">
Precisión que transforma planos en realidad.
</p> </div> </section> <div class="container mx-auto px-4 py-16"> <!-- Sección de Servicios Clave con Iconos --> <section class="py-16"> <h3 class="text-3xl font-bold text-center mb-12 text-text-dark">Nuestros Servicios de Topografía</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Servicio 1 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Levantamientos Planimétricos y Altimétricos</h4> </div> <!-- Servicio 2 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Georreferenciación GPS</h4> </div> <!-- Servicio 3 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Replanteo de Obras</h4> </div> <!-- Servicio 4 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Cálculo de Volúmenes</h4> </div> <!-- Servicio 5 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Elaboración de Planos</h4> </div> <!-- Servicio 6 --> <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"> <h4 class="text-xl font-semibold text-primary mb-2">Modelos Digitales de Terreno</h4> </div> </div> <div class="text-center mt-16"> <h4 class="text-2xl text-text-dark mb-4 font-bold">La precisión es la base del éxito.</h4> <p class="text-lg text-text-medium mb-8 max-w-3xl mx-auto">
Inicie su proyecto con datos topográficos exactos. No deje nada al azar y transforme el terreno en oportunidades.
</p> <a href="/contacto" class="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-secondary transition duration-300 text-lg">
Solicite su Levantamiento
</a> </div> </section> </div> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/topografia.astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/topografia.astro";
const $$url = "/topografia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Topografia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
