<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div class="content">
      <div class="item">
        <img src="../../assets/image-upload.jpg"/>
        <div>姓名</div>
        <div>职位</div>
        <div>简介</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompanyInfoPreview',
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
  padding: 12px 15px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
}
.item {
  width: 50%;
  background-color: red;
}
.item img {
  width: 100%;
}
</style>
