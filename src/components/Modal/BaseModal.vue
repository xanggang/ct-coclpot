<template>
  <VueFinalModal
    v-model="bindValue"
    v-bind="bindAttributes"
    @click-outside="handleClose"
    @before-open="$emit('before-open', $event)"
    @opened="$emit('opened', $event)"
    @before-close="$emit('before-close', $event)"
    @closed="$emit('closed', $event)"
  >
    <div class="dc-bg-modal-header">
      <slot name="title">
        <div class="dc-bg-modal-header-title">{{ title }}</div>
      </slot>
      <div class="dc-bg-modal-header-operate">
        <template v-if="showFull">
          <div
            class="icon-bar hvr-pulse-grow"
            v-if="!isFullScreen"
            @click="isFullScreen = true">
            <img src="./1.png" alt="">
          </div>
          <div
            class="icon-bar hvr-pulse-grow"
            v-if="isFullScreen"
            @click="isFullScreen = false">
            <img src="./3.png" alt="">
          </div>
        </template>

        <div class="icon-bar hvr-pulse-grow" @click="handleClose"><img src="./2.png" alt=""></div>
      </div>
    </div>

    <div class="dc-bg-modal-content" :class="{'padding-bottom': (!$slots.foot) && (!showFoot)}">
      <slot></slot>
    </div>

    <div class="dc-bg-modal-foot" v-if="$slots.foot || showFoot">
      <div v-if="showFoot" class="dc-bg-modal-foot-operate">
        <slot name="before-foot-operate"></slot>
        <div class="button submit" @click="$emit('button-submit')" v-if="showFoot && showSubmit">{{ submitText }}</div>
        <div class="button info" @click="$emit('button-info')" v-if="showFoot && showInfo">{{ infoText }}</div>
        <div class="button cancel" @click="$emit('button-cancel')" v-if="showFoot && showCancel">{{ cancelText }}</div>
        <slot name="after-foot-operate"></slot>
      </div>
      <template v-else>
        <slot name="foot"></slot>
      </template>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import { omit } from 'lodash-es'
import { ref, computed, useAttrs, nextTick, onUnmounted, watch } from 'vue'
import { createModalContext } from './modalContext'

const props = defineProps({
  visible: Boolean,
  mode: {
    type: String,
    default: 'default'
  },
  isFull: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  showFoot: {
    type: Boolean,
    default: false
  },
  showSubmit: {
    type: Boolean,
    default: true
  },
  submitText: {
    type: String,
    default: '提交'
  },
  showInfo: {
    type: Boolean,
    default: false
  },
  showFull: {
    type: Boolean,
    default: false
  },
  infoText: {
    type: String,
    default: '提交'
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  }
})

const attrs = useAttrs()

const emit = defineEmits([
  'cancel', 'click-outside', 'opened', 'update:visible', 'update:isFull',
  'close', 'before-open', 'before-close', 'closed', 'button-submit',
  'button-info', 'button-cancel', 'fullScreen'])

const isFullScreen = ref(false)

createModalContext({
  isFullScreen
})

const bindAttributes = computed(() => {
  const contentClass = [
    'dc-bg-center-wrap',
    props.mode,
    { 'full-screen': isFullScreen.value },
    attrs['self-content-class'] || ''
  ]
  const defaultValue = {
    name: null,
    ssr: false,
    classes: '',
    'content-class': contentClass,
    'overlay-class': '',
    styles: {},
    'content-style': {},
    'overlay-style': {},
    'transition': 'vfm',
    'overlay-transition': 'vfm',
    'lock-scroll': true,
    'hide-overlay': false,
    'click-to-close': true,
    'esc-to-close': false,
    'prevent-click': false,
    attach: 'body',
    'z-index-auto': true,
    'z-index-base': 1000,
    'z-index': false,
    'focus-trap': false,
    drag: false,
    'fit-parent': false,
    'drag-selector': '',
    'keep-changed-style': false,
    resize: false,
    'resize-directions': [],
    'min-width': 0,
    'min-height': 0,
    'max-width': 0,
    'max-height': 0,
    ...omit(attrs || {}, ['content-class'])
  }
  return defaultValue
})

