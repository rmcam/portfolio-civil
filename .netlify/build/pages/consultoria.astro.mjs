/* empty css                                       */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$BriefCase } from '../chunks/Layout_PvF5H369.mjs';
import 'clsx';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_BtbXjjKG.mjs';
export { renderers } from '../renderers.mjs';

const $$CheckIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/CheckIcon.astro", void 0);

const $$Consultoria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Consultor\xEDa en Ingenier\xEDa Civil - Soluciones Integrales para su Proyecto", "description": "Ofrecemos consultor\xEDa experta en ingenier\xEDa civil, desde la planificaci\xF3n y dise\xF1o hasta la gerencia y supervisi\xF3n de obras. Asegure el \xE9xito de su proyecto con nuestra experiencia." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-80 flex items-center justify-center text-center p-8" style="background-image: url('/Consultoria/consultoria.webp'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-black bg-opacity-60"></div> <div class="relative z-10"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
Consultoría de Alto Nivel
</h1> <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
Transformamos sus ideas en proyectos exitosos, garantizando calidad, eficiencia y cumplimiento normativo en cada etapa.
</p> </div> </section> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 animate-on-scroll" }, { "default": ($$result3) => renderTemplate`  <div class="text-center mb-16"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Su Aliado Estratégico en Construcción</h2> <p class="text-lg text-gray-600 max-w-3xl mx-auto">
Más que consultores, somos sus socios en el éxito. Nuestra metodología se centra en entender sus necesidades para ofrecer soluciones a medida que optimizan recursos y superan expectativas.
</p> </div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"> <div class="flex flex-col items-center"> <div class="bg-red-100 p-4 rounded-full mb-4"> ${renderComponent($$result3, "BriefCase", $$BriefCase, { "class": "w-12 h-12 text-red-600" })} </div> <h3 class="text-xl font-semibold mb-2 text-gray-800">Experiencia Comprobada</h3> <p class="text-gray-600">Años de experiencia en proyectos de diversa escala y complejidad nos respaldan.</p> </div> <div class="flex flex-col items-center"> <div class="bg-green-100 p-4 rounded-full mb-4"> ${renderComponent($$result3, "CheckIcon", $$CheckIcon, { "class": "w-12 h-12 text-green-600" })} </div> <h3 class="text-xl font-semibold mb-2 text-gray-800">Calidad y Normatividad</h3> <p class="text-gray-600">Compromiso total con los más altos estándares de calidad y el cumplimiento de la normativa vigente.</p> </div> <div class="flex flex-col items-center"> <div class="bg-purple-100 p-4 rounded-full mb-4"> ${renderComponent($$result3, "BriefCase", $$BriefCase, { "class": "w-12 h-12 text-purple-600" })} </div> <h3 class="text-xl font-semibold mb-2 text-gray-800">Gestión Integral</h3> <p class="text-gray-600">Nos encargamos de todo el ciclo de vida del proyecto, para que usted no tenga que preocuparse por nada.</p> </div> </div> ` })}  <section class="py-16  "> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "animate-on-scroll" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios de Consultoría</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Servicio 1 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll"> <h4 class="text-xl font-semibold mb-2 text-red-600">Estudios y Diseños</h4> <p class="text-gray-600">Realizamos estudios de factibilidad, diseños estructurales, hidráulicos y viales con precisión y tecnología de punta.</p> </div> <!-- Servicio 2 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll" style="transition-delay: 100ms;"> <h4 class="text-xl font-semibold mb-2 text-red-600">Interventoría y Supervisión</h4> <p class="text-gray-600">Garantizamos que su obra se ejecute según los planos, especificaciones y plazos acordados, controlando costos y calidad.</p> </div> <!-- Servicio 3 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll" style="transition-delay: 200ms;"> <h4 class="text-xl font-semibold mb-2 text-red-600">Gerencia de Proyectos</h4> <p class="text-gray-600">Lideramos la planificación, ejecución y cierre de su proyecto, asegurando una gestión eficiente de todos los recursos.</p> </div> <!-- Servicio 4 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"> <h4 class="text-xl font-semibold mb-2 text-red-600">Consultoría Especializada</h4> <p class="text-gray-600">Ofrecemos asesoría en patología estructural, geotecnia, y normatividad para resolver desafíos complejos.</p> </div> <!-- Servicio 5 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"> <h4 class="text-xl font-semibold mb-2 text-red-600">Presupuestos y Licitaciones</h4> <p class="text-gray-600">Elaboramos presupuestos detallados y preparamos la documentación técnica para procesos de licitación.</p> </div> <!-- Servicio 6 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"> <h4 class="text-xl font-semibold mb-2 text-red-600">Topografía y Geodesia</h4> <p class="text-gray-600">Servicios topográficos de alta precisión para todas las fases de su proyecto, desde el levantamiento inicial hasta el control de obra.</p> </div> </div> ` })} </section>  <section class=" text-black"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 text-center" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold mb-4">¿Listo para Iniciar su Próximo Proyecto?</h2> <p class="text-lg mb-8 max-w-2xl mx-auto">
Permítanos ser el pilar sobre el que se construya su éxito. Contáctenos hoy para una consulta sin compromiso.
</p> <a href="/contacto" class="bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
Hablemos de su Proyecto
</a> ` })} </section> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/consultoria.astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/consultoria.astro";
const $$url = "/consultoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consultoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
