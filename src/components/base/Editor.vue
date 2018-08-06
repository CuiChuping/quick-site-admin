<template>
  <!-- 此处value仅用于触发updated事件 -->
  <div id="editor" :value="content"></div>
</template>
<script>
import WangEditor from 'wangeditor'
export default {
  name: 'Editor',
  props: {
    content: String
  },
  mounted: function () {
    this.editor = new WangEditor('#editor')
    this.editor.customConfig.onchange = (html) => {
      this.$emit('update:content', html)
    }
    this.editor.create()
    this.editor.txt.html(this.content)
  },
  updated: function () {
    this.editor.txt.html(this.content)
  }
}
</script>
<style scoped>
</style>
