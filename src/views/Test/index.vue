<template>
  <div
    class="ai-widget-container"
    :class="{ 'is-expanded': isExpanded }"
  >

    <!-- ================== 展开状态下的内容区域 (左侧) ================== -->
    <div class="expanded-controls" v-if="isExpanded">
      <!-- 播放按钮 -->
      <div
        class="control-btn play-btn"
        :class="{ 'active': subState === 'playing' }"
        @click.stop="handleTogglePlaying"
        v-if="modeState === ModeState.playing"
      >
        <img src="@/assets/player/play.png" v-if="subState !== PlayingEnums.playing">
        <img src="@/assets/player/pause.png" v-if="subState === PlayingEnums.playing" alt="">
<!--        <img src="@/assets/player/stop.png" v-if="subState === PlayingEnums.playing" alt="">-->
        <!-- 这里可以用 SVG 图标替换 -->
<!--        <span v-if="subState !== PlayingEnums.playing">▶</span>-->
<!--        <span v-else>⏸</span>-->
      </div>

      <!-- 录音按钮 -->
      <div
        class="control-btn mic-btn"
        v-if="modeState === ModeState.recording"
        :class="{ 'active': subState === Recording.recording }"
        @click.stop="handleToggleRecording"
      >
        <!-- 这里可以用 SVG 图标替换 -->
        <img src="@/assets/player/recording.png" alt="">
      </div>

      <!-- 波形显示区域 (仅在录音或播放时显示) -->
      <div class="waveform-area" v-if="subState !== Recording.sending">
        <transition name="fade">
          <div :class="{ active: showWaveform}" class="waveform-simulation">
            <!-- 模拟波形动画条 -->
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </transition>
      </div>

      <div class="waveform-area" style="text-align: left" v-else>
        等待响应·····
      </div>
    </div>

    <!-- ================== 收起状态下的文字区域 (中间) ================== -->


    <!-- ================== 常驻的 AI Cube 图标 (最右侧触发器) ================== -->
    <!-- 点击切换展开/收起状态 -->
    <div class="ai-cube-trigger" @click="toggleWidgetState">
      <!--
        请替换下方的 src 为你实际的图片路径
        如果暂时没有图片，可以注释掉 img 标签，取消注释下方的 .cube-placeholder 查看效果
      -->
      <img
        src="/src/assets/img/cube.png"
        alt="AI Assistant"
        class="cube-img"
      />
<!--       <div class="cube-placeholder">AI<br>Cube</div>-->
    </div>

    <div class="collapsed-text" v-if="!isExpanded">
      AI助手
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useAudioRecorder } from '@/utils/useAudioRecorder.js';

const {
  isRecording,
  recordedBlob,
  errorMessage,
  toggleRecording,
  startRecording,
  stopRecording
} = useAudioRecorder();

const ModeState = {
  recording: 'recording',
  playing: 'playing',
  idle: 'idle',
}

const PlayingEnums = {
  pause: 'pause',
  stop: 'stop',
  playing: 'playing',
}

const Recording = {
  sending: 'sending',
  recording: 'recording',
  idle: 'idle',
}

// mode recording 录音 playing 播放  collapsed

// playing子状态 pause stop playing
// recording子状态 Sending 发送中, recording 录音中 结束

// 展开和收起状态
const isExpanded = ref(false)
// 播放或者录音状态
const modeState = ref('')
// 子状态
const subState = ref('sending')

// 计算属性：是否显示波形 (录音或播放时显示)
const showWaveform = computed(() => [Recording.recording, PlayingEnums.playing].includes(subState.value));


// 外部点击 进入播放模式
function player() {
  isExpanded.value = true
  modeState.value = ModeState.playing
  subState.value = PlayingEnums.playing
}

// 点击魔方展开, 默认是进入录音的idle状态
function handleOpenRecording() {
  isExpanded.value = true
  modeState.value = ModeState.recording
  subState.value = Recording.idle
}

// 点击录音
function handleRecording() {
  modeState.value = ModeState.recording
  subState.value = Recording.recording
  // startRecording()
}

