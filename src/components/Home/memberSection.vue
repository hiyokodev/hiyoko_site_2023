<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Member</h2>
    </div>

    <div class="scroll">
      <ul class="scroll-list">
        <li><img class="slide" src="@/assets/img/member1.jpg" alt="" /></li>
        <li><img class="slide" src="@/assets/img/member2.jpg" alt="" /></li>
        <li><img class="slide" src="@/assets/img/member3.jpg" alt="" /></li>
      </ul>
      <ul class="scroll-list">
        <li><img class="slide" src="@/assets/img/member1.jpg" alt="" /></li>
        <li><img class="slide" src="@/assets/img/member2.jpg" alt="" /></li>
        <li><img class="slide" src="@/assets/img/member3.jpg" alt="" /></li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 600px;
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
  font-family: Century;
  font-weight: bold;
  font-size: 50px;
  line-height: 10px;
}

h2 {
  text-align: center;
  font-family: Century;
  font-size: 60px;
}

@keyframes loop {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.slide {
  width: 240px;
  height: auto;
}
.scroll {
  margin: 10px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: max-content;
  overflow-y: hidden;
  border: 2px solid;
  padding: 0px;
  max-width: 1800px;
  color: lightgoldenrodyellow;
}
.scroll-list {
  display: flex;
  align-items: center;
  animation: loop infinite linear 30s both;
  li {
    min-width: 10px;
  }
}
</style>
