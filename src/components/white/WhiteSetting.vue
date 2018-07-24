<template>
  <div class="box">
    <label for="height">高度：</label>
    <input id="height" v-model="data.height" type="number"/>
  </div>
</template>
<script>
export default {
  name: 'WhiteSetting',
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
#height {
  width: 320px;
}
</style>
