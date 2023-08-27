import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createGtm } from 'vue-gtm'

const app = createApp(App)

app.use(router)
app.use(
  createGtm({
    id: 'GTM-○○○○○○○○'
  })
)

app.mount('#app')
