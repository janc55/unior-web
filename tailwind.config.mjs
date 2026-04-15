/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#f10003',
					light: '#fdc300',
				},
				background: {
					light: '#fff',
					dark: '#1B1B1D',
				},
				text: {
					light: '#000000',
					dark: '#ffffff',
				},
				accent: {
					dark: '#2A2A2D',
					light: '#3A3A3D',
					lightner: '#504F51'
				},
				// POO 2026 Palette
				poo: {
					'gold-light': '#F5D78E',
					'gold-mid': '#C9A84C',
					'gold-dark': '#8B6914',
					'black-deep': '#0A0705',
					'black-rich': '#120E08',
					'black-card': '#1A1208',
					'wine-dark': '#3D0A14',
					'wine-mid': '#6B1422',
					'text-primary': '#F5D78E',
					'text-muted': '#A08B5A',
					'white-soft': '#FAF6EE',
				},
			},
			fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'],
				sans: ['Sofia Sans', 'sans-serif'],
				playfair: ['"Playfair Display"', 'serif'],
				cormorant: ['"Cormorant Garamond"', 'serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
