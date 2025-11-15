import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/report.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
