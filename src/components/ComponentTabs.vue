<template>
  <div class="tabs-box">
    <div class="tabs-nav">
      <div :class="['tabs-nav-tab', {'tabs-nav-tab-active': currentTab === moduleComponents}]"
           @click="currentTab = moduleComponents">模块组件</div>
      <div :class="['tabs-nav-tab', {'tabs-nav-tab-active': currentTab === basicComponents}]"
           @click="currentTab = basicComponents">基本组件</div>
    </div>
    <div class="tabs-content" >
      <component-card v-for="component in currentTab"
                      :key="component.name"
                      :icon="component.icon"
                      :name="component.name"
                      @add-component="$emit('add-component', component)"></component-card>
    </div>
  </div>
</template>

<script>
import ComponentCard from '../components/ComponentCard'

export default {
  name: 'ComponentTabs',
  components: { ComponentCard },
  props: {
    moduleComponents: Array,
    basicComponents: Array
  },
  data: function () {
    return {
      currentTab: this.moduleComponents
    }
  }
}
</script>

<style scoped>
.tabs-box {
  width: 220px;
  border-radius: 0;
  border: 0;
  box-shadow: 3px 0 20px 0 hsla(0,0%,82%,.5);
}
.tabs-box .tabs-nav {
  height: 40px;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
}
.tabs-box .tabs-nav .tabs-nav-tab {
  float: left;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  position: relative;
}
.tabs-box .tabs-nav .tabs-nav-tab:hover {
  color: #2d8cf0;
}

.tabs-box .tabs-nav .tabs-nav-tab-active {
  color: #2d8cf0;
}

.tabs-box .tabs-nav .tabs-nav-tab-active:after {
  content: "";
  width: 80px;
  height: 2px;
  background-color: #58b7ff;
  position: absolute;
  bottom: 0;
  left: 15px
}
</style>
