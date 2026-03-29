import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/nutrivanne-facelift/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html',
      },
    },
  },
})
