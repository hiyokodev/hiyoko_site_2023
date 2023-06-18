<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Activity</h2>

      <div class="Web site">
        <div class="daen one"></div>
        <div class="tyouhoukei tone">
          <h3>Web Site</h3>
          <table border="0">
            <tr>
              <td><img src="@/assets/img/web1.jpeg" class="img"></td>
              <td><img src="@/assets/img/web2.jpeg" class="img"></td>
              <td><img src="@/assets/img/web3.jpg" class="img"></td>
            </tr>
          </table>
          <p>webデザインからプログラミングまで一貫して制作します。経験者、初心者にかかわらず、チームで
             プロジェクト管理をしてすすめていきます。キニナルを形にしてみませんか。
             <br>
             <br>私達のチームは基本オフラインでMTGを行います。
             現在は「ひよこサイト」作成・運用・新プロジェクトも計画中です！
             <br>○デスクでお菓子を囲んでワイワイ計画
             <br>○ガリガリ作業
             <br>○必要な素材の撮影</p>
        </div>

      </div>

      <div class="Automation tools">
        <div class="daen two"></div>
        <div class="tyouhoukei ttwo">
          <h3>Automation tools</h3>
        </div>
      </div>

      <div class="Lightning talk">
        <div class="daen three"></div>
        <div class="tyouhoukei tthree">
          <h3>Lightning talk</h3>
        </div>
      </div>

    </div>
  </main>
</template>




<script>
export default {}
</script>
<style scoped>

.contents{
  text-align: center;
}

h2 {
  font-family: Century;
  font-size: 60px;
  text-shadow: 1px 2px 3px #808080;
}

.daen{
  background-color:#ffec50;
  border-radius: 50%;
  margin:10% 30% 20% 10%;
  width: 1000px;
  height: 700px;
}

.one{
  position: relative;
}

.two{
  position: relative;
}

.three{
  position: relative;
}

.tyouhoukei{
  width: 900px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 10px 0 rgba(65, 65, 65, 0.422);
}

.tone{
  position: absolute;
  top: 400px;
  left: 450px;
}

h3{
  font-family: Century;
  font-size: 40px;
  text-align: left;
  margin-left: 70px;
}

.img{
  width: 250px;
  height: 250px;
}

table{
  margin: 0 auto;
}

.tyouhoukei p{
  margin:20px 80px;
  text-align: left;
}
</style>