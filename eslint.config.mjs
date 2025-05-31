import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import daStyle from "eslint-config-dicodingacademy";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    extends: [
      "plugin:js/recommended",
      daStyle, // Gaya penulisan dari Dicoding
    ],
  },
]);
