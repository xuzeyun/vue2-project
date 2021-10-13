<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main">
        <!-- 列表 -->
        <div>
          <div id="main" style="width: 100%; height: calc(100vh - 100px)"></div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "@/assets/map/json/zgzq.json";
// 使用 echarts 绘制世界地图的实例作为纹理
export default {
  name: "zqChart",
  data() {
    return {
      contConfig: {
        aside: false,
      },
      // mapChart: {},
      option: {
        title: {
          text: "中国战区地图",
          subtext: "China war zone map",
          left: "right",
        },
        geo: {
          // 设置为一张完整经纬度的世界地图
          map: "china",
          show: true,
          roam: true,
          label: {
            show: true,
            color: "#fff",
          },
          regions: [
            {
              name: "南海诸岛",
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "北部战区",
              itemStyle: {
                areaColor: "#3A627A",
                color: "red",
              },
            },
            {
              name: "中部战区",
              itemStyle: {
                areaColor: "#BF1E29",
                color: "red",
              },
            },
            {
              name: "西部战区",
              itemStyle: {
                areaColor: "#A0BECD",
                color: "red",
              },
            },
            {
              name: "南部战区",
              itemStyle: {
                areaColor: "#262C44",
                color: "red",
              },
              label: {
                color: "#262C44",
              },
            },
            {
              name: "东部战区",
              itemStyle: {
                areaColor: "#616667",
                color: "red",
              },
            },
          ],
        },
        series: [
          {
            name: "节点分布",
            type: "map",
            geoIndex: 0,
            markPoint: {
              //图表标注。
              label: {
                show: true,
              },
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,1)",
                },
              },
              data: [
                {
                  name: "四川移动",
                  coord: [
                    104.065735, 30.659462
                  ],
                  symbol: 'image://home.png', // 标注图片地址路径
                  symbolSize: 15,
                  value: '四川维修基地',
                  symbolOffset: [10, 10],
                },
              ],
            },
          },
        ],
        // series: {
        //   type: "lines",
        //   lineStyle: {
        //     width: 3,
        //     color: "rgba(0, 0, 0, 0.8)",
        //   },
        //   effect: {
        //     show: true,
        //     period: 2,
        //     trailWidth: 3,
        //     trailLength: 0.5,
        //     trailOpacity: 1,
        //     trailColor: "#0087f4",
        //   },
        //   data: [
        //     // 成都到上海
        //     {
        //       coords: [
        //         [104.065735, 30.659462],
        //         [121.472644, 31.231706],
        //       ],
        //       value: "100",
        //     },
        //     // 成都到北京
        //     {
        //       coords: [
        //         [104.065735, 30.659462],
        //         [116.405285, 39.904989],
        //       ],
        //       value: "100",
        //     },
        //     // 成都到乌鲁木齐
        //     {
        //       coords: [
        //         [104.065735, 30.659462],
        //         [87.617733, 43.792818],
        //       ],
        //       value: "100",
        //     },
        //     // 成都到拉萨
        //     {
        //       coords: [
        //         [104.065735, 30.659462],
        //         [91.132212, 29.660361],
        //       ],
        //       value: "100",
        //     },
        //   ],
        // },
      },
    };
  },
  mounted() {
    // console.log(china, "china");

    this.init();
  },
  methods: {
    init() {
      echarts.registerMap("china", china, {
        Alaska: {
          // 把阿拉斯加移到美国主大陆左下方
          left: -131,
          top: 25,
          width: 15,
        },
        Hawaii: {
          left: -110, // 夏威夷
          top: 28,
          width: 5,
        },
        "Puerto Rico": {
          // 波多黎各
          left: -76,
          top: 26,
          width: 2,
        },
      });
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      myChart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>