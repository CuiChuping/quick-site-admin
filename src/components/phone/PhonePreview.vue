<template>
  <div style="padding-bottom: 1px">
    <div class="title">{{ data.title }}</div>
    <div class="text">{{ data.phone }}</div>
  </div>
</template>
<script>
export default {
  name: 'PhonePreview',
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
  font-size: 24px;
  line-height: 45px;
  overflow: hidden;
  margin: 10px;
  border: 1px solid #ddd;
  padding: 0 5px;
  text-align: center;
  color: #1aad19;
}
</style>
