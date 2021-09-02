<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main">
        <!-- 标题 -->
        <el-row class="title-bar">
          <el-col :span="12" class="title-bar-text"
            ><i class="fas fa-th-large"></i>3D地球</el-col
          >
          <el-col :span="12" class="title-bar-tool"></el-col>
        </el-row>
        <!-- 列表 -->
        <div>
          <!-- <div id="main" style="width: 100%; height: calc(100vh - 90px)"></div> -->
          <div id="main" style="width: 800px; height: 600px"></div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import world from "@/assets/map/js/world2.js";

var ROOT_PATH =
  "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
// 使用 echarts 绘制世界地图的实例作为纹理
var canvas = document.createElement("canvas");
var mapChart = echarts.init(canvas, null, {
  width: 8000,
  height: 4000,
});

mapChart.setOption({
  backgroundColor: "#000b8c", // 背景色
  geo: {
    // nameMap: {
    //   China: "China", // 变成中文
    // },
    // regions: [
    //   {
    //     name: "China",
    //     itemStyle: {
    //       areaColor: "rgb(128, 128, 128)",
    //     },
    //   },
    // ], // 区域块的颜色
    // series: [
    //   {
    //     type: "map",
    //     map: "world",
    //     // 绘制完整尺寸的 echarts 实例
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     boundingCoords: [
    //       [-180, 90],
    //       [180, -90],
    //     ],
    //     label: {
    //       show: true, // 是否显示文本
    //       color: "#000", // 文本颜色
    //     },

    //     // itemStyle: {
    //     //   normal: {
    //     //     borderWidth: 2,
    //     //     borderColor: "#DDD", //地球纹路的颜色
    //     //     areaColor: {
    //     //       type: "linear",
    //     //       x: 0,
    //     //       y: 0,
    //     //       x2: 0,
    //     //       y2: 1,
    //     //       //相邻每个板块 从上到下的颜色变化
    //     //       colorStops: [
    //     //         {
    //     //           offset: 0.2,
    //     //           color: "#FFF", // 0% 处的颜色
    //     //         },
    //     //         // {
    //     //         //   offset: 0.8,
    //     //         //   color: "rgba(0,179,188,0.8)", // 100% 处的颜色
    //     //         // },
    //     //       ],
    //     //       global: false, // 缺省为 false
    //     //     },
    //     //   },
    //     // },
    //   },
    // ],
    z: 1,
            type: 'map',
            map: 'world',
            top: 0,
            left: 0, // 绘制完整尺寸的 echarts 实例
            right: 0,
            bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]], // 设置为一张完整经纬度的世界地图
            nameMap: {
              China: '中国', // 变成中文
            },
            label: {
              show: true, // 是否显示文本
              color: "#000", // 文本颜色
            },
            itemStyle: {
              // 地图区域的多边形 图形样式。 默认样试。
              normal: {
                color: {
                  type: 'linear',
                  x: 100,
                  y: 12,
                  x2: 12,
                  y2: 100,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#666", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#666", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                borderColor: "#ddd", // 边框线
                borderWidth: 1, // 线宽
                borderType: "dashed", // 支持 'solid', 'dashed', 'dotted'。
                shadowColor: "#000",  // 阴影颜色
                // shadowBlur: , // 模糊大小
                // shadowOffsetX:
                //   config.map.area.shadowOffsetX * common.getFontSize(), // 水平偏移
                // shadowOffsetY:
                //   config.map.area.shadowOffsetY * common.getFontSize(), // 垂直偏移
              },
            },
            emphasis: {
              // 高亮状态下的多边形和标签样式。
              label: {
                // 文本
                show: true,
                color: "#000",
              },
              itemStyle: {
                // 区域
                areaColor: "#000",
              },
            },
            regions: [
              {
                name: '中国',
                itemStyle: {
                  normal: {
                    areaColor: "#000",
                  },
                },
              },
            ], // 区域块的颜色
  },

  // viewControl: {
  //   autoRotate: false, // 自动旋转关闭
  //   // autoRotateSpeed: config.earth.autoRotateSpeed,
  //   targetCoord: [100.46, 39.92], // 定位到中国
  //   // zoomSensitivity: config.earth.isZoom == true ? 1 : 0, // 是否可缩放
  // },
});
// 使用 echarts 绘制世界地图的实例作为纹理
export default {
  name: "chart",
  data() {
    return {
      contConfig: {
        aside: false,
      },
      mapChart: {},
      option: {
        // backgroundColor: "#000",
        globe: {
          // 地球纹理
          baseTexture: mapChart,
          // baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          // 高度纹理
          // heightTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          // 地球顶点位移的大小
          displacementScale: 0,
          // 着色效果
          shading: "color",
          // 环境
          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",
          // environment: "#000",
          // realisticMaterial: {
          //   roughness: 0.9,
          // },
          // postEffect: {
          //   enable: true,
          // },
          // light: {
          //   main: {
          //     intensity: 8,
          //     shadow: true,
          //   },
          //   ambientCubemap: {
          //     texture: ROOT_PATH + "/data-gl/asset/pisa.hdr",
          //     diffuseIntensity: 0.2,
          //   },
          // },
          viewControl: {
            autoRotate: false,
            autoRotateSpeed: 0,
            targetCoord: [100.46, 39.92], // 定位到中国
          },
        },
        series: {
          type: "lines3D",
          coordinateSystem: "globe",
          blendMode: "lighter",
          lineStyle: {
            width: 3,
            color: "rgb(50, 50, 150)",
            opacity: 1,
          },
          effect: {
            show: true,
            period: 2,
            trailWidth: 3,
            trailLength: 0.5,
            trailOpacity: 1,
            trailColor: "#0087f4",
          },
          data: [],
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(world, "world.js");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      //随机划多条线
      for (let i = 0; i < 15; i++) {
        this.option.series.data = this.option.series.data.concat(
          this.rodamData()
        );
      }

      // 绘制图表
      myChart.setOption(this.option);
    },
    //调用划线方法
    rodamData() {
      let longitude = 105.18;
      let longitude2 = Math.random() * 360 - 180;
      let latitude = 37.51;
      let latitude2 = Math.random() * 180 - 90;
      return {
        coords: [
          [longitude2, latitude2],
          [longitude, latitude],
        ],
        value: (Math.random() * 3000).toFixed(2),
      };
    },
  },
};
</script>

<style>
</style>