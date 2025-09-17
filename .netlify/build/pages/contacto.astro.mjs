/* empty css                                       */
import { c as createComponent, d as createAstro, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, j as renderSlot, r as renderTemplate, i as renderComponent, k as renderScript } from '../chunks/astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Mail, c as $$LinkedIn, d as $$Facebook } from '../chunks/Layout_PvF5H369.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)}${addAttribute(`
    bg-white/5 
    border border-white/10 rounded
    flex justify-center items-center gap-x-2 
    py-1 px-2 lg:py-2 lg:px-4 
    text-xs md:text-base
    transition
    hover:scale-105 hover:bg-white/10
    `, "class")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/SocialPill.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Ingeniero Civil Guillermo Quintero", "description": "Ponte en contacto con Guillermo Quintero para consultas y colaboraciones en proyectos de ingenier\xEDa civil." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-12"> <section class="max-w-screen-xl mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-8">Contacto</h1> <p class="text-lg text-center text-gray-700 mb-12">
Para cualquier consulta o colaboración, no dude en ponerse en contacto.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <!-- Left Column: Form and Contact Info --> <div class="flex flex-col gap-8"> <!-- Contact Form --> <form id="contact-form" action="https://formspree.io/f/xjkegkpy" method="POST" class="bg-white p-6 rounded-lg shadow-md space-y-6"> <h2 class="text-2xl font-bold text-gray-800 mb-4">Envíame un Mensaje</h2> <div> <label for="name" class="block text-red-700 text-sm font-bold mb-2">Nombre Completo:</label> <div class="relative"> <input type="text" id="name" name="name" class="bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none peer" placeholder="Tu nombre completo" required> <span id="name-checkmark" class="checkmark absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-500 hidden"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </span> </div> </div> <div> <label for="email" class="block text-red-700 text-sm font-bold mb-2">Email:</label> <div class="relative"> <input type="email" id="email" name="email" class="bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none peer" placeholder="tu@email.com" required> <span id="email-checkmark" class="checkmark absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-500 hidden"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </span> </div> </div> <div> <label for="subject" class="block text-red-700 text-sm font-bold mb-2">Asunto:</label> <div class="relative"> <input type="text" id="subject" name="subject" class="bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none peer" placeholder="Asunto del mensaje" required> <span id="subject-checkmark" class="checkmark absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-500 hidden"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </span> </div> </div> <div> <label for="message" class="block text-red-700 text-sm font-bold mb-2">Mensaje:</label> <div class="relative"> <textarea id="message" name="message" rows="5" class="bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none peer" placeholder="Escribe tu mensaje aquí..." required></textarea> <span id="message-checkmark" class="checkmark absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-500 hidden"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </span> </div> </div> <div> <button type="submit" class="w-full bg-gray-100 hover:bg-gray-200 text-red-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
Enviar Mensaje
</button> </div> </form> </div> <!-- Right Column: Descriptive Text & Contact Info --> <div class="flex flex-col gap-8"> <div class="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center"> <h2 class="text-2xl font-bold mb-4 text-gray-800">¿Cómo puedo ayudarte?</h2> <p class="text-gray-700 mb-4">
Si tienes un proyecto en mente o necesitas asesoramiento en ingeniería civil, no dudes en contactarme. Estoy aquí para ofrecer soluciones innovadoras y eficientes.
</p> <p class="text-gray-700">
Ya sea que necesites consultoría especializada, diseño de estructuras, soluciones hidráulicas, topografía precisa o planificación de vías, puedo aportar mi experiencia para alcanzar tus objetivos.
</p> </div> <div class="bg-gray-100 p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-bold mb-4 text-gray-800">Información de Contacto</h2> <div class="space-y-4"> <p class="flex items-center gap-3"> ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-6 text-red-700" })} <a href="mailto:guillermo.quintero@email.com" class="text-gray-700 hover:text-red-700">guillermo.quintero@email.com</a> </p> <!-- <p class="flex items-center gap-3">
                <WhatsAppIcon class="size-6 text-red-700" />
                <a href="https://wa.me/+573001234567" class="text-gray-700 hover:text-red-700">+57 300 123 4567</a>
              </p> --> <p class="text-gray-700"> <strong>Horario de Atención:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM
</p> </div> <div class="mt-6 flex space-x-4"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/rmcam/", "target": "_blank", "aria-label": "LinkedIn", "class": "shadow-lg transition-transform duration-200 hover:scale-110" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkedInIcon", $$LinkedIn, { "class": "size-8" })} ` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://facebook.com/rmcam", "target": "_blank", "aria-label": "Facebook", "class": "shadow-lg transition-transform duration-200 hover:scale-110" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FacebookIcon", $$Facebook, { "class": "size-8" })} ` })} </div> </div> </div> </div> <p id="success-message" class="text-green-500 font-bold text-center mt-4 hidden">¡Mensaje enviado con éxito!</p> </section> <!-- <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Nuestra Ubicación</h2>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.945632483934!2d-74.08175!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a0f9a51add%3A0x58c3f7d733c6a6a!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1620156334532!5m2!1sen!2sco"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section> --> ${renderScript($$result2, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")} </main> ` })}`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
