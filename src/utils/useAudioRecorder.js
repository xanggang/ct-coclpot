import { ref, shallowRef } from 'vue';

/**
 * 录音功能 Composable
 */
export function useAudioRecorder() {
  // 响应式状态
  const isRecording = ref(false); // 当前是否正在录音
  const recordedBlob = ref(null); // 最终生成的音频 Blob 数据
  const errorMessage = ref(''); // 用于存储错误信息（如用户拒绝权限）

  // 内部变量 (不需要响应式，shallowRef 用于存储复杂对象)
  const mediaRecorder = shallowRef(null);
  let audioChunks = []; // 用于临时存储录音片段数组

  /**
   * 开始录音
   */
  const startRecording = async () => {
    errorMessage.value = '';
    audioChunks = []; // 重置片段
    recordedBlob.value = null; // 重置之前的录音结果

    // 检查浏览器是否支持
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      errorMessage.value = '您的浏览器不支持音频录制 API。';
      return;
    }

    try {
      // 1. 请求麦克风权限并获取音频流
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 2. 初始化 MediaRecorder
      // 可以根据需要设置 mimeType，例如: { mimeType: 'audio/webm' } 或 'audio/mp4'
      // 如果不设置，浏览器会使用默认支持的格式
      mediaRecorder.value = new MediaRecorder(stream);

      // 3. 事件监听：当有音频数据片段可用时触发
      mediaRecorder.value.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      // 4. 事件监听：录音停止时触发
      mediaRecorder.value.onstop = () => {
        // 将收集到的所有片段组合成一个 Blob 对象
        // 使用 mediaRecorder 实例实际采用的 mimeType
        const mimeType = mediaRecorder.value.mimeType || 'audio/webm';
        const blob = new Blob(audioChunks, { type: mimeType });

        // 更新响应式状态，供外部使用
        recordedBlob.value = blob;
        console.log('录音完成，Blob 已生成:', blob, '格式:', mimeType);

        // 重要：停止所有音频轨道，释放麦克风资源（让浏览器标签页上的红点消失）
        stream.getTracks().forEach(track => track.stop());
        mediaRecorder.value = null;
      };

      // 5. 开始录制
      // 传入 timeslice (毫秒) 可以让 ondataavailable 按时间间隔触发，
      // 不传则在 stop 时一次性触发。这里不传即可。
      mediaRecorder.value.start();
      isRecording.value = true;
      console.log('开始录音...');

    } catch (err) {
      console.error('无法访问麦克风:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorMessage.value = '用户拒绝了麦克风访问权限。';
      } else {
        errorMessage.value = `访问麦克风出错: ${err.message}`;
      }
      isRecording.value = false;
    }
  };

  /**
   * 停止录音
   */
  const stopRecording = () => {
    if (mediaRecorder.value && mediaRecorder.value.state !== 'inactive') {
      mediaRecorder.value.stop(); // 这会触发上面的 onstop 事件
      isRecording.value = false;
      console.log('停止录音...');
    }
  };

  /**
   * 切换录音状态 (点击按钮时调用此方法)
   */
  const toggleRecording = async () => {
    if (isRecording.value) {
      stopRecording();
    } else {
      await startRecording();
    }
  };



  // 返回需要在组件中使用的状态和方法
  return {
    isRecording,
    recordedBlob,
    errorMessage,
    toggleRecording,
    stopRecording,
    startRecording
  };
}
