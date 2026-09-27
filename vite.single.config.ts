import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Single-file build for hosting as one page: JS and CSS inlined, models/video/images stay as files.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
  build: { outDir: "dist-single", minify: "terser", terserOptions: { compress: { drop_console: true } } },
});
