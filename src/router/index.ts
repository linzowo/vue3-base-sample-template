import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
// 自动生成的路由
import generatedRoutes from 'virtual:generated-pages'
// 对路由添加layout的方法
import { setupLayouts } from 'virtual:generated-layouts'
import { getToken } from '../utils/auth'

// 对路由添加layout
const routes = []
generatedRoutes.forEach((v) => {
  routes.push(v?.meta?.layout !== false ? setupLayouts([v])[0] : v)
})

//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
