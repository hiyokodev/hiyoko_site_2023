<template>
  <sectionLayout title="Price">
    <textbox>
      <p class="text_price">年会費：1,000円</p>
      <p class="text_desc">集めたお金は維持費に使わせていただきます。</p>
    </textbox>
    <!-- TODO: 入会フォームのURL設定 -->
    <Button message="入会はこちら！" url="/" :hiyoko_icon="true" />
  </sectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import textbox from './textbox.vue'
import Button from '../common/Button.vue'
import textboxVue from './textbox.vue'
export default {
  components: {
    SectionLayout,
    textbox,
    Button
  }
}
</script>
<style scoped>
.text_price {
  margin: 0;
  font-family: 'Mamelon';
  font-size: 40px;
}
.text_desc {
  margin: 20px 0 0 0;
}
@media screen and (max-width: 834px) {
  .text_price {
    font-size: 30px;
  }
  .text_desc {
    margin: 10px 0 0 0;
  }
}
</style>
