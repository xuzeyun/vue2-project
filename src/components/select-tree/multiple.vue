<template>
  <el-option :value="null" style="height: auto; padding: 0px">
    <!-- show-checkbox 显示复选框 -->
    <!-- check-strictly 选择时父子不关联 -->
    <!-- <div class="el-select-dropdown el-popper is-multiple"> -->
      <el-tree
        ref="tree"
        highlight-current
        :expand-on-click-node="false"
        :data="data"
        :props="defaultProps"
        show-checkbox
        check-strictly
        node-key="label"
        :default-expanded-keys="curData"
        :default-checked-keys="curData"
      ></el-tree>
      <div align="center">
        <el-button type="primary" size="mini" @click="handleConfirm">确认</el-button>
        <el-button size="mini" @click="handleCancel">取消</el-button>
      </div>
    <!-- </div> -->
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
              label: "二级 1-1",
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
      this.curData.push(...this.selectValue);
      this.$refs.tree.setCheckedKeys(this.selectValue);
    })
  },
  methods: {
    // 确认
    handleConfirm() {
      let data = this.$refs.tree.getCheckedNodes()
      this.$emit('selectedData', 'confirm', data);
    },
    // 取消
    handleCancel() {
      this.$emit('selectedData', 'cancel');
    },
  }
}
</script>

<style lang="scss" scoped>
// 选择后颜色效果
/deep/ .el-tree{
  margin-bottom: 3px;
  .is-checked{
    background: #f0f7ff;
  }
}
</style>