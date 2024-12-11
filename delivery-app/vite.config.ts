import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 3000,
/*    proxy: {
      "/delivery": {
        target: "http://172.27.195.241:8080",
        changeOrigin: true,
      },
      "/call": {
        target: "http://172.27.195.241:8080",
        changeOrigin: true,
      },
      "/dc": {
        target: "http://172.27.195.241:8080",
        changeOrigin: true,
      },
      "/user": {
        target: "http://172.27.195.241:8080",
        changeOrigin: true,
      },
    },*/

  },
  plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        manifest: {
          name: 'Delivery App',
          short_name: 'Delivery App',
          description: 'Delivery App',
          theme_color: '#fdfdfd',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ]
        }

      })

  ],

  envPrefix: ['VITE_', 'TAURI_ENV_*'],
  build: {
    target: process.env.TAURI_ENV_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
  },
});