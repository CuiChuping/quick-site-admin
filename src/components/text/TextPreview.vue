<template>
  <div class="text">{{ data.text }}</div>
</template>
<script>
export default {
  name: 'TextPreview',
  props: {
    data: Object
  }
}
</script>
<style scoped>
.text {
  font-size: 14px;
  padding: 12px 15px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
}
</style>
