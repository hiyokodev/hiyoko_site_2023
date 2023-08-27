<template>
  <Header />
  <main>
    <div class="contents">
      <h2>Member</h2>
      <p class="description">これから仲良くする素敵な先輩たちです!</p>
      <div class="photos">
        <!-- <Member :imageSrc="member.photo" /> -->
        <div class="member" v-for="member in members" :key="member.name">
          <div class="image_wrapper">
            <img class="photo" :src="member.photo" alt="" />
            <div class="overlay">
              <div class="overlay_background"></div>
              <div class="overlay_text">
                <div class="overlay_text_title">
                  <p>ひよこ開発で<br />身についたこと</p>
                </div>
                <div class="overlay_text_content">
                  <p><pre>{{ member.learned }}</pre></p>
                </div>
                <div class="overlay_text_title">
                  <p>自分を表す言葉</p>
                </div>
                <div class="overlay_text_content">
                  <p v-for="word in member.words" :key="word">#{{ word }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text_wrapper">
            <p class="kana">{{ member.kana }}</p>
            <p class="name">{{ member.name }}</p>
          </div>
        </div>
      </div>
      <p class="description">写真に写ってないメンバーもいるよ〜</p>

      <Button message="入会はこちら！" url="#" />
    </div>
  </main>
</template>

<script>
import Header from '../components/common/Header.vue'
import Button from '../components/common/Button.vue'
import sugawara_photo from '@/assets/img/Members/up/sugawara.webp'
import koyama_photo from '@/assets/img/Members/up/koyama.webp'
import tauchi_photo from '@/assets/img/Members/up/tauchi.webp'
import takasu_photo from '@/assets/img/Members/up/takasu.webp'
import honda_photo from '@/assets/img/Members/up/honda.webp'
import kawai_photo from '@/assets/img/Members/up/kawai.webp'
import kinomoto_photo from '@/assets/img/Members/up/kinomoto.webp'
import kobayashi_photo from '@/assets/img/Members/up/kobayashi.webp'
import sasaki_photo from '@/assets/img/Members/up/sasaki.webp'
import kamiya_photo from '@/assets/img/Members/up/kamiya.webp'
import tanaka_photo from '@/assets/img/Members/up/tanaka.webp'
import nomura_photo from '@/assets/img/Members/up/nomura.webp'
import kunibe_photo from '@/assets/img/Members/up/kunibe.webp'
import saijo_photo from '@/assets/img/Members/up/saijo.webp'
export default {
  components: {
    Header,
    Button,
  },
  data() {
    return {
      members: [
        {
          name: '菅原 風太',
          kana: 'Sugawara Futa',
          photo: sugawara_photo,
          learned: 'ひよこ開発オーナー',
          words: [
            '自分の人生を生きる',
            'ボードゲーマー',
            'Apple信者',
            '仕切りたがり',
            'プレゼン好き雑談苦手'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '田内 紅音',
          kana: 'Tauchi Akane',
          photo: tauchi_photo,
          learned: 'プログラミングへの\nハードルが下がった',
          words: ['雑食', '猫派', 'なんでも楽しむ', '知らんけど']
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        },
        {
          name: '小山 航',
          kana: 'Koyama Wataru',
          photo: koyama_photo,
          learned: '友達が沢山できた',
          words: [
            'ENFP',
            '어덕행덕',
            '趣味は飽きること',
            'ラーメン好きと繋がりたい',
            '凍え死んでもアイスコーヒー'
          ]
        }
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
}

h2 {
  margin: 40px;
  font-family: 'Mamelon';
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}
.description {
  font-size: 18px;
}
p {
  margin: 0;
  font-family: 'Yomogi';
}
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}

.member {
  margin: 30px 0;
}

.image_wrapper {
  position: relative;
  margin: 10px;
  width: 240px;
  height: 360px;
  overflow: hidden;
  border-radius: 20px;
}

.photo {
  width: 100%;
  height: auto;
  transition: opacity 0.5s;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overlay_background {
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;
}

.image_wrapper:hover .overlay_background {
  background-color: rgba(0, 0, 0, 0.7);
}
.overlay_text {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  opacity: 0;
  color: white;
  transition: opacity 0.3s;
}
.image_wrapper:hover .overlay_text {
  opacity: 1;
}

.overlay_text_title {
  margin: 30px auto 10px auto;
  width: auto;
  text-align: center;
  font-size: 22px;
}
.overlay_text_title p {
  font-family: 'Mamelon';
}

.overlay_text_content {
  margin: 0 auto;
  width: auto;
  text-align: left;
  font-size: 16px;
}
pre {
  margin: 0;
  font-family: 'Yomogi';
}

.kana {
  margin: 0;
  font-size: 16px;
}

.name {
  margin: 5px 0 0 0;
  font-size: 24px;
}

@media screen and (max-width: 834px) {
  /* 834px以下に適用されるCSS（タブレット用） */
  .photos div img {
    min-width: 30px; /*画像の最低幅を定義*/
    border-radius: 5px; /* ちょっとだけ角丸 */
  }
}
</style>
