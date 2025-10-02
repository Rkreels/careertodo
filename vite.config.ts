import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "."),
      "@assets": path.resolve(process.cwd(), "public"),
    },
  },
  root: process.cwd(),
  build: {
    outDir: path.resolve(process.cwd(), "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
});