<script setup>
import Card from './comp/Card.vue'
import PieChart from './comp/PieChart.vue'
import * as echarts from 'echarts'
import LeftTopCardWrap from './comp/LeftTopCardWrap.vue'

const options = {
  // backgroundColor: "#111",
  polar: {
    radius: ["60%", "70%"],
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
        color: "#321681",
      },
      data: [50],
      coordinateSystem: "polar",

      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#906cff",
            },
            {
              offset: 1,
              color: "#d9cffb",
            },
          ]),
        },
      },
    },
  ],
};

</script>

<template>
<div class="left-container">
  <div class="top">
    <Card title="这里是一个标题">
      <div class="pie-wrap">
        <PieChart class="pie" color="purple" :options="options"></PieChart>
        <PieChart class="pie" color="blue" :options="options"></PieChart>
      </div>

      <div class="text-wrap">
        <div>交通事故率</div>
        <div>交通高峰期游客
          <br>
          平均滞留时间缩短</div>
      </div>

      <LeftTopCardWrap></LeftTopCardWrap>

    </Card>
  </div>
  <div class="bottom"></div>
</div>
</template>

<style lang="less" scoped>

.left-container {
  width: 100%;
  height: 100%;
  font-size: 14px;

  .top {
    width: 100%;
    height: 50%;

    .pie-wrap {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .pie {
        width: 50%;
        height: 200px;
      }
    }

    .text-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      > div {
        width: 50%;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        font-size: 14px;
        color: #A8A7DF;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
    }
  }

  .bottom {
    width: 100%;
    height: 40%;
    border: 1px solid #fff;
    margin-top: 20px;
  }
 }

</style>
