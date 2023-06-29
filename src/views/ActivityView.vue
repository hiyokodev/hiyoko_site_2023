<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Activity</h2>

      <div class="activity">
        <div class="content-box">
          <div class="background-egg"></div>
          <h3>Web Site</h3>
          <table>
            <tr>
              <td><img src="@/assets/img/web1.jpeg" class="img" /></td>
              <td><img src="@/assets/img/web2.jpeg" class="img" /></td>
              <td><img src="@/assets/img/web3.jpg" class="img" /></td>
            </tr>
          </table>
          <p>
            webデザインからプログラミングまで一貫して制作します。経験者、初心者にかかわらず、チームで
            プロジェクト管理をしてすすめていきます。キニナルを形にしてみませんか。
            <br />
            <br />私達のチームは基本オフラインでMTGを行います。
            現在は「ひよこサイト」作成・運用・新プロジェクトも計画中です！
            <br />○デスクでお菓子を囲んでワイワイ計画 <br />○ガリガリ作業 <br />○必要な素材の撮影
          </p>
        </div>
      </div>

      <div class="activity">
        <div class="content-box">
          <div class="background-egg"></div>
          <h3>Automation tools</h3>
          <table>
            <tr>
              <td><img src="@/assets/img/auto.jpeg" class="img" /></td>
              <td><img src="@/assets/img/auto2.jpeg" class="img" /></td>
            </tr>
          </table>
          <p>
            ExcelのVBAを用いて、自動化の開発を行っています。
            <br />マクロを組んだことがない人でも簡単に応用ができます。
            <br />さまざまな自動化に今後も取り組み続けます。
          </p>
        </div>
      </div>

      <div class="activity">
        <div class="content-box">
          <div class="background-egg"></div>
          <h3>Lightning talk</h3>
          <table>
            <tr>
              <td><img src="@/assets/img/LT.jpg" class="img" /></td>
              <td><img src="@/assets/img/LT2.jpeg" class="img" /></td>
            </tr>
          </table>
          <p>
            AWSチームでやっているプレゼンコーナーのようなものを、
            <br />テーマを拡張して10分程で定例会で発表します。
            <br />〇〇の機器の✗✗の設定の仕方、Linuxコマンド、環境変数とパスについてなど、
            <br />各自が好きなテーマで解説をし、メンバーと共有をして様々な知見を手に入れることができます。
            <br />
            <br />今後はさらに大きなプロジェクト単位でのグループプレゼンテーション等を考えています。
            <br />過去の資料はこちらからみることができます。
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>
<style scoped>
.contents {
  text-align: center;
}

h2 {
  margin-bottom: 200px;
  font-family: Century;
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}
.activity {
  margin-bottom: 200px;
}

.background-egg {
  position: absolute;
  top: -50px;
  left: -50px;
  background-color: #ffec50;
  border-radius: 50%;
  width: 600px;
  height: 400px;
  z-index: -1;
}

.content-box {
  position: relative;
  margin: 0 auto;
  padding: 10px;
  width: 900px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 10px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
}

.tone {
  position: absolute;
  top: 400px;
  left: 450px;
}

h3 {
  font-family: Century;
  font-size: 40px;
  text-align: left;
  margin-left: 70px;
}

.img {
  width: 250px;
  height: 250px;
  opacity: 0.9;
}

table {
  margin: 0 auto;
}

.content-box p {
  margin: 20px 70px;
  text-align: left;
}
</style>
