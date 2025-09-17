// src/middleware.ts
import { defineMiddleware } from "astro:middleware";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const onRequest = defineMiddleware(async (context, next) => {
  // Solo incrementamos el contador para las páginas, no para assets (css, js, etc.)
  if (context.request.url.includes("/_astro/")) {
    return next();
  }

  try {
    // Incrementa el contador y obtén el nuevo valor
    const views = await redis.incr("views");
    // Adjuntamos el contador al objeto `locals` para que esté disponible en todas las páginas
    context.locals.viewCount = views;
  } catch (error) {
    console.error("Error connecting to Upstash Redis:", error);
    // Si hay un error, podemos asignar un valor por defecto
    context.locals.viewCount = 0;
  }

  // Continuamos con la renderización de la página
  return next();
});
