// Importación de tipos para componentes Astro
import type { ImageMetadata } from 'astro';


// Importaciones de imágenes para proyectos viales
import cardImage1 from '../assets/vias/card-image-1.webp';
import vias1_1 from '../assets/vias/1/1.webp';

import cardImage2 from '../assets/vias/card-image-2.webp';
import vias2_1 from '../assets/vias/2/2_page-0001.webp';
import vias2_2 from '../assets/vias/2/2_page-0002.webp';
import vias2_1_1 from '../assets/vias/2/2.1_page-0001.webp';
import vias2_1_2 from '../assets/vias/2/2.1_page-0002.webp';

import cardImage3 from '../assets/vias/card-image-3.webp';
import vias3_1 from '../assets/vias/3/3.webp';


/**
 * Interfaz que define la estructura de un proyecto vial para la sección "Nuestros Proyectos Viales".
 * Esta estructura es más simple que la de `src/data/projects.ts` y está diseñada para usarse con `Card.astro`.
 * @property {string} id - Identificador único del proyecto.
 * @property {string} title - Título del proyecto.
 * @property {string} body - Breve descripción del proyecto.
 * @property {ImageMetadata} imageUrl - URL de la imagen principal del proyecto.
 * @property {'Road' | 'RoadSign' | 'Tools'} icon - Nombre del icono a usar, mapeado en `src/pages/vias.astro`.
 * @property {ImageMetadata[]} imageGallery - Array de URLs de las imágenes para la galería del proyecto.
 */
export interface Project {
  id: string;
  title: string;
  body: string;
  imageUrl: ImageMetadata;
  icon: 'Road' | 'RoadSign' | 'Tools';
  imageGallery: ImageMetadata[];
}

/**
 * Array de proyectos viales específicos para la sección "Nuestros Proyectos Viales" en `src/pages/vias.astro`.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Mejoramiento de Vías Urbanas en Solita, Caquetá',
    body: 'Construcción de pavimento hidráulico y obras complementarias en el municipio de Solita.',
    imageUrl: cardImage1,
    icon: 'Road',
    imageGallery: [
      vias1_1,
    ],
  },
  {
    id: '2',
    title: 'Mejoramiento de Vías en Solita y Valparaíso, Caquetá',
    body: 'Pavimentación en concreto hidráulico y obras complementarias en los municipios de Solita y Valparaíso.',
    imageUrl: cardImage2,
    icon: 'RoadSign',
    imageGallery: [
      vias2_1,
      vias2_2,
      vias2_1_1,
      vias2_1_2,
    ],
  },
  {
    id: '3',
    title: 'Mejoramiento de Vía Urbana en Albania, Caquetá',
    body: 'Pavimentación en concreto rígido en el centro poblado de Versalles, municipio de Albania.',
    imageUrl: cardImage3,
    icon: 'Tools',
    imageGallery: [
      vias3_1,
    ],
  },
];
