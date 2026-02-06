// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Все запросы на /consumet будут перенаправлены на api.consumet.org
      "/consumet": {
        target: "https://api.consumet.org",
        changeOrigin: true, // меняет origin на целевой сервер
        secure: false, // если SSL проблемы
        rewrite: (path) => path.replace(/^\/consumet/, ""), // убираем префикс
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ → /src
    },
  },
});
