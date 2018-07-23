<template>
  <div class="phone-box">
    <div class="phone-model">
      <div class="phone-menu">
        首页
        <img src="../assets/menu.png"/>
      </div>
      <div class="phone-content">
        <div class="empty" v-if="componentDataList.length === 0">
          <img src="../assets/default.png"/>
          <p>从左侧组件库中选择组件，编辑您的企业官网</p>
        </div>
        <div v-for="(componentData, index) in componentDataList" :class="['component', {mask: currentComponent !== componentData}]"
                   :is="componentData.preview"
                   :key="index"
                   :data="componentData.data"
                   @click.native="handleClick(componentData)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhoneBox',
  props: {
    componentDataList: Array
  },
  data: function () {
    return {
      currentComponent: null
    }
  },
  methods: {
    handleClick: function (componentData) {
      this.$emit('select-component', this.currentComponent = componentData)
    }
  }
}
</script>
<style scoped>
.phone-box {
  background-color: #f0f0f0;
  overflow-y: scroll;
}
.phone-model {
  width: 375px;
  min-height: 700px;
  margin: 100px auto;
  background-color: #fafafa;
  border: 1px solid #c1cddb;
  border-radius: 2px;
}
.phone-menu {
  position: relative;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background: #1f2d3d;
  height: 41.5px;
  line-height: 41.5px
}
.phone-menu img {
  display: block;
  position: absolute;
  right: 12px;
  top: 9px;
  width: 80px
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
  width: 120px
}
.empty p {
  margin-top: 2em;
}
.component {
  position: relative;
}
.mask:after {
  display: block;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.68);
}
</style>
