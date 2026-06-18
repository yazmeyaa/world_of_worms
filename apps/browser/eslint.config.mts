import { defineConfig } from "eslint/config";
import globals from "globals";
import css from "@eslint/css";
import {
  configDirname,
  createBaseConfig,
} from "@world_of_snakes/eslint-config";

export default defineConfig([
  ...createBaseConfig(configDirname(import.meta.url)),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
