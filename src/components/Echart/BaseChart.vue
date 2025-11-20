<template>
  <div :style="{ height, width }" class="chart-container">
    <div ref="chartRef" class="chart-dom"></div>
    <div :class="['nodata', { 'dark' : darkMode}]" v-if="noData || isNoData">
      <img :src="noDataImg" alt="">
      <span class="tip">暂无数据</span>
    </div>
  </div>
</template>
<script >
import { defineComponent, ref, onMounted, watch, computed, inject, onUnmounted } from 'vue'
import noDataImg from '@/assets/img/no-data.png'

import { useECharts } from './hooks/useECharts'

export default defineComponent({
  name: 'BaseEChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    noData: {
      type: Boolean ,
      default: false
    },
    dark: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['register', 'chart-click'],
  setup(props, { emit }) {
    const chartRef = ref(null)
    const { setOptions, getInstance, resize } = useECharts(chartRef)
    const darkMode = inject('darkMode', false)

    onMounted(() => {
      if (!chartRef.value) return
      setOptions(props.options)
      emit('register', {
        getInstance,
        setOptions
      })
      resize()

      const instance = getInstance()
      instance?.on('click', e => {
        emit('chart-click', e)
      })
    })

    onUnmounted(() => {
      const instance = getInstance()
      instance?.off('click')
    })

    const isNoData = computed(() => {
      const ser = props.options?.series ?? []
      return !ser.some(item => item?.data?.length > 0)
    })

    watch(
      () => props.options,
      () => {
        setOptions(props.options)
      },
      { deep: true }
    )
    return {
      chartRef,
      getInstance,
      noDataImg,
      darkMode,
      isNoData,
      resize
    }
  }
})
</script>

<style scoped lang="less">
.chart-container {
  position: relative;

  .nodata {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;

    img {
      width: 15%;
      max-width: 80px;
    }

    .tip {
      margin-top: 15px;
    }

    &.dark {
      background: transparent;
      color: #fff;

      img {
        opacity: 0.8;
      }
    }
  }

  .chart-dom {
    width: 100%;
    height: 100%;
  }

}
</style>
