<template>
  <Header />
  <main>
    <div class="contents">
      <h2>Member</h2>

      <p>これから仲良くする素敵な先輩たちです!</p>

      <div class="photos">
        <div v-for="img in imgList" :key="img">
          <img class="slide" :src="img" alt="" />
          <!-- <img class="slide" :src="`../assets/img/Members/up/${member}.webp`" alt="" /> -->
        </div>
        <!-- <img
          v-for="imageSrc in imageList"
          :key="imageSrc"
          :src="imageList[imageSrc]"
          alt="Dynamic Image"
        /> -->
        <p>写真に写ってないメンバーもいるよ〜</p>
      </div>

      <Button message="入会はこちら！" url="#" />
    </div>
  </main>
</template>

<script>
import Header from '../components/common/Header.vue'
import Button from '../components/common/Button.vue'
import sugawara from '@/assets/img/Members/up/sugawara.webp'
export default {
  components: {
    Header,
    Button
  },
  data() {
    return {
      // imageList: import.meta.glob('@/assets/img/Members/up/*.webp')
      // imageList: [
      //   require('@/assets/img/Members/up/sugawara.webp'),
      //   require('@/assets/img/fuga.png')
      // ]
      imgList: [sugawara],
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
  },
  methods: {
    generateImgPath: (name) => {
      url = new URL(`@/assets/img/Members/up/${name}.webp`, import.meta.url).href
      console.log(url)
      return url
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

p {
  font-family: 'Yomogi';
  font-size: 30px;
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
  margin: 10px 0px;
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
