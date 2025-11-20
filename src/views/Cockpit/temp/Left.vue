<script setup>

</script>

<template>
<div class="left-container">
  <div class="card1" >

    <div class="card-inner"></div>
  </div>

  <div class="card" v-if="false">
    <div class="main-content">
      <div class="header">
        <span>Article on</span>
        <span>29-June-2023</span>
      </div>
      <p class="heading">Different ways to use CSS in React</p>
      <div class="categories">
        <span>React</span>
        <span>Css</span>
      </div>
    </div>
    <div class="footer">
      by Harsh Gupta
    </div>
  </div>

  <div class="card3">
    <div class="inner"></div>
    <div class="mask"></div>
  </div>
</div>
</template>

<style lang="less" scoped>

.left-container {
  width: 100%;
  height: 100%;
  font-size: 14px;
  //background: pink;

  .card1 {
    position: relative;
    //border-radius: 8px;
    background: linear-gradient(45deg, #ff00cc, #333399);
    padding: 2px;
    overflow: hidden;
    width: 200px;
    height: 200px;
    padding: 3px;
    box-sizing: border-box;
    .card-inner {
      width: 100%;
      height: 100%;
      background: #fff;
    }

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(45deg);
      animation: shine 2s infinite linear;
    }

    @keyframes shine {
      0% {
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
      100% {
        transform: translateX(150%) translateY(150%) rotate(45deg);
      }
    }
  }

  /* From Uiverse.io by gharsh11032000 */
  .card {
    width: 320px;
    height: 350px;
    padding: 20px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .main-content {
    flex: 1;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
  }

  .card .categories {
    display: flex;
    gap: 8px;
  }

  .card .categories span {
    background-color: #e81cff;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }
}

.card3 {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: rgb(61, 60, 61);
  margin-top: 20px;
  border-radius: 12px;
  //border: 2px solid rgba(255, 255, 255, 1);
  //animation: borderFade 2s infinite;

  .inner {
    background-color: #323132;
    position: absolute;
    z-index: 99;
    inset: 2px;
    border-radius: 12px;
    //display: none;
  }

  .mask {
    position: absolute;
    z-index: 5;
    height: 50%;
    width: 50%;
    border-radius: 50%;
    //background: #fff;
    //background: linear-gradient(45deg, #ff00cc, #333399);

    background-image: radial-gradient(#ff00cc 0%, #333399 80%,);

    top: 0;
    left: 20%;
    filter: blur(2px);
    animation: move1 6s infinite linear;
  }

  @keyframes move1 {
    0% {
      left: -10%;
      top: -10%;
    }
    25% {
      left: 60%;
      top: -10%;
    }
    50% {
      left: 60%;;
      top: 60%;
    }
    75% {
      left: -10%;
      top: 60%;
    }
    100% {
      left: -10%;
      top: -10%;
    }
  }

  @keyframes borderFade {
    0% {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    50% {
      border: 1px solid rgba(255, 255, 255, 0.25);
    }
    100% {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
