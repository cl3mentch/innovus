/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif']
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					'.bg-color': {
						'background-color': 'white'
					},
					'.subbg-color': {
						'background-color': '#F2F2F2'
					},
					'.icon-color': {
						fill: 'black'
					},
					'.text-color': {
						color: 'black'
					}
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					'.bg-color': {
						'background-color': 'black'
					},
					'.subbg-color': {
						'background-color': '#1E1E1E'
					},
					'.icon-color': {
						fill: 'white'
					},
					'.text-color': { color: '#FFFFFF' }
				}
			}
		]
	}
};
