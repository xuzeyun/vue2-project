<template>
  <div class="app-wrapper">
    <!-- 导航 app-menu -->
    <AppMenu class="app-menu"></AppMenu>
    <!-- 主体内容 app-main -->
    <AppMain class="app-main"></AppMain>
  </div>
</template>

<script>
// 导航
// import AppMenu from './AppMenu2.vue'
import AppMenu from './AppMenu.vue'
// 主体内容
import AppMain from './AppMain.vue'
export default {
  name: 'layout',
  components: {
    AppMenu,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: left;
  .app-menu{
    width: 270px;
    height: 100vh;
  }
  .app-main{
    width: calc(100vw - 270px);
    height: 100vh;
    background: #f8f9fb;
  }
}
</style>