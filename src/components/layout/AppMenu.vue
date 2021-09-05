<template>
  <div>
    <div class="logo-title">Xu Zeyun</div>
    <el-menu
      :default-active="curPath"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      unique-opened
      background-color="#20232a"
      text-color="#747c8d"
      active-text-color="#fff">
      <template v-for="(item, index) in appMenu">
        <el-submenu :index="(index+1)+''" :key="item.name">
          <template slot="title">
            <i :class="'fas fa-' + item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(menu, menuIndex) in item.menus">
            <el-menu-item :index="menu.url" :key="menuIndex"><i :class="'fas fa-' + menu.icon"></i>{{ menu.name }}</el-menu-item>
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
  background: #20232a;
  box-sizing: border-box;
  border-bottom: #333843 1px solid;
  color: #1d8acf;
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
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }
  .fas{
    margin-right: 10px;
  }
  /deep/ .el-menu{
    padding: 10px;
    box-sizing: border-box;
    .el-menu-item{
      border-radius: 5px;
      margin-bottom: 5px;
    }
    .is-active{
      background: #151619 !important;
      
    }
  }
}
</style>