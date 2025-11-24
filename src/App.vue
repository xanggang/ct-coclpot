<script setup>
import { setRem } from '@/utils/rem'
import Test from './views/Test/index.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
// setRem()
</script>

<template>
  <a-config-provider :locale="zhCN">
    <div class="app-root">
      <Test></Test>
      <router-view />
    </div>
  </a-config-provider>
</template>

<style scoped>
.app-root {
  width: 100%;
  height: 100%;
}
</style>
