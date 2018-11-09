<!--  -->
<template>
  <div id="dituContent"
       :style="style">

  </div>
</template>

<script>
import { MP } from '@/utils'
export default {
  name: 'map',
  props: {
    style: {
      type: Object,
      default:
        () => {
          return {
            width: '100%',
            height: '100%'
          }
        }
    },
    point: {
      type: Object,
      default:
        () => {
          return {
            x: 116.668785,
            y: 36.919565
          }
        }

    },
    markerArr: {
      type: Array,
      default: () => {
        return [{
          title: '山东道普安制动材料有限公司',
          content: '山东省德州市禹城市南环东路88号',
          point: '116.668785|36.919565',
          isOpen: 1,
          icon: { w: 23, h: 25, l: 23, t: 21, x: 9, lb: 12 } }
          // 标注点数组
        ]
      }
    }
  },
  data () {
    return {
      // point: {
      //   x: 116.668785,
      //   y: 36.919565
      // },
      // markerArr: [{
      //   title: '山东道普安制动材料有限公司',
      //   content: '山东省德州市禹城市南环东路88号',
      //   point: '116.668785|36.919565',
      //   isOpen: 1,
      //   icon: { w: 23, h: 25, l: 23, t: 21, x: 9, lb: 12 } }
      //   // 标注点数组
      // ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.initMap()
  },

  methods: {
    initMap () {
      MP().then(BMap => {
        var map
        let that = this

        // 创建InfoWindow
        function createInfoWindow (i) {
          var json = that.markerArr[i]
          var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + '</div>')
          return iw
        }
        // 创建一个Icon
        function createIcon (json) {
          var icon = new BMap.Icon('http://map.baidu.com/image/us_mk_icon.png', new BMap.Size(json.w, json.h), { imageOffset: new BMap.Size(-json.l, -json.t), infoWindowOffset: new BMap.Size(json.lb + 5, 1), offset: new BMap.Size(json.x, json.h) })
          return icon
        }
        // 创建和初始化地图函数：
        function initMap () {
          createMap()// 创建地图
          setMapEvent()// 设置地图事件
          addMapControl()// 向地图添加控件
          addMarker()// 向地图中添加marker
        }

        // 创建地图函数：
        function createMap () {
          map = new BMap.Map('dituContent')// 在百度地图容器中创建一个地图
          var point = new BMap.Point(that.point.x, that.point.y)// 定义一个中心点坐标
          map.centerAndZoom(point, 17)// 设定地图的中心点和坐标并将地图显示在地图容器中
          window.map = map// 将map变量存储在全局
        }

        // 地图事件设置函数：
        function setMapEvent () {
          map.enableDragging()// 启用地图拖拽事件，默认启用(可不写)
          map.enableScrollWheelZoom()// 启用地图滚轮放大缩小
          map.enableDoubleClickZoom()// 启用鼠标双击放大，默认启用(可不写)
          map.enableKeyboard()// 启用键盘上下左右键移动地图
        }

        // 地图控件添加函数：
        function addMapControl () {
          // 向地图中添加缩放控件
          var ctrlNav = new BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_LEFT, type: window.BMAP_NAVIGATION_CONTROL_LARGE })
          map.addControl(ctrlNav)
          // 向地图中添加缩略图控件
          var ctrlOve = new BMap.OverviewMapControl({ anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 })
          map.addControl(ctrlOve)
          // 向地图中添加比例尺控件
          var ctrlSca = new BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_BOTTOM_LEFT })
          map.addControl(ctrlSca)
        }

        // 创建marker
        function addMarker () {
          for (var i = 0; i < that.markerArr.length; i++) {
            var json = that.markerArr[i]
            var pointArr = json.point.split('|')
            var p0 = pointArr[0]
            var p1 = pointArr[1]
            var point = new BMap.Point(p0, p1)
            var iconImg = createIcon(json.icon)
            var marker = new BMap.Marker(point, { icon: iconImg })
            // var iw = createInfoWindow(i)
            var label = new BMap.Label(json.title, { 'offset': new BMap.Size(json.icon.lb - json.icon.x + 10, -20) })
            marker.setLabel(label)
            map.addOverlay(marker)
            label.setStyle({
              borderColor: '#808080',
              color: '#333',
              cursor: 'pointer'
            });

            (function () {
              // var index = i
              var _iw = createInfoWindow(i)
              var _marker = marker
              _marker.addEventListener('click', function () {
                this.openInfoWindow(_iw)
              })
              _iw.addEventListener('open', function () {
                _marker.getLabel().hide()
              })
              _iw.addEventListener('close', function () {
                _marker.getLabel().show()
              })
              label.addEventListener('click', function () {
                _marker.openInfoWindow(_iw)
              })
              if (json.isOpen) {
                label.hide()
                _marker.openInfoWindow(_iw)
              }
            })()
          }
        }
        initMap()// 创建和初始化地图
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
