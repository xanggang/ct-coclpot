<script setup>
import Card from './comp/Card.vue'
import Progress from './comp/Progress.vue'
</script>

<template>
<div class="right-container">
  <Card label="AI守护韧性城市" title="路桥"  class="top">
    <Progress class="progress-height"></Progress>

    <div class="card-title">防汛</div>

    <div class="ewarly-statistics-wrap">
      <div class="item">
        <img src="@/assets/img/gaojing.png" alt="">

        <div>
          <span class="value">30</span>
          <span class="text">分钟</span>
        </div>
        <div class="text">
          及时响应
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/gaojing.png" alt="">

        <div>
          <span class="value">7128</span>
          <span class="text">次</span>
        </div>
        <div class="text">
          积水预测
        </div>
      </div>
      <div class="item">
        <img src="@/assets/img/gaojing.png" alt="">

        <div>
          <span class="value">31</span>
          <span class="text">次</span>
        </div>
        <div class="text">
          已检测异常告警
        </div>
      </div>
    </div>
  </Card>

  <Card label="AI提升运营效率" title="环境"  class="bottom">
    <div class="bg">

      <div class="item item1">
        <div class="label">119085</div>
        <div class="text">训练数据量</div>
      </div>

      <div class="item item2">
        <div class="flex-center">
          <span class="label">11</span>
          <span class="text ml-2">%</span>
          <img src="@/assets/img/arrow-down-1.png" alt="">
        </div>
        <div class="text">行驶公里数</div>
      </div>

      <div class="item item3">
        <div class="flex-center">
          <span class="label">86</span>
          <span class="text ml-2">次</span>
        </div>

        <div class="text">迭代次数</div>
      </div>
    </div>
  </Card>
</div>
</template>

<style lang="less" scoped>

.right-container {
  width: 100%;
  height: 100%;
  font-size: 14px;

  .top {
    width: 100%;
    height: 50%;

    .progress-height {
      height: 50%
    }

    .card-title {
      font-family: SourceHanSansSC, SourceHanSansSC;
      font-weight: 500;
      font-size: 18px;
      color: #FFFFFF;
      text-shadow: 0px 14px 18px rgba(33,4,102,0.53);
      text-align: left;
      font-style: normal;
      text-transform: none;
      background: radial-gradient(0deg, #FFFFFF 50%, #A589E7 100%);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      padding-bottom: 10px;
      margin-top: 10px;

      &:before {
        content: '';
        display: block;
        background-image: url("@/assets/img/card-title-icon.png");
        width: 25px;
        height: 16px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    .ewarly-statistics-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: calc(50% - 38px);

      .item {
        width: 100px;

        > * {
          text-align: center;
        }

        img {
          width: 90px;
          height: 90px;
        }

        .value {

          font-family: AlimamaShuHeiTi;
          font-weight: 500;
          font-size: 20px;
          color: #FFFFFF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-right: 5px;
        }

        .text {
          font-family: SourceHanSansSC, SourceHanSansSC;
          font-weight: 400;
          font-size: 13px;
          color: #A8A7DF;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }


  .bottom {
    width: 100%;
    height: 40%;
    margin-top: 20px;

    .bg {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/img/right-button-bg.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
    }

    .item {
      position: absolute;
      width: 100px;
      height: 50px;

      * {
        text-align: center;
      }


      .label {
        font-family: AlimamaShuHeiTi;
        font-weight: bold;
        font-size: 26px;
        color: #FEFEFE;
        font-style: normal;
        text-transform: none;
        margin-bottom: 5px;

        &.blue {
          color: #4EE7FE;
        }
      }

      .text {
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        font-size: 14px;
        color: #CDCCFF;
        font-style: normal;
        text-transform: none;
      }

      img {
        width: 16px;
        height: 19px;
        margin-left: 3px;
      }
    }

    .item1 {
      top: 12%;
      left: 5%;
    }

    .item2 {
      top: 30%;
      right: 39%;
    }

    .item3 {
      top: 12%;
      right: 5%;
    }
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .ml-2 {
    margin-left: 2px;
  }

}
</style>
