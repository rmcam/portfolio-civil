import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as createAstro, s as spreadAttributes, i as renderComponent, f as addAttribute, n as renderHead, j as renderSlot, k as renderScript } from './astro/server_Bi7tt4P9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
import { Redis } from '@upstash/redis';

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Mail.astro", void 0);

const $$Astro$3 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$2 = createAstro();
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#facebook__a)"${spreadAttributes(Astro2.props)}><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="facebook__a"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Facebook.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 text-gray-700 py-8 px-4"> <div class="container mx-auto text-center"> <div class="mb-6"> <h3 class="text-2xl font-bold text-primary mb-4">Contáctanos</h3> <div class="flex justify-center items-center space-x-6"> <a href="mailto:tu-email@example.com" class="flex items-center hover:text-primary transition"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-6 h-6 mr-2" })} <span>guillermoquintero@gmail.com</span> </a> <!-- <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-primary transition">
          <WhatsApp class="w-6 h-6 mr-2" />
          <span>+1 (234) 567-890</span>
        </a> --> </div> </div> <div class="flex justify-center space-x-6 mb-6"> <a href="https://linkedin.com/in/quillermoquintero/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition"> ${renderComponent($$result, "LinkedIn", $$LinkedIn, { "class": "w-8 h-8" })} </a> <a href="https://facebook.com/quillermoquintero" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition"> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "w-8 h-8" })} </a> </div> <div class="border-t border-gray-300 pt-6"> <p class="text-sm">
&copy; ${currentYear} Ingeniero Civíl Guillermo Quintero. Todos los derechos reservados.
</p> <div class="text-sm mt-2"> <a href="/politica-privacidad" class="hover:underline">Política de Privacidad</a> <!-- <span class="mx-2">|</span>
        <a href="/terminos-servicio" class="hover:underline">Términos de Servicio</a> --> </div> </div> </div> </footer>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/Footer.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path> <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path> </svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Home.astro", void 0);

const $$BriefCase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/BriefCase.astro", void 0);

const $$Folder = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Folder.astro", void 0);

const $$User = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/User.astro", void 0);

const $$AddressBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-address-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path><path d="M10 16h6"></path><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8h3"></path><path d="M4 12h3"></path><path d="M4 16h3"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/AddressBook.astro", void 0);

const $$FileSearch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5"></path><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path><path d="M18.5 19.5l2.5 2.5"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/FileSearch.astro", void 0);

const $$Building = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M9 8l1 0"></path><path d="M9 12l1 0"></path><path d="M9 16l1 0"></path><path d="M14 8l1 0"></path><path d="M14 12l1 0"></path><path d="M14 16l1 0"></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Building.astro", void 0);

const $$Road = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-road"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 19l4 -14"></path><path d="M16 5l4 14"></path><path d="M12 8v-2"></path><path d="M12 13v-2"></path><path d="M12 18v-2"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Road.astro", void 0);

const $$WaterDrop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-droplet-half-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.905 2.923l.098 .135l4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024 .326c.007 .047 .01 .094 .01 .143l-.002 .06c.056 2.3 -.944 4.582 -2.87 6.14c-2.969 2.402 -7.286 2.402 -10.255 0c-1.904 -1.54 -2.904 -3.787 -2.865 -6.071a1.052 1.052 0 0 1 .013 -.333a7.66 7.66 0 0 1 .913 -3.176l.172 -.302l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686c1.055 -.66 2.446 -.413 3.197 .55zm-2.06 1.107l-.077 .038l-.041 .03l-.037 .036l-.033 .042l-4.863 7.214a5.607 5.607 0 0 0 -.651 1.61h11.723a5.444 5.444 0 0 0 -.49 -1.313l-.141 -.251l-4.891 -7.261a.428 .428 0 0 0 -.5 -.145z"></path></svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/WaterDrop.astro", void 0);

