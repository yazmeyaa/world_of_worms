import { defineConfig } from "eslint/config";
import {
  configDirname,
  createBaseConfig,
} from "@world_of_snakes/eslint-config";

export default defineConfig([
  ...createBaseConfig(configDirname(import.meta.url)),
]);
