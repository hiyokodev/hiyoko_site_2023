<template>
  <sectionLayout title="Price">
    <div class="text-box">
      <div class="text-box-inner">
        <p class="text-large">100円 / 月</p>
        <p>集めたお金はひよこ開発の</p>
        <p>維持費として使用させていただきます。</p>
      </div>
    </div>
    <!-- TODO: 入会フォームのURL設定 -->
    <Button message="入会はこちら" url="/" :hiyoko_icon="true" />
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
  position: relative; /* ←文字の親要素に指定 */
  background-color: rgba(230, 230, 230, 0.7);
  max-width: 650px;
  margin: 20px auto;
  border-radius: 50px;
  padding: 150px;
  font-family: 'Yomogi';
}

.text-box-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
}

.text-large {
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  line-height: 10px;
}
</style>
