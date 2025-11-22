<template>
  <div class="main-screen-header">
    <div class="logo"></div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script  setup>

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="less">
.main-screen-header {
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/img/header.png');
  background-size: 100% 100%;
  z-index: 3;

  .logo {
    width: 283px;
    height: 30px;
    position: absolute;
    left: 20px;
    top: 20px;
    background-image: url("@/assets/img/LOGO.png");
    background-size: 100% 100%;
  }


  .title {
    font-family: AlimamaShuHeiTi;
    font-size: 45px;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-top: 20px;

    background: linear-gradient(180deg, #ffffff, #A589E7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* 兼容性备用 */
  }
}
</style>