// 录音完成
function handleRecordingEnd() {
  if (subState.value !== Recording.recording) return
  subState.value = Recording.sending
  console.log('handleRecordingEnd')

  // const stop = watch(() => recordedBlob.value, (value) => {
  //   // 拿到数据了
  //   console.log('拿到数据了')
  //   console.log(value)
  //   value && handleSubmitData(value)
  // }, { immediate: true })
  //
  // stopRecording()


  // setTimeout(() => {
  //   subState.value = Recording.idle
  //   stop()
  // }, 2000)
}

function handleToggleRecording() {
  if (subState.value === Recording.idle) {
    handleRecording()
    return
  }

  if (subState.value === Recording.recording) {
    handleRecordingEnd()
  }
}

// 暂停
function handlePause() {
  modeState.value = ModeState.playing
  subState.value = PlayingEnums.pause
}

// 继续播放
function handleContinuePlay() {
  modeState.value = ModeState.playing
  subState.value = PlayingEnums.playing
}

function handleTogglePlaying() {
  if (subState.value !== PlayingEnums.playing) {
    handleContinuePlay()
  } else {
    handlePause()
  }
}

// 停止播放
function handleEndPlay() {
  isExpanded.value = false
  modeState.value = ModeState.idle
}


// 切换组件的展开/收起
const toggleWidgetState = () => {
  if (isExpanded.value) {
    isExpanded.value = false
    modeState.value = ''
    subState.value = ''
  } else {
    handleOpenRecording()
    // player()
  }

  // player()
  // console.log('toggleWidgetState')
  // if (isExpanded.value) {
  //   // 如果当前是展开的，就收起
  //   currentState.value = 'collapsed';
  //   // 这里可以添加逻辑：收起时停止录音或播放
  //   console.log('组件收起');
  // } else {
  //   // 如果当前是收起的，就展开到待命状态
  //   currentState.value = 'idle';
  //   console.log('组件展开 (待命状态)');
  // }
};

function handleSubmitData(newBlob) {
  const audioUrl = URL.createObjectURL(newBlob);
  const audio = new Audio(audioUrl);
  audio.play();
}

</script>

<style lang="less" scoped>
// 变量定义，方便调整颜色和尺寸
@bg-gradient: linear-gradient(90deg, rgba(103, 76, 177, 0.79), rgba(125, 159, 251, 0.68));
@height: 48px;
@collapsed-width: 150px; // 收起时的宽度，根据图片预估
@expanded-width: 280px;  // 展开时的宽度，根据图片预估
@border-radius: 24px;
@transition-curve: cubic-bezier(0.34, 1.56, 0.64, 1); // 带有轻微回弹的动画曲线




.ai-widget-container {
  position: fixed;
  top: 100px; // 根据需要调整页面位置
  height: 70px;
  // 核心动画属性：宽度过渡
  width: 120px;
  background: #200749;
  border-radius:  calc(@border-radius * 2) ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  box-sizing: border-box;
  //box-shadow: 0 8px 20px rgba(33, 4, 102, 0.55);
  //overflow: hidden; // 关键：隐藏超出宽度的内容
  transition: width 0.5s @transition-curve;
  z-index: 100;
  font-size: 14px;
  border: 2px solid  rgba(97, 58, 235, 1);
  right: -30px;
  padding-right: 40px;
  box-shadow: -1px -1px 0 #fff;



  // 展开状态的样式覆写
  &.is-expanded {
    width: @expanded-width;
    // 展开时，左侧内边距增大一点，让按钮不靠边
    padding-left: 12px;
    flex-direction: row;
    height:@height;
    right:30px;
    padding-right: 20px;
    //width: @collapsed-width;
  }
}


