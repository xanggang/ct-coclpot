<script setup>

</script>

<template>
  <div class="cube-group-wrap">
    <div class="cube"></div>
    <img class="cube-decoration" src="@/assets/img/cube-decoration.png" alt="">
    <div class="ball-base ball1">
      <div class="label-container">
        <span class="label">800</span>
        <span class="unit">万元</span>
        <img src="@/assets/img/arrow-down-1.png" alt="">
      </div>
      <div class="unit">
        路桥养护成本
      </div>
    </div>
    <div class="ball-base ball2">
      <div class="label-container">
        <span class="label">200</span>
        <span class="unit">+</span>
      </div>
      <div class="unit">
        AI员工
      </div>
    </div>
    <div class="ball-base ball3">
      <div class="label-container">
        <span class="label">1500  </span>
        <span class="unit">万元</span>
      </div>
      <div class="unit">
        知识产权资产
      </div>
    </div>
    <div class="ball-base ball4">
      <div class="label-container">
        <span class="label">800</span>
        <span class="unit">万元</span>
        <img src="@/assets/img/arrow-down-1.png" alt="">
      </div>
      <div class="unit">
        公交运营成本
      </div>
    </div>
    <div class="ball-base ball5">
      <div class="label-container">
        <span class="label">3000</span>
        <span class="unit">万元</span>
      </div>
      <div class="unit">
        高质量数据资产
      </div>
    </div>
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
    width: 40%;
    height: 40%;
    background-size: contain;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 9;
    animation: floatAndPulse 4s ease-in-out infinite;
  }

  .cube-decoration {
    position: absolute;
    width: 30vw;
    height: auto;
    left: 50%;
    margin-left: -15vw;
    bottom: 12%;
    animation: cubeDecoration 4s ease-in-out infinite;
  }

  .ball-base {
    background-image: url("@/assets/img/cube-ball.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 10vw;
    height: 10vw;
    //animation: rotateAroundCenter 2s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;

    .label-container {
      margin-bottom: 5px;
      margin-top: -30px;

      img {
        width: 16px;
        height: 19px;
        margin-left: 8px;
      }
    }

    .label {
      font-family: AlimamaShuHeiTi;
      font-weight: bold;
      font-size: 21px;
      color: #FEFEFE;
      text-align: left;
      font-style: normal;
      margin-right: 6px;
    }

    .unit {
      font-family: SourceHanSansSC, SourceHanSansSC;
      font-weight: 400;
      font-size: 13px;
      color: #D3C5FE;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .ball1 {
    transform: scale(0.8);
    animation-delay: 0s;
    top: 48%;
    right: 12%;
    z-index: 10;
  }

  .ball2 {
    transform: scale(0.9);
    animation-delay: -1.6s;
    top: 13%;
    right: 6%;
  }

  .ball3 {
    transform: scale(0.89);
    animation-delay: -3.2s;
    top: 3%;
    left: 40%;
    z-index: 12;
  }

  .ball4 {
    transform: scale(0.95);
    animation-delay: -4.8s;
    top: 20%;
    left: 6%;
  }

  .ball5 {
    transform: scale(0.8);
    animation-delay: -6.4s;
    top: 50%;
    left: 10%;
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

@keyframes cubeDecoration {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  33% {
    transform: translateY(0) scale(1.01);
  }
  66% {
    transform: translateY(0) scale(0.99);
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
