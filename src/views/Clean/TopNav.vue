<script setup>
import img1 from '@/assets/bus/nav-img1.png'
import img2 from '@/assets/bus/nav-img2.png'
import img3 from '@/assets/bus/nav-img3.png'
import img4 from '@/assets/bus/nav-img4.png'
import img5 from '@/assets/bus/nav-img5.png'
import img6 from '@/assets/bus/nav-img6.png'


const config = [
  {
    label: '训练数据量',
    img: img3,
    value: '11908',
    unit: '条'
  },
  {
    label: '终身学习智能体迭代次数',
    img: img4,
    value: '157900',
    unit: '次'
  },
  {
    label: '异常警告次数',
    img: img6,
    value: '20',
    unit: '次'
  },
  {
    label: '识别准确率',
    img: img1,
    value: '90',
    unit: '%'
  },
  {
    label: '安全作业检覆盖率',
    img: img2,
    value: '100',
    unit: '%'
  },
  {
    label: '监管效率提升',
    img: img2,
    value: '90',
    unit: '%'
  },
]
</script>

<template>

  <div class="nav-wrap">
    <div class="nav" v-for="(item, index) in config.slice(0, 3)" :key="index">
      <div class="text-center">
        <span class="value-text mr-5">{{ item.value }}</span>
        <span class="default-text">{{ item.unit }}</span>
      </div>
      <div class="default-text mt-5 text-center">
        {{ item.label }}
      </div>
    </div>
<div class="line"></div>
    <div class="nav" v-for="(item, index) in config.slice(3)" :key="index">
      <div class="text-center">
        <span class="value-text mr-5">{{ item.value }}</span>
        <span class="default-text">{{ item.unit }}</span>
      </div>
      <div class="default-text mt-5 text-center">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.nav-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  position: relative;
  flex-shrink: 1;
  height: 130px;
  box-sizing: border-box;

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: calc(100% - 50px);
    height: 1px;
    bottom: 0;
    background: rgba(255,255,255,0.15);
    left: 25px;
  }

  .nav {
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //height: 80px;
  }

  .line {
    width: 2px;
    height: 50px;
    background: #3AFFD6;
    border-radius: 0px 0px 0px 0px;
  }
}

img {
  width: 52px;
}
</style>
