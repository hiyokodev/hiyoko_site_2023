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

    </div>


  </section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
  height: 600px;
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
}

h2 {
  text-align: center;
  font-size: 60px;
  font-family: Century;
}

.activity{
  text-align: center; 
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
}

.img{
  width: 250px;
  height: 250px;
  margin-top: 30px;
  opacity:0.95;
}


</style>
