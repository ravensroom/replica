import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // requests like /api/some-endpoint will be proxied to http://localhost:8000/api/some-endpoint
      '/api': {
        target: 'http://localhost:8000', // server url
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
    },
    port: 5173,
  },
});
