<template>
  <div>
    <Container :cont="contConfig">
      <!-- aside -->
      <div slot="aside">
        <!-- 内容 -->
        <el-row class="g-bottom-10">
          <el-button type="primary" size="mini" @click="addColumn"
            ><i class="fas fa-plus"></i>新增列</el-button
          >
          <el-button type="primary" size="mini" @click="showTable"
            ><i class="fas fa-view"></i>获取代码</el-button
          >
        </el-row>
        <el-table :data="tableInfo" border>
          <!-- contenteditable="true" html5 元素可编辑 -->
          <el-table-column
            type="index"
            width="40"
            align="center"
          ></el-table-column>
          <el-table-column label="label" prop="label">
            <template slot-scope="scope">
              <span
                class="edit-span"
                contenteditable="true"
                v-html="scope.row.label"
                @blur="scope.row.label = $event.target.innerText; getProp(scope.row);"
              ></span>
            </template>
          </el-table-column>
          <el-table-column label="prop" prop="prop">
            <template slot-scope="scope">
              <span
                class="edit-span"
                contenteditable="true"
                v-html="scope.row.prop"
                @blur="scope.row.prop = $event.target.innerText"></span>
            </template>
          </el-table-column>
          <el-table-column label="宽度" prop="width" width="90">
            <template slot-scope="scope">
              <el-select v-model="scope.row.width" size="mini">
                <el-option label="240" value="240"></el-option>
                <el-option label="150" value="150"></el-option>
                <el-option label="100" value="100"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="内容对齐" prop="align" width="90">
            <template slot-scope="scope">
              <el-select v-model="scope.row.align" size="mini">
                <el-option label="左" value="left"></el-option>
                <el-option label="中" value="center"></el-option>
                <el-option label="右" value="right"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="tooltip" prop="tooltip" width="70">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.tooltip"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="查询" prop="form" width="70">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.form"
                active-text=""
                inactive-text=""
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="查询类型" prop="formType" width="100">
            <template slot-scope="scope">
              <el-select v-model="scope.row.formType" size="mini" :disabled="!scope.row.form">
                <el-option label="input" value="input"></el-option>
                <el-option label="select" value="select"></el-option>
                <el-option label="date" value="date"></el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- main -->
      <div slot="main">
        <!-- 表单 -->
        <el-form :inline="true" ref="form" :model="form" size="small">
          <template v-for="(item, index) in tableInfo">
            <el-form-item v-if="item.form" :label="item.label" :key="index" :prop="item.prop">
              <template v-if="item.formType === 'input'">
                <el-input :v-model="item.prop" :placeholder="'请填写' + item.label"></el-input>
              </template>
              <template v-if="item.formType === 'select'">
                <el-select :v-model="item.prop" :placeholder="'请选择' + item.label">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </template>
              <template v-if="item.formType === 'date'">
                <el-date-picker
                  :v-model="item.prop"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy/MM/dd"
                  value-format="yyyy/MM/dd">
                </el-date-picker>
              </template>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button type="primary" @click="formQuery">查询</el-button>
            <el-button type="info" @click="formReset">重置</el-button>
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table
          :data="tableData"
          border
          height="calc(100vh - 170px)"
          style=""
        >
          <el-table-column
            fixed
            align="center"
            type="index"
            label="序号"
            width="60"
          >
          </el-table-column>
          <template v-for="(item, index) in tableInfo">
            <el-table-column
              :key="index"
              :label="item.label"
              :prop="item.prop"
              :width="item.width"
              :align="item.align"
              header-align="left"
              :show-overflow-tooltip="item.tooltip">
              <template>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, adipisci?</span>
              </template>
            </el-table-column>
          </template>
          <el-table-column
            fixed="right"
            align="center"
            label="操作"
            width="200"
          >
            <template>
              <el-button class="g-text-btn-primary" type="text" size="mini"
                ><i class="fas fa-book-open"></i
              ></el-button>
              <el-button class="g-text-btn-primary" type="text" size="mini"
                ><i class="fas fa-edit"></i
              ></el-button>
              <el-button class="g-text-btn-danger" type="text" size="mini"
                ><i class="fas fa-trash"></i
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </Container>
    <el-dialog
      title="表格代码"
      :visible.sync="dialogVisible"
      width="70%">
      <el-input type="textarea" v-model="code" rows="10"></el-input>
    </el-dialog>
  </div>
</template>

<script>
import Container from "../../../components/container/index.vue";
import { pinyin } from 'pinyin-pro';
export default {
  name: "tablecreate",
  components: {
    Container,
  },
  data() {
    return {
      contConfig: {
        aside: true,
        leftWidth: "700px",
      },
      // 弹窗
      dialogVisible: false,
      
      // 查询表单
      form: {

      },



      code: '',
      tableInfo: [
        {
          label: "单位名称",
          prop: "dwmc",
          width: "150",
          align: "left",
          tooltip: false,
          form: false,
          formType: '',
        },
      ],
      tableHtml: '',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  watch: {},
  methods: {
    addColumn() {
      this.tableInfo.push({
        label: "",
        prop: "",
        width: "150",
        align: "left",
        tooltip: false,
      });
    },
    showTable() {
      this.dialogVisible = true;
      // console.log(this.$refs.tableDom, "showTable");
      let html = '';
      html += `<el-table :data="tableInfo" border>\n`;
      html += `  <el-table-column fixed align="center" type="index" label="序号" width="60"></el-table-column>\n`
      this.tableInfo.forEach(item => {
        html += `  <el-table-column label="${item.label}" prop="${item.prop}" width="${item.width}" align="${item.align}" header-align="left"${item.tooltip ? ' show-overflow-tooltip' : ''}></el-table-column>\n`
      })
      html += `  <el-table-column fixed="right" align="center" label="操作" width="200"></el-table-column>\n`
      html += `</el-table>`;
      this.code = html;
    },
    getProp(row) {
      row.prop = pinyin(row.label, { pattern: 'first', toneType: 'none', type: 'array'}).join('');
    },
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    // 查询
    formQuery() {

    },
    // 重置
    formReset() {

    },
  },
};
</script>

<style lang="scss" scoped>
.edit-span {
  display: inline-block;
  width: 100%;
}
</style>
