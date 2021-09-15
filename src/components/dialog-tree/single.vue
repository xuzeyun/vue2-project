<template>
  <el-dialog title="选择" width="400px" :visible.sync="dialogVisible" @close="close">
    <el-tree
      ref="tree"
      highlight-current
      :expand-on-click-node="false"
      :data="data"
      :props="defaultProps"
      check-strictly
      node-key="label"
      :default-expanded-keys="keysData"
      :default-checked-keys="keysData"
      @node-click="handleNodeClick"
    ></el-tree>
    <div slot="footer">
      <el-button type="primary" size="mini" @click="handleConfirm">确认</el-button>
      <el-button size="mini" @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogTree',
  props: ['selectValue'],
  data() {
    return {
      dialogVisible: true,

      keysData: [],

      curClickData: null,

      data: [
        {
          label: "一级 1",
          dwdm: "1001",
          children: [
            {
              label: "二级 1-1啊胡撒大声地",
              dwdm: "1001001",
              children: [
                {
                  label: "三级 1-1-1",
                  dwdm: "1001001001",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          dwdm: "1002",
          children: [
            {
              label: "二级 2-1",
              dwdm: "1002001",
              children: [
                {
                  label: "三级 2-1-1",
                  dwdm: "1002001001",
                },
              ],
            },
            {
              label: "二级 2-2",
              dwdm: "1002002",
              children: [
                {
                  label: "三级 2-2-1",
                  dwdm: "1002002001",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    }
  },
  mounted(){
    this.$nextTick(() => {
      console.log(this.selectValue, 'this.selectValue')
      this.keysData.push(this.selectValue);
      this.$refs.tree.setCheckedKeys(this.keysData);
    })
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleNodeClick(data){
      this.curClickData = Object.assign({}, data);
    },
    // 确认
    handleConfirm() {
      // let data = this.$refs.tree.getCheckedNodes()
      this.$emit('selectedData', this.curClickData);
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
// 选择后颜色效果
/deep/ .el-tree{
  .is-checked{
    background: #f0f7ff;
  }
}
</style>