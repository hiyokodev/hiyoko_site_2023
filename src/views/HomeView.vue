<template>
  <main>
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
export default {
  components: {
    aboutSection,
    memberSection,
    activitySection,
    scheduleSection,
    priceSection,
    questionSection
  }
}
</script>
<style scoped></style>
