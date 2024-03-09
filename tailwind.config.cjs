/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		variants: {
			margin: ['first', 'last'],
			padding: ['first', 'last'],
			bg: ['autofill', 'disabled'],
			text: ['disabled']
		},
		extend: {
			animation: {
				fade: 'fadeOut 5s ease-in-out'
			},
			keyframes: (theme) => ({
				fadeOut: {
					'0%': { backgroundColor: theme('colors.red.300') },
					'100%': { backgroundColor: theme('colors.transparent') }
				},
				appear: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				}
			}),
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#000000',
				'input-placeholder': '#535C61',
				'dot-light-gray': '#F1F2F5',
				'green-text-dark-2': '#42977B',
				'gray-text-dark': '#4C5359',
				'gray-text': '#98A0A7',
				'dark-gray-text': '#192227',
				error: '#FB485F',
				'light-white': '#F2F2F2',
				'green-dark': '#408D72',
				'green-medium': '#99E8D0',
				'green-light': '#E2F1ED',
				'dark-separator': '#31363C',
				'secondary-title': '#9eb2bc',
				'light-dark-bg': '#323839',
				'mid-dark-bg': '#232628',
				'dark-bg': '#0C0E10',
				'light-gray': '#8e9091',
				'button-gradient-1': '#B9DDEA',
				'button-gradient-2': '#C8E3DA',
				'dark-button': '#1A1D20',
				'gray-border': '#DBDFE9'
			},
			width: {
				10: '24px'
			},
			margin: {
				2.5: '0.625rem',
				5: '1.2rem'
			},
			padding: {
				5: '1.2rem'
			},
			lineHeight: {
				10: '44px'
			},
			borderWidth: {
				1: '1px',
				1.5: '1.5px',
				3: '3px'
			}
		},
		borderRadius: {
			none: '0',
			sm: '1px',
			sm2: '2px',
			sm4: '4px',
			md: '8px',
			xmd: '12px',
			lg: '16px',
			xlg: '20px',
			xl: '24px',
			full: '9999px'
		},

		fontSize: {
			xs: '.5rem',
			sm: '.75rem',
			tiny: '.875rem',
			base: '1.2rem',
			md: '1.4rem',
			lg: '1.6rem',
			xl: '1.8rem',
			'2xl': '2rem',
			'3xl': '24px',
			'4xl': '28px',
			'5xl': '32px',
			'6xl': '44px',
			'7xl': '50px'
		}
	},
	plugins: [
		require('tw-elements/dist/plugin')
	]
};
