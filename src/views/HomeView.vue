<template>
  <main>
    <!-- <BackgroundEggs /> -->

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
    topImageSection,
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
