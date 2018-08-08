<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div class="content">
      <img v-for="(image, index) in data.imageList" src="../../assets/image-default.png" class="image" :key="index"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompanyPartnerPreview',
  props: {
    data: Object
  }
}
</script>
<style scoped>
.title {
  font-size: 14px;
  padding: 15px 0 5px 15px;
  background-color: #eff2f7;
  font-weight: normal;
  color: #666;
}
.content {
  font-size: 14px;
  padding: 12px 12px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
}
.image {
  width: 33.33%;
  height: 110px;
  padding: 2px 4px;
}
</style>
