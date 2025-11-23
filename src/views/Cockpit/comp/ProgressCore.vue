<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  num: {
    type: Number,
    default: 0.1
  },
  color: {
    type: String,
    default: 'blue'
  },
})

const innerWidth = computed(() => {
  return {
    width: (1 - props.num) * 100 + '%'
  }
})

const textPos = computed(() => {
  return {
    left: (1 - props.num) * 100 < 80 ?  (1 - props.num) * 100 + 5 + '%' : 'calc(100% - 80px)'
  }
})

const showNumber = computed(() => {
  return ( props.num * 100).toFixed(0) + '%'
})

</script>

<template>
  <div class="progress-bar">
    <div class="progress-inner" :class="color" :style="innerWidth">

    </div>

    <div class="text-wrap" :style="textPos">
      <span>{{ showNumber }}</span>
      <img src="@/assets/img/arrow-down-1.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.progress-bar {
  width: 100%;
  height: 22px;
  background: #2d2974;
  border-radius: 1px 1px 1px 1px;
  position: relative;

  .progress-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 80%;
    height: 22px;

    border-radius: 1px 1px 1px 1px;
    text-align: right;
    padding-right: 10px;

    &.blue {
      background: linear-gradient(to right, #4558b9 0%, #6582d1 90%, #899ce5 100%);
    }

    &.green {
      background: linear-gradient(to right, #67cd4f 0%, #7fd563 90%, #c2f3ab 100%);
    }
  }

  .text-wrap {
    position: absolute;
    z-index: 99;
    font-family: AlimamaShuHeiTi;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    font-style: normal;
    text-transform: none;
    text-align: right;
    line-height: 22px;
  }
}
</style>
