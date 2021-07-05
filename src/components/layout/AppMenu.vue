<template>
  <div>
    <div class="logo-title"><img src="../../assets/logo2.png" width="23" height="23" alt=""><span> 项目管理名称</span></div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#303e47"
      text-color="#576069"
      active-text-color="#7a7f56">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'appMenu',
  methods: {
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
  img, span{
    display: inline;
    vertical-align: middle;
  }
}
.el-menu-vertical-demo{
  width: 270px;
  text-align: left;
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
}
</style>