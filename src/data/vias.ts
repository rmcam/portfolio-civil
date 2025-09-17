export interface Project {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  icon: 'Road' | 'RoadSign' | 'Tools';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mejoramiento de Vías Urbanas en Solita, Caquetá',
    body: 'Construcción de pavimento hidráulico y obras complementarias en el municipio de Solita.',
    imageUrl: '/Infraestructura-Vial/1/1.webp',
    icon: 'Road',
  },
  {
    id: '2',
    title: 'Mejoramiento de Vías en Solita y Valparaíso, Caquetá',
    body: 'Pavimentación en concreto hidráulico y obras complementarias en los municipios de Solita y Valparaíso.',
    imageUrl: '/Infraestructura-Vial/2/2_page-0001.webp',
    icon: 'RoadSign',
  },
  {
    id: '3',
    title: 'Mejoramiento de Vía Urbana en Albania, Caquetá',
    body: 'Pavimentación en concreto rígido en el centro poblado de Versalles, municipio de Albania.',
    imageUrl: '/Infraestructura-Vial/3/3.webp',
    icon: 'Tools',
  },
];
