<template>
  <div>
    <Container :cont="{leftWidth: '300px'}">
      <div slot="aside">
        <el-button type="primary" size="mini"><i class="fas fa-folder-plus"></i> 新增</el-button>
        <el-button type="danger" size="mini"><i class="fas fa-trash"></i> 删除</el-button>
      </div>
      <div slot="main">222</div>
    </Container>
  </div>
</template>

<script>
import Container from '../../../components/container/index.vue'
export default {
  name: 'help',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>

</style>