<template>
  <Header />
  <main>
    <h2 class="top">Activity</h2>
    <div class="contents">
      <!-- WebSite -->
      <div class="container">
        <div class="img_container">
          <img src="@/assets/img/Activity/tmp_website.png" class="content_img" />
        </div>
        <div class="hiyoko_container">
          <img src="@/assets/img/hiyoko_ashiato01.png" class="website_ashiato" />
          <img src="@/assets/img/hiyoko_01.png" class="website_hiyoko" />
        </div>
      </div>
      <!-- LT -->
      <div class="container">
        <div class="img_container">
          <img src="@/assets/img/Activity/tmp_LT.png" class="content_img" />
        </div>
        <div class="hiyoko_container">
          <img src="@/assets/img/hiyoko_ashiato02.png" class="LT_ashiato" />
        </div>
      </div>
      <!-- Events -->
      <div class="container">
        <div class="img_container">
          <img src="@/assets/img/Activity/tmp_events.png" class="content_img" />
        </div>
        <div class="hiyoko_container">
          <img src="@/assets/img/hiyoko_02.png" class="events_hiyoko" />
          <img src="@/assets/img/hiyoko_ashiato02.png" class="events_ashiato" />
        </div>
      </div>
      <Button message="入会はこちら！" url="#" />
    </div>
  </main>
</template>

<script>
import Header from '../components/common/Header.vue'
import Button from '../components/common/Button.vue'
export default {
  components: {
    Header,
    Button
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

.contents {
  max-width: 1500px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 100px auto;
}
.img_container {
  margin: 0 auto;
  min-width: 800px;
}
.content_img {
  width: 100%;
}
.hiyoko_container {
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
}
.website_ashiato {
  margin-right: 20px;
  height: 30px;
}

.website_hiyoko {
  margin-top: 30px;
  height: 100px;
}

.LT_ashiato {
  margin-top: 100px;
  height: 30px;
}
.events_hiyoko {
  margin-top: 30px;
  margin-right: 20px;
  height: 100px;
}
.events_ashiato {
  height: 30px;
}
</style>
