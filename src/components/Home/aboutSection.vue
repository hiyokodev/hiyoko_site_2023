<template>
  <sectionLayout title="What is ひよこ開発">
    <textbox>
      <p class="text">
        <span>ひよこ開発は、メンバー同士の交流や情報交換、</span>
        <span>勉強のきっかけづくりを目的とした</span>
        <span>有志による若手コミュニティです。</span>
      </p>
      <br />
      <br />
      <p class="text_shadow">
        部署をこえて若手の先輩後輩と繋がりたい<br /><br />
        <span>資格勉強を一緒に頑張る仲間が欲しい</span><br /><br />
        <span>プログラミングを学んでみたいけど、</span><span>始め方がわからない</span>
      </p>
      <br />
      <br />
      <p class="text">
        <span>ひよこ開発は、</span><span>そんなあなたのためのコミュニティです。</span>
      </p>
    </textbox>
    <Button
      message="入会はこちら！"
      url="https://forms.gle/jB3XFHcYaj2oLnwy5"
      :hiyoko_icon="true"
    />
  </sectionLayout>
</template>

<script>
import SectionLayout from './SectionLayout.vue'
import textbox from './textbox.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
    textbox,
    Button
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
