import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  plugins: [react()]
})