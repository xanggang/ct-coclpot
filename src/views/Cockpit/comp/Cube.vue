<script setup>

</script>

<template>
<div class="cube-group-wrap">
  <div class="cube"></div>
  <img class="cube-decoration" src="@/assets/img/cube-decoration.png" alt="">
  <div class="ball-base ball1"></div>
<!--  <div class="ball-base ball2"></div>-->
<!--  <div class="ball-base ball3"></div>-->
<!--  <div class="ball-base ball4"></div>-->
<!--  <div class="ball-base ball5"></div>-->
</div>
</template>

<style scoped lang="less">

.cube-group-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  //background-color: #feffe6;

  .cube {
    background-image: url("@/assets/img/cube.png");
    width: 383px;
    height: 323px;
    background-size: contain;
    position: relative;
    z-index: 9;
    animation: floatAndPulse 4s ease-in-out infinite;
  }

  .cube-decoration {
    position: absolute;
    width: 550px;
    height: auto;
    left: 50%;
    margin-left: -275px;
    bottom: 12%;
    animation: floatAndPulse 4s ease-in-out infinite;

  }

  .ball-base {
    background-image: url("@/assets/img/cube-ball.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 200px;
    height: 200px;
    //animation: rotateAroundCenter 2s linear infinite;
  }

  .ball1 {
    transform: scale(1);
    animation-delay: 0s;
    top: 30px;
    right: 20px;
    z-index: 10;
  }

  .ball2 {
    transform: scale(0.8);
    animation-delay: -1.6s;
  }
  .ball3 {
    transform: scale(0.7);
    animation-delay: -3.2s;
  }
  .ball4 {
    transform: scale(0.95);
    animation-delay: -4.8s;
  }
  .ball5 {
    transform: scale(0.95);
    animation-delay: -6.4s;
  }
}

@keyframes floatAndPulse {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  33% {
    transform: translateY(-10px) scale(1.01);
  }
  66% {
    transform: translateY(5px) scale(0.99);
  }
}

/* 添加新的旋转动画 */
@keyframes rotateAroundCenter {
  0% {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

</style>
