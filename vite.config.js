import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-assets',
      generateBundle() {
        const imagesDir = join(__dirname, 'src/assets/icons')
        for (const file of readdirSync(imagesDir)) {
          if (file.endsWith('.svg') || file.endsWith('.webp')) {
            this.emitFile({
              type: 'asset',
              fileName: file,
              source: readFileSync(join(imagesDir, file))
            })
          }
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets',
  }
})
