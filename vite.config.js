import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/booksalessystem/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 如果id中包含node_modules，则将其打包到vendor.js中
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          // 更多条件可以添加在这里
        }
      }
    },
    chunkSizeWarningLimit: 3000 //设置打包后文件大小超过600k，则给出警告
  }
})
