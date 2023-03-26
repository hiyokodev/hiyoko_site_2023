<template>
  <header>
    <nav v-for="Link in Links" :key="Link.name">
      <RouterLink class="Link" :to="Link.path">{{ Link.name }}</RouterLink>
    </nav>
  </header>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data: () => {
    return {
      Links: [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/member',
          name: 'Member'
        },
        {
          path: '/activity',
          name: 'Activity'
        }
      ]
    }
  }
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: end;
  padding: 30px;
  background-color: antiquewhite;
}

.Link {
  margin: 0 10px;
}
</style>
