import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // 'base' ist entscheidend für GitHub Pages. 
  // './' sorgt dafür, dass alle Pfade (Bilder, JS) relativ gefunden werden.
  base: './', 
  
  server: {
    // Erlaubt den Zugriff aus dem Docker-Container heraus
    host: '0.0.0.0',
    port: 5173,
    // Wichtig für Docker unter Windows/Mac, damit Änderungen sofort erkannt werden
    watch: {
      usePolling: true,
    },
  },
  
  // Stellt sicher, dass der Build-Ordner 'dist' heißt (Standard für GitHub Actions)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});