import * as echarts from 'echarts'
import { useTimeoutFn } from './useTimeout'
import { useEventListener } from './useEventListener'
import { tryOnUnmounted, useDebounceFn } from '@vueuse/core'
import { unref, nextTick, watch, computed, ref } from 'vue'

export function useECharts(
  elRef,
  theme= 'default'
) {
  let chartInstance = null
  let resizeFn = resize
  const cacheOptions = ref({})
  let removeResizeFn = () => {
  }

  resizeFn = useDebounceFn(resize, 200)

  const getOptions = computed(() => {
    if (theme !== 'dark') {
      return cacheOptions.value
    }
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value
    }
  })

  function initCharts(t = theme) {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }
    chartInstance = echarts.init(el, t)
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn
    })
    removeResizeFn = removeEvent
    if (el.offsetHeight === 0) {
      useTimeoutFn(() => {
        resizeFn()
      }, 30)
    } else {
      resizeFn()
    }
  }

  function setOptions(options, clear = true) {
    cacheOptions.value = options
    if (unref(elRef)?.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions))
      }, 30)
      return
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts(theme)

          if (!chartInstance) return
        }
        clear && chartInstance?.clear()

        chartInstance?.setOption(unref(getOptions), { notMerge: true })
      }, 30)
    })
  }

  function resize() {
    chartInstance?.resize()
  }

  watch(
    () => theme,
    (theme) => {
      if (chartInstance) {
        chartInstance.dispose()
        initCharts(theme)
        setOptions(cacheOptions.value)
      }
    }
  )

  tryOnUnmounted(() => {
    if (!chartInstance) return
    removeResizeFn()
    chartInstance.dispose()
    chartInstance = null
  })

  function getInstance(){
    if (!chartInstance) {
      initCharts(theme)
    }
    return chartInstance
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance
  }
}
