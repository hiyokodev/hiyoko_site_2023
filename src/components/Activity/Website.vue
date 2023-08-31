<template>
  <!-- PC -->
  <div class="pc_view">
    <div class="img_container">
      <img src="@/assets/img/Activity/website.webp" class="content_img" />
    </div>
    <div class="hiyoko_container">
      <img src="@/assets/img/Common/ashiato_right.png" class="website_ashiato" />
      <img src="@/assets/img/Common/hiyoko_right.png" class="website_hiyoko" />
    </div>
  </div>
  <!-- スマートフォン -->
  <div class="sp_view">
    <div class="container">
      <img src="@/assets/img/Activity/sp_website.webp" class="content_img" />
      <h3>Web Site</h3>
      <p>
        <span>サイトのデザインからコーディングまで、</span>
        <span>すべて自分たちで制作します。</span>
      </p>
      <p>
        <span>オンラインで相談しながらコードを書いたり、</span>
        <span>Webサイトに載せる写真を</span>
        <span>みんなで撮影に行ったり、</span>
        <span>ワイワイ楽しく活動しています。</span>
      </p>
      <p>
        <span>技術や知識がなくても大丈夫。</span>
        <span>新しいスキルと新しい自分を、</span>
        <span>一緒に手に入れましょう！</span>
      </p>
    </div>
  </div>
</template>

<script>
import { preloadImages } from '@/utils/preloadHelpers.js'
import img_website from '@/assets/img/Activity/website.webp'
import img_sp_website from '@/assets/img/Activity/sp_website.webp'
export default {
  data() {
    return {
      websiteImageSrc: img_website,
      spWebsiteImageSrc: img_sp_website
    }
  },
  async mounted() {
    await preloadImages([this.websiteImageSrc, this.spWebsiteImageSrc])
  }
}
</script>
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
