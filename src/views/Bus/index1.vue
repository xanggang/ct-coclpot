
<script setup>
import { CountTo } from 'vue3-count-to';
import { nextTick, ref } from 'vue'
import AbstractionPermitDialog from './AbstractionPermitDialog.vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";


const open = ref(false)

function changeOpen() {
  open.value = !open.value
}

let startVal = ref(0)
const endVal = ref(100)
const isShow = ref(true)

setInterval(() => {
  startVal.value = endVal.value
  endVal.value += 1
  isShow.value = false

  nextTick(() =>  {
    isShow.value = true
  })
}, 3000)

const listData = ref([
  { name: '北京分公司销售额', value: '¥1,234,500' },
  { name: '上海分公司销售额', value: '¥1,100,200' },
  { name: '广州分公司销售额', value: '¥980,000' },
  { name: '深圳分公司销售额', value: '¥850,000' },
  { name: '成都分公司销售额', value: '¥620,000' },
]);
</script>

<template>
  <div style="width: 100vw;height: 100vh; background: #fff;">
    <CountTo :startVal="startVal" :endVal="endVal"></CountTo>
    <button @click="changeOpen"> changeOpen</button>
    <AbstractionPermitDialog v-if="open" @close="open = !open"></AbstractionPermitDialog>

    <div style="width: 300px;height: 300px;border: 1px solid red;overflow: hidden">
      <vue3-seamless-scroll
        :list="listData"
        class="scroll-content"
        :hover="true"
        :step="0.5"
      >
        <div class="item" v-for="(item, index) in listData" :key="index1">
          <span class="index">{{ index1 + 1 }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="value">{{ item.value }}</span>
        </div>
      </vue3-seamless-scroll>
    </div>


  </div>

</template>

<style lang="less" scoped>

* {
  font-size: 18px;
}
</style>
