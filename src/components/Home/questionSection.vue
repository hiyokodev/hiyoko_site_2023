<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Question</h2>

      <div class="questions">
        <div class="question">
          <p>Q.メンバーは何人くらい。</p>
        </div>
        <div class="answer">
          <p>A.約30名ほどで活動中で、男女ともに参加しやすい雰囲気です。お一人で飛び込むのが不安という方は、ご友人と一緒に参加されるのもよいと思います。</p>
        </div>

        <div class="question">
          <p>Q.参加するにあたり、何か必要なものはありますか。</p>
        </div>
        <div class="answer">
          <p>A.特にありません。活動に使用するツール（Slack・Notion・Zoom）がPCやスマートフォンから利用できれば大丈夫です。</p>
        </div>

        <div class="question">
          <p>Q.入ったらまずどんなことをするのでしょうか。</p>
        </div>
        <div class="answer">
          <p>A.スムーズに参加してもらうための各種説明会に加え、ツールの使い方や環境構築などのセットアップもサポートさせていただきます。<br>その後は定例会やオフラインイベントにご自由にご参加ください。</p>
        </div>

        <div class="question">
          <p>Q.仕事が忙しくなった場合、活動に参加できるか不安です。</p>
        </div>
        <div class="answer">
          <p>A.活動はすべて任意参加なので、ご自身のスケジュール優先で大丈夫です。内容はアーカイブに残るので、後から確認することもできます。</p>
        </div>

        <div class="question">
          <p>Q.上記の活動以外のこともしてみたいのですが、できるのでしょうか。</p>
        </div>
        <div class="answer">
          <p>A.やってみたいことの提案は大歓迎です。ここに載せきれていない活動も多くありますし、アイデアは常に募集中です。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
section {
  height: 500px;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px;
  margin: 100px;
}

h2 {
  text-align: center;
  font-family: Century;
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}

.question{
  font-weight: bold;
  font-size: 20px;
}

.answer{
  margin-bottom: 50px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  font-size: 18px;
}


</style>
