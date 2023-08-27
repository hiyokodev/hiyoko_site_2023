<template>
  <Header />
  <main>
    <div class="contents">
      <h2 class="top">Member</h2>
      <p class="description">これから仲良くする素敵な先輩たちです!</p>
      <div class="photos">
        <div class="member" v-for="member in members" :key="member.name">
          <div class="image_wrapper">
            <img class="photo" :src="member.photo" alt="" />
            <img class="photo_mini" :src="member.photo_mini" alt="" />
            <!-- PCのみ -->
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
            <!-- タブレット・スマートフォンのみ -->
            <div class="sp_text">
                <div class="sp_text_title">
                  <p>ひよこ開発で得たもの</p>
                </div>
                <div class="sp_text_content">
                  <p><pre>{{ member.learned }}</pre></p>
                </div>
                <div class="sp_text_title">
                  <p>自分を表す言葉</p>
                </div>
                <div class="sp_text_content">
                  <p v-for="word in member.words" :key="word">#{{ word }}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <p class="description">写真に写ってないメンバーもいるよ〜</p>

      <Button message="入会はこちら！" url="https://forms.gle/jB3XFHcYaj2oLnwy5" />
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
import sugawara_photo_mini from '@/assets/img/Members/mini/sugawara.webp'
import koyama_photo_mini from '@/assets/img/Members/mini/koyama.webp'
import tauchi_photo_mini from '@/assets/img/Members/mini/tauchi.webp'
import takasu_photo_mini from '@/assets/img/Members/mini/takasu.webp'
import honda_photo_mini from '@/assets/img/Members/mini/honda.webp'
import kawai_photo_mini from '@/assets/img/Members/mini/kawai.webp'
import kinomoto_photo_mini from '@/assets/img/Members/mini/kinomoto.webp'
import kobayashi_photo_mini from '@/assets/img/Members/mini/kobayashi.webp'
import sasaki_photo_mini from '@/assets/img/Members/mini/sasaki.webp'
import kamiya_photo_mini from '@/assets/img/Members/mini/kamiya.webp'
import tanaka_photo_mini from '@/assets/img/Members/mini/tanaka.webp'
import nomura_photo_mini from '@/assets/img/Members/mini/nomura.webp'
import kunibe_photo_mini from '@/assets/img/Members/mini/kunibe.webp'
import saijo_photo_mini from '@/assets/img/Members/mini/saijo.webp'
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
    photo_mini: sugawara_photo_mini,
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
    photo_mini: koyama_photo_mini,
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
    photo_mini: tauchi_photo_mini,
    learned: 'プログラミングへの\nハードルが下がった',
    words: ['雑食', '猫派', 'なんでも楽しむ', '知らんけど']
  },
  {
    name: '高須 雅幸',
    kana: 'Takasu Masayuki',
    photo: takasu_photo,
    photo_mini: takasu_photo_mini,
    learned: 'つながりが広がった',
    words: ['サウナイキタイ', 'やる気乱高下', '気分屋'] 
  },
  {
    name: '本多 麻依',
    kana: 'Honda Mai',
    photo: honda_photo,
    photo_mini: honda_photo_mini,
    learned: '人脈増し増し',
    words: ['活字読んでられないタイプ', '能天気', 'マイペースマイワールド', '毎日お寿司食べたい'] 
  },
  {
    name: '川井 李華',
    kana: 'Kawai Rika',
    photo: kawai_photo,
    photo_mini: kawai_photo_mini,
    learned: '開発への興味がわいた',
    words: ['大雑把', 'マイペース', '好奇心旺盛'] 
  },
  {
    name: '木野本 優香',
    kana: 'Kinomoto Yuka',
    photo: kinomoto_photo,
    photo_mini: kinomoto_photo_mini,
    learned: '勉強の入り口ができた',
    words: ['ポジティブ', 'パン屋さん巡り好き', '料理上達したい', '英語話せるようになりたい'] 
  },
  {
    name: '佐々木 駿',
    kana: 'Sasaki Shun',
    photo: sasaki_photo,
    photo_mini: sasaki_photo_mini,
    learned: '技術話せる人ありがたい',
    words: ['てきとうに真面目', 'パルクール初心者', '数学', '英語がんばる', '名古屋'] 
  },
  {
    name: '田中 真音',
    kana: 'Tanaka Maoto',
    photo: tanaka_photo,
    photo_mini: tanaka_photo_mini,
    learned: 'GitHub実践',
    words: ['力こそパワー', '南野拓実', '小林メロディ', '荻野貴司'] 
  },
  {
    name: '神谷 瞳',
    kana: 'Kamiya Hitomi',
    photo: kamiya_photo,
    photo_mini: kamiya_photo_mini,
    learned: '挑戦',
    words: ['優しいものが好き', 'Disney好き', 'ショーパレ派', '休日にパンを焼く'] 
  },
  {
    name: '小林 由暁',
    kana: 'Kobayashi Yoshiaki',
    photo: kobayashi_photo,
    photo_mini: kobayashi_photo_mini,
    learned: '自信',
    words: ['話せるエンジニア', '強い', '163cm', 'イン・アウトの覇者', '映画好き'] 
  },
  {
    name: '野村 真央',
    kana: 'Nomura Mao',
    photo: nomura_photo,
    photo_mini: nomura_photo_mini,
    learned: '学ぶことへのモチベーション',
    words: ['一人が好きだが独りは苦手', '妄想癖', 'クソ真面目', '好奇心旺盛', '一人旅行きがち'] 
  },
  {
    name: '西條 結萌',
    kana: 'Saijo Yume',
    photo: saijo_photo,
    photo_mini: saijo_photo_mini,
    learned: 'スケジュール管理/GitHub',
    words: ['山あり川あり', 'ISFJ', '自我', 'おばあちゃん', 'カフェイン所', 'マイペース'] 
  },
  {
    name: '國部 真由',
    kana: 'Kunibe Mayu',
    photo: kunibe_photo,
    photo_mini: kunibe_photo_mini,
    learned: '遊び＝勉強',
    words: ['インターバルとかないん？', 'コンパクト', 'ナイスリベロ！', '人好き', '積極的盲点'] 
  },
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

.top {
  margin: 40px;
  font-size: 60px;
  font-family: 'Mamelon';
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
.photo_mini {
  display: none;
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
.sp_text{
  display: none;
}

@media screen and (max-width: 834px) {
main {
  padding: 5px;
}
  .top {
    margin: 20px;
    font-size: 40px;
  }
  .photos {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .overlay {
    display: none;
  }
  .member {
    display: flex;
    margin: 30px 0;
  }
  .image_wrapper {
    position: relative;
    margin: 0 10px 0 5px;
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 20px;
  }
  .photo {
    display: none;
  }
  .photo_mini {
    display: block;
    width: 100%;
  }
  .text_wrapper {
    margin: 0;
    min-width: 162px;
    text-align: left;
  }
  .kana {
    font-size: 14px;
  }

  .name {
    margin: 2px 0 0 0;
    font-size: 20px;
  }
  .sp_text{
    display: block;
  }
  .sp_text_title {
    margin: 10px auto 0px auto;
    width: auto;
    font-size: 14px;
  }
  .sp_text_title p {
    font-family: 'Mamelon';
  }

  .sp_text_content {
    margin: 0 auto;
    width: auto;
    font-size: 12px;
  }
}
</style>
