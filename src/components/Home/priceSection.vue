<template>
  <sectionLayout title="Price">
    <div class="textbox">
      <div class="textbox_inner">
        <p class="text_price">年会費：1,000円</p>
        <p class="text_desc">集めたお金は維持費に使わせていただきます。</p>
      </div>
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
.textbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  border-radius: 20px;
  background-color: rgba(230, 230, 230, 0.7);
}

.textbox_inner {
  padding: 50px 0;
}

.text_price {
  margin: 0;
  font-family: 'Mamelon';
  font-size: 40px;
}
.text_desc {
  margin: 20px 0 0 0;
}
</style>
