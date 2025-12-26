import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true // Enable in dev for testing
			},
			manifest: {
				name: 'هوای شیراز - روزهای نوشیدنی',
				short_name: 'هوای شیراز',
				description: 'پیش‌بینی آب و هوای شیراز با تمرکز روی روزهای بارانی و نوشیدنی!',
				theme_color: '#3b82f6', // blue-500
				background_color: '#f3f4f6',
				display: 'standalone',
				scope: '/',
				start_url: '/',
				icons: [
					{
						src: '/icons/icon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/icons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				screenshots: [
					{
						src: '/screenshots/screenshot1.png',
						sizes: '1280x800',
						type: 'image/png',
						form_factor: 'wide',
						label: 'هوای هفتگی'
					}
				]
			},
			workbox: {
				// Cache everything needed for offline
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json}'],
				// Runtime caching for Open-Meteo API (optional but recommended)
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/i,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'weather-api',
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 60 * 60 * 24 // 1 day
							}
						}
					}
				]
			}
		})
	]
});
