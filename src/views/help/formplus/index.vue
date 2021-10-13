<template>
  <div>
    <Container :cont="contConfig">
      <div slot="main">
        <!-- 下拉菜单 单选 -->
        <div class="g-bottom-10">
          <el-row class="g-bottom-10">Select内嵌树形单选 select-tree-single</el-row>
          <el-select v-model="selectValue" placeholder="请选择" @visible-change="selectVisibleChange" ref="select">
            <SelectTreeSingle v-if="selectTreeState" :selectValue="selectValue" @selectedData="selectedData"></SelectTreeSingle>
          </el-select>
        </div>
        <!-- 下拉菜单 多选 -->
        <div class="g-bottom-10">
          <el-row class="g-bottom-10">Select内嵌树形多选 select-tree-multiple</el-row>
          <el-select v-model="selectValue1" multiple placeholder="请选择" @visible-change="selectVisibleChange1" ref="select1">
            <SelectTreeMultiple v-if="selectTreeState1" :selectValue="selectValue1" @selectedData="selectedData1"></SelectTreeMultiple>
          </el-select>
        </div>

        <!-- 弹窗 单选 -->
        <div class="g-bottom-10">
          <el-row class="g-bottom-10">Dialog内嵌树形单选 dialog-tree-single</el-row>
          <el-input placeholder="请输入内容" v-model="input">
            <el-button slot="append" size="medium" @click="handleSelect">选择</el-button>
          </el-input>
        </div>
        <!-- 弹窗 多选 -->
        <div class="g-bottom-10">
          <el-row class="g-bottom-10">Dialog内嵌树形多选 select-tree-multiple</el-row>
          <el-input placeholder="请输入内容" v-model="input1">
            <el-button slot="append" size="medium" @click="handleSelect1">选择</el-button>
          </el-input>
        </div>

        <!-- 经纬度 -->
        <div class="g-bottom-10">
          <el-row class="g-bottom-10 jwd">经纬度表单 {{ jwdValue }}</el-row>
            <el-input placeholder="度" v-model="jd[0]" style="width: 50px;">
              <i slot="suffix">°</i>
            </el-input>
            <el-input placeholder="分" v-model="jd[1]" style="width: 50px;">
              <i slot="suffix">′</i>
            </el-input>
            <el-input placeholder="秒" v-model="jd[2]" style="width: 50px;">
              <i slot="suffix">″</i>
            </el-input>         
        </div>

      </div>
    </Container>
    <DialogTreeSingle
      v-if="dialogTreeState"
      :selectValue="input"
      @close="closeDialog"
      @selectedData="dialogTreeData">
    </DialogTreeSingle>
    <DialogTreeMultiple
      v-if="dialogTreeState1"
      @close="closeDialog1"
      :selectValue="input1 ? input1.split(',') : []"
      @selectedData="dialogTreeData1">
    </DialogTreeMultiple>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
    SelectTreeSingle: () => import('@/components/select-tree/single.vue'),
    SelectTreeMultiple: () => import('@/components/select-tree/multiple.vue'),

    DialogTreeSingle: () => import('@/components/dialog-tree/single.vue'),
    DialogTreeMultiple: () => import('@/components/dialog-tree/multiple.vue'),
  },
  data() {
    return {
      contConfig: {
        aside: false,
      },
      // 单选
      selectValue: "",
      selectTreeState: false,
      // 多选
      selectValue1: [],
      selectTreeState1: false,

      // 单选
      input: '',
      dialogTreeState: false,
      // 多选
      input1: '',
      dialogTreeState1: false,

      // 经纬度
      jwdValue: '',
      // 经度
      jd: [],
      wd: [],
    };
  },
  watch: {
    jd(val){
      console.log(val, 'jwd')
      this.jwdValue = val.join(',')
    }
  },
  methods: {
    // ================================================== 下拉菜单树形选择
    // SelectTree 选择的数据
    selectedData(data){
      this.selectValue = data.label;
      this.selectTreeState = false;
      this.$refs.select.blur();
    },
    // Select 框值改变时候触发的事件
    selectVisibleChange(val){
      this.selectTreeState = val;
    },

    // SelectTree 选择的数据
    selectedData1(flag, data){
      this.selectValue1 = [];
      if(flag === 'confirm') {
        data.forEach(item => {
          this.selectValue1.push(item.label);
        });
      }
      this.selectTreeState1 = false;
      this.$refs.select1.blur();
    },
    // Select 框值改变时候触发的事件
    selectVisibleChange1(val){
      this.selectTreeState1 = val;
    },

    // ================================================== 下拉菜单树形选择


    handleSelect(){
      console.log(111)
      this.dialogTreeState = true;
    },
    closeDialog(){
      this.dialogTreeState = false;
    },
    dialogTreeData(data){
      console.log(data, '弹窗单选');
      this.input = data.label;
    },

    handleSelect1(){
      this.dialogTreeState1 = true;
    },
    closeDialog1(){
      this.dialogTreeState1 = false;
    },
    dialogTreeData1(data){
      console.log(data, '弹窗多选')
      let arr = [];
      data.forEach(item => {
        arr.push(item.label);
      })
      this.input1 = arr.join(',');
    },
  },
};
</script>

<style lang="scss" scoped>

  ::v-deep .el-input--suffix{
    .el-input__inner{
      padding: 0 5px !important;
    }
    .el-input__suffix{
      padding: 2px 2px 0 0;
      font-size: 20px;
    }
  }
</style>