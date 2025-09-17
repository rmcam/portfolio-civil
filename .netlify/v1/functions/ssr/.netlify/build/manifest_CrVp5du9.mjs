import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_Bi7tt4P9.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/rmcam/Documents/portfolio-civil/","cacheDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/node_modules/.astro/","outDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/dist/","srcDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/src/","publicDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/public/","buildClientDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/dist/","buildServerDir":"file:///C:/Users/rmcam/Documents/portfolio-civil/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.2_@netlify+blobs_3a67061631fd49a0d5f0c40f141bb37f/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"}],"routeData":{"route":"/consultoria","isIndex":false,"type":"page","pattern":"^\\/consultoria\\/?$","segments":[[{"content":"consultoria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consultoria.astro","pathname":"/consultoria","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"},{"type":"inline","content":"#lightbox-img-container[data-astro-cid-kf5b72pp]{overflow:hidden;cursor:grab}#lightbox-img[data-astro-cid-kf5b72pp]{transition:transform .2s ease-out;transform-origin:center center}#lightbox-img[data-astro-cid-kf5b72pp].panning{cursor:grabbing}\n"}],"routeData":{"route":"/estructuras","isIndex":false,"type":"page","pattern":"^\\/estructuras\\/?$","segments":[[{"content":"estructuras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/estructuras.astro","pathname":"/estructuras","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"},{"type":"inline","content":"#lightbox-img-container[data-astro-cid-kf5b72pp]{overflow:hidden;cursor:grab}#lightbox-img[data-astro-cid-kf5b72pp]{transition:transform .2s ease-out;transform-origin:center center}#lightbox-img[data-astro-cid-kf5b72pp].panning{cursor:grabbing}\n"}],"routeData":{"route":"/hidraulica","isIndex":false,"type":"page","pattern":"^\\/hidraulica\\/?$","segments":[[{"content":"hidraulica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hidraulica.astro","pathname":"/hidraulica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"}],"routeData":{"route":"/topografia","isIndex":false,"type":"page","pattern":"^\\/topografia\\/?$","segments":[[{"content":"topografia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/topografia.astro","pathname":"/topografia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"},{"type":"inline","content":"#lightbox-img-container[data-astro-cid-kf5b72pp]{overflow:hidden;cursor:grab}#lightbox-img[data-astro-cid-kf5b72pp]{transition:transform .2s ease-out;transform-origin:center center}#lightbox-img[data-astro-cid-kf5b72pp].panning{cursor:grabbing}\n"}],"routeData":{"route":"/vias/[id]","isIndex":false,"type":"page","pattern":"^\\/vias\\/([^/]+?)\\/?$","segments":[[{"content":"vias","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/vias/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"}],"routeData":{"route":"/vias","isIndex":false,"type":"page","pattern":"^\\/vias\\/?$","segments":[[{"content":"vias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vias.astro","pathname":"/vias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultoria.vH14sCiF.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/rmcam/Documents/portfolio-civil/src/pages/consultoria.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/estructuras.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/hidraulica.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/topografia.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias.astro",{"propagation":"none","containsHead":true}],["C:/Users/rmcam/Documents/portfolio-civil/src/pages/vias/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.2_@netlify+blobs_3a67061631fd49a0d5f0c40f141bb37f/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/consultoria@_@astro":"pages/consultoria.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/estructuras@_@astro":"pages/estructuras.astro.mjs","\u0000@astro-page:src/pages/hidraulica@_@astro":"pages/hidraulica.astro.mjs","\u0000@astro-page:src/pages/topografia@_@astro":"pages/topografia.astro.mjs","\u0000@astro-page:src/pages/vias/[id]@_@astro":"pages/vias/_id_.astro.mjs","\u0000@astro-page:src/pages/vias@_@astro":"pages/vias.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CrVp5du9.mjs","C:/Users/rmcam/Documents/portfolio-civil/node_modules/.pnpm/unstorage@1.16.1_@netlify+b_57a285950adeee05778ac4f0ea42eadd/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.Ky5N0Iao.js","C:/Users/rmcam/Documents/portfolio-civil/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DA5LLwa4.js","C:/Users/rmcam/Documents/portfolio-civil/src/components/ProjectCarousel.astro?astro&type=script&index=0&lang.ts":"_astro/ProjectCarousel.astro_astro_type_script_index_0_lang.Klr6PTDB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/rmcam/Documents/portfolio-civil/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"contact-form\"),r=document.getElementById(\"success-message\"),i=document.getElementById(\"name\"),n=document.getElementById(\"email\"),a=document.getElementById(\"subject\"),l=document.getElementById(\"message\"),t=c?c.querySelector('button[type=\"submit\"]'):null,g=document.getElementById(\"name-checkmark\"),f=document.getElementById(\"email-checkmark\"),k=document.getElementById(\"subject-checkmark\"),h=document.getElementById(\"message-checkmark\");function m(){if(!i||!n||!a||!l||!t)return!1;let e=!0;const s=i.value.trim()!==\"\";g&&g.classList.toggle(\"hidden\",!s),s?e=e&&!0:e=!1;const d=n.value.trim()!==\"\"&&n.validity.valid;f&&f.classList.toggle(\"hidden\",!d),d?e=e&&!0:e=!1;const u=a.value.trim()!==\"\";k&&k.classList.toggle(\"hidden\",!u),u?e=e&&!0:e=!1;const o=l.value.trim()!==\"\";return h&&h.classList.toggle(\"hidden\",!o),o?e=e&&!0:e=!1,e}t&&(t.disabled=!m());const E=[i,n,a,l];E.forEach(e=>{e&&e.addEventListener(\"input\",()=>{const s=m();t&&(t.disabled=!s)})});c&&r&&c.addEventListener(\"submit\",function(e){if(!m()){e.preventDefault();return}setTimeout(()=>{r.classList.remove(\"hidden\")},1e3)});"],["C:/Users/rmcam/Documents/portfolio-civil/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const n=document.querySelectorAll(\".animate-on-scroll\");if(\"IntersectionObserver\"in window){const e=new IntersectionObserver((s,i)=>{s.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"is-visible\"),i.unobserve(t.target))})},{threshold:.1});n.forEach(s=>{e.observe(s)})}else n.forEach(e=>{e.classList.add(\"is-visible\")})});"],["C:/Users/rmcam/Documents/portfolio-civil/src/components/ProjectCarousel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const i=document.getElementById(\"project-carousel-container\"),p=document.getElementById(\"carousel-prev\"),I=document.getElementById(\"carousel-next\");if(!i)return;const l=parseInt(i.dataset.projectsLength||\"0\");let s=0,h=0,a=!1;const m=()=>window.innerWidth>=1024?3:window.innerWidth>=768?2:1,u=(t=!0)=>{if(i.children.length>0){const d=i.children[0].clientWidth+16;i.style.transition=t?\"transform 0.5s ease-in-out\":\"none\",i.style.transform=`translateX(-${s*d}px)`}},o=t=>{const e=m(),n=Math.max(0,l-e);t===\"prev\"?s=Math.max(0,s-1):s=Math.min(n,s+1),u()};p?.addEventListener(\"click\",()=>o(\"prev\")),I?.addEventListener(\"click\",()=>o(\"next\")),i.addEventListener(\"touchstart\",t=>{h=t.touches[0].clientX,a=!0}),i.addEventListener(\"touchmove\",t=>{}),i.addEventListener(\"touchend\",t=>{if(!a)return;const e=t.changedTouches[0].clientX,n=h-e,r=50;n>r?o(\"next\"):n<-r&&o(\"prev\"),a=!1});const g=()=>{const t=m(),e=Math.max(0,l-t);s>e&&(s=e),u(!1)};window.addEventListener(\"resize\",g),g();const c={modal:document.getElementById(\"lightbox-modal\"),closeBtn:document.getElementById(\"lightbox-close-btn\"),prevBtn:document.getElementById(\"lightbox-prev-btn\"),nextBtn:document.getElementById(\"lightbox-next-btn\"),img:document.getElementById(\"lightbox-img\"),caption:document.getElementById(\"lightbox-caption\"),thumbnails:document.getElementById(\"lightbox-thumbnails\"),currentImageIndex:0,currentProjectImagesData:[],currentProjectTitle:\"\",open(t,e,n,r,d){this.modal&&(this.modal.classList.remove(\"hidden\"),this.modal.classList.add(\"flex\"),this.currentProjectImagesData=r,this.currentProjectTitle=d,this.showImage(n),this.generateThumbnails())},close(){this.modal&&(this.modal.classList.add(\"hidden\"),this.modal.classList.remove(\"flex\"))},showImage(t){if(!this.img||!this.caption||!this.prevBtn||!this.nextBtn)return;this.currentImageIndex=t;const e=this.currentProjectImagesData[t];this.img.src=e.src,this.caption.textContent=`${this.currentProjectTitle} - ${e.caption}`,this.prevBtn.style.display=t>0?\"block\":\"none\",this.nextBtn.style.display=t<this.currentProjectImagesData.length-1?\"block\":\"none\",this.updateActiveThumbnail()},navigate(t){const e=t===\"prev\"?this.currentImageIndex-1:this.currentImageIndex+1;e>=0&&e<this.currentProjectImagesData.length&&this.showImage(e)},generateThumbnails(){this.thumbnails&&(this.thumbnails.innerHTML=\"\",this.currentProjectImagesData.forEach((t,e)=>{const n=document.createElement(\"img\");n.src=t.src,n.alt=t.caption,n.classList.add(\"h-24\",\"w-24\",\"object-cover\",\"cursor-pointer\",\"border-2\",\"border-transparent\",\"hover:border-blue-500\",\"transition-all\",\"duration-200\",\"flex-shrink-0\"),n.addEventListener(\"click\",()=>this.showImage(e)),this.thumbnails?.appendChild(n)}))},updateActiveThumbnail(){this.thumbnails&&Array.from(this.thumbnails.children).forEach((t,e)=>{e===this.currentImageIndex?t.classList.add(\"border-blue-500\"):t.classList.remove(\"border-blue-500\")})},init(){this.closeBtn?.addEventListener(\"click\",()=>this.close()),this.prevBtn?.addEventListener(\"click\",()=>this.navigate(\"prev\")),this.nextBtn?.addEventListener(\"click\",()=>this.navigate(\"next\")),this.modal?.addEventListener(\"click\",t=>{t.target===this.modal&&this.close()}),document.addEventListener(\"keydown\",t=>{this.modal&&!this.modal.classList.contains(\"hidden\")&&(t.key===\"Escape\"&&this.close(),t.key===\"ArrowLeft\"&&this.navigate(\"prev\"),t.key===\"ArrowRight\"&&this.navigate(\"next\"))})}};c.init(),window.myProjectScripts={openLightbox:c.open.bind(c)}});"]],"assets":["/_astro/onest-cyrillic-wght-normal.DXI_y_WF.woff2","/_astro/onest-latin-ext-wght-normal.CnNj8hVb.woff2","/_astro/onest-latin-wght-normal.CUIqqgP9.woff2","/_astro/consultoria.vH14sCiF.css","/Estructuras/Estructura Concreto 2.webp","/Estructuras/Estructura Concreto 3.webp","/Estructuras/Estructura Concreto 4.webp","/Estructuras/Estructura Concreto.webp","/Estructuras/Estructura Metalica Cubierta 2.webp","/Estructuras/Estructura Metalica Cubierta.webp","/Estructuras/Estructuras.webp","/Consultoria/consultoria.webp","/Infraestructura-Vial/vias.webp","/Inicio/fondo-pr.webp","/Logo/LOGO GUILLERMO-01.png","/Logo/LOGO GUILLERMO-011.png","/Logo/LOGO GUILLERMO-011.webp","/Topografía/topografia.webp","/Recursos-Hídricos/hidraulica.webp","/Infraestructura-Vial/1/1.txt","/Infraestructura-Vial/1/1.webp","/Infraestructura-Vial/2/2.1_page-0001.webp","/Infraestructura-Vial/2/2.1_page-0002.webp","/Infraestructura-Vial/2/2.2.txt","/Infraestructura-Vial/2/2_page-0001.webp","/Infraestructura-Vial/2/2_page-0002.webp","/Infraestructura-Vial/3/3.1.txt","/Infraestructura-Vial/3/3.webp","/Recursos-Hídricos/1/1.1.webp","/Recursos-Hídricos/1/1.2.txt","/Recursos-Hídricos/1/1.2.webp","/Recursos-Hídricos/1/1.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_01.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_02.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_03.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_04.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_05.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_06.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_07.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_08.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_09.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_10.webp","/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp","/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_01.webp","/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_02.webp","/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_03.webp","/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp","/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_05.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-01.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-02.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-03.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-04.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-05.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-06.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-08.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-09.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-10.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-11.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-12.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-13.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-14.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-15.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-16.webp","/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_05.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_06.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_07.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_08.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_09.webp","/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_10.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"LqEAu5c6gznzVsA/k5o4j4jVz1U4j3Wrokf+xyrn768=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
