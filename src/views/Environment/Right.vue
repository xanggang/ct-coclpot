<script setup>
</script>

<template>
  <div class="container">
    <div class="card top">
      <div class="label">住宅区混装混运智能告警处理</div>
      <div class="left">
        <div>
          <div>
            <span class="value-text">70</span>
            <span class="default-text">%</span>
          </div>
          <div class="default-text mt-5">
            人工投入减少
          </div>
        </div>
        <div>
          <div>
            <span class="value-text">90</span>
            <span class="default-text">%</span>
          </div>
          <div class="default-text mt-5">
            重复工作量减少
          </div>
        </div>
        <div>
          <div>
            <span class="value-text">1422</span>
            <span class="default-text">个</span>
          </div>
          <div class="default-text mt-5">
            病毒档案智能监控数
          </div>
        </div>
      </div>

      <div class="right">
        <img src="@/assets/env/Frame(1).png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="process">
        <div class="item">监控数据</div>
        <div class="arrow-wrap"></div>
        <div class="item">特征识别</div>
        <div class="arrow-wrap"></div>
        <div class="item">二次校验</div>
        <div class="arrow-wrap"></div>
        <div class="item">及时告警</div>
      </div>

      <div class="img-wrap">
        <img src="@/assets/env/Frame(8).png" alt="">
      </div>
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
  height: 45%;


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
    padding: 50px 30px 30px 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }

    .right {
      width: 70%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }


}

.bottom {
  width: 100%;
  height: 55%;

  .process {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;

    .item {
      width: 129px;
      height: 55px;
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
      background-image: url("@/assets/env/image 4.png");
      width: 50px;
      height: 70px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: rotate(0deg);
    }
  }

  .img-wrap {
    width: 100%;
    height: calc(100% - 115px - 2px);
    border-radius: 0px 0px 0px 0px;
    border: 2px solid;
    border-image: linear-gradient(90deg, rgba(198, 173, 241, 0.46), rgba(96, 57, 235, 1)) 2 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
