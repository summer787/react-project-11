// vite.config.js
import react from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "node:path";
import { defineConfig } from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/vite/dist/node/index.js";
import { env } from "node:process";
import viteImagemin from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/@vheemstra/vite-plugin-imagemin/dist/index.js";
import imageminGifSicle from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/imagemin-gifsicle/index.js";
import imageminMozjpeg from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/imagemin-mozjpeg/index.js";
import imageminPngQuant from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/imagemin-pngquant/index.js";
import imageminSvgo from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/imagemin-svgo/index.js";
import imageminWebp from "file:///C:/Users/leesy/like-lion/react-project-11/node_modules/imagemin-webp/index.js";
var __vite_injected_original_dirname = "C:\\Users\\leesy\\like-lion\\react-project-11";
var isDev = env.NODE_ENV === "development";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo()
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp()
        }
      }
    })
  ],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev ? "[name]_[local]__[hash:base64:5]" : "[hash:base64:4]"
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // 빌드 시, 청크 파일 생성 매뉴얼 구성
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          reactRouter: ["react-router-dom"],
          animations: ["framer-motion", "gsap"],
          extra: ["zustand", "immer", "ramda", "@tanstack/react-query"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZWVzeVxcXFxsaWtlLWxpb25cXFxccmVhY3QtcHJvamVjdC0xMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVlc3lcXFxcbGlrZS1saW9uXFxcXHJlYWN0LXByb2plY3QtMTFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2xlZXN5L2xpa2UtbGlvbi9yZWFjdC1wcm9qZWN0LTExL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwibm9kZTpwcm9jZXNzXCI7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcIkB2aGVlbXN0cmEvdml0ZS1wbHVnaW4taW1hZ2VtaW5cIjtcclxuaW1wb3J0IGltYWdlbWluR2lmU2ljbGUgZnJvbSBcImltYWdlbWluLWdpZnNpY2xlXCI7XHJcbmltcG9ydCBpbWFnZW1pbk1vempwZWcgZnJvbSBcImltYWdlbWluLW1vempwZWdcIjtcclxuaW1wb3J0IGltYWdlbWluUG5nUXVhbnQgZnJvbSBcImltYWdlbWluLXBuZ3F1YW50XCI7XHJcbmltcG9ydCBpbWFnZW1pblN2Z28gZnJvbSBcImltYWdlbWluLXN2Z29cIjtcclxuaW1wb3J0IGltYWdlbWluV2VicCBmcm9tIFwiaW1hZ2VtaW4td2VicFwiO1xyXG5cclxuY29uc3QgaXNEZXYgPSBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBqcGc6IGltYWdlbWluTW96anBlZygpLFxyXG4gICAgICAgIHBuZzogaW1hZ2VtaW5QbmdRdWFudCgpLFxyXG4gICAgICAgIGdpZjogaW1hZ2VtaW5HaWZTaWNsZSgpLFxyXG4gICAgICAgIHN2ZzogaW1hZ2VtaW5TdmdvKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ha2VXZWJwOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAganBnOiBpbWFnZW1pbldlYnAoKSxcclxuICAgICAgICAgIHBuZzogaW1hZ2VtaW5XZWJwKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgICBtb2R1bGVzOiB7XHJcbiAgICAgIGdlbmVyYXRlU2NvcGVkTmFtZTogaXNEZXZcclxuICAgICAgICA/IFwiW25hbWVdX1tsb2NhbF1fX1toYXNoOmJhc2U2NDo1XVwiXHJcbiAgICAgICAgOiBcIltoYXNoOmJhc2U2NDo0XVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBcdUJFNENcdUI0REMgXHVDMkRDLCBcdUNDQURcdUQwNkMgXHVEMzBDXHVDNzdDIFx1QzBERFx1QzEzMSBcdUI5RTRcdUIyNzRcdUM1QkMgXHVBRDZDXHVDMTMxXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICByZWFjdDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXHJcbiAgICAgICAgICByZWFjdFJvdXRlcjogW1wicmVhY3Qtcm91dGVyLWRvbVwiXSxcclxuICAgICAgICAgIGFuaW1hdGlvbnM6IFtcImZyYW1lci1tb3Rpb25cIiwgXCJnc2FwXCJdLFxyXG4gICAgICAgICAgZXh0cmE6IFtcInp1c3RhbmRcIiwgXCJpbW1lclwiLCBcInJhbWRhXCIsIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULE9BQU8sV0FBVztBQUN6VSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxXQUFXO0FBQ3BCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sa0JBQWtCO0FBVHpCLElBQU0sbUNBQW1DO0FBV3pDLElBQU0sUUFBUSxJQUFJLGFBQWE7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLE1BQ1gsU0FBUztBQUFBLFFBQ1AsS0FBSyxnQkFBZ0I7QUFBQSxRQUNyQixLQUFLLGlCQUFpQjtBQUFBLFFBQ3RCLEtBQUssaUJBQWlCO0FBQUEsUUFDdEIsS0FBSyxhQUFhO0FBQUEsTUFDcEI7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQLEtBQUssYUFBYTtBQUFBLFVBQ2xCLEtBQUssYUFBYTtBQUFBLFFBQ3BCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQSxJQUNkLFNBQVM7QUFBQSxNQUNQLG9CQUFvQixRQUNoQixvQ0FDQTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixPQUFPLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDNUIsYUFBYSxDQUFDLGtCQUFrQjtBQUFBLFVBQ2hDLFlBQVksQ0FBQyxpQkFBaUIsTUFBTTtBQUFBLFVBQ3BDLE9BQU8sQ0FBQyxXQUFXLFNBQVMsU0FBUyx1QkFBdUI7QUFBQSxRQUM5RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
