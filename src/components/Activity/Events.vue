<template>
  <div class="container">
    <img src="@/assets/img/events_egg.png" class="events_egg" />
    <img src="@/assets/img/events.jpg" class="events_img" />
    <div class="events_whitebox">
      <h2>Events</h2>
      <p>
        ひよこ開発ではお勉強以外にも月に1回イベントを企画しています。<br />
        BBQや飲み会、おうちでゲームなどなど、ジャンルも参加メンバーも毎回違って楽しい！<br />
        ぜひたくさんのイベントに参加してくださいね！<br />
        イベント参加のみでも大丈夫です！<br />
      </p>
      <p>人脈つくりたい方、休日を充実させたい方、<br />どんな方でも大歓迎です。</p>
    </div>
    <img src="@/assets/img/hiyoko_02.png" class="events_hiyoko_img" />
    <img src="@/assets/img/hiyoko_ashiato02.png" class="events_ashiato_img" />
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.container {
  position: relative;
  height: 1000px;
}
h2 {
  text-align: left;
  font-family: 'Mamelon';
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
  left: 400px;
  width: 800px;
  opacity: 0.9;
  border-radius: 8%;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}

.events_whitebox {
  position: absolute;
  top: 390px;
  left: 150px;
  width: 600px;
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
  height: 100px;
}
</style>
