import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio-React/", // ✅ must match your GitHub repo name
  plugins: [react()],
})
