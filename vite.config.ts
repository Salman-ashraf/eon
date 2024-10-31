import { defineConfig } from "vite";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), builderDevTools()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
});
