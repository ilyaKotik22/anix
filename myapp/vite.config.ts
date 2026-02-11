/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  
  },
  server: {
    proxy: {
      "/consumet": {
        target: "https://api.consumet.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/consumet/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
