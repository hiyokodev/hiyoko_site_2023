<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Member</h2>
    </div>
    <div class="btn">
    <ul class="photos">
        <li><img src="@/assets/img/tauti_akane1.jpg"></li>
        <li><img src="@/assets/img/takasu_masayuki1.jpg"></li>
        <li><img src="@/assets/img/kunibe_mayu1.jpg"></li>
        <li><img src="@/assets/img/saijyo_yume1.jpg"></li>
        <li><img src="@/assets/img/koyama_wataru1.jpg"></li>
        <li><img src="@/assets/img/nomura_mao1.jpg"></li>
    </ul>
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

.photos{
	display: flex;
	flex-wrap:wrap;
  justify-content: center;
}
.photos li {
	width: calc(100% / 5);/*画像を横に5つ並べる場合*/
	padding:0px 40px ;/*画像の左右上下に余白を入れる場合*/
	box-sizing:border-box;
  list-style: none;/*リストの黒い●を無くす*/
}
.photos li img {
	max-width:100%; /*画像のはみだしを防ぐ*/
  min-width: 130px; /*画像の最低幅を定義*/
	height: auto; /*画像の縦横比を維持*/
	border:solid 10px #e1e1e1; /*←画像を1pxのグレーの枠線で囲む指定の場合*/
  flex-wrap: wrap;
  margin:40px 0px;
  border-radius: 35px; /* ちょっとだけ角丸 */
  
}

.btn{
  .btn:hover {
  -webkit-transform: scale(1.3);
	transform: scale(1.3);
}
.btn:hover img:nth-of-type(2) {
  opacity: 0;
}
}


</style>
