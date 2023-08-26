<template>
  <main>
    <h2 class="top">Activity</h2>
    <div class="contents">
      <Website />
      <LT />
      <Events />
      <div class="button">
        <a class="btn">入会はこちら</a>
      </div>
    </div>
  </main>
</template>

<script>
import Website from '../components/Activity/Website.vue'
import LT from '../components/Activity/LT.vue'
import Events from '../components/Activity/Events.vue'
export default {
  components: {
    Website,
    LT,
    Events
  }
}
</script>
<style scoped>
main {
  padding: 20px;
}

.top {
  text-shadow: 1px 2px 3px #808080;
  text-align: center;
  font-family: 'Mamelon';
  font-size: 500%;
}

.button {
  text-align: center;
}
.btn {
  padding: 8px 24px;
  margin-top: 100px;
  display: inline-block;
  background: #e5e5e2;
  border-bottom: solid 4px #bdbdba;
  font-size: 30px;
  font-family: 'Memelon';
  border-radius: 20px;
  letter-spacing: 1px;
  cursor: pointer;
}

.btn:active {
  border-bottom: none;
  position: relative;
  top: 4px;
}

h2 {
  text-align: left;
  font-family: 'Memelon';
  font-size: 50px;
  padding-left: 7%;
}

p {
  padding-left: 7%;
  padding-right: 7%;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-family: 'Yomogi';
}
/* .hiyoko_img {
  width: 400px;
  height: 150px;
  float: right;
  margin-top: 150px;
} */

/* .back_egg2 {
  margin-top: 1000px;
  margin-left: 800px;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}
.back_egg3 {
  margin-top: 600px;
  margin-left: 50px;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}
.back_egg6 {
  margin-top: 1200px;
  margin-right: auto;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
} */
</style>
