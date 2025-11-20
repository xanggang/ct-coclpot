<script setup>

</script>

<template>
<div class="label-container">

  <div class="label-text">
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="less">

.label-container {
  width: 100%;
  height: 28px;
  background-image: url("@/assets/img/label-bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  .label-text {
    font-family: SourceHanSansSC, SourceHanSansSC;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 0px 14px 18px rgba(33,4,102,0.53);
    text-align: left;
    font-style: normal;
    text-transform: none;

    background: linear-gradient(180deg, #ffffff, #ffffff, #A589E7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* 兼容性备用 */
  }
}
</style>
