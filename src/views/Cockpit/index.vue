<script setup>
import Header from '@/components/Header.vue'
import CenterNavCard from './comp/CenterNavCard.vue'
import LabelComp from './comp/LabelComp.vue'
import Card from './comp/Card.vue'

import Left from './Left.vue'
</script>

<template>
  <div class="main-screen">
<!--    <Header></Header>-->

    <div class="main-screen-content">
      <div class="main-screen-left">
        <Left></Left>
<!--        <LabelComp>AI升级市民服务</LabelComp>-->
<!--        <Card style="height: 300px;margin-top: 10px;"></Card>-->
      </div>
      <div class="main-screen-right">
      </div>
<!--      <SvgCard class="main-screen-right"></SvgCard>-->
<!--      <SvgCardA class="main-screen-right"></SvgCardA>-->

      <div class="main-screen-map flex-center">
<!--        <CenterNavCard class="center-nav-card"></CenterNavCard>-->
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
    height: 100%;
    position: absolute;
    z-index: 1;
    //background: red;

    .center-nav-card {
      position: absolute;
      top: 60px;
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
