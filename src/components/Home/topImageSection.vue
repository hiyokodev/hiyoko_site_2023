<template>
  <section>
    <div class="Img_Container">
      <img class="img_pc" src="@/assets/img/Home/top_pc.webp" />
      <img class="img_sp" src="@/assets/img/Home/top_sp.webp" />
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  margin-bottom: 100px;
  background-color: #ffffe5;
  -webkit-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
}
.Img_Container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100%;
}

.img_pc {
  width: 100%;
}
.img_sp {
  display: none;
  width: 100%;
}
@media screen and (max-width: 834px) {
  section {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 600px) {
  section {
    margin-bottom: 50px;
  }
  .description {
    margin: 0 0 20px 0;
  }
  .slide {
    margin: 0 10px;
    width: 200px;
    height: auto;
    border-radius: 20px;
  }
  .img_pc {
    display: none;
  }
  .img_sp {
    display: block;
  }
}
</style>
