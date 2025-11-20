<script setup>
import Header from '@/components/Header.vue'
import CenterNavCard from './comp/CenterNavCard.vue'
import LabelComp from './comp/LabelComp.vue'
import Card from './comp/Card.vue'

import Left from './Left.vue'
import Right from './Right.vue'
import Cube from './comp/Cube.vue'
</script>

<template>
  <div class="main-screen">
    <Header></Header>

    <div class="main-screen-content">
      <div class="main-screen-left">
        <Left></Left>
      </div>
      <div class="main-screen-right">
        <Right></Right>
      </div>

      <div class="main-screen-map flex-center">
        <CenterNavCard></CenterNavCard>
        <Cube class="cube-comp"></Cube>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">

.main-screen {
  height: 100%;
  width: 100%;
  //background-color: #000;
  background: url("@/assets/img/bg.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;

  .main-screen-content{
    width: 100%;
    height: calc(100% - 110px);
  }

  .main-screen-left,
  .main-screen-right{
    width: 24%;
    position: absolute;
    top: 88px;
    bottom: 24px;
    //background: red;
    z-index: 3;
    //background: #333;
  }

  .main-screen-left{
    left: 24px;
  }

  .main-screen-right{
    right: 50px;

  }

  .main-screen-map{
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;

    .cube-comp {
      width: 45%;
      //border: 1px solid #fff;
      height: calc(100% - 350px);
      margin-top: 80px;
    }

    .center-nav-card {
      position: absolute;
      top: 120px;
      left: 50%;
      margin-left: -300px;
      width: 600px;
    }
  }


  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
