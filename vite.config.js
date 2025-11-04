import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   base: '/museum/',
//   base: process.env.NODE_ENV === "production" ? "/museum" : "",
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/museum/" : "/",
}));
