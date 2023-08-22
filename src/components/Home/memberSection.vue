<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Member</h2>
      <p class="description">約30名ほどで活動中で、男女ともに参加しやすい雰囲気です。</p>
      <div class="scroll">
        <!-- FIXME: 見切れ防止のために同じリストを2つ並べている。よりよい方法があれば修正する -->
        <ul class="scroll-list">
          <li v-for="member in members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/${member}.jpg`" alt="" />
          </li>
        </ul>
        <ul class="scroll-list">
          <li v-for="member in members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/${member}.jpg`" alt="" />
          </li>
        </ul>
      </div>
      <Button :message="buttonMessage" :url="buttonURL" />
    </div>
  </section>
</template>
<script>
import Button from '../common/Button.vue'
export default {
  components: {
    Button
  },
  data() {
    return {
      buttonMessage: 'メンバーページ',
      buttonURL: '/member',
      // TODO: 写真のトリミング
      members: [
        'sugawara',
        'tauchi',
        'koyama',
        'kawai',
        'takasu',
        'kinomoto',
        'honda',
        'kobayashi',
        'kamiya',
        'tanaka',
        'nomura',
        'sasaki',
        'kunibe',
        'saijo'
      ]
    }
  }
}
</script>
<style scoped>
section {
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
}

h2 {
  text-align: center;
  font-size: 60px;
  font-family: 'Mamelon';
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.description {
  margin: 50px;
  text-align: center;
  font-size: 20px;
  font-family: 'Yomogi';
}

@keyframes loop {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.scroll {
  margin: 10px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: max-content;
  overflow-y: hidden;
  color: lightgoldenrodyellow;
}
.scroll-list {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop infinite linear 60s both;
}
.slide {
  margin: 0 20px;
  width: 240px;
  height: auto;
  border-radius: 20px;
}
</style>
