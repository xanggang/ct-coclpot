<script setup>
import Header from '@/components/Header.vue'
import TopNav from './TopNav.vue'
import Left from './Left.vue'
import Right from './Right.vue'

</script>

<template>
  <div class="main-screen">
    <Header title="AI+清运：清运更即时，环境更美好"></Header>

    <div class="main-screen-content">
      <TopNav></TopNav>

      <div class="center-wrap">
        <div class="card left">
          <div class="label">全国首个：自主学习清运调度智能体</div>
          <Left></Left>
        </div>
        <div class="right">
          <Right></Right>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped lang="less">

.main-screen {
  height: 100%;
  width: 100%;
  //background-color: #000;
  background: url("@/assets/floodControl/bg.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .main-screen-content {
    width: 100%;
    height: calc(100% - 110px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 48px;
    padding-right: 48px;

    .center-wrap {
      width: 100%;
      height: calc(100% - 160px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
    }
  }

  .card {
    width: calc(100% - 545px - 30px);
    height: 100%;
    background-image: url("@/assets/clean/Group 5.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 30px 30px 10px;
    box-sizing: border-box;
    position: relative;

    .label {
      position: absolute;
      font-family: AlimamaShuHeiTi;
      top: -20px;
      right: 40px;
      font-size: 24px;
      background: linear-gradient(180deg, #ffffff, #ffffff, #A589E7);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent; /* 兼容性备用 */
    }
  }

  .right {
    width: calc(545px);
    height: 100%;
  }
}

:deep(.value-text) {
  font-family: AlibabaPuHuiTi-2-55-Regular;
  font-weight: normal;
  font-size: 40px;
  color: #3AFFD6;
  font-style: normal;
  text-transform: none;
}

:deep(.default-text) {
  font-family: AlibabaPuHuiTi-2-55-Regular;
  font-weight: normal;
  font-size: 20px;
  color: #FFF;
  font-style: normal;
  text-transform: none;
}

:deep(.mr-5) {
  margin-right: 5px;
}

:deep(.mt-5) {
  margin-top: 5px;
}

:deep(.flex-center) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.text-center) {
  text-align: center;
}
</style>
