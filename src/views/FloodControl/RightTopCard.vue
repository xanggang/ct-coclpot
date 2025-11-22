<script setup>
import Tabs from './comp/Tabs.vue'
</script>

<template>
  <div class="right-top-card">
    <div class="state-wrap">
      <div class="item1">
        <img src="@/assets/floodControl/time.png" alt="">
        <div class="">
          <div>
            <span class="value-text mr-5">7 × 24</span>
            <span class="default-text text-center">小时</span>
          </div>
          <div class="default-text text-center mt-5">不间断监测</div>
        </div>
      </div>

      <div class="item1">
        <div class="">
          <div>
            <span class="value-text mr-5">6000000</span>
            <span class="default-text text-center">次</span>
          </div>
          <div class="default-text text-center mt-5">已进行异常检测</div>
        </div>
      </div>
    </div>
    <div class="right-table-wrap">
      <Tabs class="tabs-dom"></Tabs>
      <div class="video-wrap">
        <img src="@/assets/floodControl/Frame(1).png" alt="">

      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.right-top-card {
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tabs-dom {
      flex-shrink: 1;
    }

    .video-wrap {
      width: 100%;
      height: 100%;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;

      img {
        width: 100%;
        height: 100%;

      }
    }

  }
}
</style>
