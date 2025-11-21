import { inject, provide, Ref } from 'vue'

export const modalSizeKey = 'isFullScreen'

interface ModalSize {
  isFullScreen: Ref<boolean>
}

export function createModalContext(instance: ModalSize) {
  provide(modalSizeKey, instance)
}

export function useModalContext(): ModalSize {
  const res = inject(modalSizeKey)
  if (!res) throw new Error('useModalContext必须在modal内部的组件内使用， 而不能在引入modal的地方用')
  return res as ModalSize
}
