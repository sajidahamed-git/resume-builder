import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"
// import { fileURLToPath } from "url";
// https://vite.dev/config/

// const __filename = fileURLToPath(import.meta.resolve)
// const __dirname = path.dirname(__filename)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      "@":path.resolve(__dirname,"./src"),
    }
  }

});
