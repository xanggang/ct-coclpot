<script setup>
import ProgressBar from './ProgressBar.vue'

import Frame3 from '@/assets/clean/Frame(3).png'
import Frame8 from '@/assets/clean/image8(1).png'

import image7 from '@/assets/clean/image7.png'
import image8 from '@/assets/clean/image8.png'
import image9 from '@/assets/clean/image9.png'
import image10 from '@/assets/clean/image8(1).png'
import image11 from '@/assets/clean/image7(1).png'
</script>

<template>
  <div class="left-container">
    <div class="top">
      <div class="top-left">
        <div class="title">
          物联感知层
        </div>

        <a-carousel class="img-card">
          <a-image :src="image7" class="ant-image-img-self" :style="{ objectFit: 'contain' }"></a-image>
          <a-image :src="image8" class="ant-image-img-self" :style="{ objectFit: 'cover' }"></a-image>
          <a-image :src="image9" class="ant-image-img-self" :style="{ objectFit: 'cover' }"></a-image>
        </a-carousel>
<!--        <div class="img-card">-->
<!--          <div class="img1"></div>-->
<!--          <div class="img2"></div>-->
<!--          <div class="img3"></div>-->
<!--        </div>-->

        <div class="title-1">
          高精度定位
        </div>
      </div>
      <div class="top-right">
        <div class="title">
          数据层
        </div>
        <a-carousel class="img-card" autoplay>
          <a-image :src="image10" class="ant-image-img-self" :style="{ objectFit: 'contain' }"></a-image>
          <a-image :src="image11" class="ant-image-img-self" :style="{ objectFit: 'contain' }"></a-image>
        </a-carousel>
        <div class="title-1">
          清运计划
        </div>
      </div>
    </div>

    <div class="bottom">
      <ProgressBar></ProgressBar>
      <div class="bottom-card-wrap">
        <div class="item">
          <div class="title">
            智能排班
          </div>
          <div class="button">3天调度排班</div>
          <div class="button">7天预测计划</div>
<!--          <div class="img"></div>-->
          <a-image :src="Frame3" class="ant-image-img-self-b" width="257" height="129"></a-image>
          <div class="text-blue">智能调度线路</div>
        </div>
        <div class="item item-dubbo">
          <div>
            <div class="title">
              清运结束
            </div>
            <div class="button">3天调度排班</div>
            <div class="button">7天预测计划</div>
          </div>
          <div>
            <div class="title">
              清运结束
            </div>
            <div class="button">3天调度排班</div>
            <div class="button">7天预测计划</div>
          </div>
        </div>
        <div class="item">
          <div class="title">
            智能监管
          </div>
          <div class="button">混装混运识别</div>
          <div class="button">7天预测计划</div>
          <a-image :src="Frame8" class="ant-image-img-self-b" width="257" height="129"></a-image>
          <div class="text-blue">系统告警</div>
        </div>
        <div class="item">
          <div class="title">
            清运结束
          </div>
          <div class="button">3天调度排班</div>
          <div class="button">7天预测计划</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.left-container {
  width: 100%;
  height: 100%;

  .title {
    font-family: AlibabaPuHuiTi-2-55-Regular;
    font-weight: normal;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
  }

  .title-1 {
    font-family: AlibabaPuHuiTi-2-55-Regular;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .img-card {
      width: 100%;
      height: 100%;
      //position: relative;

      div {
        height: 100%;
      }

      img {
        height: 248px;
      }
    }

  }

  .bottom {
    width: 100%;
    height: 50%;

    .bottom-card-wrap {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 10px;

      .item {
        width: 25%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &:after {
          position: absolute;
          content: '';
          display: block;
          background-image: url("@/assets/clean/Polygon 1.png");
          width: 14px;
          height: 12px;
          left: 50%;
          margin-left: -7px;
          background-size: contain;
          background-repeat: no-repeat;
          top: 0;
        }

        &.item-dubbo {
          flex-direction: row;

          > div {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .title {
          font-family: AlibabaPuHuiTi-2-55-Regular;
          font-weight: normal;
          font-size: 18px;
          color: #FFFFFF;
          text-align: center;
          font-style: normal;
          text-transform: none;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .button {
          width: 120px;
          height: 24px;
          background: #291975;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid #6442EE;
          font-family: AlibabaPuHuiTi-2-55-Regular;
          font-weight: normal;
          font-size: 12px;
          color: #FFFFFF;
          text-align: center;
          font-style: normal;
          text-transform: none;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
        }

        .img {
          width: 257px;
          height: 129px;
          //background-size: cover;
          //background-image: url("@/assets/clean/Frame(3).png");
        }

        .ssss8888 {
          width: 257px!important;
          height: 129px!important;
        }

        .img1 {
          width: 257px;
          height: 129px;
          //background-size: cover;
          //background-image: url("@/assets/clean/image8(1).png");
        }

        .text-blue {
          font-weight: 400;
          font-size: 14px;
          color: #3AFFD6;
          text-align: center;
          font-style: normal;
          text-transform: none;
          margin-top: 5px;
        }
      }
    }
  }
}


</style>


<style>
.ant-image-img-self {
  width: 100%;
  height: 300px!important;
}

.ant-image-img-self-b {
  width: 100%;
  height: 129px!important;
}
</style>
