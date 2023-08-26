<template>
  <Header />
  <!-- <BackgroundEggs /> -->
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import Header from './components/common/Header.vue'
import BackgroundEggs from './components/common/BackgroundEggs.vue'
import Footer from './components/common/Footer.vue'
export default {
  components: { Header, BackgroundEggs, Footer }
}
</script>

<style scoped></style>
