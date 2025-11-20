<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/Echart/BaseChart.vue'
import * as echarts from 'echarts'
//
const props = defineProps({
  value: {
    type: [String, Number],
    default: 36
  },
  color: {
    type: String,
    default: 'purple'
  }
})

const purpleColor = ['#906cff', '#d9cffb', '#331583']
const blueColor = ['#5d8bfe', '#3844a6', '#2a2784']

const colors = computed(() => {
  if (props.color === 'purple') {
    return purpleColor
  }
  return blueColor
})


const options = computed(() => {
  return {
    polar: {
      radius: ["70%", "80%"],
      center: ["50%", "50%"],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        roundCap: true,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
          color: colors.value[2],
        },
        data: [props.value],
        coordinateSystem: "polar",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: colors.value[0],
              },
              {
                offset: 1,
                color: colors.value[1],
              },
            ]),
          },
        },
      },
    ],
  }
})
</script>

<template>
  <div class="pie-chart-container" :class="color">
    <BaseChart class="chart" :options="options"></BaseChart>
    <div class="state-wrap">
      <div class="text">
        <div class="value">30</div>
        <div class="unit">%</div>
      </div>

      <img class="icon" src="@/assets/img/arrow-down.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">

.pie-chart-container {
  //width: 100%;
  //height: 100%;
  width: 200px;
  height: 200px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &.purple {
    background-image: url("@/assets/img/pie-bg-blue.png");
  }

  &.blue {
    background-image: url("@/assets/img/pie-bg-purple.png");
  }

  .chart {
    position: relative;
  }

  .state-wrap {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    top: 50%;
    margin-top: -50px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: SourceHanSansSC;;
    font-weight: 500;

    color: #F8F6FF;
    text-align: left;
    font-style: normal;
    text-transform: none;

    .text {
      display: flex;
      align-items: baseline;

      .value {
        font-size: 32px;
      }

      .unit {
        font-size: 16px;
      }
    }

    .icon {
      width: 14px;
      height: 24px;
      margin-left: 2px;
    }

  }
}
</style>
