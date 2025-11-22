<script setup>
import Tabs from './comp/Tabs.vue'
</script>

<template>
  <div class="right-bottom-card">
    <div class="state-wrap">
      <div class="item1">
        <img src="@/assets/floodControl/time.png" alt="">
        <div class="">
          <div>
            <span class="value-text mr-5">30</span>
            <span class="default-text text-center">分钟</span>
          </div>
          <div class="default-text text-center mt-5">应急响应</div>
        </div>
      </div>

      <div class="item1">
        <div>
          <span class="value-text mr-5">31</span>
          <span class="default-text text-center">次</span>
        </div>
        <div class="default-text text-center mt-5">已检测异常告警</div>
      </div>
    </div>
    <div class="right-table-wrap">

      <div class="left">
        <div class="item">监控数据</div>
        <div class="arrow-wrap"></div>
        <div class="item">特征识别</div>
        <div class="arrow-wrap"></div>
        <div class="item">二次校验</div>
        <div class="arrow-wrap"></div>
        <div class="item">及时告警</div>
      </div>

      <div class="right">
        <div class="table-wrap">
          <img src="@/assets/floodControl/Frame(2).png" alt="">
        </div>
        <div class="title">
          智能监测系统识别到桐庐县城南街道金牛村董家路段存在电力设施受积水影响风险
          :积水可能浸泡道路两侧电线杆及地下电力设备，导致局部停电或触电隐患，
          系统已通知专业人员现场排查并对相关设备进行断电保护与防水处置。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.right-bottom-card {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;


  .state-wrap {
    width: 25%;
    height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .item1 {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;

      img {
        width: 64px;
        height: 64px;
        margin-bottom: 10px;
      }
    }
  }

  .right-table-wrap {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      width: 30%;
      height: 100%;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      background: linear-gradient( 90deg, #2C3145 0%, #1F263A 100%);
      position: relative;

      .item {
        width: 130px;
        height: 38px;
        background: linear-gradient( 90deg, rgba(0,0,0,0.41) 39%, rgba(255,255,255,0.07) 89%, rgba(255,255,255,0.05) 100%);
        border-radius: 6px 6px 6px 6px;
        border: 1px solid rgba(255,255,255,0.15);
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
      }

      .arrow-wrap {
        background-image: url("@/assets/floodControl/arrow.png");
        width: 9px;
        height: 17px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transform: rotate(90deg);
      }
    }

    .right {
      width: 70%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .table-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.51);
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: linear-gradient( 90deg, #2C3145 0%, #1F263A 100%);
        padding: 20px 16px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        flex-shrink: 1;
        font-family: AlibabaPuHuiTi-2-55-Regular;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        margin-top: 10px;
      }
    }

  }
}
</style>
