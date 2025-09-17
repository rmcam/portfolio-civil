/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
			},
			colors: {
				primary: '#B91C1C', // Rojo del logo
				secondary: '#2A4365', // Azul oscuro profesional
				accent: '#38A169', // Verde para acentos
				'background-light': '#F8F9FA', // Gris muy claro para fondos
				'text-dark': '#212529', // Gris oscuro para texto principal
				'text-medium': '#6C757D', // Gris medio para texto secundario
				'text-light': '#DEE2E6', // Gris claro para texto en fondos oscuros
			},
		},
	},
	plugins: [],
}
