<script setup>

</script>

<template>
  <!-- 播放按钮 -->
  <button
    class="control-btn play-btn"
    :class="{ 'active': currentState === 'playing' }"
    @click.stop="handlePlayClick"
  >
    <!-- 这里可以用 SVG 图标替换 -->
    <span v-if="currentState !== 'playing'">▶</span>
    <span v-else>⏸</span>
  </button>

</template>

<style scoped lang="less">

</style>
