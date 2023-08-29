<template>
  <!-- PC -->
  <div class="pc_view">
    <div class="img_container">
      <img src="@/assets/img/Activity/tmp_events.webp" class="content_img" />
    </div>
    <div class="hiyoko_container">
      <img src="@/assets/img/hiyoko_02.png" class="events_hiyoko" />
      <img src="@/assets/img/hiyoko_ashiato02.png" class="events_ashiato" />
    </div>
  </div>
  <!-- スマートフォン -->
  <div class="sp_view">
    <div class="container">
      <img src="@/assets/img/Activity/sp_events.webp" class="content_img" />
      <h3>Events</h3>

      <p>
        <span>ひよこ開発では勉強以外にも</span>
        <span>月に1回イベントを開催しています。</span>
      </p>
      <p>
        <span>BBQや飲み会、ボードゲームなど、</span>
        <span>毎回楽しい交流企画を用意しています。</span>
      </p>
      <p>
        <span>普段の活動には参加できないけど</span>
        <span>イベントは行きたい！というのも大歓迎です。</span>
        <span>ぜひ気軽に参加してくださいね！</span>
      </p>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.pc_view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 100px auto;
}
.sp_view {
  display: none;
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
.events_hiyoko {
  margin-top: 30px;
  margin-right: 20px;
  height: 100px;
}
.events_ashiato {
  height: 30px;
}

@media only screen and (max-width: 600px) {
  span {
    display: inline-block;
  }
  .pc_view {
    display: none;
  }
  .sp_view {
    display: block;
  }
  .container {
    margin: 50px 0;
    max-width: 600px;
    padding-bottom: 20px;
    border-radius: 20px;
    background-color: rgba(230, 230, 230, 0.7);
    overflow: hidden;
  }
  h3 {
    margin: 10px 20px;
    font-size: 30px;
    font-family: 'Mamelon';
  }
  p {
    margin: 10px 20px;
    font-size: 14px;
    font-family: 'Yomogi';
  }
}
</style>
