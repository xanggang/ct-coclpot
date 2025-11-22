<script setup>

const bindValue = defineModel('value')


const props =defineProps({
  config: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
<div class="tabs">
  <div
    class="tab"
    :class="{ 'active': item.value === bindValue, normal: item.value !== bindValue}"
    v-for="(item, index) in config"
    :key="index"
    @click="bindValue = item.value"
  >
    <div class="text">
      {{ item.label }}
    </div>

  </div>
</div>
</template>

<style scoped lang="less">

.tabs {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  .tab {
    display: inline-block;
    text-align: center;
    padding: 8px 13px;
    border-radius: 0px 0px 0px 0px;
    border: 1px solid;
    font-family: AlibabaPuHuiTi-2-55-Regular;
    font-weight: normal;
    font-size: 16px;
    font-style: normal;
    text-transform: none;
    border-image: linear-gradient(90deg, rgba(96, 57, 235, 0.2), rgba(59, 24, 144, 1)) 1 1;


    &.normal {
      .text {
        background: linear-gradient(180deg, #ffffff, #ffffff, #A589E7);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent; /* 兼容性备用 */
      }
    }


    &.active {
      border-image: linear-gradient(90deg, rgba(198, 173, 241, 1), rgba(96, 57, 235, 1)) 1 1;
      //background: #292F43;

      .text {
        background: none;
        color: #FFFFFF;
        background-clip: unset;
      }
    }
  }
}
</style>
