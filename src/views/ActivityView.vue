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
      </div>

      <!-- LT -->
      <div class="container">
        <img src="@/assets/img/LT_egg.png" class="LT_egg" />
        <img src="@/assets/img/LT.jpg" class="LT_img" />
        <div class="LT_whitebox"></div>
      </div>

      <!-- Events -->
      <div class="container">
        <img src="@/assets/img/events_egg.png" class="events_egg" />
        <img src="@/assets/img/events.jpg" class="events_img" />
        <div class="events_whitebox"></div>
      </div>
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

h3 {
  font-family: Century;
  font-size: 40px;
  text-align: left;
  margin-left: 70px;
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
.events_egg {
  position: absolute;
  top: 100px;
  left: 200px;
  width: 900px;
  text-shadow: 1px 2px 3px #808080;
}
.events_img {
  position: absolute;
  top: 100px;
  left: 350px;
  width: 800px;
  opacity: 0.9;
  border-radius: 8%;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}

.events_whitebox {
  position: absolute;
  top: 340px;
  left: 150px;
  width: 550px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
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
