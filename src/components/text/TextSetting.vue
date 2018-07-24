<template>
  <div class="box">
    <label for="text">文本内容：</label>
    <textarea id="text" v-model="data.text"></textarea>
  </div>
</template>
<script>
export default {
  name: 'TextSetting',
  props: {
    data: Object
  }
}
</script>
<style scoped>
label {
  font-size: 13px;
  vertical-align: top;
}
.box {
  text-align: center;
  padding-top: 20px;
}
#text {
  width: 370px;
  height: 300px;
}
</style>
