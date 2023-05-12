<template>
  <div
    class="egg"
    :style="{ top: top + 'px', left: (initialLeft * windowWidth) / 100 + 'px' }"
  ></div>
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
    }
  },
  data() {
    return {
      top: this.initialTop,
      windowWidth: window.innerWidth // ウィンドウの幅を保存
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      this.top = this.initialTop + window.pageYOffset / 8
    },
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
.egg {
  position: absolute;
  width: 200px;
  height: 300px;
  background-color: rgba(255, 255, 204, 0.5);
  border-radius: 50%;
  transform: rotate(45deg);
  z-index: -1;
}
</style>
