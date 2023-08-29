<template>
  <!-- PC -->
  <div class="pc" v-for="egg in eggsInfo.pc" :key="egg">
    <Egg :initialTop="egg.top" :initialLeft="egg.left" :width="300" />
  </div>
  <!-- タブレット -->
  <div class="tb" v-for="egg in eggsInfo.tb" :key="egg">
    <Egg :initialTop="egg.top" :initialLeft="egg.left" :width="250" />
  </div>
  <!-- スマートフォン -->
  <div class="sp" v-for="egg in eggsInfo.sp" :key="egg">
    <Egg :initialTop="egg.top" :initialLeft="egg.left" :width="200" />
  </div>
</template>

<script>
import Egg from './Egg.vue'

export default {
  props: {
    eggsInfo: {
      type: Object
    }
  },
  components: {
    Egg
  }
}
</script>

<style>
.tb {
  display: none;
}
.sp {
  display: none;
}
@media only screen and (max-width: 834px) {
  .pc {
    display: none;
  }
  .tb {
    display: block;
  }
}
@media only screen and (max-width: 600px) {
  .pc {
    display: none;
  }
  .tb {
    display: none;
  }
  .sp {
    display: block;
  }
}
</style>
