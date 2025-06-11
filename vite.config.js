import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.VITE_GH_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/My-Portfolio/" : "/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
