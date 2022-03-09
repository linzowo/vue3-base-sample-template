<template>
  <div class="layout-container">
    <!-- 顶部导航区域 S -->
    <div class="layout-header">
      <h1>这是顶部导航区域</h1>
      <router-link to="testA">Go to A</router-link>
      <router-link to="testB">Go to B</router-link>
      <router-link to="/">Go to home</router-link>
    </div>
    <!-- 顶部导航区域 E -->

    <!-- 路由切换区域 S -->
    <div class="router-view-box">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive v-if="alive">
            <component :is="Component" />
          </keep-alive>

          <component v-else :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- 路由切换区域 E -->
  </div>
</template>

<script setup name="layout">
  // const { proxy } = getCurrentInstance()
  // const router = useRouter()
  // const route = useRoute()
  import { computed, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const $route = useRoute()
  const $router = useRouter()

  const key = computed(() => $route.path)
  const alive = computed(() => $route.meta.keepAlive)

  watch(key, (key) => {
    /* ... */
    console.log('当前路由情况', $route.meta)
    // console.log('总路由情况', $router)
  })
</script>

<style lang="less" scoped>
  .layout-container {
    position: relative;
    width: 100%;
    height: 100%;

    .layout-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: pink;
    }

    .router-view-box {
      width: 100%;
      height: 100%;
      background-color: #ccc;
      padding-top: 100px;
    }
  }
</style>
