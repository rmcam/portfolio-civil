import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, Icon, class: className, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute([
    "group bg-white rounded-lg overflow-hidden shadow-md border border-background-light transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-text-dark",
    className
  ], "class:list")}${addAttribute(style, "style")}> <a${addAttribute(href, "href")} class="block h-full"> <div class="relative h-48 bg-cover bg-center"${addAttribute(Astro2.props.imageUrl ? `background-image: url(${Astro2.props.imageUrl})` : "", "style")}> ${Icon && renderTemplate`<div class="absolute inset-0 flex items-center justify-center"> <div class="w-20 h-20 bg-background-light/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"> ${renderComponent($$result, "Icon", Icon, { "class": "size-10 text-secondary transition-colors duration-300 group-hover:text-primary" })} </div> </div>`} </div> <div class="p-5"> <h2 class="text-xl font-bold tracking-tight text-red-600 mb-2 group-hover:text-primary transition-colors duration-300"> ${title} </h2> <p class="mb-3 font-normal text-text-medium transition-colors duration-300"> ${body} </p> <div class="mt-4"> <button class="px-4 py-2 bg-primary text-white rounded-md transition-all duration-300 ease-in-out hover:bg-secondary hover:scale-105 active:scale-95 active:bg-primary-dark active:shadow-inner">
Ver más
</button> </div> </div> </a> </li>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/Card.astro", void 0);

const $$RoadSign = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-road-sign transition-transform duration-300 ease-in-out transform hover:scale-110"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path><path d="M9 14v-2c0 -.59 .414 -1 1 -1h5"></path><path d="M13 9l2 2l-2 2"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/RoadSign.astro", void 0);

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tools transition-transform duration-300 ease-in-out transform hover:scale-110"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path><path d="M14.5 5.5l4 4"></path><path d="M12 8l-5 -5l-4 4l5 5"></path><path d="M7 8l-1.5 1.5"></path><path d="M16 12l5 5l-4 4l-5 -5"></path><path d="M16 17l-1.5 1.5"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Tools.astro", void 0);

export { $$Card as $, $$Tools as a, $$RoadSign as b };
