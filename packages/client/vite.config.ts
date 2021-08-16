import { defineConfig } from 'vite'
import { pluginGraphqlCodegen } from './scripts/pluginGraphqlCodegen';
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginGraphqlCodegen(),
    preact(),
  ]
})
