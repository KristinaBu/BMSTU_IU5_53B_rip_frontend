import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/delivery": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/call": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/dc": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/user": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
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
  base: "/BMSTU_IU5_53B_rip_frontend/",
})