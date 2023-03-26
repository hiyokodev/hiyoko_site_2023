<template>
  <Header />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css'
import Header from './components/common/Header.vue'
export default {
  components: { Header }
}
</script>

<style scoped></style>
