<script setup>
import LabelComp from './LabelComp.vue'
defineProps({
  title: {
    type:String,
    default: ''
  },
  label: {
    type:String,
    default: ''
  }
})
</script>

<template>
<div class="slider-card-wrap">
  <LabelComp> {{ label }}</LabelComp>
  <div class="card-wrap">
    <div class="card-title" v-if="title">
      {{ title }}
    </div>
    <div class="card-center">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">

.slider-card-wrap {
  width: 100%;

  .card-wrap {
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 28px - 10px);
    background-image: url("@/assets/img/card-bg.png");
    background-size: 100% 100%;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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

    .card-center {
      width: 100%;
      height: 100%;
      //background: #fff;
    }
  }
}


</style>
