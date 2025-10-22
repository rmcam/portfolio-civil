// Importación del componente de icono LinkInline para usar en las etiquetas de proyectos
import Link from "../components/icons/LinkInline.astro";
import type { ImageMetadata } from 'astro';

// Importaciones de imágenes para Drenaje Terminal
import drenaje_terminal_rup9_11 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp';
import drenaje_terminal_rup9_01 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_01.webp';
import drenaje_terminal_rup9_02 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_02.webp';
import drenaje_terminal_rup9_03 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_03.webp';
import drenaje_terminal_rup9_04 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_04.webp';
import drenaje_terminal_rup9_05 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_05.webp';
import drenaje_terminal_rup9_06 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_06.webp';
import drenaje_terminal_rup9_07 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_07.webp';
import drenaje_terminal_rup9_08 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_08.webp';
import drenaje_terminal_rup9_09 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_09.webp';
import drenaje_terminal_rup9_10 from '../assets/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_10.webp';

// Importaciones de imágenes para Parque Saludable Sacama
import parque_saludable_sacama_rup17_04 from '../assets/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp';
import parque_saludable_sacama_rup17_01 from '../assets/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_01.webp';
import parque_saludable_sacama_rup17_02 from '../assets/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_02.webp';
import parque_saludable_sacama_rup17_03 from '../assets/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_03.webp';
import parque_saludable_sacama_rup17_05 from '../assets/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_05.webp';

// Importaciones de imágenes para Pavimento Terminal
import pavimento_terminal_16_17 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp';
import pavimento_terminal_16_01 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-01.webp';
import pavimento_terminal_16_02 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-02.webp';
import pavimento_terminal_16_03 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-03.webp';
import pavimento_terminal_16_04 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-04.webp';
import pavimento_terminal_16_05 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-05.webp';
import pavimento_terminal_16_06 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-06.webp';
import pavimento_terminal_16_08 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-08.webp';
import pavimento_terminal_16_09 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-09.webp';
import pavimento_terminal_16_10 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-10.webp';
import pavimento_terminal_16_11 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-11.webp';
import pavimento_terminal_16_12 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-12.webp';
import pavimento_terminal_16_13 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-13.webp';
import pavimento_terminal_16_14 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-14.webp';
import pavimento_terminal_16_15 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-15.webp';
import pavimento_terminal_16_16 from '../assets/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-16.webp';

// Importaciones de imágenes para Placa Huella Mocoa
import placa_huella_mocoa_rup18_01 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp';
import placa_huella_mocoa_rup18_10 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_10.webp';
import placa_huella_mocoa_rup18_09 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_09.webp';
import placa_huella_mocoa_rup18_08 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_08.webp';
import placa_huella_mocoa_rup18_06 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_06.webp';
import placa_huella_mocoa_rup18_07 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_07.webp';
import placa_huella_mocoa_rup18_05 from '../assets/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_05.webp';

// Importaciones de imágenes para Diseño Estructural Edificio Residencial
import estructura_concreto_2 from '../assets/Estructuras/Estructura Concreto 2.webp';
import estructura_concreto_3 from '../assets/Estructuras/Estructura Concreto 3.webp';
import estructura_concreto_4 from '../assets/Estructuras/Estructura Concreto 4.webp';

// Importaciones de imágenes para Refuerzo Estructural Puente Urbano
import estructura_metalica_cubierta from '../assets/Estructuras/Estructura Metalica Cubierta.webp';
import estructura_metalica_cubierta_2 from '../assets/Estructuras/Estructura Metalica Cubierta 2.webp';
import estructura_concreto from '../assets/Estructuras/Estructura Concreto.webp';


/**
 * Interfaz que define la estructura de una imagen de proyecto.
 * @property {string} src - La ruta de la imagen.
 * @property {string} caption - La descripción o pie de foto de la imagen.
 */
export interface ProjectImage {
  src: ImageMetadata;
  caption: string;
}

/**
 * Interfaz que define la estructura de una etiqueta de proyecto.
 * @property {string} name - El nombre de la etiqueta (ej. "Infraestructura Vial").
 * @property {string} class - Clases CSS para estilizar la etiqueta.
 * @property {any} icon - El componente de icono asociado a la etiqueta.
 */
export interface ProjectTag {
  name: string;
  class: string;
  icon: any; // Puede ser un componente Astro o cualquier otro tipo de icono
}

