<script setup>
import Cube from './Cube.vue'
</script>

<template>
  <div class="main-screen-map">
<!--    <div class="ring-1"></div>-->
<!--    <div class="cube-wrap">-->

<!--    </div>-->

    <div class="cube">

    </div>
    <div class="ring-3d"></div>
    <div class="ring-3d-1"></div>
  </div>
</template>

<style lang="less" scoped>

.main-screen-map {
  width: 100%;
  height: calc(100% - 30px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;


  .ring-3d {
    position: absolute;
    bottom: -400px;
    width: 900px;
    height: 900px;
    background-image: url("@/assets/img/img.png");
    background-size: 100% 100%;
    transform: rotateX(100deg) scale(1);
    animation: rotateAroundCenter 10s linear infinite;
  }

  .ring-3d-1 {
    position: absolute;
    bottom: -200px;
    width: 600px;
    height: 600px;
    background-image: url("@/assets/img/img.png");
    background-size: 100% 100%;
    transform: rotateX(100deg) scale(1);
    animation: rotateAroundCenter 20s linear infinite;
  }

}

// 定义旋转动画
@keyframes rotateAroundCenter {
  0% {
    transform: rotateX(100deg) rotateZ(0deg) scale(1);
  }
  50% {
    transform: rotateX(100deg) rotateZ(180deg) scale(1.2);
  }
  100% {
    transform: rotateX(100deg) rotateZ(360deg) scale(1);
  }
}

.cube-wrap {
  width: 40%;
  height: 100%;
  background: rgba(255, 255, 255, 0.13);
}

.cube {
  background-image: url("@/assets/img/cubo.png");
  background-size: 100% 100%;
  width: 208px;
  height: 190px;
  position: absolute;
  bottom: 100px;
  z-index: 99;
  left: 50%;
  margin-left: -100px;
  animation: cubeMove 10s linear infinite;
}

@keyframes cubeMove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
