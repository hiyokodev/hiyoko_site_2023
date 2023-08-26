<template>
  <div class="container">
    <img src="@/assets/img/LT_egg.png" class="LT_egg" />
    <img src="@/assets/img/LT.jpg" class="LT_img" />
    <div class="LT_whitebox">
      <h2>Lightning Talk</h2>
      <p>
        Lightning Talk（LT）とはテーマ自由のプレゼンのようなものです。<br />
        月1回のオンライン定例会で、持ち回りで発表しています。<br />
        たくさんの知識とプレゼンスキルを手に入れることができます。<br />
      </p>
      <p>★テーマの例:ChatGPTを少し触る,デザイン基礎について</p>
    </div>
    <img src="@/assets/img/hiyoko_ashiato02.png" class="LT_ashiato_img" />
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.container {
  position: relative;
  height: 1000px;
}
h2 {
  text-align: left;
  font-family: 'Mamelon';
  font-size: 50px;
  padding-left: 7%;
}

p {
  padding-left: 7%;
  padding-right: 7%;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-family: 'Yomogi';
}
.LT_egg {
  position: absolute;
  top: 150px;
  left: 450px;
  width: 800px;
  text-shadow: 1px 2px 3px #808080;
}
.LT_img {
  position: absolute;
  top: 150px;
  left: 200px;
  width: 500px;
  opacity: 0.9;
  border-radius: 8%;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}
.LT_whitebox {
  position: absolute;
  top: 120px;
  left: 500px;
  width: 600px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.LT_ashiato_img {
  position: absolute;
  top: 1000px;
  left: 150px;
  height: 40px;
  transform: skew(-10deg, 5deg);
}
</style>
