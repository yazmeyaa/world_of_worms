/// <reference types="node" />
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export function configDirname(importMetaUrl: string): string {
  return path.dirname(fileURLToPath(importMetaUrl));
}

export function createBaseConfig(tsconfigRootDir: string) {
  return [
    {
      ignores: ["**/dist/**", "**/node_modules/**"],
    },
    {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      plugins: { js },
      extends: ["js/recommended"],
    },
    ...tseslint.configs.recommended,
    {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      languageOptions: {
        parserOptions: {
          tsconfigRootDir,
        },
      },
    },
  ];
}
