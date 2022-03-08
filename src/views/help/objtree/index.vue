<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main">
        <!-- 常用图标 -->
        <el-row>
          循环对象展示
        </el-row>
        <h4>对象数据</h4>
        <highlightjs language='js' :code="code" />
        <h4>递归结构</h4>
        <div class="box">
          <ObjTree :objData="objData"></ObjTree>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../../../components/container/index.vue";
import ObjTree from "./ObjTree.vue"
export default {
  name: "icons",
  components: {
    Container,
    ObjTree
  },
  render: function (createElement) {
    // `<div><slot></slot></div>`
    return createElement('div', this.$slots.default)
  },
  data() {
    return {
      contConfig: {
        aside: false,
      },

      objData: {
        name: 'xuzeyun',
        sex: '男',
        age: 18,
        wife: {
          name: 'liuyaxing',
          sex: '16',
          age: '女',
          mother: {
            name: 'hailan',
            sex: '女',
            age: '30',
          }
        }
      },
      code: `
{
  name: 'xuzeyun',
  sex: '男',
  age: 18,
  wife: {
    name: 'liuyaxing',
    sex: '16',
    age: '女',
    mother: {
      name: 'hailan',
      sex: '女',
      age: '30',
    }
  }
}
      `
    };
  },
  watch: {},
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>