/**
 * Interfaz que define la estructura completa de un proyecto.
 * @property {string} title - El título del proyecto.
 * @property {string} description - Una breve descripción del proyecto.
 * @property {string} link - La URL a la página de detalles del proyecto.
 * @property {ProjectImage[]} images - Un array de imágenes asociadas al proyecto.
 * @property {ProjectTag[]} tags - Un array de etiquetas que describen el proyecto.
 */
export interface Project {
  title: string;
  description: string;
  link: string;
  images: ProjectImage[];
  tags: ProjectTag[];
}

/**
 * Objeto que contiene definiciones de etiquetas predefinidas para proyectos.
 * Facilita la consistencia y reutilización de estilos y nombres de etiquetas.
 */
export const TAGS = {
  VIAS: {
    name: "Infraestructura Vial",
    class: "bg-blue-700 text-white", // Color para Vías
    icon: Link, // Icono genérico de enlace
  },
  TOPOGRAFIA: {
    name: "Topografía",
    class: "bg-green-700 text-white", // Color para Topografía
    icon: Link, // Icono genérico de enlace
  },
  HIDRAULICA: {
    name: "Recursos Hídricos",
    class: "bg-cyan-700 text-white", // Color para Hidráulica
    icon: Link, // Icono genérico de enlace
  },
  ESTRUCTURAS: {
    name: "Estructuras",
    class: "bg-red-700 text-white", // Color para Estructuras
    icon: Link, // Icono genérico de enlace
  },
  CONSULTORIA: {
    name: "Consultoría",
    class: "bg-purple-700 text-white", // Color para Consultoría
    icon: Link, // Icono genérico de enlace
  },
  CAD: {
    name: "CAD",
    class: "bg-gray-600 text-white",
    icon: Link,
  },
  BIM: {
    name: "BIM",
    class: "bg-gray-600 text-white",
    icon: Link,
  },
  ANALISIS_ESTRUCTURAL: {
    name: "Análisis Estructural",
    class: "bg-gray-600 text-white",
    icon: Link,
  },
  GESTION_PROYECTOS: {
    name: "Gestión Proyectos",
    class: "bg-gray-600 text-white",
    icon: Link,
  },
};

/**
 * Array principal de proyectos que se mostrarán en el portafolio.
 * Cada objeto Project contiene toda la información necesaria para su visualización.
 */
