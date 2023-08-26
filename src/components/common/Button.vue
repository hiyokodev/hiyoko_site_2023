<template>
  <div class="Button_Container">
    <router-link class="Button" :to="url">
      {{ message }}
    </router-link>
    <div class="Image_Container" v-if="hiyoko_icon">
      <img src="@/assets/img/Common/hiyoko_right.png" />
    </div>
  </div>
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
    },
    hiyoko_icon: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.Button_Container {
  position: relative;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
}
.Button {
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.1s;
  border-radius: 80px;
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
.Image_Container {
  position: absolute;
  top: -20px;
  left: -100px;
  height: 100px;
}

img {
  height: 100%;
}
</style>
