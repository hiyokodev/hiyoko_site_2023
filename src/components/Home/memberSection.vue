<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Member</h2>
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
  background-color: lightgoldenrodyellow;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px;
}

h2 {
  text-align: center;
}
</style>
