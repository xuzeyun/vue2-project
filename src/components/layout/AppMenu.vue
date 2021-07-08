<template>
  <div>
    <div class="logo-title"><img src="../../assets/logo2.png" width="23" height="23" alt=""><span> 项目管理名称</span></div>
    <el-menu
      :default-active="curPath"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      unique-opened
      background-color="#303e47"
      text-color="#576069"
      active-text-color="#7a7f56">
      <template v-for="(item, index) in appMenu">
        <el-submenu :index="(index+1)+''" :key="item.name">
          <template slot="title">
            <i :class="'fas fa-' + item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(menu, menuIndex) in item.menus">
            <el-menu-item :index="menu.url" :key="menuIndex">{{ menu.name }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MENU from '../../utils/menu'
export default {
  name: 'appMenu',
  data(){
    return {
      appMenu: MENU,
      curPath: '',
    }
  },
  watch: {
    '$route': 'getPath'
  },
  mounted(){
    this.getPath();
  },
  methods: {
    getPath(){
      this.curPath = this.$route.path;
      console.log(this.$route.path, 'this.$route.path')
    },

    handleSelect(index){
      this.$router.push(index);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-title{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
  background: #303e47;
  color: #7a7f56;
  text-align: center;
  img, span{
    display: inline;
    vertical-align: middle;
  }
}
.el-menu-vertical-demo{
  width: 270px;
  height: calc(100vh - 50px);
  overflow: auto;
  /deep/ .el-submenu__title{
    height: 42px;
    line-height: 42px;
  }
  .el-menu-item{
    height: 38px;
    line-height: 38px;
  }
  .fas{
    margin-right: 10px;
  }
}
</style>