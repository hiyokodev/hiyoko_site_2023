<template>
  <sectionLayout title="What is ひよこ開発">
    <textbox>
      <p class="text">
        <span>ひよこ開発は、メンバー同士の交流や情報交換、</span>
        <span>勉強のきっかけづくりを目的とした</span>
        <span>有志による若手のみのコミュニティです。</span>
      </p>
      <br />
      <br />
      <p class="text_shadow">
        部署をこえて若手の先輩後輩と繋がりたい<br /><br />
        <span>１人だと続かないので、</span><span>勉強のモチベーションを上げたい</span><br /><br />
        <span>プログラミングを学んでみたいけど、</span><span>何をすればいいかわからない</span>
      </p>
      <br />
      <br />
      <p class="text">そんな思いを抱えた仲間が集まっています。</p>
    </textbox>
  </sectionLayout>
</template>

<script>
import SectionLayout from './SectionLayout.vue'
import textbox from './textbox.vue'
export default {
  components: {
    SectionLayout,
    textbox
  }
}
</script>
<style scoped>
span {
  display: inline-block;
}
.text {
  margin: 0;
}
.text_shadow {
  margin: 0;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
