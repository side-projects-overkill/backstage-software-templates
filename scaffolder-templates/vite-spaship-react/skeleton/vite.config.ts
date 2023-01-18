import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  // Change according to what your baseUrl should be
  base: '/component-registry/',
  plugins: [
    VitePluginHtmlEnv(),
    react(),
  ],
  server: {
    port: 4200,
  },
})

