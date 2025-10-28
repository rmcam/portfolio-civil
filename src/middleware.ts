// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // Solo incrementamos el contador para las páginas, no para assets (css, js, etc.)
  if (context.request.url.includes("/_astro/")) {
    return next();
  }

  // Como el contador de visitas se maneja ahora con PHP en el cliente,
  // no necesitamos lógica de servidor aquí para el contador.
  // Podemos establecer un valor por defecto o simplemente no establecerlo.
  context.locals.viewCount = 0; 

  // Continuamos con la renderización de la página
  return next();
});
