<template>
  <Header />
  <main>
    <div class="contents">
      <h2>Member</h2>

      <img src="@/assets/img/hiyoko_01.png" class="hiyoko_img" />
      <p class="balloon1">これから仲良くする素敵な先輩たちです!</p>

      <div class="photos">
        <div v-for="member in members" :key="member">
          <img class="slide" :src="`src/assets/img/Members/up/${member}.png`" alt="" />
        </div>
      </div>

      <Button message="入会はこちら！" url="#" />
    </div>
  </main>
</template>

<script>
import Header from '../components/common/Header.vue'
import Button from '../components/common/Button.vue'

export default {
  components: {
    Header,
    Button
  },
  data() {
    return {
      members: [
        'sugawara',
        'koyama',
        'tauchi',
        'takasu',
        'honda',
        'kawai',
        'kinomoto',
        'kobayashi',
        'sasaki',
        'kamiya',
        'tanaka',
        'nomura',
        'kunibe',
        'saijo'
      ]
    }
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
  font-family: 'Mamelon';
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}

.hiyoko_img {
  position: absolute;
  top: 300px;
  left: 360px;
  width: auto;
  height: 250px;
}
.balloon1 {
  position: relative;
  left: 100px;
  display: inline-block;
  padding: 0 15px;
  width: 550px;
  height: 200px;
  line-height: 200px; /*文字が真ん中に来るように調整*/
  border-radius: 50%;
  background-color: #f9dc5c;
  text-align: center;
  color: #000;
  font-size: 20px;
  font-family: 'Yomogi';
}
.balloon1::before {
  content: '';
  position: absolute;
  border: 15px solid transparent;
  border-right: 25px solid #f9dc5c;
  left: -30px;
  top: 50%;
  margin-top: -15px;
}

.photos {
  top: 400px;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.photos div {
  width: calc(100% / 4); /*画像を横に5つ並べる場合*/
  padding: 0px 20px; /*画像の左右上下に余白を入れる場合*/
  box-sizing: border-box;
  list-style: none; /*リストの黒い●を無くす*/
}
.photos div img {
  max-width: 100%; /*画像のはみだしを防ぐ*/
  min-width: 130px; /*画像の最低幅を定義*/
  height: auto; /*画像の縦横比を維持*/
  flex-wrap: wrap;
  margin: 20px 0px;
  border-radius: 35px; /* ちょっとだけ角丸 */
}

@media screen and (max-width: 834px) {
  /* 834px以下に適用されるCSS（タブレット用） */
  .photos div img {
    min-width: 30px; /*画像の最低幅を定義*/
    border-radius: 5px; /* ちょっとだけ角丸 */
  }
}
</style>
