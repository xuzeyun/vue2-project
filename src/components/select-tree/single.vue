<template>
  <el-option value="" style="height: auto; padding: 0px">
    <!-- show-checkbox 显示复选框 -->
    <!-- check-strictly 选择时父子不关联 -->
    <el-tree
      ref="tree"
      highlight-current
      :expand-on-click-node="false"
      :data="data"
      :props="defaultProps"
      check-strictly
      node-key="label"
      :default-expanded-keys="curData"
      :default-checked-keys="curData"
      @node-click="handleNodeClick"
    ></el-tree>
  </el-option>
</template>

<script>
export default {
  name: 'selectTree',
  props: ['selectValue'],
  data() {
    return {
      curData: [],
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
  mounted() {
    this.$nextTick(() => {
      console.log(this.selectValue, 'this.selectValue');
      this.curData.push(this.selectValue);
      this.$refs.tree.setCheckedKeys(this.curData);
    })
  },
  methods: {
    handleNodeClick(data) {
      console.log(data, "data");
      // 给父级赋值
      this.$emit('selectedData', data);
    },
  }
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