<template>
  <!-- PC -->
  <div class="pc_view">
    <div class="img_container">
      <img src="@/assets/img/Activity/tmp_website.png" class="content_img" />
    </div>
    <div class="hiyoko_container">
      <img src="@/assets/img/hiyoko_ashiato01.png" class="website_ashiato" />
      <img src="@/assets/img/hiyoko_01.png" class="website_hiyoko" />
    </div>
  </div>
  <!-- スマートフォン -->
  <div class="sp_view">
    <div class="container">
      <img src="@/assets/img/Activity/sp_website.png" class="content_img" />
      <h3>Web Site</h3>
      <p>
        <span>サイトのデザインからコーディングまで、</span>
        <span>すべて自分たちだけで制作します。</span>
      </p>
      <p>
        <span> チームで活動するので、</span>
        <span>技術や知識がなくても気軽に始められます。</span>
      </p>
      <p>
        <span> コーディングや写真撮影など、</span>
        <span>オフラインで集まって</span>
        <span>ワイワイと作業することも多いです！</span>
      </p>
      <p><span>私たちと一緒に新しいスキルと</span> <span>自分を手に入れましょう！</span></p>
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
.website_ashiato {
  margin-right: 20px;
  height: 30px;
}

.website_hiyoko {
  margin-top: 30px;
  height: 100px;
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
    margin: 10px 25px;
    font-size: 30px;
    font-family: 'Mamelon';
  }
  p {
    margin: 10px 25px;
    font-size: 14px;
    font-family: 'Yomogi';
  }
}
</style>
