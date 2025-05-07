import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"), // Gemäß Projektregeln: JSX/TSX in app/
    },
  },
  root: '.', // Projekt-Root
  build: {
    outDir: 'dist', // Ausgabe Verzeichnis
  },
  publicDir: 'public' // Statische Assets
})