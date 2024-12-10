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
  plugins: [react()],

  envPrefix: ['VITE_', 'TAURI_ENV_*'],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target:
        process.env.TAURI_ENV_PLATFORM == 'windows'
            ? 'chrome105'
            : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
  },
});
