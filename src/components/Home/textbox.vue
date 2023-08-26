<template>
  <div class="textbox">
    <div class="textbox_inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.textbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 20px;
  background-color: rgba(230, 230, 230, 0.7);
}

.textbox_inner {
  padding: 50px;
}
</style>
