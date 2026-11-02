import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static-only build for GitHub Pages.
// This app has no server functions or API routes; its enquiry form uses mailto,
// and product data is bundled locally, so it can run without a server runtime.
export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
      retryCount: 2,
    },
  },
  // Disable Nitro's server output: GitHub Pages serves static files only.
  nitro: false,
  vite: {
    base: "/SSLVEW/",
  },
});
