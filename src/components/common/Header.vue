<template>
  <div :style="{ 'background-color': backgroundColor }">
    <header>
      <div class="Nav_Container">
        <nav v-for="Link in Links" :key="Link.name">
          <RouterLink class="Link" :to="Link.path">{{ Link.name }}</RouterLink>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    }
  },
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
template {
  position: absolute;
}
header {
  position: relative;
  display: flex;
  justify-content: end;
  padding: 30px;
  /* background-color: #ffffe5; */
}

.Nav_Container {
  position: absolute;
  display: flex;
}

.Link {
  margin: 0 15px;
  color: #000;
  font-size: 22px;
  font-family: 'Mamelon';
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}
@media screen and (max-width: 834px) {
  header {
    padding: 25px;
  }
  .Link {
    margin: 0 12px;
    font-size: 18px;
  }
}
@media screen and (max-width: 600px) {
  header {
    padding: 20px 10px;
  }
  .Link {
    margin: 0 8px;
    font-size: 15px;
  }
}
</style>
