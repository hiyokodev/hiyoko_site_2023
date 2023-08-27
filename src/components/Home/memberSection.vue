<template>
  <!-- <sectionLayout title="Member" style="padding: 0"> -->
  <sectionLayout title="Member">
    <p class="description">
      <span>約30名ほどで活動中で、</span>
      <span>男女ともに参加しやすい雰囲気です。</span>
    </p>
    <div class="scroll_pc_container">
      <div class="scroll_pc">
        <!-- FIXME: 見切れ防止のために同じリストを2つ並べている。よりよい方法があれば修正する -->
        <ul class="scroll_list_to_left">
          <li v-for="member in members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
        <ul class="scroll_list_to_left">
          <li v-for="member in members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="scroll_sp_container">
      <div class="scroll_sp">
        <ul class="scroll_list_to_left">
          <li v-for="member in left_members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
        <ul class="scroll_list_to_left">
          <li v-for="member in left_members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
      </div>
      <div class="scroll_sp">
        <ul class="scroll_list_to_right">
          <li v-for="member in right_members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
        <ul class="scroll_list_to_right">
          <li v-for="member in right_members" :key="member">
            <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
          </li>
        </ul>
      </div>
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
  },
  computed: {
    left_members() {
      return this.members.slice(0, 7)
    },
    right_members() {
      return this.members.slice(8, 14)
    }
  }
}
</script>
<style scoped>
.description {
  margin: 0 0 50px 0;
}

span {
  display: inline-block;
}

@keyframes loop_to_left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes loop_to_right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.scroll_pc {
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
.scroll_sp_container {
  display: none;
}
.scroll_sp {
  margin-top: 2px;
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
.scroll_list_to_left {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_left infinite linear 60s both;
}
.scroll_list_to_right {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_right infinite linear 60s both;
}
.slide {
  margin: 0 15px;
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
  }
}
@media screen and (max-width: 600px) {
  .description {
    margin: 0 0 20px 0;
  }
  .scroll_pc_container {
    display: none;
  }
  .scroll_sp_container {
    display: block;
  }
  .slide {
    margin: 0 2px;
    width: 120px;
    border-radius: 10px;
  }
}
</style>
