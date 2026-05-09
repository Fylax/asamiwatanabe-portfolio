import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  // Node config files
  {
    files: ["*.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Astro files
  {
    files: ["**/*.astro"],
    processor: astro.processors.astro,
    rules: {
      ...eslint.configs.recommended.rules,
      ...astro.configs.recommended,
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
];
