<script setup>
import { ref } from 'vue'

const select = ref('1')
const config = [
  { label: '公交1', value: '防汛1' },
  { label: '防汛', value: '防汛2' },
  { label: '路桥', value: '防汛3' },
  { label: '环境', value: '防汛53' },
]
</script>

<template>
<div class="center-nav-card">
  <div class="button"
       :class="{active: select === item.value}"
       @click="select = item.value"
       v-for="(item, index) in config" :key="index">
    <div class="label-text">{{ item.label }}</div>
  </div>
</div>
</template>

<style scoped lang="less">

.center-nav-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .button {
    width: 140px;
    height: 60px;
    background-image: url("@/assets/img/b1.png");
    background-size: 100% 100%;
    color: #a0a3e0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;

    .label-text {
      font-family: SourceHanSansSC-Regular;
      font-weight: bold;
      font-size: 22px;
      color: #A0A3E0;
      margin-top: 5px;
    }


    &.active {
      background-image: url("@/assets/img/b2.png");

      .label-text {
        background: linear-gradient(180deg, #ffffff, #A589E7);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent; /* 兼容性备用 */
        font-size: 22px;
        font-family: SourceHanSansSC-Regular;
      }
    }
  }
}
</style>
