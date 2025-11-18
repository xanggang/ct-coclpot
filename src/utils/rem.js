import { debounce } from 'lodash-es'
import { onMounted, onBeforeUnmount } from 'vue'

/**
 * 设置 html font-size
 * @author: king
 * * */
// 设置基准值
      let baseSize = 100 // 设计图尺寸 （1920px）/ 120
// 设置 rem 函数
export const setRem = (customSize, designWidth = 1920) => {
  if (customSize) {
    baseSize = customSize
  }
    const _fun = debounce(() => {
      const scale = document.documentElement.clientWidth / designWidth
      document.documentElement.style.fontSize = `${
        baseSize * Math.max(scale, 1)
      }px`
    }, 100)
    let resizeObserver = null
    onMounted(() => {
      resizeObserver = new ResizeObserver(() => {
        _fun()
      })
      resizeObserver.observe(window.document.body)
    })
      onBeforeUnmount(() => {
        if (resizeObserver.disconnect) {
          resizeObserver.disconnect()
        }
      })
}
