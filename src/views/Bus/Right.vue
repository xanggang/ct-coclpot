<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

import { ref } from 'vue'

const listData = ref([
  { name: '16:20丨客流激增，建议55路发越站车至总管塘站' },
  { name: '16:15丨前车晚点，建议8路8-6193车延迟发车2分钟' },
  { name: '16:10丨朝晖五区至西文村客流增加，建设加开区间车' }
])

</script>

<template>
  <div class="left-wrap">
    <div class="top card">
      <div class="label">市民出行智能体</div>

      <div class="rectangle">
        <div class="button">文旅问答</div>
        <div class="button">路线规划</div>
        <div class="button">多模式交通</div>
        <div class="button">车辆满载</div>
      </div>
      <div class="circle">
        点击
        <br>
        体验
      </div>

    </div>
    <div class="center card">
      <div class="label">公交安全智能体</div>
      <div class="left">
        <div>
          <div>
            <span class="value-text">90</span>
            <span class="default-text">%</span>
          </div>
          <div class="default-text mt-5">
            危险驾驶异常
            <br>
            识别准确率
          </div>
        </div>
        <div>
          <div>
            <span class="value-text">34</span>
            <span class="default-text">次</span>
          </div>
          <div class="default-text mt-5">
            危险驾驶识别次数
          </div>
        </div>
      </div>
      <div class="right">
        <div class="bar">司机 <br> 安全</div>
        <div class="bar">线路 <br> 安全</div>
        <div class="bar">车辆 <br> 安全</div>
        <div class="bar">场站 <br> 安全</div>
      </div>

    </div>
    <div class="bottom card">
      <div class="label">小红车调运智能体</div>
      <div class="left">
        <div>
          <div>
            <span class="value-text">3146</span>
            <span class="default-text">次</span>
          </div>
          <div class="default-text mt-5">
            监控小红车数量
          </div>
        </div>
        <div>
          <div>
            <span class="value-text">58</span>
            <span class="default-text">次</span>
          </div>
          <div class="default-text mt-5">
            调运执行资源数
          </div>
        </div>
      </div>

      <div class="right">
        <div class="item">监控数据</div>
        <div class="arrow-wrap"></div>
        <div class="item">特征识别</div>
        <div class="arrow-wrap"></div>
        <div class="item">二次校验</div>
        <div class="arrow-wrap"></div>
        <div class="item">及时告警</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.left-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.top {
  width: 100%;
  height: calc(30% - 50px);
  background-image: url("@/assets/bus/Group 7.png");
  display: flex;
  justify-content: center;
  align-items: center;

  .rectangle {
    width: 393px;
    height: 94px;
    background: rgba(217,217,217,0.05);
    border-radius: 15px 15px 15px 15px;
    border: 1px solid rgba(255,255,255,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 30px;
    padding: 12px;
  }

  .circle {
    width: 90px;
    height: 90px;
    background: #150543;
    border-radius: 45px 45px 45px 45px;
    border: 1px solid rgba(255,255,255,0.5);
    margin-left: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: AlibabaPuHuiTi-2-55-Regular;
    font-weight: normal;
    font-size: 20px;
    color: #37DDBE;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .button {
    width: 128px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( 90deg, rgba(0,0,0,0.41) 39%, rgba(255,255,255,0.07) 89%, rgba(255,255,255,0.05) 100%);
    border-radius: 5px 5px 5px 5px;
    border: 1px solid rgba(255,255,255,0.15);
    font-family: AlibabaPuHuiTi-2-55-Regular;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}

.center {
  width: 100%;
  height: 40%;
  margin-top: 20px;
  background-image: url("@/assets/bus/Group 8.png");
  display: flex;
  justify-content: center;
  align-items: center;


  .left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 50%;
    }
  }

  .right {
    width: 60%;
    height: 100%;
    background-image: url("@/assets/bus/Frame(1).png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    .bar {
      position: absolute;
      width: 90px;
      height: 90px;
      border-radius: 45px 45px 45px 45px;
      border: 1px solid rgba(255,255,255,0.5);
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

      &:nth-child(1) {
        left: 8%;
        top: 12%;
      }
      &:nth-child(2) {
        right: 8%;
        top: 12%;
      }
      &:nth-child(3) {
        left: 8%;
        top: 50%;
      }
      &:nth-child(4) {
        right: 8%;
        top: 50%;
      }
    }
  }
}

.bottom {
  width: 100%;
  height: 40%;
  margin-top: 20px;
  background-image: url("@/assets/bus/Group 9.png");
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 50%;
    }
  }


  .right {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .item {
      width: 48px;
      height: 138px;
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
      writing-mode: vertical-rl;
      letter-spacing: 5px;
    }

    .arrow-wrap {
      background-image: url("@/assets/floodControl/arrow.png");
      width: 9px;
      height: 17px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: rotate(0deg);
    }
  }
}

.card {
  width: 100%;
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

.text-16 {
  font-size: 16px !important;
}
</style>
