<template>
  <div>
    <template v-for="(item, key, index) in objData">
      <!-- 如果值是对象 -->
      <div
        class="tree-dom"
        :key="index"
        v-if="Object.prototype.toString.call(item) == '[object Object]'">
        <span>{{ key }}: </span>
        <ObjTree :objData="item" :curIndex="curIndex"></ObjTree>
      </div>
      <div
        class="tree-dom"
        :key="index"
        v-else-if="Object.prototype.toString.call(item) == '[object Number]' || Object.prototype.toString.call(item) == '[object String]'">
        <span>{{ key }}: </span><span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ObjTree',
  props: ['objData'],
  data() {
    return {
      curIndex: 1,
    }
  },
  created() {
    this.curIndex += 1;
  }
}
</script>

<style lang="scss" scoped>
.tree-dom{
  padding-left: 20px;
}
</style>