export const PROJECTS: Project[] = [
  {
    title: "Drenaje Terminal",
    description: "Construcción del sistema de drenaje de aguas lluvias para el terminal de transporte de Villagarzón, departamento del Putumayo",
    link: "/projects/drenaje-terminal-rup-9", // Enlace a la página de detalles del proyecto
    images: [
      // Lista de imágenes con su ruta y pie de foto
      { src: drenaje_terminal_rup9_11, caption: "Vista final del sistema de drenaje para el Terminal de Transporte." },
      { src: drenaje_terminal_rup9_01, caption: "Usamos maquinaria pesada y herramientas de compactación para preparar el terreno con precisión." },
      { src: drenaje_terminal_rup9_02, caption: "Supervisamos cada etapa para asegurar la correcta instalación y alineación del sistema de drenaje." },
      { src: drenaje_terminal_rup9_03, caption: "Nuestro equipo técnico instala tuberías resistentes que garantizan un flujo de agua eficiente y duradero." },
      { src: drenaje_terminal_rup9_04, caption: "Compactamos el suelo para crear una base sólida que soporte la infraestructura y prevenga futuros asentamientos." },
      { src: drenaje_terminal_rup9_05, caption: "Vertimos concreto y usamos encofrados para crear cajas de drenaje robustas y duraderas." },
      { src: drenaje_terminal_rup9_06, caption: "Empleamos varillas de acero para dar a nuestras estructuras la fuerza necesaria para soportar la carga del terreno." },
      { src: drenaje_terminal_rup9_07, caption: "Instalamos rejillas y tapas de alta resistencia que aseguran la protección y el correcto funcionamiento del sistema." },
      { src: drenaje_terminal_rup9_08, caption: "Conectamos la red de drenaje en pozos que facilitan el mantenimiento y la inspección del sistema." },
      { src: drenaje_terminal_rup9_09, caption: "Moldeamos y construimos pozos circulares de concreto con refuerzo de acero para una instalación rápida y segura." },
      { src: drenaje_terminal_rup9_10, caption: "Finalizamos cada proyecto con la instalación de todos los componentes, garantizando un drenaje terminal eficiente." },
      { src: drenaje_terminal_rup9_11, caption: "Vista final del sistema de drenaje para el Terminal de Transporte." },
    ],
    tags: [TAGS.HIDRAULICA], // Etiquetas asociadas al proyecto
  },
  {
    title: "Parque Saludable Sacama",
    description: "Construcción de parque biosaludable en el municipio de Sacama, departamento de Casanare, dentro del marco del proyecto BPPIM: 2016-85315-0007",
    link: "/projects/parque-saludable-sacama-rup17",
    images: [
      { src: parque_saludable_sacama_rup17_04, caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: parque_saludable_sacama_rup17_01, caption: "Construcción de senderos peatonales y plataformas en concreto para la circulación y el emplazamiento de los equipos." },
      { src: parque_saludable_sacama_rup17_02, caption: "Instalación de un circuito completo de máquinas de ejercicio al aire libre, diseñadas para trabajar diferentes grupos musculares y aptas para usuarios de todas las edades." },
      { src: parque_saludable_sacama_rup17_03, caption: "Adecuación de zonas de descanso con bancas de concreto y el diseño de jardineras circulares en ladrillo visto para el embellecimiento paisajístico del parque." },
      { src: parque_saludable_sacama_rup17_04, caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: parque_saludable_sacama_rup17_05, caption: "Vista del parque saludable en Sáquema ya terminado, con el equipo de gimnasia y el edificio de servicios instalados, listo para ser utilizado por la comunidad. " },
    ],
    tags: [TAGS.TOPOGRAFIA],
  },
  {
    title: "Pavimento Terminal",
    description: "Mejoramiento de vías internas mediante la construcción de pavimento en concreto asfaltico para el terminal de transportes de Villagarzón, departamento del Putumayo",
    link: "/projects/pavimento-terminal-rup16", // Enlace a la página de detalles del proyecto
    images: [
      { src: pavimento_terminal_16_17, caption: "Obra Finalizada: Vista integral del proyecto de pavimentación, mostrando la transformación completa de las vías internas del terminal." },
      { src: pavimento_terminal_16_01, caption: "Condición inicial: Vías en deterioro con superficie irregular y baches, evidenciando la necesidad de una intervención urgente." },
      { src: pavimento_terminal_16_02, caption: "Preparación de la subrasante: Nivelación y compactación del terreno para asegurar una base uniforme y estable antes de la aplicación del pavimento." },
      { src: pavimento_terminal_16_03, caption: "Instalación de geoceldas: Colocación de una malla de geoceldas para mejorar la capacidad portante del suelo y prevenir deformaciones futuras." },
      { src: pavimento_terminal_16_04, caption: "Extensión de la base granular: Distribución y nivelación de material granular con motoniveladora para crear una capa de soporte robusta." },
      { src: pavimento_terminal_16_05, caption: "Supervisión aérea: Monitoreo con dron para asegurar la correcta ejecución de los trabajos y la alineación de las capas de pavimento." },
      { src: pavimento_terminal_16_06, caption: "Aplicación de riego de liga: Pulverización de emulsión asfáltica para garantizar la adherencia entre la base y la capa de rodadura." },
      { src: pavimento_terminal_16_08, caption: "Extensión de la mezcla asfáltica: Distribución uniforme de la mezcla asfáltica caliente con extendedora, asegurando el espesor y la densidad requeridos." },
      { src: pavimento_terminal_16_09, caption: "Compactación inicial: Primer paso de compactación con rodillo vibratorio para densificar la mezcla asfáltica y eliminar vacíos." },
      { src: pavimento_terminal_16_10, caption: "Compactación intermedia: Pasadas adicionales con rodillo neumático para lograr la densidad final y mejorar la textura superficial del pavimento." },
      { src: pavimento_terminal_16_11, caption: "Acabado de bordes: Refinamiento manual de los bordes del pavimento para asegurar una transición suave y una estética impecable." },
      { src: pavimento_terminal_16_12, caption: "Control de calidad: Toma de muestras y pruebas de laboratorio para verificar la calidad de la mezcla asfáltica y el grado de compactación." },
      { src: pavimento_terminal_16_13, caption: "Señalización y demarcación: Aplicación de pintura termoplástica para la señalización horizontal, incluyendo líneas de carril y zonas de parqueo." },
      { src: pavimento_terminal_16_14, caption: "Iluminación y seguridad: Instalación de luminarias LED y elementos de seguridad vial para mejorar la visibilidad nocturna y la protección de los usuarios." },
      { src: pavimento_terminal_16_15, caption: "Paisajismo y embellecimiento: Integración de zonas verdes y mobiliario urbano para crear un entorno más agradable y funcional." },
      { src: pavimento_terminal_16_16, caption: "Vista panorámica final: Perspectiva aérea del terminal con las vías pavimentadas, mostrando la magnitud y el impacto positivo del proyecto." },
      { src: pavimento_terminal_16_17, caption: "Entrega del proyecto: El terminal de transportes de Villagarzón. con sus vías internas completamente renovadas, listo para optimizar la movilidad y la experiencia de los usuarios." }
    ],
    tags: [TAGS.VIAS],
  },
  {
    title: "Placa Huella Mocoa",
    description: "Obras de recuperación para la rehabilitación de vías afectadas por lluvia torrencial en Mocoa.",
    link: "/projects/placa-huella-mocoa-rup18", // Enlace a la página de detalles del proyecto
    images: [
      { src: placa_huella_mocoa_rup18_01, caption: "Entregamos proyectos completos que mejoran significativamente la calidad de vida de las comunidades, ofreciendo vías seguras, accesibles y resistentes al paso del tiempo." },
      { src: placa_huella_mocoa_rup18_10, caption: "Tomamos caminos de tierra en mal estado y los convertimos en vías de acceso seguras y duraderas para la comunidad." },
      { src: placa_huella_mocoa_rup18_09, caption: "Utilizamos motoniveladoras y equipos de precisión para preparar y nivelar el terreno, garantizando una base perfecta para su proyecto." },
      { src: placa_huella_mocoa_rup18_08, caption: "El uso de rodillos compactadores asegura una base estable y resistente, fundamental para la longevidad de la vía, incluso en terrenos difíciles." },
      { src: placa_huella_mocoa_rup18_06, caption: "Nos especializamos en proyectos en zonas rurales. Nuestra experiencia nos permite llevar infraestructura de calidad a donde más se necesita." },
      { src: placa_huella_mocoa_rup18_07, caption: "Mano de obra calificada: Nuestro equipo de expertos se dedica a cada detalle, desde la instalación hasta los acabados finales, asegurando un trabajo de excelencia en cada metro de vía." },
      { src: placa_huella_mocoa_rup18_05, caption: "Implementamos un diseño de placa huella que no solo es altamente funcional y seguro para el tránsito, sino que también mejora la apariencia del entorno." },
      { src: placa_huella_mocoa_rup18_01, caption: "Entregamos proyectos completos que mejoran significativamente la calidad de vida de las comunidades, ofreciendo vías seguras, accesibles y resistentes al paso del tiempo." },
    ],
    tags: [TAGS.VIAS],
  },
  {
    title: "Diseño Estructural Edificio Residencial",
    description: "Diseño y cálculo estructural completo para un edificio residencial de 10 pisos, optimizando el uso de concreto reforzado y acero.",
    link: "/projects/edificio-residencial",
    images: [
      { src: estructura_concreto_2, caption: "Diseñamos estructuras de concreto para edificios, garantizando una base sólida y eficiente para su construcción." },
      { src: estructura_concreto_3, caption: "Realizamos análisis estructurales avanzados para asegurar la seguridad y estabilidad de su proyecto ante cualquier carga." },
      { src: estructura_concreto_4, caption: "Nuestra ingeniería de alta precisión calcula cada detalle para crear una estructura confiable y segura." },
    ],
    tags: [TAGS.ESTRUCTURAS, TAGS.ANALISIS_ESTRUCTURAL, TAGS.BIM],
  },
  {
    title: "Refuerzo Estructural Puente Urbano",
    description: "Evaluación y propuesta de refuerzo estructural para un puente vehicular existente, mejorando su capacidad de carga y resistencia sísmica.",
    link: "/projects/refuerzo-puente-urbano",
    images: [
      { src: estructura_metalica_cubierta, caption: "Modelamos estructuras metálicas de gran envergadura para cubiertas, creando soluciones ligeras y resistentes." },
      { src: estructura_metalica_cubierta_2, caption: "Diseñamos estructuras metálicas que se adaptan a la estética y a los requerimientos de cualquier proyecto." },
      { src: estructura_concreto, caption: "Ofrecemos soluciones innovadoras que combinan concreto y metal para lograr máxima funcionalidad y resistencia." },
    ],
    tags: [TAGS.ESTRUCTURAS, TAGS.CONSULTORIA, TAGS.ANALISIS_ESTRUCTURAL],
  },
];
