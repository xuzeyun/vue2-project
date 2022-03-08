<template>
  <div>
    <template v-for="item in routerList">
      <el-submenu v-if="item.children" :index="item.menuId" :key="item.menuId">
        <!-- 菜单 -->
        <template slot="title">
          <i :class="'fas fa-' + item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <MenuTree :routerList="item.children"></MenuTree>
      </el-submenu>
      <el-menu-item v-else :index="item.path" :key="item.menuId">
        <i :class="'fas fa-' + item.icon"></i>
        {{ item.name }}
      </el-menu-item>
    </template>
  </div>
</template>


<script>
import routers from '@/data/routers.json'
export default {
  name: "MenuTree",
  props: ["routerList"],
  data(){
    return{
      
    }
  },
  mounted(){
    
    console.log(routers)
  }
  
}
</script>

