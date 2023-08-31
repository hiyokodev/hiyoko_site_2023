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
  -webkit-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
}

.textbox_inner {
  padding: 50px 10px;
  font-size: 18px;
}
@media screen and (max-width: 834px) {
  .textbox_inner {
    padding: 50px 25px;
    font-size: 16px;
  }
}
@media screen and (max-width: 600px) {
  .textbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
    border-radius: 20px;
    background-color: rgba(230, 230, 230, 0.7);
  }

  .textbox_inner {
    padding: 50px 10px;
    font-size: 14px;
  }
}
</style>
