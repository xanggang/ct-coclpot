<script setup>
import Tabs from '@/views/FloodControl/comp/Tabs.vue'

const config = [
  { label: '坑洞', value: '1' },
  { label: '裂缝', value: '2' },
  { label: '沉陷', value: '3' },
  { label: '车辙', value: '4' },
]
</script>

<template>
  <div class="left-container">

    <div class="left">
      <div class="item">
        <img src="@/assets/env/Frame(2).png" alt="">
        <div>
          <div>
            <span class="value-text mr-5">40</span>
            <span class="default-text mt-5">%</span>
          </div>
          <div class="default-text mt-5">巡查综合成本下降</div>
        </div>
      </div>

      <div class="item">
        <img src="@/assets/env/Frame(3).png" alt="">
        <div>
          <div>
            <span class="value-text mr-5">15</span>
            <span class="default-text mt-5">倍</span>
          </div>
          <div class="default-text mt-5">上报病害数新增倍数</div>
        </div>
      </div>

      <div class="item">
        <img src="@/assets/env/Frame(4).png" alt="">
        <div>
          <div>
            <span class="value-text mr-5">80</span>
            <span class="default-text mt-5">%</span>
          </div>
          <div class="default-text mt-5">灾害识别准确率</div>
        </div>
      </div>

      <div class="item-max">
        <div class="item">
          <img src="@/assets/env/Frame(5).png" alt="">
          <div>
            <div>
              <span class="value-text mr-5">15900</span>
              <span class="default-text mt-5">个</span>
            </div>
            <div class="default-text mt-5">路面灾害识别数量</div>
          </div>
        </div>

        <div class="item-1">
          <div>
            <div class="text-mini">5100</div>
            <div  class="default-text mt-5">人行道病害</div>
          </div>
          <div>
            <div class="text-mini">5100</div>
            <div  class="default-text mt-5">快车道病害</div>
          </div>
        </div>

        <div class="item-1">
          <div>
            <div class="text-mini">4100</div>
            <div  class="default-text mt-5">月季花病害</div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">

      <div class="steps">
        <div class="line-bar">
          <div class="line">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="text-bar">
          <div class="button-item">各类道路病害</div>
          <div class="img-wrap mt-10">
            <img src="@/assets/env/Frame(7).png" alt="">
          </div>
          <Tabs class="mt-10" :config="config"></Tabs>
          <div class="button-item mt-10">端侧小模型粗筛</div>
          <div class="img-wrap mt-10">
            <img src="@/assets/env/Frame(7).png" alt="">
          </div>
          <div class="unit-text">
            智能巡检系统于10月21日检测到人行道出些裂缝类病害。
          </div>
          <div class="button-item mt-10">端侧小模型粗筛</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.left-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .item {
      height: 16%;
      padding-left: 10px;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: linear-gradient( 90deg, #6140e1 0%, #18064f 100%);


      img {
        width: 77px;
        margin-right: 10px;
      }
    }

    .item-max {
      height: 40%;
      padding-left: 10px;
      box-sizing: border-box;
      width: 100%;
      background: linear-gradient( 90deg, #6140e1 0%, #18064f 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;

      .text-mini {
        font-family: AlibabaPuHuiTi-2-55-Regular;
        font-weight: normal;
        font-size: 32px;
        color: #3AFFD6;
        font-style: normal;
        text-transform: none;
      }

      .item {
        background: none;
        height: auto;
      }

      .item-1 {
        padding-left: 97px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        &:last-child {
          margin-bottom: 0;
        }

        > div {
          width: 50%;
        }
      }


    }
  }

  .right {
    width: 50%;
    height: 100%;

    .steps {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .line-bar {
        width: 30px;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .line {
          position: absolute;
          left: 50%;
          margin-left: -1px;
          width: 2px;
          height: 100%;
          background: linear-gradient( 180deg, #C6ADF1 0%, #6039EB 100%);
          border-radius: 0px 0px 0px 0px;
          top: 0;
        }

        .bar {
          width: 18px;
          height: 18px;
          background: #150A49;
          border: 2px solid #A17FEB;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          margin-left: -9px;

          &:nth-child(1) {
            top: 0%;
          }
          &:nth-child(2) {
            top: 45%;
          }
          &:nth-child(3) {
            bottom: 0%;
          }
        }
      }

      .text-bar {
        width: 100%;
        height: 100%;
        padding-left: 20px;

        .img-wrap {
          width: 100%;
          height: 220px;
          overflow: hidden;


          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

    }

    .unit-text {
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}

.button-item {
  width: 192px;
  height: 50px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #492eb7;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.41) 39%, rgba(255, 255, 255, 0.07) 89%, rgba(255, 255, 255, 0.05) 100%);
  font-family: AlibabaPuHuiTi-2-55-Regular;
  font-weight: normal;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
}

:deep(.tabs) {
  .tab {
    width: 25%;
  }
}

.mt-10 {
  margin-top: 10px;
}
</style>
