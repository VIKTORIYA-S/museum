import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import process from 'node:process'

// https://vite.dev/config/
// export default defineConfig({
//   base: '/museum/',
//   base: process.env.NODE_ENV === "production" ? "/museum" : "",
//   plugins: [react()],
// })

// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === "production" ? "/museum/" : "/",
// }));

export default defineConfig(({ mode }) => {
  return {
    // Вместо process.env.NODE_ENV используем аргумент mode
    base: mode === 'production' ? '/museum/' : '/',
    plugins: [react()],
  }
})

// export default defineConfig({

//   plugins: [react()],
//   base: process.env.NODE_ENV === "production" ? "/museum" : "",

// })
