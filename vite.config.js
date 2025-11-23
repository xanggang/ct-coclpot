import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import postCssPxToRem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode}) => {
  return{
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      // 非production不处理兼容性
      ...(mode === 'production' ? [
        legacy({
          targets: ['defaults', 'Chrome 63', 'not IE 11'],
          modernPolyfills: true,
        }),
      ] : []),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          postcssPresetEnv({}), // 使用最新的 CSS 特性
          autoprefixer({}), // 自动添加浏览器前缀
          postCssPxToRem({
            rootValue: 100, // 1rem = 16px
            propList: ['*'],
          })
        ]}
    },
    server: {
      port: 8008,
      open: '/',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
