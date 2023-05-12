<template>
  <div class="scroll-container">
    <div class="animated-object" :style="{ transform: objectTransform }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectTransform: 'translateX(0%)'
    }
  },
  methods: {
    updateTransform() {
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      const translateX = scrollPosition * 2000
      this.objectTransform = `translateX(${translateX}%)`
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateTransform)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateTransform)
  }
}
</script>

<style scoped>
.scroll-container {
  height: 200%;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.animated-object {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  position: absolute;
  transition: transform 0.3s ease-out;
}
</style>
