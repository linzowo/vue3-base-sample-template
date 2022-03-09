<template>
  <DvFullScreenContainer>
    <router-view></router-view>
  </DvFullScreenContainer>
</template>
<script setup lang="ts">
  // import { useAppStore } from './store/modules/app'
  // const appStore = useAppStore()

  // provide('reload', reload)
  // function reload() {
  //   isRouterAlive.value = false
  //   nextTick(() => (isRouterAlive.value = true))
  // }

  // const isRouterAlive = ref(true)
  document.title = import.meta.env.VITE_APP_TITLE
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
</style>
