import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure we can use process.env for the API key if needed in the future
  define: {
    'process.env': process.env
  }
})