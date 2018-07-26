<template>
  <div class="box">
    <label class="title">
      <h4>样式选择</h4>
      <span class="desc">(切换样式将导致当前的内容丢失)</span>
    </label>
    <div class="image-types">
      <div :class="['image-type', {active: data.imageType === 1}]" @click="handleClick(1)">
        <img src="../../assets/image-1.png"/>
        <div>单图</div>
      </div>
      <div :class="['image-type', {active: data.imageType === 2}]" @click="handleClick(2)">
        <img src="../../assets/image-2.png"/>
        <div>滑块图</div>
      </div>
      <div :class="['image-type', {active: data.imageType === 3}]" @click="handleClick(3)">
        <img src="../../assets/image-3.png"/>
        <div>三图</div>
      </div>
      <div :class="['image-type', {active: data.imageType === 4}]" @click="handleClick(4)">
        <img src="../../assets/image-4.png"/>
        <div>宫格图</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageSetting',
  props: {
    data: Object
  },
  methods: {
    handleClick: function (type) {
      this.data.imageType = type
    }
  }
}
</script>
<style scoped>
.box {
  padding: 20px 30px;
}
.title {
  font-size: 13px;
}
.title h4 {
  display: inline;
  font-size: 14px;
}
.title .desc {
  font-size: 12px;
  color: #687382;
}
.image-type {
  float: left;
  width: 82px;
  height: 82px;
  margin: 18px;
  font-size: 12px;
  text-align: center;
  color: #687382;
  border: 1px solid white;
  cursor: pointer;
}

.image-type.active {
  border: 1px solid #7fc0f6;
}

.image-type:first-child {
  margin-left: 0;
}
.image-type:last-child {
  margin-right: 0;
}
</style>
