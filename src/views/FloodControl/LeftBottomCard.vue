<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { ref } from 'vue'

const listData = ref([
  { name: '北京分公司销售额北京分公司销售额北京分公司销售额北京分公司销售额北京分公司销售额北京分公司销售额', value: '¥1,234,500' },
  { name: '上海分公司销售额', value: '¥1,100,200' },
  { name: '广州分公司销售额', value: '¥980,000' },
  { name: '深圳分公司销售额', value: '¥850,000' },
  { name: '成都分公司销售额', value: '¥620,000' },
]);

</script>

<template>
  <div class="left-bottom-card">
    <div class="state-wrap">
      <div class="item1 flex-center">
        <img src="@/assets/floodControl/time.png" alt="">
        <div class="">
          <div>
            <span class="value-text mr-5">1-24</span>
            <span class="default-text">小时</span>
          </div>
          <div class="default-text">预测时间提前</div>
        </div>
      </div>

      <div class="flex-center w-full">
        <div class="item2">
          <div>
            <span class="value-text mr-5">7128</span>
            <span class="default-text">次</span>
          </div>
          <div class="default-text">积水预测</div>
        </div>
        <div class="item2">
          <div>
            <span class="value-text mr-5">2</span>
            <span class="default-text">次</span>
          </div>
          <div class="default-text">已预测积水防线</div>
        </div>
      </div>

    </div>
    <div class="right-table-wrap">
      <div class="table-wrap">
        <img src="@/assets/floodControl/Frame(2).png" alt="">
      </div>
      <div class="title">
        2025年9月2日，智能体提前2小时预警“天鹤路下穿道”积水。
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.left-bottom-card {
  width: 100%;
  height: 100%;
  //border: 1px solid red;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient( 90deg, #2C3145 0%, #1F263A 100%);

  .state-wrap {
    width: 50%;
    height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    .item1 {
      margin-bottom: 20px;
    }

    img {
      margin-right: 24px;
    }

    .item2 {
      width: 50%;
    }
  }

  .right-table-wrap {
    width: 50%;
    height: 100%;
    overflow: hidden;

    .table-wrap {
      width: 100%;
      height: calc(100% - 22px);
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
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-weight: normal;
      font-size: 12px;
      line-height: 1;
      color: #FFFFFF;
      text-align: center;
      font-style: normal;
      text-transform: none;
      margin-top: 10px;
    }
  }
}

.w-full {
  width: 100%;
}
</style>
