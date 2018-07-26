<template>
  <div class="box">
    <div v-if="data.imageType === 1" class="image-type-1">
      <img src="../../assets/default.png"/>
    </div>
    <div v-if="data.imageType === 2" class="image-type-2">
      <img src="../../assets/default.png"/>
      <img src="../../assets/default.png"/>
      <img src="../../assets/default.png"/>
    </div>
    <div v-if="data.imageType === 3" class="image-type-3">
      <img src="../../assets/image-default.png"/>
    </div>
    <div v-if="data.imageType === 4" class="image-type-4">
      <img src="../../assets/image-default.png"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImagePreview',
  props: {
    data: Object
  }
}
</script>
<style scoped>
.box {
  padding: 15px;
  text-align: center;
}
.box .image-type-1 {
  height: 515px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding-top: 170px;
}
.box .image-type-2 {
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding-top: 170px;
}
.box img {
  width: 120px;
}
</style>
