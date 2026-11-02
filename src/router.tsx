import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Static prerendering runs from the site's output root. GitHub Pages serves
  // the same files under /SSLVEW/, so the browser router applies that prefix.
  const basepath =
    typeof window === "undefined"
      ? "/"
      : import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 30_000,
  });

  return router;
};
