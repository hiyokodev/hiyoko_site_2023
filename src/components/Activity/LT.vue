<template>
  <!-- PC -->
  <div class="pc_view">
    <div class="img_container">
      <img src="@/assets/img/Activity/LT.webp" class="content_img" />
    </div>
    <div class="hiyoko_container">
      <img src="@/assets/img/hiyoko_ashiato02.png" class="LT_ashiato" />
    </div>
  </div>
  <!-- スマートフォン -->
  <div class="sp_view">
    <div class="container">
      <img src="@/assets/img/Activity/sp_LT.webp" class="content_img" />
      <h3>Lightning Talk</h3>
      <p>
        <span>Lightning Talk（LT）とは</span>
        <span>テーマ自由の短いプレゼンのようなものです。</span>
      </p>
      <p><span>月1回のオンライン定例会で、</span> <span>持ち回りで発表しています。</span></p>
      <p>
        <span>勉強した技術、やってみたことなど、</span>
        <span>興味のあるものならなんでもOK。</span>
        <span>最近はChatGPTやデザインがテーマでした。</span>
      </p>
      <p>
        <span>みんなで楽しく勉強しながら、</span>
        <span>プレゼンスキルも伸ばしちゃいましょう！</span>
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

.LT_ashiato {
  margin-top: 100px;
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
