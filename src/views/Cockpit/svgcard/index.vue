<script setup>

</script>

<template>
<div class="card"></div>
</template>

<style scoped lang="less">

.card {
  width: 400px;
  height: 400px;
  background: #fff;

  background:
    url("./LT.png"),
    url("./CT.png"),
    url("./RT.png"),
    url("./LC.png"),
    url("./LC.png"),
    url("./LB.png"),
    url("./CT.png"),
    url("./RB.png");
  background-position:
    left top,
    center top,
    right top,
    left center,
    right center,
    left bottom,
    center bottom,
    right bottom;
  background-repeat: no-repeat, no-repeat no-repeat, no-repeat, no-repeat, no-repeat;
  background-size:
    150px 50px,
    calc(100% - 100px) 50px,
    50px 50px,
    50px calc(100% - 100px),
    50px calc(100% - 100px),
    50px 50px,
    calc(100% - 100px) 50px,
    50px 50px;
;
}
</style>
