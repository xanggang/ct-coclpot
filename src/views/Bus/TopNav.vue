<script setup>
import img1 from '@/assets/bus/nav-img1.png'
import img2 from '@/assets/bus/nav-img2.png'
import img3 from '@/assets/bus/nav-img3.png'
import img4 from '@/assets/bus/nav-img4.png'
import img5 from '@/assets/bus/nav-img5.png'
import img6 from '@/assets/bus/nav-img6.png'


const config = [
  {
    label: '覆盖线路数量',
    img: img3,
    value: '40',
    unit: '条'
  },
  {
    label: '覆盖车辆数量',
    img: img4,
    value: '341',
    unit: '辆'
  },
  {
    label: '里程利用率',
    img: img6,
    value: '92',
    unit: '%'
  },
  {
    label: '发车间隔',
    img: img1,
    value: '10.9',
    unit: '条'
  },
  {
    label: '百公里客运人次',
    img: img2,
    value: '126.3',
    unit: ''
  },
]
</script>

<template>

  <div class="nav-wrap">
    <div class="nav" v-for="(item, index) in config" :key="index">
      <img :src="item.img" alt="">
      <div>
        <div>
          <span class="value-text">{{ item.value }}</span>
          <span class="default-text">{{ item.unit }}</span>
        </div>
        <div class="default-text mt-5">
          {{ item.label }}
        </div>
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
  height: 120px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    img {
      width: 48px;
      margin-right: 24px;
    }
  }
}

img {
  width: 52px;
}
</style>
