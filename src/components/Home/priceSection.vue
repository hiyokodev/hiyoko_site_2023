<template>
  <section>
    
    <div class="background"></div>
    <div class="contents">
      <h2>Price</h2>
      <div class="text-box">
          <div class="text-box-inner">
            <p class="text-large">100円 / 月</p>
            <p >集めたお金はひよこ開発の</p>
           <p >維持費として使用させていただきます。</p>
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
  padding: -3px;
  margin:100px;
}

h2 {
  text-align: center;
  font-size: 60px;
  font-family: Century;
}

.text-box {
  position: relative;/* ←文字の親要素に指定 */
  background-color: rgba(230, 230, 230, 0.7);
  max-width: 650px;
  margin: 20px auto;
  border-radius: 50px;
  padding: 150px;
  
}

.text-box-inner{
  
  position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 18px;
}

.text-large{
  text-align: center;
  font-family: Century;
  font-weight: bold;
  font-size: 50px;
  line-height: 10px;

}

</style>
