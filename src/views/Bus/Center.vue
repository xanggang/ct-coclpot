<script setup>

</script>

<template>

  <div class="center-container">
    <div class="top">
      <div class="left">
        <img src="@/assets/bus/nav-img5.png" alt="">
        <div>
          <span class="text">78</span>
          <span class="unit-text">人</span>
        </div>
        <div class="unit-text">15分钟后运力盈余</div>
      </div>

      <div class="state-card">
        <div class="card-item">
          <div class="value">2308</div>
          <div class="text">
            总站进站 <br> 总人数
          </div>
        </div>

        <div class="card-item">
          <div class="value">5534</div>
          <div class="text">
            总站出站 <br> 总人数
          </div>
        </div>

        <div class="card-item">
          <div class="value">72308</div>
          <div class="text">
            区域运营 <br> 车总数
          </div>
        </div>

        <div class="card-item">
          <div class="value">122</div>
          <div class="text">
            区域发车 <br> 班次
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="table-wrap">
        <img src="@/assets/floodControl/Frame(2).png" alt="">
      </div>
      <div class="title">
        通过实时精准识别灵隐场站进出通道，获取实时客流，预判运力缺口并提前预警，实现对这一大型景区瞬时客流的高效、前瞻性管控。
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.center-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .top {
    width: 100%;
    height: calc(40% - 10px);
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 56px;
        margin-bottom: 10px;
      }

      .text {
        font-size: 40px;
        font-family: AlibabaPuHuiTi-2-55-Regular;
        color: #3AFFD6;
        margin-right: 10px;
        text-align: center;
      }

      .unit-text {
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin-top: 10px;
      }
    }


    .state-card {
      width: 335px;
      height: 228px;
      background: rgba(217,217,217,0.05);
      border-radius: 8px 8px 8px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 20px 25px;
      box-sizing: border-box;
      flex-shrink: 1;

      .card-item {
        width: 132px;
        height: 88px;
        background: rgba(0,0,0,0.5);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid rgba(255,255,255,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .value {
          font-size: 26px;
          font-family: AlibabaPuHuiTi-2-55-Regular;
          color: #3AFFD6;
          margin-right: 10px;
          text-align: center;
        }

        .text {
          font-size: 16px;
          font-family: AlibabaPuHuiTi-2-55-Regular;
          color: #fff;
          margin-right: 10px;
          text-align: center;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: calc(50% - 10px);
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
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .title {
      flex-shrink: 1;
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-weight: normal;
      font-size: 12px;
      line-height: 1.5;
      color: #FFFFFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-top: 10px;
    }
  }
}
</style>
