<template>
  <div class="box">
    <label for="title">标题内容：</label>
    <input id="title" v-model="data.title"/>
  </div>
</template>
<script>
export default {
  name: 'TitleSetting',
  props: {
    data: Object
  }
}
</script>
<style scoped>
label {
  font-size: 13px;
}
.box {
  text-align: center;
  padding-top: 20px;
}
#title {
  width: 320px;
}
</style>
