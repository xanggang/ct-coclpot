<script setup>
import ProgressCore from './ProgressCore.vue'
</script>

<template>
<div class="progress-wrap">
  <div class="item">
    <div class="label">巡查综合成本</div>
    <ProgressCore :num="0.4"></ProgressCore>
  </div>
  <div class="item">
    <div class="label">人工投入</div>
    <ProgressCore :num="0.7" color="green"></ProgressCore>
  </div>
  <div class="item">
    <div class="label">重复工作量</div>
    <ProgressCore  :num="0.9" color="green"></ProgressCore>
  </div>
</div>
</template>

<style scoped lang="less">

.progress-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .item:not(:last-child) {
    margin-bottom: 10px;
  }

  .label {
    font-family: SourceHanSansSC, SourceHanSansSC;
    font-weight: 400;
    font-size: 13px;
    color: #9B9ACA;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-bottom: 10px;
  }
}
</style>
