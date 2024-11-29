import { defineConfig } from "wxt";
import Unfonts from "unplugin-fonts/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "URL Checker",
    description:
      "URL Checker is an extension that allows you to check URLs for malicious content. Use it for your own safety.",
    host_permissions: ["<all_urls>"],
    permissions: ["scripting", "contextMenus"],
  },
  vite: () => ({
    plugins: [
      Unfonts({
        custom: {
          families: [
            {
              name: "Geist",
              src: "./src/assets/fonts/geist/*.woff2",
            },
          ],
        },
      }),
    ],
  }),
});
