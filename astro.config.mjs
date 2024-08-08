import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://juanheis.github.io/",
  base: "/blog-cocina",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/blog-cocina": "/blog-cocina/blog",
  },
});
