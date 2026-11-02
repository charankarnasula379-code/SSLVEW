// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // The repository is served below /SSLVEW/ on GitHub Pages. Keep this in
    // the Start plugin as well as src/router.tsx for correct hydration.
    router: { basepath: "/SSLVEW" },
    // Generate static HTML for GitHub Pages; linked product detail routes are
    // discovered from the catalogue during the prerender crawl.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    // Keep the existing server entry for build-time prerendering.
    server: { entry: "server" },
  },
  // This repository will be published at /SSLVEW/ on GitHub Pages.
  vite: {
    base: "/SSLVEW/",
  },
});
