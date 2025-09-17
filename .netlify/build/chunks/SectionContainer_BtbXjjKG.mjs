import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, j as renderSlot, r as renderTemplate } from './astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id, fullWidth } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto ${fullWidth ? "" : "container lg:w-[1200px] lg:max-w-4xl md:max-w-2xl"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/SectionContainer.astro", void 0);

export { $$SectionContainer as $ };
