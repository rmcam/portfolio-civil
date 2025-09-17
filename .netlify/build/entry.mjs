import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CrVp5du9.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/consultoria.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/estructuras.astro.mjs');
const _page4 = () => import('./pages/hidraulica.astro.mjs');
const _page5 = () => import('./pages/topografia.astro.mjs');
const _page6 = () => import('./pages/vias/_id_.astro.mjs');
const _page7 = () => import('./pages/vias.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.2_@netlify+blobs_3a67061631fd49a0d5f0c40f141bb37f/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/consultoria.astro", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/estructuras.astro", _page3],
    ["src/pages/hidraulica.astro", _page4],
    ["src/pages/topografia.astro", _page5],
    ["src/pages/vias/[id].astro", _page6],
    ["src/pages/vias.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3dad81ac-64c3-4fde-acc9-735bc2801f82"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
