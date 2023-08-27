<template>
  <!-- <BackgroundEggs /> -->
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import BackgroundEggs from './components/common/BackgroundEggs.vue'
import Footer from './components/common/Footer.vue'
export default {
  components: { BackgroundEggs, Footer }
}
</script>

<style scoped></style>
