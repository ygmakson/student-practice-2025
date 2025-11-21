import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: '/student-practice/',
  plugins: [
    vue(),
    VueDevTools(),
    svgLoader()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})