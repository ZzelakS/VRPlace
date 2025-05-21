import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext',           // modern output
    cssCodeSplit: true,         // split CSS for faster load
    minify: 'esbuild',          // fast and efficient minifier
    sourcemap: false,           // disable source maps in prod
  },
  server: {
    historyApiFallback: true,   // only used in dev
  },
})
