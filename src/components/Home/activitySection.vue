<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Activity</h2>

      <div class="activity">
        <div class="activity-contents">
          <p>WEB site</p>
          <img src="C:\Users\yume\OneDrive\画像\カメラ ロール\8726b32a1b75702b6e9b4637aa58f8df.jpg">
        </div>
        <div class="activity-contents">
          <p>Automation tools</p>
          <img src="C:\Users\yume\OneDrive\画像\カメラ ロール\8726b32a1b75702b6e9b4637aa58f8df.jpg">
        </div>
        <div class="activity-contents">
          <p>Lightning talk</p>
          <img src="C:\Users\yume\OneDrive\画像\カメラ ロール\8726b32a1b75702b6e9b4637aa58f8df.jpg">
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
  height: 500px;
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
  border-radius: 9px;
  display: inline-block; 
}

.activity-contents p{
  font-family: Bitter;
  font-weight: bold;
}

</style>
