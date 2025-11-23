<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { ref } from 'vue'

const listData = ref([
  { name: '16:20|已获取省气象局降雨预报预测未来1小时积水稳定在5cm左右 ' },
  { name: '16:15|已获取液位仪最新读数74m，预测积水在30分钟内保持平稳 ' },
  { name: '16:10|已获取管网实时负载，预测排水能力可覆盖下一轮降雨 ' },
  { name: '16:30|已获取AutoGLM气压变化，预测短时降雨概率继续下降 ' },
  { name: '15:55|已获取液位仪积水18cm预测若无干预将于20分钟后升至22cm ' },
  { name: '15:50|已获取省气象局3小时雨量，预测本轮降雨强度趋于减弱 ' },
  { name: '16:15|已获取强排泵开机信息预测积水上涨速度明显放缓' },
]);

</script>

<template>
  <div class="left-top-card">
    <div class="state-wrap">
      <div class="item1 flex-center">
        <img src="@/assets/floodControl/edit-icon.png" alt="">
        <div class="">
          <div>
            <span class="value-text mr-5">8</span>
            <span class="default-text">类</span>
          </div>
          <div class="default-text">权威数据</div>
        </div>
      </div>

      <div class="item2">
        <div>
          <span class="value-text mr-5">13640</span>
          <span class="default-text">次</span>
        </div>
        <div class="default-text">累计沉淀数据</div>
      </div>
    </div>
    <div class="right-table-wrap">
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
</template>

<style scoped lang="less">
.left-top-card {
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
    width: 25%;
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
  }

  .right-table-wrap {
    width: 65%;
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.51);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 20px;

    .table-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .table-item {
      //font-family: Inter, Inter;
      font-weight: 400;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 1.5;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 10px;

      .point {
        width: 10px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        flex-shrink: 1;

        &:after {
          display: block;
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>
