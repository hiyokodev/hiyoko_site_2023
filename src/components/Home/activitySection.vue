<template>
  <SectionLayout title="Activity">
    <p class="description">
      ひよこ開発の主な活動です。 <br />仲間と一緒だから始められる。続けられる。
    </p>
    <div class="contents">
      <div class="content">
        <img src="@/assets/img//Home/activity_website.webp" />
        <p class="content_title">Web Site</p>
        <p class="content_desc"><span>自分たちだけで</span><span>Webサイト作り！</span></p>
      </div>
      <div class="content">
        <div class="image_container">
          <img src="@/assets/img/Home/activity_LT.webp" />
        </div>
        <div class="text_container">
          <p class="content_title">Lightning Talk</p>
          <p class="content_desc"><span>テーマ自由の</span><span>プレゼンコーナー！</span></p>
        </div>
      </div>
      <div class="content">
        <div class="image_container">
          <img src="@/assets/img/Home/activity_events.webp" />
        </div>
        <div class="text_container">
          <p class="content_title">Events</p>
          <p class="content_desc"><span>BBQや飲み会、</span><span>おうちでゲーム！</span></p>
        </div>
      </div>
    </div>
    <Button message="詳しい内容はこちら" url="/activity" />
  </SectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
    Button
  }
}
</script>
<style scoped>
.description {
  margin: 0 0 50px 0;
  line-height: 40px;
}
.contents {
  display: flex;
  justify-content: center;
}
.content {
  max-width: 400px;
  padding: 10px;
}
img {
  width: 100%;
  border-radius: 20px;
}

.content_title {
  margin: 10px 0;
  font-family: 'Mamelon';
}

.content_desc {
  margin: 0;
  font-size: 18px;
}
span {
  display: inline-block;
}
@media screen and (max-width: 834px) {
  .description {
    margin: 0 0 30px 0;
  }

  .content {
    max-width: 400px;
    padding: 5px;
  }
  .content_desc {
    margin: 0;
    font-size: 12px;
  }
}
@media screen and (max-width: 600px) {
  .description {
    margin: 0 0 20px 0;
  }
  .contents {
    display: block;
  }
  .content {
    margin: 20px auto;
    max-width: 300px;
    padding: 10px;
  }
  .content_title {
    margin: 10px 0;
    font-size: 18px;
    font-family: 'Mamelon';
  }

  .content_desc {
    margin: 0;
    font-size: 14px;
  }
}
</style>
