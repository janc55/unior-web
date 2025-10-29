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
					light: '#fff', // Fondo claro
					dark: '#1B1B1D', // Fondo oscuro
				  },
				  text: {
					light: '#000000', // Texto en modo claro
					dark: '#ffffff', // Texto en modo oscuro
				  },
				  accent: {
					dark: '#2A2A2D', // Color de acento para elementos en modo oscuro
					light: '#3A3A3D',
					lightner: '#504F51'
				  },
			  },
			  fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'], // Definimos la fuente personalizada
				sans: ['Sofia Sans', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
