<template>
  <sectionLayout title="What is ひよこ開発">
    <textbox>
      <p class="text">
        「ひよこ開発」はメンバー同士の交流や情報交換、勉強のきっかけづくりを目的とした<br />
        有志による若手のみのコミュニティです。
      </p>
      <p class="text">
        「若手の先輩と繋がりたい！」<br />
        「他部署とのつながりがほしい」<br />
        「プログラミングを学んでみたいけど、１人で続けられるか不安」<br />
        「勉強のモチベーションを上げたい」
      </p>
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
.text {
  margin: 40px 0;
  text-align: center;
  font-family: 'Yomogi';
  opacity: 100%;
}
</style>
