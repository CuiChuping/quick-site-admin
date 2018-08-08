<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div class="text">{{ data.addressDetail ? data.addressDetail : '请选择公司地址...' }}</div>
  </div>
</template>
<script>
export default {
  name: 'AddressPreview',
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
.text {
  font-size: 14px;
  padding: 12px 15px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
  text-align: center;
}
</style>
