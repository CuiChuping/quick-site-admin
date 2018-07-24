<template>
  <div :style="{height: screenHeight + 'px'}">
    <component-tabs :style="style.componentTabs" :moduleComponents="moduleComponents" :basicComponents="basicComponents" @add-component="addComponent"></component-tabs>
    <phone-box :style="style.phoneBox" :componentDataList="componentDataList" :currentComponentData="currentComponentData" @select-component="selectComponent"></phone-box>
    <setting-box :style="style.setting" :componentData="currentComponentData"></setting-box>
  </div>
</template>

<script>
import ComponentTabs from '../components/ComponentTabs'
import PhoneBox from '../components/PhoneBox'
import SettingBox from '../components/SettingBox'
import TitlePreview from '../components/title/TitlePreview'
import TitleSetting from '../components/title/TitleSetting'

export default {
  name: 'ColEditWindow',
  components: { ComponentTabs, PhoneBox, SettingBox },
  data: function () {
    return {
      // 屏幕尺寸
      screenHeight: 0,
      screenWidth: 0,
      // 模块组件数据
      moduleComponents: [
        {name: '企业简介', icon: 'font-icon font-icon-1', type: 1, preview: 1, setting: 2, data: {}},
        {name: '企业咨询', icon: 'font-icon font-icon-2', type: 2, preview: 1, setting: 2, data: {}},
        {name: '管理团队', icon: 'font-icon font-icon-3', type: 3, preview: 1, setting: 2, data: {}},
        {name: '合作伙伴', icon: 'font-icon font-icon-4', type: 4, preview: 1, setting: 2, data: {}},
        {name: '电话', icon: 'font-icon font-icon-5', type: 5, preview: 1, setting: 2, data: {}},
        {name: '地址', icon: 'font-icon font-icon-6', type: 6, preview: 1, setting: 2, data: {}},
        {name: '联系我们', icon: 'font-icon font-icon-7', type: 7, preview: 1, setting: 2, data: {}},
        {name: '企业招聘', icon: 'font-icon font-icon-8', type: 8, preview: 1, setting: 2, data: {}}
      ],
      // 基本组件数据
      basicComponents: [
        {
          name: '标题',
          icon: 'font-icon font-icon-11',
          type: 9,
          preview: TitlePreview,
          setting: {
            title: '标题栏设置',
            component: TitleSetting
          },
          data: {
            title: '标题栏'
          }
        },
        {name: '文本', icon: 'font-icon font-icon-12', type: 10, preview: 1, setting: 2, data: {}},
        {name: '图片', icon: 'font-icon font-icon-13', type: 11, preview: 1, setting: 2, data: {}},
        {name: '轮播图', icon: 'font-icon font-icon-14', type: 12, preview: 1, setting: 2, data: {}},
        {name: '视频', icon: 'font-icon font-icon-15', type: 13, preview: 1, setting: 2, data: {}},
        {name: '图文', icon: 'font-icon font-icon-16', type: 14, preview: 1, setting: 2, data: {}},
        {name: '占位符', icon: 'font-icon font-icon-17', type: 15, preview: 1, setting: 2, data: {}}
      ],
      // 用户正在编辑的网站数据
      componentDataList: [],
      // 设置项
      currentComponentData: null
    }
  },
  computed: {
    style: function () {
      return {
        componentTabs: {
          float: 'left',
          width: '220px',
          height: '100%',
          overflow: 'scroll'
        },
        phoneBox: {
          float: 'left',
          width: this.screenWidth - 720 + 'px',
          height: '100%'
        },
        setting: {
          float: 'right',
          width: '500px',
          height: '100%',
          overflow: 'scroll'
        }
      }
    }
  },
  methods: {
    addComponent: function (component) {
      let componentData = { type: component.type, preview: component.preview, setting: component.setting, data: {...component.data} }
      this.componentDataList.push(componentData)
      this.currentComponentData = componentData
    },
    selectComponent: function (componentData) {
      this.currentComponentData = componentData
    }
  },
  mounted: function () {
    const that = this
    const onResize = () => {
      that.screenHeight = document.body.clientHeight - 60
      that.screenWidth = document.body.clientWidth
    }
    onResize()
    window.addEventListener('resize', onResize, false)
  }
}
</script>

<style scoped>
</style>
