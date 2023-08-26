<template>
  <footer>
    <div class="Image_Container">
      <img src="@/assets/img/Common/footer_hiyoko.png" />
    </div>
    <div class="Footer">
      <p class="Footer_Text">©︎ UALひよこクラブ開発部</p>
    </div>
  </footer>
</template>

<style scoped>
.Image_Container {
  padding-right: 50px;
  height: 100px;
  text-align: right;
}

img {
  height: 100%;
}

.Footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 30px;
  background-color: #fbea92;
}

.Footer_Text {
  margin: 0;
  font-size: 14px;
  text-align: center;
}
@media screen and (max-width: 834px) {
  .Image_Container {
    height: 70px;
  }
}
</style>
