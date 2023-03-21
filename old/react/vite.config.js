import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  server: { port: 5000 },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './src/assets/sprites/')],
      symbolId: 'icon-[dir]-[name]',
      customDomId: 'svg_icons_sprite'
    }),
    react()
  ],
  css: {
    devSourcemap: true
  },
  build: {
    minify: true
  }
})
