<template>
  <sectionLayout title="Member">
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
  </sectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
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
.description {
  margin: 50px;
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
  margin-left: -20px;
  margin-right: -20px;
  width: 100vw;
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
