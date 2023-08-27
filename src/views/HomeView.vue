<template>
  <Header backgroundColor="#ffffe5" />
  <main>
    <BackgroundEggs :eggsInfo="eggsInfo" />

    <topImageSection />
    <aboutSection />
    <memberSection />
    <activitySection />
    <scheduleSection />
    <priceSection />
    <questionSection />
  </main>
</template>
<script>
import Header from '../components/common/Header.vue'
import topImageSection from '../components/Home/topImageSection.vue'
import aboutSection from '../components/Home/aboutSection.vue'
import memberSection from '../components/Home/memberSection.vue'
import activitySection from '../components/Home/activitySection.vue'
import scheduleSection from '../components/Home/scheduleSection.vue'
import priceSection from '../components/Home/priceSection.vue'
import questionSection from '../components/Home/questionSection.vue'
import BackgroundEggs from '../components/common/BackgroundEggs.vue'
export default {
  components: {
    Header,
    topImageSection,
    aboutSection,
    memberSection,
    activitySection,
    scheduleSection,
    priceSection,
    questionSection,
    BackgroundEggs
  },
  data() {
    return {
      eggsInfo: {
        pc: [
          { top: 300, left: 5 },
          { top: 650, left: 70 },
          { top: 1000, left: 10 },
          { top: 1500, left: 50 },
          { top: 2000, left: -10 },
          { top: 2500, left: 70 },
          { top: 3000, left: 10 },
          { top: 3200, left: 80 },
          { top: 3700, left: 5 }
        ],
        tb: [
          { top: 140, left: 5 },
          { top: 500, left: 70 },
          { top: 1000, left: 10 },
          { top: 1500, left: 50 },
          { top: 2000, left: -10 },
          { top: 2500, left: 80 },
          { top: 2800, left: 20 }
        ],
        sp: [
          { top: 300, left: 5 },
          { top: 700, left: 70 },
          { top: 1000, left: 10 },
          { top: 1300, left: 80 },
          { top: 1600, left: -10 },
          { top: 1900, left: 60 },
          { top: 2200, left: 20 },
          { top: 2500, left: 80 },
          { top: 2800, left: -5 }
        ]
      }
    }
  }
}
</script>
<style>
main {
  height: auto;
  overflow: hidden;
}
</style>
