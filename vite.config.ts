
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ändere dies zu '/DEIN_REPO_NAME/', falls es keine User-Page (username.github.io) ist
  build: {
    outDir: 'dist',
  },
});
