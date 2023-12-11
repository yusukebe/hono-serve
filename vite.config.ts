import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['__STATIC_CONTENT_MANIFEST']
    }
  },
  plugins: [
    devServer({
      entry: 'src/index.ts'
    })
  ]
})
