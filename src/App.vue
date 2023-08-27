<template>
  <LoadingScreen />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import Footer from './components/common/Footer.vue'
import LoadingScreen from './components/common/LoadingScreen.vue'
export default {
  components: {
    Footer,
    LoadingScreen
  }
}
</script>

<style>
html,
body {
  position: relative;
  overflow-x: hidden;
}
</style>
