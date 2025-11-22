<script setup>
</script>

<template>
  <div class="container">
    <div class="card top">
      <div class="label">住宅区混装混运智能告警处理</div>
      <div class="img-wrap">
        <div class="img"></div>

        <div class="steps">
          <div class="line-bar">
            <div class="line">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="text-bar">
            <div class="step-text">混装混运告警</div>
            <div class="step-text">清运AI <br> 智慧管理平台</div>
            <div class="step-text">督导员核查</div>
          </div>
        </div>
      </div>

      <div class="text">
        某日上午9：00，清运车辆抵达该清运点作业时，车载尾部高清摄像头自动采集垃圾桶图像，多模态大模型在10秒内识别出“垃圾倾倒过程中将厨余垃圾、其他垃圾共同处理”，系统立即生成“混装混运告警”。
      </div>

    </div>
    <div class="card bottom">
      <div class="label">宣传视频</div>
      <div class="img"></div>
    </div>
  </div>
</template>

<style scoped lang="less">

.container {
  width: 100%;
  height: 100%;
}

.card {
  width: 100%;
  background-image: url("@/assets/clean/Group 7.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 50px 30px 10px;
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

  &.top {
    height: 53%;

    .img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
        width: 330px;
        height: 200px;
        background-image: url("@/assets/clean/Frame(2).png");
        background-size: cover;
        background-repeat: no-repeat;
        flex-shrink: 0;
        margin-right: 30px;
      }

      .steps {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .line-bar {
          width: 30px;
          height: 200px;
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
            width: 12px;
            height: 12px;
            background: #602DB7;
            border-radius: 6px 6px 6px 6px;
            position: absolute;
            left: 50%;
            margin-left: -6px;

            &:nth-child(1) {
              top: 15%;
            }
            &:nth-child(2) {
              top: 50%;
            }
            &:nth-child(3) {
              top: 80%;
            }
          }
        }

        .text-bar {
          width: 100%;
          height: 100%;

          .step-text {
            height: 33%;
            width: 100%;
            font-family: AlibabaPuHuiTi-2-55-Regular;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }

      }
    }



    .text {
      margin-top: 20px;
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  &.bottom {
    background-image: url("@/assets/clean/Group 12.png");
    height: calc(47% - 30px);
    margin-top: 30px;

    .img {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/clean/Frame(5).png");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
