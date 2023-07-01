<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Schedule</h2>
      <div class="base">
        <img src="@/assets/img/home/カレンダー.jpg" class="img">
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 800px;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px;
}

h2 {
  text-align: center;
  font-family: Century;
  font-size: 60px;
}

.base{
  background-color: rgb(253, 226, 76);
  height: fit-content;
  text-align: center;
}

.img{
  width: 50%;
  height: 50%;
  padding: 3%;
}
</style>
