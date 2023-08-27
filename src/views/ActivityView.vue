<template>
  <Header />
  <main>
    <h2 class="top">Activity</h2>
    <p class="description">
      <!-- TODO: 文言修正 -->
      ひよこ開発で実施中の主な活動です。<br />
      （仮）今後はもっと増える、やりたいことを始めてみよう的な!
    </p>
    <div class="contents">
      <Website />
      <LT />
      <Events />
      <Button message="入会はこちら！" url="https://forms.gle/jB3XFHcYaj2oLnwy5" />
    </div>
  </main>
</template>

<script>
import Header from '../components/common/Header.vue'
import Website from '../components/Activity/Website.vue'
import LT from '../components/Activity/LT.vue'
import Events from '../components/Activity/Events.vue'
import Button from '../components/common/Button.vue'
export default {
  components: {
    Header,
    Website,
    LT,
    Events,
    Button
  }
}
</script>
<style scoped>
main {
  padding: 20px;
}
.top {
  text-align: center;
  font-size: 60px;
  font-family: 'Mamelon';
  text-shadow: 1px 2px 3px #808080;
}
.description {
  text-align: center;
  font-size: 18px;
  font-family: 'Yomogi';
}

.contents {
  max-width: 1500px;
}

@media only screen and (max-width: 600px) {
  .top {
    font-size: 40px;
  }
}
</style>
