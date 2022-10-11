import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 反向代理
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8888/",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        pathRewrite: {
          "^/api": "", // 这个是定义要访问的路径，名字随便写
        },
      },
    },
  },
});
