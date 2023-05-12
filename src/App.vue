<template>
  <Header />
  <BackgroundEggs />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import Header from './components/common/Header.vue'
import BackgroundEggs from './components/common/BackgroundEggs.vue'
export default {
  components: { Header, BackgroundEggs }
}
</script>

<style scoped></style>
