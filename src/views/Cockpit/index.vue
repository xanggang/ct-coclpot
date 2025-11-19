<script setup>
import Header from '@/components/Header.vue'
import Left from './Left.vue'
import Right from './Right.vue'
import Center from './Center.vue'
import SvgCard from './SvgCard.vue'
import SvgCardA from './svgcard/index.vue'
</script>

<template>
  <div class="main-screen">
    <Header></Header>

    <div class="main-screen-content">
      <div class="main-screen-left">
        <Left></Left>
      </div>
<!--      <div class="main-screen-right">-->
<!--&lt;!&ndash;        <Right></Right>&ndash;&gt;-->
<!--  -->
<!--      </div>-->
<!--      <SvgCard class="main-screen-right"></SvgCard>-->
      <SvgCardA class="main-screen-right"></SvgCardA>

      <div class="main-screen-map flex-center">
        <SvgCardA></SvgCardA>
      </div>
<!--      <Center></Center>-->
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
    height: calc(100% - 124px);
  }

  .main-screen-left,
  .main-screen-right{
    width: 24%;
    position: absolute;
    top: 88px;
    bottom: 30px;
    //background: red;
    z-index: 3;
    //background: #333;
  }

  .main-screen-left{
    left: 50px;
  }

  .main-screen-right{
    right: 50px;

  }


  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
