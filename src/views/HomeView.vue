<template>
  <main>
    <!-- <BackgroundEggs /> -->
    <aboutSection />
    <memberSection />
    <activitySection />
    <scheduleSection />
    <priceSection />
    <questionSection />
  </main>
</template>
<script>
import aboutSection from '../components/Home/aboutSection.vue'
import memberSection from '../components/Home/memberSection.vue'
import activitySection from '../components/Home/activitySection.vue'
import scheduleSection from '../components/Home/scheduleSection.vue'
import priceSection from '../components/Home/priceSection.vue'
import questionSection from '../components/Home/questionSection.vue'
import BackgroundEggs from '../components/common/BackgroundEggs.vue'
export default {
  components: {
    aboutSection,
    memberSection,
    activitySection,
    scheduleSection,
    priceSection,
    questionSection,
    BackgroundEggs
  }
}
</script>
<style scoped>
main {
  height: auto;
}
</style>
