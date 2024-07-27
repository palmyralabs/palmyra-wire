import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'


export default defineConfig({
  plugins: [
  libInjectCss(),
  dts({ entryRoot:'lib' })],
  server: {
    proxy: { "/api": "http://localhost:6060/" },
    open: true,
    port: 4000
  },
  build: {
    target: 'modules',
    // minify: 'terser',
    modulePreload: {
      polyfill: false,
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'PalmyraWire',
      fileName: 'palmyra-wire',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'axios'
      ],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        // format: 'iife',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js'
      }
    }
  }
})
