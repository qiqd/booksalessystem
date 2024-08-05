import './assets/bass.css'
import 'element-plus/es/components/message/style/css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia().use(piniaPluginPersistedstate))


app.mount('#app')
