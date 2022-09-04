import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

const buildAll = async () => {
  await build(defineConfig(config as UserConfig) as InlineConfig);

  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "smarty-ui.umd.js";
  packageJson.module = "smarty-ui.esm.js";
  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name,
          fileName: "index",
          formats: ["esm", "umd"],
        },
        outDir,
      };
      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `
        "name": "smarty-ui-vite/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
        `,
        "utf-8"
      );
    });
};

buildAll();
