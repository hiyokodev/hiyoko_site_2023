<template>
  <!-- TODO: リファクタ -->
  <ul class="scroll_list_to_left" v-if="!reverse && !half">
    <!-- 通常 -->
    <img class="slide" src="@/assets/img/Members/up/sugawara.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kawai.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/koyama.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/tauchi.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kobayashi.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kinomoto.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/tanaka.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/honda.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/nomura.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/sasaki.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kamiya.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/takasu.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kunibe.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/saijo.webp" alt="" />
  </ul>
  <ul class="scroll_list_to_left" v-if="!reverse && half == 'left'">
    <!-- ハーフ：左 -->
    <img class="slide" src="@/assets/img/Members/up/sugawara.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kawai.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/koyama.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/tauchi.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kobayashi.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kinomoto.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/tanaka.webp" alt="" />
  </ul>
  <ul class="scroll_list_to_right" v-if="reverse && half == 'right'">
    <!-- ハーフ：右 -->
    <img class="slide" src="@/assets/img/Members/up/honda.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/nomura.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/sasaki.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kamiya.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/takasu.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/kunibe.webp" alt="" />
    <img class="slide" src="@/assets/img/Members/up/saijo.webp" alt="" />
  </ul>
</template>
<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    half: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
@keyframes loop_to_left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes loop_to_right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.scroll_list_to_left {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_left infinite linear 60s both;
}
.scroll_list_to_right {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_right infinite linear 60s both;
}
.slide {
  margin: 0 15px;
  width: 240px;
  height: auto;
  border-radius: 20px;
}
li {
  list-style-type: none;
}
@media screen and (max-width: 834px) {
  .slide {
    margin: 0 10px;
    width: 200px;
  }
}
@media screen and (max-width: 600px) {
  .slide {
    margin: 0 2px;
    width: 120px;
    border-radius: 10px;
  }
}
</style>
