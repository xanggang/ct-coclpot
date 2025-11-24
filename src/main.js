import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/index.less'
import { Carousel, Image, ConfigProvider  } from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Carousel)
app.use(Image)
app.use(ConfigProvider)
app.mount('#app')
