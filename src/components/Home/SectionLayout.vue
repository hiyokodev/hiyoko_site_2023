<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'sectionLayout',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
section {
  padding: 20px;
  margin-bottom: 200px;
  font-size: 20px;
  font-family: 'Yomogi';
  text-align: center;
}
h2 {
  font-size: 60px;
  font-family: 'Mamelon';
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