const $$Astro$1 = createAstro();
const $$Camera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Camera;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path> <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> </svg>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/icons/Camera.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header id="header" class="fixed top-0 z-50 w-full bg-white shadow-lg" data-astro-cid-3ef6ksr2> <nav class="flex items-center justify-between w-full border-b border-background-light" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" data-astro-cid-3ef6ksr2> <img src="/Logo/LOGO GUILLERMO-011.webp" alt="Ingeniero Civil Guillermo Quintero" class="h-24 w-auto lg:h-24 " data-astro-cid-3ef6ksr2> </a> <!-- Desktop Navigation Links --> <div id="nav-links" class="hidden sm:flex gap-6" data-astro-cid-3ef6ksr2> <a class="px-3 py-2 transition text-text-dark hover:text-primary flex items-center gap-2" href="/" data-astro-cid-3ef6ksr2> ', '\nInicio\n</a> <div class="relative group" data-astro-cid-3ef6ksr2> <button id="services-dropdown-button" class="px-3 py-4 transition text-text-dark hover:text-primary flex items-center gap-2" aria-expanded="false" aria-haspopup="true" data-astro-cid-3ef6ksr2> ', '\nServicios\n<svg class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <div id="services-dropdown-menu" class="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50" data-astro-cid-3ef6ksr2> <a class="block px-4 py-2 text-text-dark hover:bg-background-light flex items-center gap-2" href="/consultoria" data-astro-cid-3ef6ksr2> ', '\nConsultor\xEDa\n</a> <a class="block px-4 py-2 text-text-dark hover:bg-background-light flex items-center gap-2" href="/estructuras" data-astro-cid-3ef6ksr2> ', '\nEstructuras\n</a> <a class="block px-4 py-2 text-text-dark hover:bg-background-light flex items-center gap-2" href="/vias" data-astro-cid-3ef6ksr2> ', '\nInfraestructura Vial\n</a> <a class="block px-4 py-2 text-text-dark hover:bg-background-light flex items-center gap-2" href="/hidraulica" data-astro-cid-3ef6ksr2> ', '\nRecursos H\xEDdricos\n</a> <a class="block px-4 py-2 text-text-dark hover:bg-background-light flex items-center gap-2" href="/topografia" data-astro-cid-3ef6ksr2> ', '\nTopograf\xEDa\n</a> </div> </div> <a class="px-3 py-2 transition text-text-dark hover:text-primary flex items-center gap-2" href="/#proyectos" data-astro-cid-3ef6ksr2> ', '\nProyectos\n</a> <a class="px-3 py-2 transition text-text-dark hover:text-primary flex items-center gap-2" href="/#sobre-mi" data-astro-cid-3ef6ksr2> ', '\nSobre Mi\n</a> <a class="px-3 py-2 transition text-text-dark hover:text-primary flex items-center gap-2" href="/contacto" data-astro-cid-3ef6ksr2> ', '\nContacto\n</a> </div> <!-- Social Icons --> <div class="hidden sm:flex items-center gap-4" data-astro-cid-3ef6ksr2> <a href="https://linkedin.com/in/rmcam/" target="_blank" aria-label="LinkedIn" class="text-text-medium hover:text-secondary transition" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-astro-cid-3ef6ksr2></path> <path d="M8 11l0 5" data-astro-cid-3ef6ksr2></path> <path d="M8 8l0 .01" data-astro-cid-3ef6ksr2></path> <path d="M12 16l0 -5" data-astro-cid-3ef6ksr2></path> <path d="M16 16v-3a2 2 0 0 0 -4 0" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://facebook.com/rmcam" target="_blank" aria-label="Facebook" class="text-text-medium hover:text-secondary transition" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://wa.me/+573001234567" target="_blank" aria-label="WhatsApp" class="text-text-medium hover:text-secondary transition" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-3ef6ksr2></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-3ef6ksr2></path> </svg> </a> </div> <!-- Hamburger Icon --> <div class="md:hidden flex items-center" data-astro-cid-3ef6ksr2> <button id="hamburger-button" class="text-text-dark focus:outline-none" aria-label="Abrir men\xFA" aria-controls="mobile-menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </nav> <!-- Mobile Menu (slides from side) --> <div id="mobile-menu" class="fixed inset-y-0 left-0 transform translate-x-full bg-white/90 backdrop-blur-lg w-64 p-6 transition-transform duration-300 ease-in-out z-40" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" data-astro-cid-3ef6ksr2> <h2 id="mobile-menu-title" class="sr-only" data-astro-cid-3ef6ksr2>Men\xFA de Navegaci\xF3n M\xF3vil</h2> <div class="flex justify-end mb-6" data-astro-cid-3ef6ksr2> <button id="close-menu-button" class="text-text-dark focus:outline-none" aria-label="Cerrar men\xFA" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <nav class="flex flex-col gap-6" data-astro-cid-3ef6ksr2> <a class="text-text-dark hover:text-primary transition px-3 py-2 flex items-center gap-2" href="/" data-astro-cid-3ef6ksr2> ', '\nInicio\n</a> <div class="relative" data-astro-cid-3ef6ksr2> <button id="mobile-services-dropdown-button" class="text-text-dark hover:text-primary transition px-3 py-2 w-full text-left flex items-center gap-2" aria-expanded="false" data-astro-cid-3ef6ksr2> ', '\nServicios\n<svg class="ml-1 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <div id="mobile-services-dropdown-menu" class="hidden flex-col pl-4" data-astro-cid-3ef6ksr2> <a class="block w-full text-text-dark hover:bg-background-light transition px-3 py-2 flex items-center gap-2" href="/consultoria" data-astro-cid-3ef6ksr2> ', '\nConsultor\xEDa\n</a> <a class="block w-full text-text-dark hover:bg-background-light transition px-3 py-2 flex items-center gap-2" href="/estructuras" data-astro-cid-3ef6ksr2> ', '\nEstructuras\n</a> <a class="block w-full text-text-dark hover:bg-background-light transition px-3 py-2 flex items-center gap-2" href="/vias" data-astro-cid-3ef6ksr2> ', '\nInfraestructura Vial\n</a> <a class="block w-full text-text-dark hover:bg-background-light transition px-3 py-2 flex items-center gap-2" href="/hidraulica" data-astro-cid-3ef6ksr2> ', '\nRecursos H\xEDdricos\n</a> <a class="block w-full text-text-dark hover:bg-background-light transition px-3 py-2 flex items-center gap-2" href="/topografia" data-astro-cid-3ef6ksr2> ', '\nTopograf\xEDa\n</a> </div> </div> <a class="text-text-dark hover:text-primary transition px-3 py-2 flex items-center gap-2" href="/#proyectos" data-astro-cid-3ef6ksr2> ', '\nProyectos\n</a> <a class="text-text-dark hover:text-primary transition px-3 py-2 flex items-center gap-2" href="/#sobre-mi" data-astro-cid-3ef6ksr2> ', '\nSobre Mi\n</a> <a class="text-text-dark hover:text-primary transition px-3 py-2 flex items-center gap-2" href="/contacto" data-astro-cid-3ef6ksr2> ', `
Contacto
</a> </nav> </div> <!-- Overlay for mobile menu --> <div id="mobile-menu-overlay" class="fixed inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out z-30 pointer-events-none" data-astro-cid-3ef6ksr2></div> </header> <script>
  const header = document.getElementById('header');
  const navLinks = document.getElementById('nav-links'); // Desktop nav links
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // New dropdown elements
  const servicesDropdownButton = document.getElementById('services-dropdown-button');
  const servicesDropdownMenu = document.getElementById('services-dropdown-menu');
  const mobileServicesDropdownButton = document.getElementById('mobile-services-dropdown-button');
  const mobileServicesDropdownMenu = document.getElementById('mobile-services-dropdown-menu');

  if (header) {
    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
      if (mobileMenu && hamburgerButton && mobileMenuOverlay) {
        const isHidden = mobileMenu.classList.toggle('translate-x-full'); // Toggle the class that positions it off-screen
        hamburgerButton.setAttribute('aria-expanded', (!isHidden).toString());

        // Toggle overlay visibility and body scroll
        if (isHidden) {
          mobileMenuOverlay.classList.remove('opacity-60', 'pointer-events-auto');
          mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
          document.body.style.overflow = ''; // Restore scroll
        } else {
          mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenuOverlay.classList.add('opacity-60', 'pointer-events-auto');
          document.body.style.overflow = 'hidden'; // Prevent scroll
        }
      }
    };

    // Function to toggle desktop services dropdown
    const toggleServicesDropdown = () => {
      if (servicesDropdownMenu && servicesDropdownButton) {
        const isHidden = servicesDropdownMenu.classList.toggle('hidden');
        servicesDropdownButton.setAttribute('aria-expanded', (!isHidden).toString());
      }
    };

    // Function to toggle mobile services dropdown
    const toggleMobileServicesDropdown = () => {
      if (mobileServicesDropdownMenu && mobileServicesDropdownButton) {
        const isHidden = mobileServicesDropdownMenu.classList.toggle('hidden');
        mobileServicesDropdownButton.setAttribute('aria-expanded', (!isHidden).toString());
        // Rotate SVG icon
        const svg = mobileServicesDropdownButton.querySelector('svg');
        if (svg) {
          if (isHidden) {
            svg.classList.remove('rotate-180');
          } else {
            svg.classList.add('rotate-180');
          }
        }
      }
    };

    // Helper function to update link status
    const updateLinkStatus = (linkElement, isActive) => {
      if (linkElement) {
        if (isActive) {
          linkElement.classList.add('active');
        } else {
          linkElement.classList.remove('active');
        }
      }
    };

    // Hamburger menu logic
    if (hamburgerButton && mobileMenu) {
      hamburgerButton.addEventListener('click', toggleMobileMenu);
    }

    // Close menu button logic
    if (closeMenuButton && mobileMenu) {
      closeMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Overlay click logic
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Desktop services dropdown logic (hover)
    if (servicesDropdownButton && servicesDropdownMenu) {
      let timeout;
      const showDropdown = () => {
        clearTimeout(timeout);
        servicesDropdownMenu.classList.remove('hidden');
        servicesDropdownButton.setAttribute('aria-expanded', 'true');
      };
      const hideDropdown = () => {
        timeout = setTimeout(() => {
          servicesDropdownMenu.classList.add('hidden');
          servicesDropdownButton.setAttribute('aria-expanded', 'false');
        }, 200); // Peque\xF1o retraso para permitir el movimiento del rat\xF3n
      };

      servicesDropdownButton.addEventListener('mouseenter', showDropdown);
      servicesDropdownButton.addEventListener('mouseleave', hideDropdown);
      servicesDropdownMenu.addEventListener('mouseenter', showDropdown);
      servicesDropdownMenu.addEventListener('mouseleave', hideDropdown);
    }

    // Mobile services dropdown logic (click)
    if (mobileServicesDropdownButton) {
      mobileServicesDropdownButton.addEventListener('click', toggleMobileServicesDropdown);
    }

    // Close mobile menu when clicking outside of it (optional, but good UX)
    // This part is now handled by the overlay click listener, but keeping for robustness if needed
    document.addEventListener('click', (event) => {
      if (mobileMenu && !mobileMenu.contains(event.target) && !hamburgerButton.contains(event.target) && !mobileMenu.classList.contains('translate-x-full') && !mobileMenuOverlay.contains(event.target)) {
        toggleMobileMenu();
      }
    });

    // Close mobile menu when a navigation link is clicked
    const mobileNavLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
          toggleMobileMenu();
        }
      });
    });

    // Highlight active link
    const highlightActiveLink = () => {
      const currentPath = window.location.pathname;
      const desktopLinks = navLinks ? navLinks.querySelectorAll('a') : [];
      const allLinks = [...desktopLinks, ...mobileNavLinks];
      const servicePaths = ['/vias', '/topografia', '/hidraulica', '/estructuras', '/consultoria'];
      const isServicePageActive = servicePaths.some(path => currentPath.startsWith(path));

      updateLinkStatus(servicesDropdownButton, isServicePageActive);
      updateLinkStatus(mobileServicesDropdownButton, isServicePageActive);

      allLinks.forEach(link => {
        updateLinkStatus(link, link.getAttribute('href') === currentPath);
      });
    };

    // Call on load and on navigation (e.g., for SPA-like behavior if applicable)
    highlightActiveLink();
    window.addEventListener('popstate', highlightActiveLink); // For browser back/forward buttons
  }
