<script setup></script>

<template>
  <main>
    <div class="top">
      <h2>Activity</h2>
    </div>

    <div class="contents">
      <div class="web_site">
        <img src="@/assets/img/website.jpg" class="web_img" />
      </div>

      <div class="lightning_talk">
        <img src="@/assets/img/LT.jpg" class="LT_img" />
      </div>

      <div class="events">
        <img src="@/assets/img/events.jpg" class="events_img" />
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>
<style scoped>
.contents {
  text-align: center;
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

.one {
  position: absolute;
}

.two {
  position: absolute;
}

.three {
  position: absolute;
}

.tyouhoukei {
  width: 900px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 10px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.tone {
  position: relative;
  top: 150px;
  left: 450px;
}

.ttwo {
  position: relative;
  top: 150px;
  left: 450px;
}

.tthree {
  position: relative;
  top: 150px;
  left: 450px;
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
}

.LT_img {
  width: 700px;
  height: 900px;
  opacity: 0.9;
  margin: 10% 30% 25% 10%;
  border-radius: 8%;
}

.events_img {
  width: 950px;
  height: 600px;
  opacity: 0.9;
  margin: 10% 30% 10% 30%;
  border-radius: 8%;
}

table {
  margin: 0 auto;
}

.tyouhoukei p {
  margin: 30px 80px;
  text-align: left;
}

.Website {
  padding-bottom: 300px;
}

.Automationtools {
  padding-bottom: 300px;
}
</style>
