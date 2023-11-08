import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    remix({ ignoredRouteFiles: ["**/.*"], serverModuleFormat: "cjs" }),
    tsconfigPaths(),
    UnoCSS(),
  ],
});
