<template>
  <SectionLayout title="Activity">
    <p class="description">さぁ、はじめてみよう。</p>
    <div class="contents">
      <div class="content">
        <div class="Image_Container">
          <img src="@/assets/img//Home/activity_website.png" />
        </div>
        <p class="content_title">Web Site</p>
        <p class="content_desc">自分たちだけでWebサイト作り！</p>
      </div>
      <div class="content">
        <div class="Image_Container">
          <img src="@/assets/img/Home/activity_LT.png" />
        </div>
        <p class="content_title">Lightning Talk</p>
        <p class="content_desc">テーマ自由のプレゼンコーナー！</p>
      </div>
      <div class="content">
        <div class="Image_Container">
          <img src="@/assets/img/Home/activity_events.png" />
        </div>
        <p class="content_title">Events</p>
        <p class="content_desc">BBQや飲み会、おうちでゲーム！</p>
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
</style>
