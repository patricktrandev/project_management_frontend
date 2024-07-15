import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5454",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target: "http://localhost:5454",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
