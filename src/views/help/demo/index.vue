<template>
  <div>
    <Container :cont="contConfig">
      <!-- aside -->
      <div slot="aside">
        <!-- 标题 -->
        <!-- <el-row class="title-bar">
          <el-col :span="12" class="title-bar-text"><i class="fas fa-th-large"></i>项目目录树</el-col>
          <el-col :span="12" class="title-bar-tool"><el-button type="primary" size="mini"><i class="fas fa-folder-plus"></i>新增</el-button></el-col>
        </el-row> -->
        <!-- 内容 -->
        <el-row class="g-bottom-10">
          <el-input
            size="mini"
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
        </el-row>
        <el-row>
          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
          </el-tree>
        </el-row>
      </div>
      <!-- main -->
      <div slot="main">
        <!-- 标题 -->
        <!-- <el-row class="title-bar">
          <el-col :span="12" class="title-bar-text"><i class="fas fa-th-large"></i>主要内容区域</el-col>
          <el-col :span="12" class="title-bar-tool">
            <el-button type="primary" size="mini"><i class="fas fa-upload"></i>导入</el-button>
            <el-button type="primary" size="mini"><i class="fas fa-download"></i>导出</el-button>
          </el-col>
        </el-row> -->
        <!-- 查询 -->
        <el-row>
          <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit"><i class="fas fa-search"></i>查询</el-button>
              <el-button type="info"><i class="fas fa-undo"></i>重置</el-button>
              <el-button type="danger"><i class="fas fa-trash"></i>批量删除</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row class="g-bottom-10">
          <el-table
            :data="tableData"
            border
            height="calc(100vh - 170px)"
            style="">
            <el-table-column
              fixed
              align="center"
              type="index"
              label="序号"
              width="60">
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              align="center"
              label="操作"
              width="200">
              <!-- slot-scope="scope" -->
              <template>
                <el-button class="g-text-btn-primary" type="text" size="mini"><i class="fas fa-book-open"></i></el-button>
                <el-button class="g-text-btn-primary" type="text" size="mini"><i class="fas fa-edit"></i></el-button>
                <el-button class="g-text-btn-danger" type="text" size="mini"><i class="fas fa-trash"></i></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <!-- 分页 -->
        <el-row>
          <el-col align="center">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../../../components/container/index.vue'
export default {
  name: 'demo',
  components: {
    Container
  },
  data() {
    return {
      contConfig: {
        aside: true,
        leftWidth: '300px',
      },
      formInline: {
        user: '',
        region: ''
      },
      currentPage4: 30,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>