/* ============ 区域：展开后的控件 (左侧) ============ */
.expanded-controls {
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  // 默认隐藏 (收起状态)
  opacity: 0;
  pointer-events: none; // 收起时不可点击
  // 这里的 transition delay 很重要，等宽度变大后再显示内容
  transition: opacity 0.3s ease-out 0s;

  // 当父容器展开时显示
  .is-expanded & {
    opacity: 1;
    pointer-events: auto;
    // 延迟显示，配合容器宽度变大的动画
    transition-delay: 0.2s;
  }

  // 圆形按钮通用样式
  .control-btn {
    width: 30px;
    height: 30px;
    //border-radius: 50%;
    border: none;
    //background: rgba(255, 255, 255, 0.2);
    //color: white;
    //font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
    background: transparent;

    &:hover {
      //background: rgba(255, 255, 255, 0.3);
    }

    &:active {
      //transform: scale(0.95);
    }

    // 激活状态 (录音或播放中)
    &.active {
      //background: white;
      color: #7F5EFF;
      //box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    // 只有在录音状态才能点击
    &.sending-disabled {
      cursor: not-allowed;

      &:hover {
        //background: rgba(255, 255, 255, 0.2);
      }
    }

    // 点击之后进入发送状态
    &.loading {
      //background: white;
      color: #7F5EFF;
      //box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

/* ============ 区域：波形显示 ============ */
.waveform-area {
  flex-grow: 1;
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  font-size: 16px;
  color: #8bb5ee;
  justify-content: center;
  //margin-left: 10px;
}

// CSS 模拟波形动画
.waveform-simulation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  padding: 0 5px;

  &.active {

    .bar {
      animation: sound-wave 1s infinite ease-in-out;
    }
  }

  .bar {
    display: inline-block;
    width: 2px;
    height: 100%;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.8);
    // 应用动画
    //animation: sound-wave 1s infinite ease-in-out;


    // 为每个条设置不同的延迟，产生波浪感
    &.bar:nth-child(1) {
      animation-delay: 0.1s;
      height: 60%;
    }
    &.bar:nth-child(2) {
      animation-delay: 0.2s;
      height: 55%;
    }
    &.bar:nth-child(3) {
      animation-delay: 0.3s;
      height: 70%;
    }
    &.bar:nth-child(4) {
      animation-delay: 0.4s;
      height: 12%;
    }
    &.bar:nth-child(5) {
      animation-delay: 0.5s;
      height: 85%;
    }
    &.bar:nth-child(6) {
      animation-delay: 0.6s;
      height: 23%;
    }
    &.bar:nth-child(7) {
      animation-delay: 0.7s;
      height: 67%;
    }
    &.bar:nth-child(8) {
      animation-delay: 0.8s;
      height: 95%;
    }
    &.bar:nth-child(9) {
      animation-delay: 0.9s;
      height: 26%;
    }
    &.bar:nth-child(10) {
      animation-delay: 0.1s;
      height: 60%;
    }
    &.bar:nth-child(11) {
      animation-delay: 0.2s;
      height: 55%;
    }
    &.bar:nth-child(12) {
      animation-delay: 0.3s;
      height: 70%;
    }
    &.bar:nth-child(13) {
      animation-delay: 0.4s;
      height: 12%;
    }
    &.bar:nth-child(14) {
      animation-delay: 0.5s;
      height: 85%;
    }
    &.bar:nth-child(15) {
      animation-delay: 0.6s;
      height: 23%;
    }
    &.bar:nth-child(16) {
      animation-delay: 0.7s;
      height: 67%;
    }
    &.bar:nth-child(17) {
      animation-delay: 0.8s;
      height: 95%;
    }
    &.bar:nth-child(18) {
      animation-delay: 0.9s;
      height: 26%;
    }
  }
}

// 波形动画关键帧
@keyframes sound-wave {
  0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
  50% { transform: scaleY(1); opacity: 1; }
}


/* ============ 区域：收起时的文字 (中间) ============ */
.collapsed-text {
  color: #8BB5EE;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s ease-out 0.2s; // 收起时延迟显示
  line-height: 1;
  font-family: SourceHanSansSC;

  // 展开时隐藏
  .is-expanded & {
    opacity: 0;
    transition-delay: 0s; // 展开时立即隐藏
  }
}


/* ============ 区域：AI Cube 触发器 (右侧常驻) ============ */
.ai-cube-trigger {
  width: 46px;
  height: 46px;
  // 稍微向右突出一点，制造立体感
  margin-right: -8px;
  //position: relative;
  z-index: 2;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  // 图片样式
  .cube-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    // 简单的阴影提升立体感
    filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
  }

  // 占位符样式 (如果没有图片时使用)
  .cube-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #a6c1ee, #fbc2eb);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  }
}

.is-expanded {
  .ai-cube-trigger {
    transform: scale(2);
  }
}

// Vue transition 的淡入淡出工具类
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
