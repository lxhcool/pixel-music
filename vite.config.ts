import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url))
}

const alias: Record<string, string> = {
  '@': pathResolve('./src'),
  '~': pathResolve('./')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variable.scss" as *;`
      }
    }
  }
})
