<script setup></script>

<template>
  <main>
    <!-- 背景の他の卵はスクロールするものを別途作成するためここでは記述しない -->
    <!-- <img src="@/assets/img/hiyoko-haikei04.png" class="back_egg2" />
    <img src="@/assets/img/hiyoko-haikei03.png" class="back_egg3" />
    <img src="@/assets/img/hiyoko-haikei02.png" class="back_egg6" /> -->
    <h2>Activity</h2>

    <div class="contents">
      <!-- Web Site -->
      <div class="container">
        <img src="@/assets/img/website_egg.png" class="website_egg" />
        <img src="@/assets/img/website.jpg" class="website_img" />
        <div class="website_whitebox"></div>
        <img src="@/assets/img/hiyoko_ashiato01.png" class="website_ashiato_img" />
        <img src="@/assets/img/hiyoko_01.png" class="website_hiyoko_img" />
      </div>

      <!-- LT -->
      <div class="container">
        <img src="@/assets/img/LT_egg.png" class="LT_egg" />
        <img src="@/assets/img/LT.jpg" class="LT_img" />
        <div class="LT_whitebox"></div>
        <img src="@/assets/img/hiyoko_ashiato02.png" class="LT_ashiato_img" />
      </div>

      <!-- Events -->
      <div class="container">
        <img src="@/assets/img/events_egg.png" class="events_egg" />
        <img src="@/assets/img/events.jpg" class="events_img" />
        <div class="events_whitebox"></div>
        <img src="@/assets/img/hiyoko_02.png" class="events_hiyoko_img" />
        <img src="@/assets/img/hiyoko_ashiato02.png" class="events_ashiato_img" />
      </div>

      <div class="button">
        <a class="btn">入会はこちら</a>
      </div>

      <img src="@/assets/img/hiyoko_3_01.png" class="hiyoko_img" />
    </div>
  </main>
</template>

<script>
export default {}
</script>
<style scoped>
main {
  padding: 20px;
}

h2 {
  font-family: 'Memelon';
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
  text-align: center;
}

.container {
  position: relative;
  height: 1000px;
}
.website_egg {
  position: absolute;
  top: 50px;
  left: 150px;
  width: 1000px;
  text-shadow: 1px 2px 3px #808080;
}
.website_img {
  position: absolute;
  top: 100px;
  left: 500px;
  width: 700px;
  opacity: 0.9;
  border-radius: 15px;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}
.website_whitebox {
  position: absolute;
  top: 400px;
  left: 100px;
  width: 650px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.website_ashiato_img {
  position: absolute;
  top: 900px;
  left: 600px;
  height: 40px;
}

.website_hiyoko_img {
  position: absolute;
  top: 850px;
  left: 1250px;
  width: 80px;
  height: 90px;
}
.LT_egg {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 800px;
  text-shadow: 1px 2px 3px #808080;
}
.LT_img {
  position: absolute;
  top: 150px;
  left: 200px;
  width: 500px;
  opacity: 0.9;
  border-radius: 8%;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}
.LT_whitebox {
  position: absolute;
  top: 100px;
  left: 500px;
  width: 650px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.LT_ashiato_img {
  position: absolute;
  top: 1000px;
  left: 150px;
  height: 40px;
  transform: skew(-10deg, 5deg);
}
.events_egg {
  position: absolute;
  top: 150px;
  left: 200px;
  width: 900px;
  text-shadow: 1px 2px 3px #808080;
}
.events_img {
  position: absolute;
  top: 150px;
  left: 350px;
  width: 800px;
  opacity: 0.9;
  border-radius: 8%;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}

.events_whitebox {
  position: absolute;
  top: 390px;
  left: 150px;
  width: 550px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.events_ashiato_img {
  position: absolute;
  top: 900px;
  left: 700px;
  height: 40px;
  transform: skew(10deg, -5deg);
}
.events_hiyoko_img {
  position: absolute;
  top: 900px;
  left: 600px;
  width: 80px;
  height: 90px;
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

.hiyoko_img {
  width: 400px;
  height: 150px;
  float: right;
  margin-top: 150px;
}

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
