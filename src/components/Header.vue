<template>
  <div class="main-screen-header">

    <div class="title">
      <img src="@/assets/img/logo-text.png" alt="" />
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.main-screen-header {
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: space-between;
  background-image: url('@/assets/img/header.png');
  background-size: 100% 100%;
  z-index: 3;


  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    margin-top: 45px;

    img {
      width: 350px;
      height: 47px;
    }
  }
}
</style>
