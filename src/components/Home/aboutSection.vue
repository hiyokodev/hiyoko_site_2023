<template>
  <sectionLayout title="What is ひよこ開発">
    <div class="text-box">
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
    </div>
    <!-- TODO: 入会フォームのURL設定 -->
    <Button message="入会はこちら！" url="/" :hiyoko_icon="true" />
  </sectionLayout>
</template>

<script>
import SectionLayout from './SectionLayout.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
    Button
  }
}
</script>
<style scoped>
.text-box {
  background-color: rgba(230, 230, 230, 0.7);
  max-width: 650px;
  margin: 20px auto;
  border-radius: 50px;
  padding: 40px;
}

.text {
  margin: 40px 0;
  text-align: center;
  font-family: 'Yomogi';
  opacity: 100%;
}
</style>
