import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': { target: 'http://127.0.0.1:8080', changeOrigin: true, secure: false },
      '/users': { target: 'http://127.0.0.1:8080', changeOrigin: true, secure: false },
      '/posts': { target: 'http://127.0.0.1:8080', changeOrigin: true, secure: false },
      '/messages': { target: 'http://127.0.0.1:8080', changeOrigin: true, secure: false },
      '/comments': { target: 'http://127.0.0.1:8080', changeOrigin: true, secure: false },
    },
  },
})
