// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import favicons from "astro-favicons";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import { baseLocale, locales, i18nObject } from "./src/i18n/i18n-util";
import { loadAllLocales } from "./src/i18n/i18n-util.sync";
import type { Locales, TranslationFunctions } from "./src/i18n/i18n-types";

loadAllLocales();
const LL = locales.reduce(
  (acc, l) => Object.assign(acc, {[l]: i18nObject(l)}), 
  {} as Record<Locales, TranslationFunctions>
)


// https://astro.build/config
export default defineConfig({
  site: "https://asami-watanabe.com",
  integrations: [
    favicons({
      name: LL.ja.seo.homepage.title(),
      name_localized: Object.entries(LL).reduce((acc, [lang, L]) => Object.assign(acc, { [lang]: L.seo.homepage.title() }), {}),
      short_name: LL.ja.aboutme.name(),
      short_name_localized: Object.entries(LL).reduce((acc, [lang, L]) => Object.assign(acc, { [lang]: L.aboutme.name() }), {}),
      themes: ["#7611a6"],
      manifest: {
        start_url: "/",
        display: "browser",
        display_override: ["fullscreen", "browser"],
        lang: "ja"
      }
    }),
    playformCompress({
      CSS: {
        csso: {
          comments: false,
          restructure: true,
        },
        lightningcss: false,
      },
      HTML: {
        "html-minifier-terser": {
          caseSensitive: false,
          collapseBooleanAttributes: true,
          decodeEntities: true,
          html5: true,
          noNewlinesBeforeTagClose: true,
          removeComments: true,
          removeAttributeQuotes: false,
          removeEmptyAttributes: (attrName: string, tag: string) => !attrName.startsWith("data-") && tag !== "img",
          useShortDoctype: true,
        }
      },
      Image: false,
      JavaScript: {
        terser: {
          compress: true,
          ecma: 2020,
          ie8: false,
        },
      },
      SVG: false,
      JSON: true,
    }),
    sitemap(),
  ],
  compressHTML: import.meta.env.PROD,
  output: "static",
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  i18n: {
    locales: locales,
    defaultLocale: baseLocale,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  image: {
    service: {
      entrypoint: "src/services/image-compression.ts",
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Kyokasho Asami",
      cssVariable: "--font-asami",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ScriptwideKyokashoCJKASubset.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
            unicodeRange: [
              "U+6E21",
              "U+9089",
              "U+9EBB",
              "U+7F8E",
            ] /* 渡 邉 麻 美 */,
          },
        ],
      },
    },
  ],
});
