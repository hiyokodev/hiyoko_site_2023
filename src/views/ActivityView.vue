<script setup></script>

<template>
  <main>
    <div class="top">
      <img src="@/assets/img/hiyoko-haikei02.png" class="back_egg1" />
      <h2>Activity</h2>
    </div>

    <div class="contents">
      <img src="@/assets/img/hiyoko-haikei04.png" class="back_egg2" />

      <div class="web_site">
        <img src="@/assets/img/website.jpg" class="web_img" />
        <div class="white_box"></div>
      </div>

      <img src="@/assets/img/hiyoko-haikei03.png" class="back_egg3" />
      <img src="@/assets/img/hiyoko-haikei02.png" class="back_egg6" />

      <div class="lightning_talk">
        <img src="@/assets/img/LT.jpg" class="LT_img" />
        <div class="white_box"></div>
        <img src="@/assets/img/hiyoko-haikei04.png" class="back_egg4" />
      </div>

      <div class="events">
        <img src="@/assets/img/events.jpg" class="events_img" />
        <div class="white_box"></div>
      </div>

      <img src="@/assets/img/hiyoko-haikei03.png" class="back_egg5" />
    </div>
  </main>
</template>

<script>
export default {}
</script>
<style scoped>
.back_egg1 {
  margin-top: 50px;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}
.back_egg2 {
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
.back_egg4 {
  margin-top: 1000px;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}
.back_egg5 {
  margin-left: 50px;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}
.back_egg6 {
  margin-top: 1200px;
  margin-right: auto;
  position: absolute;
  text-shadow: 1px 2px 3px #808080;
}

h2 {
  font-family: 'Memelon';
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
  text-align: center;
}

.daen {
  background-color: #ffec50;
  border-radius: 50%;
  margin: 5% 30% 20% 10%;
  width: 1000px;
  height: 700px;
}

.white_box {
  width: 500px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
  position: absolute;
  top: 750px;
  left: 300px;
}

h3 {
  font-family: Century;
  font-size: 40px;
  text-align: left;
  margin-left: 70px;
}

.web_img {
  width: 800px;
  height: 700px;
  opacity: 0.9;
  margin: 10% 30% 10% 35%;
  border-radius: 8%;
  position: relative;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}

.LT_img {
  width: 700px;
  height: 900px;
  opacity: 0.9;
  margin: 10% 30% 25% 10%;
  border-radius: 8%;
  position: relative;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}

.events_img {
  width: 950px;
  height: 600px;
  opacity: 0.9;
  margin: 10% 30% 10% 30%;
  border-radius: 8%;
  position: relative;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}
</style>
