<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-aside :width="cont.leftWidth">
      <slot name="aside"></slot>
    </el-aside>
    <el-main>
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
      
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container{
  padding: 15px;
  background: #f5f5f5;
  .el-aside, .el-main{
    height: calc(100vh - 30px);
    overflow: auto;
    padding: 10px;
    padding-bottom: 0;
    background: #fff;
    // border: #ddd 1px solid;
    // box-shadow: 3px 3px 5px rgba(195, 199, 201, 0.34);
    border: #dedee8 1px solid;
    box-shadow: 1px 1px 3px rgba(195, 199, 201, 0.34);

    
  }
  .el-aside{
    width: 400px;
    margin-right: 20px;
  }
}

</style>