/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter var',
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'"SF Pro Text"',
					'"Segoe UI"',
					'Roboto',
					'sans-serif',
				],
			},
			colors: {
				surface: '#fbfbfd',
				'surface-alt': '#f5f5f7',
				ink: '#1d1d1f',
				'ink-muted': '#6e6e73',
				accent: '#8B7EC8',
			},
			letterSpacing: {
				tightish: '-0.022em',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				emily: {
					primary: '#1d1d1f',
					'primary-content': '#fbfbfd',
					secondary: '#8B7EC8',
					'secondary-content': '#fbfbfd',
					accent: '#8B7EC8',
					'accent-content': '#fbfbfd',
					neutral: '#1d1d1f',
					'neutral-content': '#fbfbfd',
					'base-100': '#fbfbfd',
					'base-200': '#f5f5f7',
					'base-300': '#ebebef',
					'base-content': '#1d1d1f',
					info: '#8B7EC8',
					success: '#34c759',
					warning: '#ff9f0a',
					error: '#ff3b30',
				},
			},
		],
		darkTheme: 'emily',
		logs: false,
	},
};
