<template>
  <div class="container">
    <Egg :initialTop="0" :initialLeft="0" />
    <Egg :initialTop="500" :initialLeft="70" />
    <Egg :initialTop="1000" :initialLeft="10" />
    <Egg :initialTop="1500" :initialLeft="90" />
    <Egg :initialTop="2000" :initialLeft="30" />
    <Egg :initialTop="2500" :initialLeft="80" />
    <Egg :initialTop="3000" :initialLeft="20" />

    <!-- 他のコンテンツ -->
  </div>
</template>

<script>
import Egg from './Egg.vue'

export default {
  components: {
    Egg
  }
}
</script>

<style>
.container {
  position: relative;
}
</style>
