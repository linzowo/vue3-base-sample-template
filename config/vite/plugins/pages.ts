// 动态路由生成组件

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 */
export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
    nuxtStyle: true,
    extendRoute(route, parent) {
      const meta = {
        keepAlive: true,
      }

      // Augment the route with meta that indicates that the route requires authentication.
      return {
        ...route,
        meta: Object.assign(meta, route.meta),
      }
    },
  })
}

/**
 * @name ConfigLayoutPlugin
 * @description 动态生成layout
 */
export const ConfigLayoutPlugin = () => {
  return Layouts({
    layoutsDirs: 'src/layout/page', // 布局文件存放目录
    defaultLayout: 'index', // 默认布局，对应 src/layout/index.vue
  })
}