<\/script> `])), maybeRenderHead(), renderComponent($$result, "Home", $$Home, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "BriefCase", $$BriefCase, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "FileSearch", $$FileSearch, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Building", $$Building, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Road", $$Road, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "WaterDrop", $$WaterDrop, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Camera", $$Camera, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Folder", $$Folder, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "User", $$User, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "AddressBook", $$AddressBook, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Home", $$Home, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "BriefCase", $$BriefCase, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "FileSearch", $$FileSearch, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Building", $$Building, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Road", $$Road, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "WaterDrop", $$WaterDrop, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Camera", $$Camera, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Folder", $$Folder, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "User", $$User, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "AddressBook", $$AddressBook, { "class": "w-5 h-5", "data-astro-cid-3ef6ksr2": true }));
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/Header.astro", void 0);

const $$ViewCounter = createComponent(async ($$result, $$props, $$slots) => {
  const redis = new Redis({
    url: "https://alert-hedgehog-20838.upstash.io",
    token: "AVFmAAIncDE5Yjg3MWE2OTFhYmY0ZTFiYjY0YjljMWY0NTVjZmIyNHAxMjA4Mzg"
  });
  const views = await redis.incr("views");
  return renderTemplate`${maybeRenderHead()}<div class="text-center text-sm">
Visitas: ${views} </div>`;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/components/ViewCounter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative text-black"> ${renderComponent($$result, "Header", $$Header, {})} <main class="pt-24 pb-5">  ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "ViewCounter", $$ViewCounter, {})} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/rmcam/Documents/portfolio-civil/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/rmcam/Documents/portfolio-civil/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$BriefCase as a, $$Mail as b, $$LinkedIn as c, $$Facebook as d, $$Road as e, $$FileSearch as f, $$Building as g, $$Camera as h, $$WaterDrop as i, $$Folder as j, $$User as k };
