<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main" id="my">
        <!-- 标题 -->
        <el-row class="title-bar">
          <el-col :span="12" class="title-bar-text"><i class="fas fa-th-large"></i>图标</el-col>
          <el-col :span="12" class="title-bar-tool"></el-col>
        </el-row>
        <!-- 列表 -->
        <el-row>
          


          <span><i class="fas fa-upload"></i>导入/上传</span>
          <span><i class="fas fa-download"></i>导出/下载</span>

          <span><i class="fas fa-folder-plus"></i>新增</span>
          <span><i class="fas fa-edit"></i>删除</span>
          <span><i class="fas fa-edit"></i>编辑/修改</span>
          <span><i class="fas fa-edit"></i>删除</span>
        </el-row>
        <el-row>
          <span @click="dayin"><i class="fas fa-edit"></i>打印</span>
        </el-row>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../../../components/container/index.vue'
export default {
  name: 'icons',
  components: {
    Container
  },
  data() {
    return {
      contConfig: {
        aside: false,
      }
    }
  },
  watch: {
    
  },
  methods: {
    dayin(){
      let newPrint = window.open('打开窗口', "_black")
      if(!newPrint){
        this.$message.error('error');
      }
      let str = document.querySelector('#my').innerHTML
      newPrint.document.write(str);
      newPrint.document.close(str);
      newPrint.print();
      newPrint.close();
      // console.log(window.top.sessionStorage.getItem('str'));
    }
  }
}
</script>

<style lang="scss" scoped>

</style>