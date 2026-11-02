import { defineConfig as defineViteConfig } from "vite";
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineViteConfig(async (env) => {
  const config = await defineLovableConfig({
    tanstackStart: {
      // Use the project's SSR wrapper for build-time prerendering.
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
      },
    },
    // Disable the wrapper's automatic Nitro integration and attach Nitro
    // explicitly with the GitHub Pages static preset below.
    // @ts-expect-error The wrapper currently omits this option from its type.
    nitro: false,
    vite: {
      base: "/SSLVEW/",
    },
  })(env);

  if (env.command === "build") {
    config.plugins = [
      ...(config.plugins ?? []),
      nitro({ preset: "github_pages" }),
    ];
  }

  return config;
});
