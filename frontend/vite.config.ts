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
      devOptions: {
        enabled: true
      },
      registerType: "autoUpdate",
      strategies: "generateSW",
      workbox: {
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: "WebSense",
        short_name: "WebSense",
        description: "WebSense is your crowd sensing buddy. It makes all sensors of the web plattform available for you. So you can measure your environment as you like.",
        theme_color: "#FF9701",
        orientation: "portrait",
        display: "standalone",
        icons: [
          {
            src: "/favicon-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/favicon-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/favicon-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/favicon-180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/favicon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon-1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "/favicon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
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
                src: "/favicon-192.png",
                sizes: "192x192",
              },
            ],
          },
        ],
        screenshots: [
          {
            "src": "/screenshots/missions.png",
            "sizes": "745x1400",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Missionsauswahl"
          },
          {
            "src": "/screenshots/mission.png",
            "sizes": "745x1400",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Mission"
          },
          {
            "src": "/screenshots/log.png",
            "sizes": "745x1400",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Messungen"
          },
          {
            "src": "/screenshots/log-item.png",
            "sizes": "745x1400",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Messung"
          },
          {
            "src": "/screenshots/missions-desktop.png",
            "sizes": "1989x1400",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Missionsauswahl"
          },
        ],
        share_target: {
          action: "/log/share-receiver/",
          method: "POST",
          enctype: "multipart/form-data",
          params: {
            title: "Test",
            text: "Description",
            url: "",
            files: [
              {
                "name": "task",
                "accept": ["text/plain", ".txt"]
              }
            ]
          }
        }
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
