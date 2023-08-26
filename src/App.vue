<template>
  <BackgroundEggs />
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

<style>
body {
  position: relative;
  overflow-x: hidden;
}
html,
body {
  height: 100vh;
  margin: 0;
  overflow-y: auto;
}
</style>
