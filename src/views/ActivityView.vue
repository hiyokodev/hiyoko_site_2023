<template>
  <Header />
  <main>
    <h2 class="top">Activity</h2>
    <div class="contents">
      <Website />
      <LT />
      <Events />
      <Button message="入会はこちら！" url="/" />
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
  text-shadow: 1px 2px 3px #808080;
  text-align: center;
  font-family: 'Mamelon';
  font-size: 500%;
}

h2 {
  font-family: 'Memelon';
  font-size: 50px;
}

p {
  padding-left: 7%;
  padding-right: 7%;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-family: 'Yomogi';
}
</style>
