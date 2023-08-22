<template>
  <sectionLayout title="Price">
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
  </sectionLayout>
</template>

<script>
import SectionLayout from './SectionLayout.vue'
export default {
  components: {
    SectionLayout
  },
  data() {
    return {
      contents: [
        {
          question: 'メンバーは何人くらい。',
          answer:
            '約30名ほどで活動中で、男女ともに参加しやすい雰囲気です。お一人で飛び込むのが不安という方は、ご友人と一緒に参加されるのもよいと思います。'
        },
        {
          question: '参加するにあたり、何か必要なものはありますか。',
          answer:
            '特にありません。活動に使用するツール（Slack・Notion・Zoom）がPCやスマートフォンから利用できれば大丈夫です。'
        },
        {
          question: '入ったらまずどんなことをするのでしょうか。',
          answer:
            'スムーズに参加してもらうための各種説明会に加え、ツールの使い方や環境構築などのセットアップもサポートさせていただきます。その後は定例会やオフラインイベントにご自由にご参加ください。'
        },
        {
          question: '仕事が忙しくなった場合、活動に参加できるか不安です。',
          answer:
            '活動はすべて任意参加なので、ご自身のスケジュール優先で大丈夫です。内容はアーカイブに残るので、後から確認することもできます。'
        },
        {
          question: '上記の活動以外のこともしてみたいのですが、できるのでしょうか。',
          answer:
            'やってみたいことの提案は大歓迎です。ここに載せきれていない活動も多くありますし、アイデアは常に募集中です。',
          isBottom: true
        }
      ]
    }
  }
}
</script>
<style scoped>
.question {
  display: flex;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
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
  font-size: 18px;
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
</style>