const bindValue = computed({
  get: () => props.visible,
  set(v) {
    emit('update:visible', v)
    if (!v) {
      nextTick(() => {
        isFullScreen.value = false
      })
    }
  }
})

function onEscapeKeyUp(event) {
  if (event.which === 27) {
    isFullScreen.value = false
    emit('fullScreen', isFullScreen.value)
  }
}

watch(isFullScreen, (v) => {
  if (v) {
    window.addEventListener('keyup', onEscapeKeyUp)
  } else {
    window.removeEventListener('keyup', onEscapeKeyUp)
  }
  emit('fullScreen', isFullScreen.value)
  emit('update:isFull', isFullScreen.value)
  const myEvent = new Event('resize')
  window.dispatchEvent(myEvent)
})

watch(() => props.isFull, (v) => {
  if (v !== isFullScreen.value) {
    isFullScreen.value = v
  }
}, { immediate: true })

onUnmounted(() => {
  window.removeEventListener('keyup', onEscapeKeyUp)
})

function handleClose() {
  emit('close')
}

</script>

<style lang="less">

.dc-bg-center-wrap {
  width: 60%;
  height: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: #07245f;
  box-shadow: 0px 0px 20px 0px
  rgba(0, 0, 0, 0.25),
  inset 0px 0px 30px 0px
  rgba(16, 218, 255, 0.52);
  border-style: solid;
  border-width: 2px;
  border-image-source: linear-gradient(0deg,
  #0075bf 0%,
  #81c3e3 100%);
  border-image-slice: 1;
  clip-path: inset(0 round 4px);


  &.medium {
    width: 65%;
    height: 65%;
  }

  &.mini {
    width: 50%;
    height: 50%;
  }

  &.full-screen {
    width: 100vw;
    height: 100vh;
  }

  .dc-bg-modal-header {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    font-weight: bold;
    //margin-bottom: 12px;

    .dc-bg-modal-header-title {
      color: #fff;
      font-size: 18px;
      padding-left: 26px;
      position: relative;
      font-weight: bolder;

      &::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: url("@/assets/screen/装饰点-方形.png");
        background-size: cover;
        width: 16px;
        height: 16px;
      }
    }

    .dc-bg-modal-header-operate {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-bar {
        font-size: 16px;
        width: 32px;
        height: 32px;

        & + .icon-bar {
          margin-left: 24px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .dc-bg-modal-header-tabs{
      margin-right: 20px;
    }

    .close-icon {
      cursor: pointer;
      width: 88px;
      height: 30px;
      overflow: hidden;

      .close-icon-bg{
        width: 100%;
        height: 100%;
        margin-left: 12px;
        transform: skewX(-35deg);
        background-color: fade(#000, 40%);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          transform: skewX(35deg);
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  .dc-bg-modal-content {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding: 0 22px 0 22px;

    &.padding-bottom {
      padding-bottom: 22px;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-button {
      background-color: #eee;
      display: none;
    }

    &::-webkit-scrollbar-corner {
      background-color: black;
    }

  }

  .dc-bg-modal-foot {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    flex-shrink: 1;
    color: #333333;
    font-size: 32px;
    font-weight: 700;

    .dc-bg-modal-foot-operate {
      .button {
        display: inline-block;
        line-height: 68px;
        padding: 0 10px;
        color: #ffffff;
        min-width: 220px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        font-size: 28px;
        font-weight: normal;

        &:hover {
          color: #eeeeee;
        }

        & + .button {
          margin-left: 24px;
        }

        &.submit {
          background: #ffc500;
        }

        &.info {
          background: #4d8cff;
        }

        &.cancel {
          background: #b9b9b9;
        }
      }
    }
  }
}

.vfm__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vfm__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Pulse Grow */
@-webkit-keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.hvr-pulse-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  cursor: pointer;
}

.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {
  -webkit-animation-name: hvr-pulse-grow;
  animation-name: hvr-pulse-grow;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
</style>
