import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/

console.log('Environment Variables:', process.env.VITE_HOST, process.env.VITE_PORT);

export default defineConfig({
  base: '/',
  plugins: [svgr(), react()],
  test: {
    globals: true,
    css: true,
    reporters: ['verbose']
  },
})