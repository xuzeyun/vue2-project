<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main">
        <!-- 常用图标 -->
        <el-row>
          常用图标
        </el-row>
        <!-- 列表 -->
        <el-row class="icons-wrap">
          <template v-for="item in icons">
            <el-col :span="2" :key="item.flag">
              <i :class="'fas fa-' + item.flag"></i><br>
              <span>{{ item.name }}</span>
            </el-col>
          </template>
        </el-row>
        <el-row>
          所有图标
        </el-row>
        <!-- <div>
          更多：<a
            href="https://fa5.dashgame.com"
            target="_blank"
            rel="noopener noreferrer"
            >https://fa5.dashgame.com</a
          >
        </div> -->
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../../../components/container/index.vue";
export default {
  name: "icons",
  components: {
    Container,
  },
  data() {
    return {
      contConfig: {
        aside: false,
      },
      icons: [
        { name: "导入/上传", flag: "upload" },
        { name: "导出/下载", flag: "download" },
        { name: "新增", flag: "folder-plus" },
        { name: "删除", flag: "trash" },
        { name: "修改", flag: "edit" },
        { name: "查询", flag: "search" },
        { name: "重置", flag: "undo-alt" },
        { name: "添加人员", flag: "user-plus" },
        { name: "人员/用户", flag: "user" },
        { name: "人员修改", flag: "user-edit" },
        { name: "评审", flag: "users" },
        { name: "打印", flag: "print" },
        { name: "查看/详情", flag: "book-open" },
        { name: "查看/详情", flag: "eye" },
        { name: "甲方/乙方信息", flag: "address-card" },
        { name: "签订", flag: "pen-alt" },
        { name: "流程图", flag: "project-diagram" },
        { name: "发送", flag: "paper-plane" },
        { name: "付款", flag: "money-check-alt" },
        { name: "图片", flag: "image" },
        { name: "主页", flag: "home" },
        { name: "确认", flag: "calendar-check" },
        { name: "确认", flag: "check" },
        { name: "取消", flag: "times" },
        { name: "驳回", flag: "calendar-times" },
        { name: "驳回", flag: "reply" },
        { name: "全部驳回", flag: "reply-all" },
        { name: "图表", flag: "chart-area" },
        { name: "文件上传", flag: "file-upload" },
        { name: "关联", flag: "retweet" },
        { name: "帮助", flag: "question-circle" },
        { name: "刷新", flag: "sync-alt" },
        { name: "菜单", flag: "th-large" },

        { name: "关闭窗口", flag: "window-close" },
        { name: "最小化", flag: "window-minimize" },
        { name: "最大化", flag: "window-maximize" },
        { name: "恢复", flag: "window-restore" },
      ],
    };
  },
  watch: {},
  methods: {
    iconHtml(flag) {
      return `<i class="fas fa-${flag}"></i>`;
    },
  },
};
</script>

<style lang="scss" scoped>
.icons-wrap{
  padding: 10px 0;
  .el-col{
    margin: 15px 0px;
  }
  text-align: center;
  font-size: 12px;
  i{
    font-size: 16px;
    margin-bottom: 5px;
  }
}
</style>