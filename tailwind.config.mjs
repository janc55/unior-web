/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#f10003', // Rojo UNIOR
					light: '#fdc300', // Amarillo UNIOR
				  },
				  background: {
					light: '#ffffff', // Fondo claro
					dark: '#000000', // Fondo oscuro
				  },
				  text: {
					light: '#000000', // Texto en modo claro
					dark: '#ffffff', // Texto en modo oscuro
				  },
				  accent: {
					dark: '#141414', // Color de acento para elementos en modo oscuro
				  },
			  },
			  fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'], // Definimos la fuente personalizada
			  },
		},
	},
	plugins: [],
}
