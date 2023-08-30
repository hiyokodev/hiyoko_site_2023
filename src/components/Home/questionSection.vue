<template>
  <sectionLayout title="Question">
    <div class="content" v-for="content in contents" :key="content.question">
      <div class="question">
        <div class="question_icon">Q</div>
        <p class="question_text">{{ content.question }}</p>
      </div>
      <div class="answer">
        <div class="answer_icon">A</div>
        <p class="answer_text">{{ content.answer }}</p>
      </div>
      <div class="img-container" v-if="!content.isBottom">
        <img src="@/assets/img/Home/footprints_three.png" />
      </div>
    </div>
    <div class="spacer"></div>
    <Button
      message="入会はこちら！"
      url="https://forms.gle/jB3XFHcYaj2oLnwy5"
      :hiyoko_icon="true"
    />
  </sectionLayout>
</template>

<script>
import SectionLayout from './SectionLayout.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
    Button
  },
  data() {
    return {
      contents: [
        {
          question: 'メンバーは何人くらいですか？',
          answer: '約30名が活動中です。1人でも、仲良しの同期と一緒に参加でも、とっても大歓迎です！'
        },
        {
          question: '参加するにあたり、何か必要なものはありますか？',
          answer:
            '特にありません。活動に使用するツール（Discord・Notion等）がPCやスマートフォンから利用できれば大丈夫です。'
        },
        {
          question: '入ったらまずどんなことをするのでしょうか。',
          answer:
            'スムーズに参加してもらうための各種説明会に加え、ツールの使い方や環境構築などのセットアップもサポートさせていただきます。その後は定例会やイベントにぜひ参加してみてください！'
        },
        {
          question: '仕事が忙しくなった場合、活動に参加できるか不安です。',
          answer:
            'すべて任意参加なので、自分のスケジュールに合わせて活動できます。後から内容を確認できるように、アーカイブを残しています。'
        },
        {
          question: '地方配属や転職で環境が変わっても参加できますか？',
          answer:
            'オンライン中心の活動なので問題ありません。地方から参加したり、転職後も引き続き在籍しているメンバーも多いです。'
        },
        {
          question: '上記の活動以外のこともしてみたいです。',
          answer: '大歓迎です！一緒に活動する仲間がきっと見つかります。',
          isBottom: true
        }
      ]
    }
  }
}
</script>
<style scoped>
.content {
  max-width: 800px;
  margin: 0 auto;
}
.question {
  display: flex;
  padding: 15px;
  text-align: left;
}

.question_icon {
  display: block;
  text-align: center;
  color: #fff;
  background: rgb(160, 160, 160);
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgb(195, 195, 195);
}

.question_text {
  margin: 0;
  width: calc(100% - 32px);
  padding-left: 15px;
  line-height: 32px;
}

.answer {
  display: flex;
  padding: 15px;
  text-align: left;
}

.answer_icon {
  display: block;
  text-align: center;
  color: rgb(100, 100, 100);
  background: rgb(251, 234, 146);
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgb(195, 195, 195);
}

.answer_text {
  margin: 0;
  width: calc(100% - 32px);
  padding-left: 15px;
  line-height: 32px;
}

.img-container {
  margin: 50px auto;
  text-align: center;
}

img {
  width: 150px;
}

.spacer {
  height: 30px;
}
@media screen and (max-width: 834px) {
  .content {
    max-width: 600px;
  }
  .question {
    display: flex;
    padding: 10px;
    text-align: left;
  }
  .answer {
    display: flex;
    padding: 10px;
    text-align: left;
  }
  .img-container {
    margin: 20px auto;
    text-align: center;
  }
  img {
    width: 100px;
  }
}
@media screen and (max-width: 600px) {
  .question {
    display: flex;
    padding: 10px 0;
    text-align: left;
  }
  .question_icon {
    width: 26px;
    height: 26px;
    line-height: 26px;
  }

  .question_text {
    padding-left: 10px;
    line-height: 26px;
  }
  .answer {
    display: flex;
    padding: 10px 0;
    text-align: left;
  }
  .answer_icon {
    width: 26px;
    height: 26px;
    line-height: 26px;
  }

  .answer_text {
    padding-left: 10px;
    line-height: 26px;
  }
  .img-container {
    margin: 10px auto;
    text-align: center;
  }
  img {
    width: 80px;
  }

  .spacer {
    display: none;
  }
}
</style>
