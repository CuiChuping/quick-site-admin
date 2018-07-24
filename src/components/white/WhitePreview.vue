<template>
  <div class="title" :style="{ height: data.height + 'px' }"></div>
</template>
<script>
export default {
  name: 'WhitePreview',
  props: {
    data: Object
  }
}
</script>
<style scoped>
.title {
  background-color: #eff2f7;
}
</style>
