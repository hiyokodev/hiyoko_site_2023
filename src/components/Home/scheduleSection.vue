<template>
  <sectionLayout title="Schedule">
    <p class="description">
      1ヶ月の活動内容のイメージです。<br />
      <span>どの集まりも任意参加なので、</span>
      <span>興味があるものだけ参加でOK！</span>
    </p>
    <div class="Image_Container">
      <img src="@/assets/img/Home/calender.png" />
    </div>
  </sectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
export default {
  components: {
    SectionLayout
  }
}
</script>
<style scoped>
.description {
  margin: 0 0 50px 0;
  line-height: 40px;
}

span {
  display: inline-block;
}
.Image_Container {
  margin: 0 auto;
  max-width: 800px;
}

img {
  width: 100%;
}
@media screen and (max-width: 834px) {
  .description {
    margin: 0 0 30px 0;
    line-height: 28px;
  }
  .slide {
    margin: 0 10px;
    width: 200px;
    height: auto;
    border-radius: 20px;
  }
}
</style>
