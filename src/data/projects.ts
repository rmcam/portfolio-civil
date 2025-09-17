import Link from "../components/icons/LinkInline.astro";

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface ProjectTag {
  name: string;
  class: string;
  icon: any;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  images: ProjectImage[];
  tags: ProjectTag[];
}

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

export const PROJECTS: Project[] = [
  {
    title: "Drenaje Terminal RUP 9",
    description: "Construcción del sistema de drenaje de aguas lluvias para el terminal de transporte de Villagarzón, departamento del Putumayo",
    link: "/projects/drenaje-terminal-rup-9", // Updated link
    images: [
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp", caption: "Vista final del sistema de drenaje." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_01.webp", caption: "Inicio de Obras de Drenaje Pluvial." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_02.webp", caption: "Eficiencia en Excavación para Infraestructura Crítica." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_03.webp", caption: "Tuberías de Drenaje con Precisión de Ingeniería." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_04.webp", caption: "Preparación del Lecho para la Red de Drenaje." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_05.webp", caption: "Construcción de Cajas de Inspección Esenciales." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_06.webp", caption: "Refuerzo y Vaciado de Concreto en Elementos Clave." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_07.webp", caption: "Finalización de Sumideros y Rejillas de Alta Capacidad." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_08.webp", caption: "Estructuras Hidráulicas para la Gestión de Flujos." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_09.webp", caption: "Pozos de Inspección para Mantenimiento y Operación Eficiente." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_10.webp", caption: "Nuevo Sistema de Drenaje para el Terminal de Transporte." },
      { src: "/Proyectos/Drenaje_Terminal_RUP-9/drenaje_terminal_rup9_11.webp", caption: "Vista final del sistema de drenaje." },
    ],
    tags: [TAGS.HIDRAULICA],
  },
  {
    title: "Parque Saludable Sacama RUP 17",
    description: "Construcción de parque biosaludable en el municipio de Sacama, departamento de Casanare, dentro del marco del proyecto BPPIM: 2016-85315-0007",
    link: "/projects/parque-saludable-sacama-rup17", // Updated link
    images: [
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_01.webp", caption: "Construcción de senderos peatonales y plataformas en concreto para la circulación y el emplazamiento de los equipos." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_02.webp", caption: "Instalación de un circuito completo de máquinas de ejercicio al aire libre, diseñadas para trabajar diferentes grupos musculares y aptas para usuarios de todas las edades." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_03.webp", caption: "Adecuación de zonas de descanso con bancas de concreto y el diseño de jardineras circulares en ladrillo visto para el embellecimiento paisajístico del parque." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_04.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
      { src: "/Proyectos/Parque_Saludable_Sacama_RUP-17/parque_saludable_sacama_rup17_05.webp", caption: "Pintura y demarcación de las áreas de ejercicio y circulación para una mejor organización y seguridad de los usuarios." },
    ],
    tags: [TAGS.TOPOGRAFIA],
  },
  {
    title: "Pavimento Terminal RUP 16",
    description: "Mejoramiento de vías internas mediante la construcción de pavimento en concreto asfaltico para el terminal de transportes de Villagarzón S.A., departamento del Putumayo",
    link: "/projects/pavimento-terminal-rup16", // Updated link
    images: [
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp", caption: "Obra Finalizada: Vista Integral del Proyecto.." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-01.webp", caption: "Estado Inicial de las Vías Internas del Terminal." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-02.webp", caption: "Preparación y Nivelación de la Subrasante." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-03.webp", caption: "Instalación de Geomalla de Refuerzo." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-04.webp", caption: "Conformación de la Capa de Base Granular." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-05.webp", caption: "Aplicación y Compactación de la Primera Capa de Asfalto." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-06.webp", caption: "Avance General de la Pavimentación en Accesos." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-08.webp", caption: "Proceso de Compactación del Concreto Asfáltico." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-09.webp", caption: "Compactación Neumática para Sellado de la Superficie." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-10.webp", caption: "Trabajos de Pavimentación en Curvas y Zonas de Maniobra." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-11.webp", caption: "Vista de la Nueva Vía Interna Pavimentada." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-12.webp", caption: "Extendido y Acabado de la Mezcla Asfáltica." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-13.webp", caption: "Pavimentación en Zonas de Acceso y Control." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-14.webp", caption: "Vía Interna Concluida y en Funcionamiento." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-15.webp", caption: "Vista Superior de la Nueva Circulación Vehicular." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-16.webp", caption: "Panorámica del Terminal con Vías Renovadas." },
      { src: "/Proyectos/Pavimento_Terminal_RUP-16/pavimento-terminal-16-17.webp", caption: "Obra Finalizada: Vista Integral del Proyecto.." }
    ],
    tags: [TAGS.VIAS],
  },
  {
    title: "Placa Huella Mocoa RUP 18",
    description: "Obras de recuperación para la rehabilitación de vías afectadas por lluvia torrencial en Mocoa.",
    link: "/projects/placa-huella-mocoa-rup18", // Updated link
    images: [
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp", caption: "Vía Recuperada Mejorando el Acceso y la Calidad de Vida de los Residentes" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_10.webp", caption: "Condición Inicial de la Vía en la Vereda Nueva Esperanza" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_09.webp", caption: "Adecuación y Nivelación de la Subrasante con Motoniveladora" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_08.webp", caption: "Compactación de la Estructura de la Vía con Vibrocompactador" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_06.webp", caption: "Avance de los Trabajos de Preparación del Terreno en el Tramo" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_07.webp", caption: "Construcción de Obras de Drenaje y Bordillos en Concreto" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_05.webp", caption: "Tramo en Curva con Pavimento en Placa Huella Terminado" },
      { src: "/Proyectos/Placa_Huella_Mocoa_RUP-18/placa_huella_mocoa_rup18_01.webp", caption: "Vía Recuperada Mejorando el Acceso y la Calidad de Vida de los Residentes" },
    ],
    tags: [TAGS.VIAS],
  },
];
