<template>
  <div class="setting-box">
    <div class="setting-header">{{ editing === null ? '组件属性设置' : editing.setting.title }}</div>
    <div class="setting-content">
      <div class="empty" v-if="editing === null">
        <img src="../assets/default.png"/>
        <p>还没有可以编辑的内容组件</p>
      </div>
      <div v-else :is="editing.setting.component" :data="editing.data"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SettingBox',
  props: {
    editing: Object
  }
}
</script>
<style scoped>
.setting-box {

}
.setting-header {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 14px;
}
.empty {
  text-align: center;
  font-size: 12px;
  margin-top: 150px;
  color: #324057;
}
.empty img {
  margin: auto;
  display: block;
}
.empty p {
  margin-top: 2em;
}
</style>
