import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: 'Vue'
    },
  },
}

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块格式 推荐使用esm
      // @ts-ignore
      formats: ["esm", "umd", "iife"],
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})