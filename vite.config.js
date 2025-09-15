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
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["@phosphor-icons/react"],
        },
        // Otimiza nomes dos chunks
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    // Gera source maps para debugging
    sourcemap: false,
    // Otimiza o tamanho do bundle
    chunkSizeWarningLimit: 1000,
    // Otimizações adicionais
    target: "es2015",
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
  // Otimizações de desenvolvimento
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false,
    },
  },
  // Preload de recursos críticos
  optimizeDeps: {
    include: ["react", "react-dom", "@phosphor-icons/react"],
    exclude: ["@vite/client", "@vite/env"],
  },
  // Otimizações de CSS
  css: {
    devSourcemap: false,
  },
});
