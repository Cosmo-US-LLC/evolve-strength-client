import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "@svgr/rollup";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit"],
        vazirmatn: ["Vazirmatn"],
      },
    },
  },
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["react-payment-inputs", "styled-components"],
    exclude: [],
  },
  preview: {
    allowedHosts: ["evolvestrength.ca", "www.evolvestrength.ca"],
  },
});
