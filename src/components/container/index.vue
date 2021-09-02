<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-aside v-if="cont.aside" v-show="isCollapse" :width="cont.leftWidth">
      <slot name="aside"></slot>
    </el-aside>
    <el-main>
      <div class="collapse-btn" @click="collapse" v-if="cont.aside">
        <i v-if="isCollapse" class="fas fa-chevron-left"></i>
        <i v-else class="fas fa-chevron-right"></i>
      </div>
      <slot name="main"></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'constainer',
  props: {
    cont: Object,
  },
  data(){
    return {
      isCollapse: true,
    }
  },
  methods: {
    collapse(){
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container{
  padding: 15px;
  background: #f5f8f9;
  .el-aside, .el-main{
    height: calc(100vh - 30px);
    overflow: auto;
    padding: 6px;
    padding-bottom: 0;
    background: #fff;
    // border: #ddd 1px solid;
    // box-shadow: 3px 3px 5px rgba(195, 199, 201, 0.34);
    // border: #dedee8 1px solid;
    box-shadow: 1px 1px 3px rgba(195, 199, 201, 0.5);
    border-radius: 5px;
  }
  .el-aside{
    width: 400px;
    margin-right: 16px;
  }
  .el-main{
    .collapse-btn{
      font-size: 14px;
      position: absolute;
      width: 15px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      margin-top: calc(50vh - 19px);
      margin-left: -22px;
      z-index: 1;
      cursor: pointer;
    }
  }
}

</style>