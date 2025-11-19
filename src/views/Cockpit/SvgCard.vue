<script setup>

</script>

<template>
<div class="card">
  <div class="header">这是一个靠右的标题</div>
  <div class="svg-bg">
    <svg class="svg1" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="none">
<!--      左边的线-->
      <path d="M0 40, L0 20, L0 20, L20 20 L20 0 L70 0 L90 20 L100 20" stroke-width="1" stroke="#fff" fill="none"></path>
      <rect x="0" y="0" width="12" height="12" fill="#fff"></rect>
    </svg>

    <svg  class="svg2" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 20, L100 20" stroke-width="1" stroke="#fff" fill="none"></path>
    </svg>

    <svg  class="svg3" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 20, L20 20 L80 20 L80 100" stroke-width="1" stroke="#fff" fill="none"></path>
    </svg>

  </div>
  <div class="content">

  </div>
</div>
</template>

<style scoped lang="less">

.card {
  width: 100%;
  height: 200px;
  //background: #000;
  padding:  10px;
  //border: 1px solid #fff;
  position: relative;

  .header {
    text-align: right;
    color: #fff;
    font-size: 16px;
    height: 22px;
  }

  .content {
    width: 100%;
    height: calc(100% - 22px);
    background: rgba(255, 255, 255, 0.07);
    position: relative;
    z-index: 2;
  }

  .svg-bg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .svg1 {
      position: absolute;
      left: 0;
      top: 0;
    }

    .svg2 {
      position: absolute;
      left: 200px;
      top: 0;
    }

    .svg3 {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
