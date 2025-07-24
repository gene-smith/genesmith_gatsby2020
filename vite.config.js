import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      generateBundle(options, bundle) {
        if (bundle['index.html']) {
          this.emitFile({
            type: 'asset',
            fileName: '404.html',
            source: bundle['index.html'].source,
          })
        }
      },
    },
  ],
  base: '/gene-portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
