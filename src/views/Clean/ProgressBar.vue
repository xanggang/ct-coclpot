<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const index = ref(1)
let timer = null

function run() {
  timer = setInterval(() => {
    if (index.value > 3) {
      index.value = 1
    } else {
      index.value++
    }
  }, 2000)
}

onMounted(run)

onUnmounted(clearInterval(timer))
</script>

<template>
<div class="ProgressBar">
  <div class="line-1"></div>
  <div class="line-2"></div>
  <div class="nav-wrap">
    <div class="nav">
      <div class="button-v">清运前</div>
    </div>
    <div class="nav">
      <div :class="index > 1 ? 'button-v' : 'button-n'">清运开始</div>
    </div>
    <div class="nav">
      <div :class="index > 2 ? 'button-v' : 'button-n'">清运中</div>
    </div>
    <div class="nav">
      <div :class="index > 3 ? 'button-v' : 'button-n'">清运结束</div>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">

.ProgressBar {
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .line-1 {
    width: 50%;
    height: 0px;
    border-bottom: 2px solid #64549F;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 0;
    z-index: 2;
    animation: move 8s linear infinite;
  }

  // 定义旋转动画
  @keyframes move {
    0% {
      width: 12.5%;
    }
    100% {
      width: 100%;
    }
  }

  .line-2 {
    width: 100%;
    height: 0px;
    border-bottom: 2px dashed #64549F;
    //background: #64549F;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 0;
    z-index: 2;
  }

  .nav-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 9;

    .nav {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .button-n {
        width: 100px;
        height: 36px;
        background-size: 100% 100%;
        font-family: AlibabaPuHuiTi-2-55-Regular;
        font-weight: normal;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0D0723;
        border-radius: 18px 18px 18px 18px;
        border: 1px solid #6039EB;
      }

      .button-v {
        width: 100px;
        height: 36px;
        background: #6442EE;
        box-shadow: inset 0px 2px 2px 0px rgba(255,255,255,0.5);
        font-family: AlibabaPuHuiTi-2-55-Regular;
        font-weight: normal;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px 18px 18px 18px;
      }
    }
  }

  &:before {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    left: 0;
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: #7360B9;
    z-index: 3;
    border-radius: 8px 8px 8px 8px;
  }

  &:after {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    right: 0;
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: #7360B9;
    border-radius: 8px 8px 8px 8px;
    z-index: 3;
  }

}
</style>
