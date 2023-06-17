<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Member</h2>
    </div>

    <div class="slide-container">
   <div class="slide-wrapper">
      <img class="slide" src="../assets/img/member1" >
      <img class="slide" src="../assets/img/member2" >
      <img class="slide" src="../assets/img/member3" >
   </div>
   <div class="slide-wrapper">
      <img class="slide" src="../assets/img/member1" >
      <img class="slide" src="../assets/img/member2" >
      <img class="slide" src="../assets/img/member3" >
   </div>
   <div class="slide-wrapper">
      <img class="slide" src="../assets/img/member1" >
      <img class="slide" src="../assets/img/member2" >
      <img class="slide" src="../assets/img/member3" >
   </div>
</div>


  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 1000px;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  background-color: lightgoldenrodyellow;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px;
  font-family: Century;
  font-weight: bold;
  font-size: 50px;
  line-height: 10px;
}

h2 {
  text-align: center;
}


.slide-container {
    width: 100%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.slide-wrapper {
  display: flex;
  animation: slide-flow 20s infinite linear 1s both;
}
.slide{
  width: 300px;
  object-fit:cover;
  border: 1px solid #ddd;
}
@keyframes slide-flow {
     0% {transform: translateX(0);}
 100% {transform: translateX(-100%);}
}
</style>
