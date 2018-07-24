<template>
  <div class="white" :style="{ height: data.height + 'px' }"></div>
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
.white {
  background-color: #eff2f7;
}
</style>
