<script setup></script>

<template>
  <main>
    <div class="contents">
      <h2>Member</h2>

    <p>愉快な仲間たち</p>
    </div>

    <ul class="member-photo">
      <li><img src="assets/img/member1.jpg" alt=""></li>
      <li><img src="assets/img/member2.jpg" alt=""></li>
      <li><img src="assets/img/member3.jpg" alt=""></li>
      <li><img src="assets/img/member4.jpg" alt=""></li>
      <li><img src="assets/img/member5.jpg" alt=""></li>
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

.member-photo{
  display: flex;
  flex-wrap: wrap;
}

.member-photo li{
  width: colc(100%5);
  padding: 0 5px;
  box-sizing: border-box;
}

.member-photo li img{
  max-width: 100%;
  height: auto;
  border: solid 1px #ccc;
}

</style>
