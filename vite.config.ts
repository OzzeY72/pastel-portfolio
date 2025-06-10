import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',
          dest: 'src'  // будет скопировано как dist/src/assets
        }
      ]
    })
  ],
  base: './', // важно для github pages
});