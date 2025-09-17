// src/global.d.ts
declare global {
  interface Window {
    myProjectScripts: {
      openLightbox: (src: string, title: string, index: number, projectImagesData: { src: string; caption: string }[], projectTitle: string) => void;
      closeLightbox: () => void;
      navigateLightbox: (direction: 'prev' | 'next') => void;
      showImageInLightbox: (index: number) => void; // Added this line
      currentImageIndex: number;
      currentProjectImagesData: { src: string; caption: string }[];
      currentProjectTitle: string;
    };
  }
}

export {}; // This is needed to make it a module
