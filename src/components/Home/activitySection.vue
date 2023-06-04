<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Activity</h2>

      <div class="activity">
        <div class="activity-contents">
          <img src="@/assets/img/web.jpeg" class="img">
          <p>WEB site</p>
        </div>
        <div class="activity-contents">
          <img src="@/assets/img/auto.jpeg" class="img">
          <p>Automation tools</p>
        </div>
        <div class="activity-contents">
          <img src="@/assets/img/LT.jpeg" class="img">
          <p>Lightning talk</p>
        </div>
      </div>

      <a class="btn">詳細はこちら→</a>

    </div>


  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 700px;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  background-color: F5F5F5;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px; 
  text-align: center;
}

h2 {
  font-size: 60px;
  font-family: Century;
}

.activity-contents{
  width: 300px;
  padding: 10px 30px;
  margin: 10px 30px;
  background: rgba(230, 230, 230, 0.7);
  border-bottom: solid 6px #c6cbd0;
  border-right: solid 6px #c6cbd0;
  border-radius: 9px;
  display: inline-block; 
}

.activity-contents p{
  font-family: Bitter;
  font-weight: bold;
  letter-spacing:1px;
  font-size: 20px;
}

.img{
  width: 250px;
  height: 250px;
  margin-top: 30px;
  opacity:0.95;
}

.btn{
  padding:8px 24px;
  margin-top: 40px;
  display:inline-block;
  background: #fef9c6;
  font-size: 20px;
  border-radius: 3px;
  letter-spacing:1px;
  cursor:pointer;
  border-bottom: solid 4px #dcd8ad;
}

.btn:active{
  border-bottom: none;
  position: relative;
  top:4px;
}

</style>
