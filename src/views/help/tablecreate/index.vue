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
            ><i class="fas fa-download"></i>获取代码</el-button
          >
        </el-row>
        <el-row class="g-bottom-10">
          是否显示操作列:
          <el-checkbox v-model="cz.isShow"></el-checkbox>
          操作列按钮选择:
          <el-checkbox v-model="cz.view">查看/详情</el-checkbox>
          <el-checkbox v-model="cz.update">修改</el-checkbox>
          <el-checkbox v-model="cz.delete">删除</el-checkbox>
        </el-row>
        
        <el-table :data="tableInfo" border key="table">
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
        <el-form :inline="true" ref="form" :model="form" size="mini">
          <template v-for="(item, index) in tableInfo">
            <el-form-item v-if="item.form" :label="item.label" :key="index" :prop="item.prop">
              <template v-if="item.formType === 'input'">
                <el-input :v-model="item.prop" :placeholder="'请填写' + item.label" clearable @keyup.enter.native="handleQuery"></el-input>
              </template>
              <template v-if="item.formType === 'select'">
                <el-select :v-model="item.prop" :placeholder="'请选择' + item.label" clearable @change="handleQuery">
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
                  value-format="yyyy/MM/dd"
                  clearable
                  @change="handleQuery">
                </el-date-picker>
              </template>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button type="primary" @click="handleQuery"><i class="fas fa-search"></i>查询</el-button>
            <el-button type="info" @click="handleReset"><i class="fas fa-undo-alt"></i>重置</el-button>
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table
          :data="tableData"
          border
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
                <span>Test text</span>
              </template>
            </el-table-column>
          </template>
          <el-table-column
            v-if="cz.isShow"
            fixed="right"
            align="center"
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button v-if="cz.view" title="查看" class="g-text-btn-primary" type="text" size="mini"
                @click="viewHandle(scope.row)"><i class="fas fa-eye"></i
              ></el-button>
              <el-button v-if="cz.update" title="修改" class="g-text-btn-primary" type="text" size="mini"
                @click="updateHandle(scope.row)"><i class="fas fa-edit"></i
              ></el-button>
              <el-button v-if="cz.delete" title="删除" class="g-text-btn-danger" type="text" size="mini"
                @click="deleteHandle(scope.row)"><i class="fas fa-trash"></i
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
      <el-input type="textarea" v-model="code" rows="20"></el-input>
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
          formType: 'input',
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
      // 表格操作列
      cz: {
        isShow: false,
        view: false,
        update: false,
        delete: false,
      }
      
    };
  },
  watch: {},
  methods: {
    addColumn() {
      this.$nextTick(() => {
        this.tableInfo.push({
          label: "",
          prop: "",
          width: "150",
          align: "left",
          tooltip: false,
          form: false,
          formType: 'input',
        });
      })
      
    },
    showTable() {
      this.dialogVisible = true;

      let html = '';
      html += `<template>\n  <div>\n`;
      // form
      html += `    // 查询条件\n`;
      html += `    <el-form inline ref="form" :model="form" size="small">\n`;
      this.tableInfo.forEach(item => {
        if(item.form){
          html += `      <el-form-item label="${item.label}" prop="${item.prop}">\n`
          if(item.formType === 'input'){
            html += `        <el-input v-model="form.${item.prop}" placeholder="请填写${item.label}" clearable @keyup.enter.native="handleQuery"></el-input>\n`
          } else if(item.formType === 'select'){
            html += `        <el-select v-model="form.${item.prop}" placeholder="请选择${item.label}" clearable> @change="handleQuery"\n`
            html += `          <el-option label="区域一" value="shanghai"></el-option>\n`
            html += `          <el-option label="区域二" value="beijing"></el-option>\n`
            html += `        </el-select>\n`
          } else if(item.formType === 'date'){
            html += `        <el-date-picker v-model="form.${item.prop}" type="date" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd" clearable @change="handleQuery"></el-date-picker>\n`
          }
          html += `      </el-form-item>\n`
        }
      })
      html += `      <el-form-item>\n`
      html += `        <el-button type="primary" @click="handleQuery"><i class="fas fa-search"></i>搜索</el-button>\n`
      html += `        <el-button type="info" @click="handleReset"><i class="fas fa-undo-alt"></i>重置</el-button>\n`
      html += `      </el-form-item>\n`
      html += `      <el-form-item></el-form-item>\n`
      html += `    </el-form>\n`


      // table
      html += `    // 表格\n`;
      html += `    <el-table :data="tableData" border>\n`
      html += `      <el-table-column fixed align="center" type="index" label="序号" width="60"></el-table-column>\n`
      this.tableInfo.forEach(item => {
        html += `      <el-table-column label="${item.label}" prop="${item.prop}" width="${item.width}" align="${item.align}" header-align="left"${item.tooltip ? ' show-overflow-tooltip' : ''}></el-table-column>\n`
      })

      if(this.cz.isShow){
        html += `      <el-table-column fixed="right" align="center" label="操作" width="200">\n`
        if(this.cz.view){
          html += `        <el-button title="查看" type="text" size="mini" @click="viewHandle(scope.row)"><i class="fas fa-eye"></i></el-button>\n`
        }
        if(this.cz.update){
          html += `        <el-button title="修改" type="text" size="mini" @click="updateHandle(scope.row)"><i class="fas fa-edit"></i></el-button>\n`
        }
        if(this.cz.delete){
          html += `        <el-button title="删除" type="text" size="mini" @click="deleteHandle(scope.row)"><i class="fas fa-trash"></i></el-button>\n`
        }
        html += `      </el-table-column>\n`
      }
      html += `    </el-table>\n`;
      html += `  <div>\n<template>\n\n`;

      // script
      html += `<script>\n`;
      html += `export default {\n`;
      html += `  name: "table",\n`;
      html += `  data() {\n`;
      html += `    return {\n`;

      html += `      form: {\n`;
      this.tableInfo.forEach(item => {
        if(item.form){
          html += `        ${item.prop}: '',\n`;
        }
      })
      html += `      }\n`;
      html += `      tableData: [],\n`;


      html += `    }\n`;
      html += `  }\n`;
      html += `}\n`;
      html += `<script>\n`;

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

    // 查询 重置
    handleQuery() {},
    handleReset() {},
    // 操作按钮方法
    viewHandle() {},
    updateHandle() {},
    deleteHandle() {},
  },
};
</script>

<style lang="scss" scoped>
.edit-span {
  display: inline-block;
  width: 100%;
}
</style>
