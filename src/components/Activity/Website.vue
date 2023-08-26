<template>
  <div class="container">
    <img src="@/assets/img/website_egg.png" class="website_egg" />
    <img src="@/assets/img/website.jpg" class="website_img" />
    <div class="website_whitebox">
      <h2>Web Site</h2>
      <p>
        サイトのデザインからコーディングまで、<br />すべて自分たちだけで制作します。<br />
        チームで活動するので、技術や知識がなくても気軽に<br />始められます。<br />
        コーディングや写真撮影など、オフラインで集まってワイワイと作業することも多いです！<br />
      </p>
      <p>私たちと一緒に新しいスキルと自分を手に入れましょう！</p>
    </div>
    <img src="@/assets/img/hiyoko_ashiato01.png" class="website_ashiato_img" />
    <img src="@/assets/img/hiyoko_01.png" class="website_hiyoko_img" />
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
.website_egg {
  position: absolute;
  top: 50px;
  left: 150px;
  width: 1000px;
  text-shadow: 1px 2px 3px #808080;
}
.website_img {
  position: absolute;
  top: 100px;
  left: 500px;
  width: 700px;
  opacity: 0.9;
  border-radius: 15px;
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
}
.website_whitebox {
  position: absolute;
  top: 400px;
  left: 150px;
  width: 600px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 8px 0 rgba(65, 65, 65, 0.422);
  border-radius: 15px;
  padding-top: 5px;
}

.website_ashiato_img {
  position: absolute;
  top: 900px;
  left: 600px;
  height: 40px;
}

.website_hiyoko_img {
  position: absolute;
  top: 850px;
  left: 1250px;
  height: 100px;
}
</style>
