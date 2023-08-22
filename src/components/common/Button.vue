<template>
  <router-link class="Button" :to="url">
    {{ message }}
  </router-link>
</template>

<!-- FIXME: ページ遷移先のスクロール位置が正しくない可能性 -->
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.Button {
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.1s;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 80px;
  width: 200px;
  padding: 12px 24px;
  background-color: #fbea92;
  color: #333;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
}

.Button:hover {
  color: White;
}

.Button:active {
  position: relative;
  top: 3px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: White;
}
</style>
