/// <reference types="vitest" />

import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version)
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      workbox: {
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: "WebSense",
        short_name: "WebSense",
        description: "Sense everything",
        theme_color: "#09b6e5",
        // msTileColor: "#ffffff",
        // appleMobileWebAppCapable: "yes",
        // appleMobileWebAppStatusBarStyle: "black",
        // appleMobileWebAppCache: "yes",
        orientation: "portrait",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        shortcuts: [
          {
            name: "List Sensors",
            short_name: "Sensors",
            description: "Which Sensors are on my Device?",
            url: "/sensors",
            icons: [
              {
                src: "/img/icons/pwa-192x192.png",
                sizes: "192x192",
              },
            ],
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    coverage: {
      reporter: ['lcovonly', 'cobertura'],
      reportsDirectory: 'coverage',
    }
  }
});
