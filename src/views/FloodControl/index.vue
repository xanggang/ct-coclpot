<script setup>
import Header from '@/components/Header.vue'
import LeftTopCard from './LeftTopCard.vue'
import LeftCenterCard from './LeftCenterCard.vue'
import LeftBottomCard from './LeftBottomCard.vue'
import RightTopCard from './RightTopCard.vue'
import RightBottomCard from './RightBottomCard.vue'
</script>

<template>
  <div class="main-screen">
    <Header title="AI+防汛:智能预警告警系统"></Header>

    <div class="main-screen-content">
      <div class="subtitle">全国首个AutoGLM防汛智能体</div>

      <div class="main-screen-left">
        <div class="top">
          <LeftTopCard></LeftTopCard>
        </div>
        <div class="center">
          <LeftCenterCard></LeftCenterCard>
        </div>
        <div class="bottom">
          <LeftBottomCard></LeftBottomCard>
        </div>
      </div>
      <div class="main-screen-right">
        <div class="top">
          <RightTopCard></RightTopCard>
        </div>
        <div class="bottom">
          <RightBottomCard></RightBottomCard>
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

  .main-screen-content {
    width: 100%;
    height: calc(100% - 110px);
    position: relative;
    padding-top: 110px;
    padding-right: 80px;
    padding-left: 80px;
    padding-bottom: 42px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;


    .subtitle {
      height: 55px;
      line-height: 55px;
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      text-align: center;
      font-family: AlibabaPuHuiTi-2-85-Bold;
      font-weight: normal;
      font-size: 30px;
      color: #FFFFFF;
      font-style: normal;
      text-transform: none;
    }

    .main-screen-left,.main-screen-right {
      width: calc(50% - 22px);
      height: 100%;
      background-image: url("@/assets/floodControl/Group2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 50px 30px 30px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;

      &:after {
        content: '智能积水预警';
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

    .main-screen-left {

      .top {
        width: 100%;
        height: 40%;
      }

      .center {
        width: 100%;
        height: 10%;
        margin-top: 5%;
        margin-bottom: 5%;
      }

      .bottom {
        width: 100%;
        height: 40%;
        overflow: hidden;
      }
    }


    .main-screen-right {

      &:after {
        content: '智能积水告警';
      }

      .top {
        height: calc(50% - 15px);
        width: 100%;
      }

      .bottom {
        height: calc(50% - 15px);
        width: 100%;
        margin-top: 30px;
      }
    }
  }
}

:deep(.value-text) {
  font-family:AlibabaPuHuiTi-2-85-Bold;
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
