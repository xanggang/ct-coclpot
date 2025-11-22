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
  <div class="left-center-card">
    <div class="item">结果复核</div>
    <div class="item">影响分析</div>
    <div class="item">外置建议</div>

    <div class="top-arrow"></div>
    <div class="bottom-arrow"></div>
    <div class="right-arrow"></div>
    <div class="left-arrow"></div>
  </div>
</template>

<style scoped lang="less">
.left-center-card {
  width: 100%;
  height: 100%;
  //border: 1px solid red;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient( 90deg, #2C3145 0%, #1F263A 100%);
  position: relative;

  .item {
    width: 130px;
    height: 38px;
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

  .top-arrow {
    position: absolute;
    top: -20px;
    left: 50%;
    background-image: url("@/assets/floodControl/arrow.png");
    width: 9px;
    height: 17px;
    transform: rotate(90deg);
  }
  .bottom-arrow {
    position: absolute;
    bottom: -30px;
    left: 50%;
    background-image: url("@/assets/floodControl/arrow.png");
    width: 9px;
    height: 17px;
    transform: rotate(90deg);
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 35%;
    margin-top: -9px;
    background-image: url("@/assets/floodControl/arrow.png");
    width: 9px;
    height: 17px;
    transform: rotate(0deg);
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 35%;
    margin-top: -9px;
    background-image: url("@/assets/floodControl/arrow.png");
    width: 9px;
    height: 17px;
    transform: rotate(0deg);
  }
}
</style>
