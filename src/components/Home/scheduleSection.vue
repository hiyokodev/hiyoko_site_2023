<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Schedule</h2>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 500px;
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
  font-size: 60px;
  font-family: 'Mamelon';
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
