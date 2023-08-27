<template>
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import Footer from './components/common/Footer.vue'
export default {
  components: { Footer }
}
</script>

<style>
html,
body {
  position: relative;
  overflow-x: hidden;
}
</style>
