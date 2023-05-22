<template>
  <section>
    <div class="background"></div>
    <div class="contents">
      <h2>Question</h2>
      <p>メンバーは何人くらい？</p>
      <p>A.約30名ほどで活動中で、男女ともに参加しやすい雰囲気です。お一人で飛び込むのが不安という方は、ご友人と一緒に参加されるのもよいと思います。</p>
      
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
  background-color: lightskyblue;
  position: absolute;
  z-index: -2;
}

.contents {
  padding: 20px;
}

h2 {
  text-align: center;
}
</style>
