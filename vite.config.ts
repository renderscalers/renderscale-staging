import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tanstackVirtualAliases = {
  "#tanstack-router-entry": path.resolve(__dirname, "./src/router.tsx"),
  "#tanstack-start-entry": path.resolve(__dirname, "./src/start.ts"),
};

const tanstackOptimizeExcludes = [
  "@tanstack/start-server-core",
  "@tanstack/start-client-core",
  "@tanstack/start-plugin-core",
  "@tanstack/start-static-server-functions",
  "@tanstack/react-start",
  "@tanstack/react-router",
  "@tanstack/react-router-devtools",
];

const clientOptimizeIncludes = ["cookie", "react-router", "react-router-dom"];

function tanstackVirtualResolvePlugin(name: string) {
  return {
    name,
    setup(build: any) {
      for (const [id, resolvedPath] of Object.entries(tanstackVirtualAliases)) {
        const filter = new RegExp(`^${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`);
        build.onResolve({ filter }, () => ({ path: resolvedPath }));
      }
    },
  };
}

export default defineConfig({
  plugins: [tanstackStart(), react(), cloudflare()],
  base: "/renderscale-staging/",
  optimizeDeps: {
    noDiscovery: true,
    entries: [path.resolve(__dirname, "./src/router.tsx")],
    include: clientOptimizeIncludes,
    exclude: tanstackOptimizeExcludes,
    esbuildOptions: {
      plugins: [tanstackVirtualResolvePlugin("tanstack-virtual-resolve")],
    },
  },
  ssr: {
    optimizeDeps: {
      noDiscovery: true,
      entries: [path.resolve(__dirname, "./src/start.ts"), path.resolve(__dirname, "./src/router.tsx")],
      exclude: tanstackOptimizeExcludes,
      esbuildOptions: {
        plugins: [tanstackVirtualResolvePlugin("tanstack-virtual-resolve-ssr")],
      },
    },
  },
  environments: {
    client: {
      optimizeDeps: {
        include: clientOptimizeIncludes,
        exclude: tanstackOptimizeExcludes,
        esbuildOptions: {
          plugins: [tanstackVirtualResolvePlugin("tanstack-virtual-resolve-client")],
        },
      },
    },
    ssr: {
      optimizeDeps: {
        exclude: tanstackOptimizeExcludes,
        esbuildOptions: {
          plugins: [tanstackVirtualResolvePlugin("tanstack-virtual-resolve-ssr-env")],
        },
      },
    },
    tanstack_start_app: {
      optimizeDeps: {
        exclude: tanstackOptimizeExcludes,
        esbuildOptions: {
          plugins: [tanstackVirtualResolvePlugin("tanstack-virtual-resolve-cloudflare")],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ...tanstackVirtualAliases,
    },
  },
});
