import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@components': path.resolve(__dirname, 'src/components'),
      '@generics': path.resolve(__dirname, 'src/components/generic-components'),
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  }
})
