<script setup>

const config = [
  { label: '接入专有数据', value: '3亿+' },
  { label: '公交2', value: '防汛2' },
  { label: '公交3', value: '防汛3' },
]
</script>

<template>
<div class="nav-card-wrap">
  <div class="card-item" v-for="(item, index) in config" :key="index">
    <div class="label">{{item.label}}</div>
    <div class="value">{{ item.value }}</div>
  </div>
</div>
</template>

<style scoped lang="less">

.nav-card-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  row-gap: 12px;

  .card-item {
    width: 100%;
    height: 100%;
    background-image: url("@/assets/img/card-bg-2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .label {
      font-family: SourceHanSansSC, SourceHanSansSC;
      font-weight: 400;
      font-size: 14px;
      color: #CFCEFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .value {
      font-family: SourceHanSansSC, SourceHanSansSC;
      font-weight: bold;
      font-size: 20px;
      color: #FEFEFE;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-top: 10px;
      padding-top: 10px;
    }
  }
}
</style>
