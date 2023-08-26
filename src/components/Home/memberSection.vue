<template>
  <sectionLayout title="Member">
    <p class="description">約30名ほどで活動中で、男女ともに参加しやすい雰囲気です。</p>
    <div class="scroll">
      <!-- FIXME: 見切れ防止のために同じリストを2つ並べている。よりよい方法があれば修正する -->
      <ul class="scroll-list">
        <li v-for="member in members" :key="member">
          <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
        </li>
      </ul>
      <ul class="scroll-list">
        <li v-for="member in members" :key="member">
          <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
        </li>
      </ul>
    </div>
    <Button message="メンバーページ" url="/member" />
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
      members: [
        'sugawara',
        'kawai',
        'koyama',
        'tauchi',
        'kobayashi',
        'kinomoto',
        'tanaka',
        'honda',
        'nomura',
        'sasaki',
        'kamiya',
        'takasu',
        'kunibe',
        'saijo'
      ]
    }
  }
}
</script>
<style scoped>
.description {
  margin: 0 0 50px 0;
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
  animation: loop infinite linear 50s both;
}
.slide {
  margin: 0 20px;
  width: 240px;
  height: auto;
  border-radius: 20px;
}

li {
  list-style-type: none;
}
@media screen and (max-width: 834px) {
  .description {
    margin: 0 0 30px 0;
  }
  .slide {
    margin: 0 10px;
    width: 200px;
    height: auto;
    border-radius: 20px;
  }
}
</style>
