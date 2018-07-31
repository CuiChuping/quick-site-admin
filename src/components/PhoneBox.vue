<template>
  <div class="phone-box">
    <div class="phone-model">
      <div class="phone-menu">
        首页
        <img src="../assets/menu.png"/>
      </div>
      <div class="phone-content">
        <div class="empty" v-if="designs.length === 0">
          <img src="../assets/default.png"/>
          <p>从左侧组件库中选择组件，编辑您的企业官网</p>
        </div>
        <div v-for="(designData, index) in designs"
                   :class="['component', { mask: editing !== designData }]"
                   :is="designData.preview"
                   :key="index"
                   :data="designData.data"
                   @click.native="handleClick(designData)"
                   @mouseenter.native.self="handleMouseOver($event, designData, index)"
                   @mouseleave.native.self="handleMouseOut"></div>
      </div>
      <ul class="ctrl-box" :style="{top: ctrlBox.top + 'px'}" v-if="ctrlBox.show"
          @mouseover="handleCtrlBoxMouseOver"
          @mouseout="handleCtrlBoxMouseOut">
        <li v-if="ctrlBox.showUpBtn" @click="handleUpClick">
          <i class="fa fa-arrow-up"></i>
        </li>
        <li v-if="ctrlBox.showDownBtn" @click="handleDownClick">
          <i class="fa fa-arrow-down"></i>
        </li>
        <li  @click="handleTimesClick">
          <i class="fa fa-times"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhoneBox',
  props: {
    designs: Array,
    editing: Object
  },
  data: function () {
    return {
      ctrlBox: {
        top: 0,
        show: false,
        showUpBtn: true,
        showDownBtn: true,
        targetDesign: null
      }
    }
  },
  methods: {
    handleClick: function (designData) {
      this.$emit('click', designData)
    },
    handleMouseOver: function (event, designData, index) {
      this.ctrlBox.top = event.target.offsetTop
      this.ctrlBox.show = true
      this.ctrlBox.showUpBtn = index !== 0
      this.ctrlBox.showDownBtn = index !== this.designs.length - 1
      this.ctrlBox.targetDesign = designData
    },
    handleMouseOut: function () {
      this.ctrlBox.show = false
    },
    handleCtrlBoxMouseOver: function () {
      this.ctrlBox.show = true
    },
    handleCtrlBoxMouseOut: function () {
      this.ctrlBox.show = false
    },
    handleUpClick: function () {
      let index = this.designs.indexOf(this.ctrlBox.targetDesign)
      let thisDesign = this.designs[index]
      let prevDesign = this.designs[index - 1]
      this.$set(this.designs, index, prevDesign)
      this.$set(this.designs, index - 1, thisDesign)
      this.ctrlBox.show = false
    },
    handleDownClick: function () {
      let index = this.designs.indexOf(this.ctrlBox.targetDesign)
      let thisDesign = this.designs[index]
      let nextDesign = this.designs[index + 1]
      this.$set(this.designs, index, nextDesign)
      this.$set(this.designs, index + 1, thisDesign)
      this.ctrlBox.show = false
    },
    handleTimesClick: function () {
      this.designs.splice(this.designs.indexOf(this.ctrlBox.targetDesign), 1)
      this.ctrlBox.show = false
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
  position: relative;
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
  cursor: pointer;
}
.mask:after {
  display: block;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  cursor: default;
}
.ctrl-box {
  position: absolute;
  top: 0;
  right: -37px;
  width: 37px;
  background-color: #33343d;
  color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.ctrl-box li {
  width: 37px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.ctrl-box li:hover {
  background-color: #25262e;
}
</style>
