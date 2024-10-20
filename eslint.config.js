import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: ["builtin", "external", "internal"],
          pathGroupsExcludedImportTypes: ["react"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "api/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "common/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "components/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "pages/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "routes/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "utils/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "../**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**.+(styles|constant*|validationSchemas)",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**",
              group: "internal",
              position: "before",
            },
          ],
          "newlines-between": "always",
        },
      ],
    },
  }
);
