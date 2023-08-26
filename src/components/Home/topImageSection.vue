<template>
  <section>
    <div class="Img_Container">
      <img src="@/assets/img/Home/top.png" />
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
/* TODO: ヘッダーと合わせて背景色を変更（透過版の画像待ち） */
section {
  /* padding-bottom: 50px; */
  background-color: #ffffe5;
}
.Img_Container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100%;
}

img {
  width: 100%;
}
</style>
