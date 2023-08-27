<template>
  <img
    src="@/assets/img/Common/background_egg.png"
    class="egg"
    :style="{ top: top + 'px', left: initialLeft + '%', width: width + 'px' }"
    alt="Egg"
  />
</template>

<script>
export default {
  props: {
    initialTop: {
      type: Number,
      default: 0
    },
    initialLeft: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      top: this.initialTop
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.top = this.initialTop + window.pageYOffset / 2
    }
  }
}
</script>

<style scoped>
.egg {
  position: absolute;
  z-index: -10;
  bottom: 0;
}
</style>
