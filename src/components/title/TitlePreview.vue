<template>
  <div class="title">{{ data.title }}</div>
</template>
<script>
export default {
  name: 'TitlePreview',
  props: {
    data: Object
  }
}
</script>
<style scoped>
.title {
  padding: 15px 0 5px 15px;
  background-color: #eff2f7;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}
</style>
