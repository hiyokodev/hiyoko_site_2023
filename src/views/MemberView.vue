<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Member</h2>
    </div>

    <ul class="top-banner">
        <li><img src="@/assets/img/member1.jpg"></li>
        <li><img src="@/assets/img/member2.jpg"></li>
        <li><img src="@/assets/img/member3.jpg"></li>
        <li><img src="@/assets/img/member4.jpg"></li>
        <li><img src="@/assets/img/member5.jpg"></li>
        <li><img src="@/assets/img/member6.jpg"></li>
        <li><img src="@/assets/img/member3.jpg"></li>
        <li><img src="@/assets/img/member4.jpg"></li>
        <li><img src="@/assets/img/member5.jpg"></li>
        <li><img src="@/assets/img/member6.jpg"></li>
        <li><img src="@/assets/img/member1.jpg"></li>
        <li><img src="@/assets/img/member2.jpg"></li>
        <li><img src="@/assets/img/member3.jpg"></li>
        <li><img src="@/assets/img/member6.jpg"></li>
        <li><img src="@/assets/img/member3.jpg"></li>
        <li><img src="@/assets/img/member4.jpg"></li>
        <li><img src="@/assets/img/member5.jpg"></li>
    </ul>
	
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

.top-banner{
	display: flex;
	flex-wrap:wrap;
}
.top-banner li {
  width: 30%;
	width: calc(100%/5);/*画像を横に4つ並べる場合*/
	padding:35px 60px ;/*画像の左右上下に余白を入れる場合*/
	box-sizing:border-box;
  list-style: none;/*リストの黒い●を無くす*/
}
.top-banner li img {
	max-width:100%; /*画像のはみだしを防ぐ*/
	height: auto; /*画像の縦横比を維持*/
	border:solid 10px #e1e1e1; /*←画像を1pxのグレーの枠線で囲む指定の場合*/
  flex-wrap: wrap;
  margin:40 0;
  border-radius: 35px; /* ちょっとだけ角丸 */
  
}

</style>
