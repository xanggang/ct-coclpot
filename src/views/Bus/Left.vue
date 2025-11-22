<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

import { ref } from 'vue'

const listData = ref([
  { name: '16:20丨客流激增，建议55路发越站车至总管塘站' },
  { name: '16:15丨前车晚点，建议8路8-6193车延迟发车2分钟' },
  { name: '16:10丨朝晖五区至西文村客流增加，建设加开区间车' },
]);

</script>

<template>
  <div class="left-wrap">
    <div class="top">
      <div class="label-wrap">
        <div class="mask"></div>
        <div class="label">全量客流数据</div>
      </div>

      <div class="card-group">
        <div class="card">
          <div class="text-center">
            <span class="value-text mr-5">90</span>
            <span class="default-text text-center">%</span>
          </div>
          <div class="default-text text-center text-16">
            下客流识别
            <br>
            准确率
          </div>
        </div>

        <div class="card">
          <div class="text-center">
            <span class="value-text mr-5">73</span>
            <span class="default-text text-center">次</span>
          </div>
          <div class="default-text text-center text-16">
            智能调度
            <br>
            预警次数
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <img src="@/assets/floodControl/Frame(2).png" alt="">
    </div>
    <div class="bottom">
      <div class="label-wrap">
        <div class="mask"></div>
        <div class="label">秒级告警</div>
      </div>

      <div class="driving-state">
        <div class="video-wrap">
<!--          <img src="@/assets/floodControl/Frame(2).png" alt="">-->
        </div>
        <div class="button-wrap">
          <div class="button-item">危险驾驶</div>
          <div class="button-item">电量不足</div>
          <div class="button-item">客流激增</div>
        </div>
      </div>

      <div class="diaodu">
        <div class="label-wrap mt-5">
          <div class="mask"></div>
          <div class="label">实时智能调度</div>
        </div>
        <div class="table-wrap">
          <vue3-seamless-scroll
            :list="listData"
            class="scroll-content"
            :hover="true"
            :step="0.1"
          >
            <div class="table-item" v-for="(item, index) in listData" :key="index">
              <span class="point"></span>
              <span> {{ item.name }}</span>
            </div>
          </vue3-seamless-scroll>
        </div>
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

  .label-wrap {
    //width: 100px;
    height: 50px;
    align-self: flex-end;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    .mask {
      width: 17px;
      height: 17px;
      background: #64549F;
      border: 2px solid #A17FEB;
      border-radius: 50%;
      margin-right: 20px;
    }

    .label {
      width: 160px;
      height: 50px;
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-weight: normal;
      font-size: 20px;
      color: #FFFFFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
      background: linear-gradient( 90deg, rgba(0,0,0,0.41) 39%, rgba(255,255,255,0.07) 89%, rgba(255,255,255,0.05) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px 8px 8px 8px;
    }
  }

  .top {
    width: 100%;
    height: 126px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-group {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;;

      .card {
        width: 144px;
        height: 125px;
        background: rgba(0,0,0,0.51);
        border-radius: 20px 20px 20px 20px;
        border: 1px solid rgba(255,255,255,0.15);
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .value-text {
          font-size: 36px;
        }
      }
    }
  }

  .center {
    height: 237px;
    width: 100%;
    padding: 8px 8px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.15);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .bottom {
    width: 100%;
    height: calc(100% - 126px - 236px);
    //margin-top: 10px;
    overflow: hidden;
    //display: flex;
    //justify-content: space-between;
    //align-items: center;
    //flex-direction: column;
    //overflow: hidden;

    .driving-state {
      width: 100%;
      height: calc(100% - 145px);
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .video-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 8px 8px;
        border: 1px solid rgba(255,255,255,0.15);
        margin-right: 20px;
        box-sizing: border-box;
        background-image: url("@/assets/floodControl/Frame(2).png");
        background-size: cover;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .button-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .button-item {
          width: 140px;
          height: 50px;
          border-radius: 8px 8px 8px 8px;
          border: 1px solid rgba(255,255,255,0.15);
          background: linear-gradient( 90deg, rgba(0,0,0,0.41) 39%, rgba(255,255,255,0.07) 89%, rgba(255,255,255,0.05) 100%);
          font-family: AlibabaPuHuiTi-2-55-Regular;
          font-weight: normal;
          font-size: 20px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 50px;

          &:not(&:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }

    .diaodu {
      height: 75px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .label-wrap {
        width: 200px;
      }

      .table-wrap {
        overflow: hidden;
        background: rgba(0, 0, 0, 0.51);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 10px;
        height: 75px;
        width: calc(100% - 220px);
        margin-left: 20px;
        border-radius: 8px;

        .table-item {
          //font-family: Inter, Inter;
          font-weight: 400;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 15px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 5px;

          .point {
            width: 10px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
            flex-shrink: 1;

            &:after {
              display: block;
              content: '';
              width: 2px;
              height: 2px;
              border-radius: 50%;
              background: #fff;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
}

.text-16 {
  font-size: 16px!important;
}
</style>
