import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Otimizações para SEO e performance
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["@phosphor-icons/react"],
        },
      },
    },
    // Gera source maps para debugging
    sourcemap: false,
    // Otimiza o tamanho do bundle
    chunkSizeWarningLimit: 1000,
  },
  // Otimizações de desenvolvimento
  server: {
    port: 3000,
    open: true,
  },
  // Preload de recursos críticos
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
