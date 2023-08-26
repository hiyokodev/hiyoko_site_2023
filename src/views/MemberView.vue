<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Member</h2>
      <div class="btn">
        <Website />
        <LT />
        <Events />
        <Button message="入会はこちら！" url="/" />

        <div class="photos">
          <div><img src="@/assets/img/kamiya_hitomi1.jpg" /></div>
          <div><img src="@/assets/img/kawai_rika1.jpg" /></div>
          <div><img src="@/assets/img/kinomoto_yuka1.jpg" /></div>
          <div><img src="@/assets/img/kobayashi_yosiaki1.jpg" /></div>
          <div><img src="@/assets/img/sasaki_syun1.jpg" /></div>
          <div><img src="@/assets/img/tauti_akane1.jpg" /></div>
          <div><img src="@/assets/img/takasu_masayuki1.jpg" /></div>
          <div><img src="@/assets/img/koyama_kou1.jpg" /></div>
          <div><img src="@/assets/img/nomura_mao1.jpg" /></div>
          <div><img src="@/assets/img/honda_mai1.jpg" /></div>
          <div><img src="@/assets/img/sugawara_huta1.jpg" /></div>
          <div><img src="@/assets/img/saijyo_yume1.jpg" /></div>
          <div><img src="@/assets/img/kunibe_mayu1.jpg" /></div>
          <div><img src="@/assets/img/tanaka_shion1.jpg" /></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Website from '../components/Activity/Website.vue'
import LT from '../components/Activity/LT.vue'
import Events from '../components/Activity/Events.vue'
import Button from '../components/common/Button.vue'

export default {
  components: {
    Website,
    LT,
    Events,
    Button
  }
}
</script>
<style scoped>
main {
  padding: 20px;
}
.contents {
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

h2 {
  font-family: Mamelon;
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.photos div {
  width: calc(100% / 5); /*画像を横に5つ並べる場合*/
  padding: 0px 10px; /*画像の左右上下に余白を入れる場合*/
  box-sizing: border-box;
  list-style: none; /*リストの黒い●を無くす*/
}
.photos div img {
  max-width: 100%; /*画像のはみだしを防ぐ*/
  min-width: 130px; /*画像の最低幅を定義*/
  height: auto; /*画像の縦横比を維持*/
  flex-wrap: wrap;
  margin: 10px 0px;
  border-radius: 35px; /* ちょっとだけ角丸 */
}

@media screen and (max-width: 959px) {
  /* 959px以下に適用されるCSS（タブレット用） */
  .photos div img {
    min-width: 30px; /*画像の最低幅を定義*/
    border-radius: 5px; /* ちょっとだけ角丸 */
  }
}

.btn {
  .btn:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  .btn:hover img:nth-of-type(2) {
    opacity: 0;
  }
}
</style>
