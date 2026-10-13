import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree";

// Re-export routeTree and all individual routes for backward compatibility
export * from "./routeTree";

// Create TanStack Router instance
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register Router Type Definition for full TypeScript type-safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
