import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import './index.css'
// 引入Antd-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import DvFullScreenContainer from '@/components/fullScreenContainer/index'
// 支持SVG
import 'virtual:svg-icons-register'

createApp(App)
  .use(router)
  .use(Antd)
  .use(piniaStore)
  .use(DvFullScreenContainer)
  .mount('#app')
