<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <img src="@/assets/img/Common/logo.webp" class="logo" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // 仮の読み込み完了判定として、2秒後にローディングを非表示にする
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: #ffffe5;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; /* 0.5秒かけてフェードさせる */
}

.fade-enter,
.fade-leave-to {
  opacity: 0; /* 非表示状態 */
}

.fade-enter-to,
.fade-leave {
  opacity: 1; /* 表示状態 */
}

.logo {
  width: 50vw;
}

@media only screen and (max-width: 600px) {
  .logo {
    width: 90vw;
  }
}
</style>
