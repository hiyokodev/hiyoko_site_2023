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
  margin-bottom: 150px;
  font-size: 20px;
  font-family: 'Yomogi';
  text-align: center;
}
h2 {
  margin: 0 0 50px 0;
  font-size: 60px;
  font-family: 'Mamelon';
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 834px) {
  section {
    margin-bottom: 100px;
    font-size: 16px;
  }
  h2 {
    margin: 0 0 30px 0;
    font-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  section {
    padding: 10px;
    margin-bottom: 100px;
    font-size: 14px;
  }
  h2 {
    margin: 0 0 20px 0;
    font-size: 32px;
  }
}
</style>
