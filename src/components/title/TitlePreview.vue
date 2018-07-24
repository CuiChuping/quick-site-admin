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
  font-size: 14px;
  padding: 15px 0 5px 15px;
  background-color: #eff2f7;
  font-weight: normal;
  color: #666;
}
</style>
