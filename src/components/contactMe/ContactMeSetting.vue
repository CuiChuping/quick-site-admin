<template>
  <div class="box">
    <table>
      <tr>
        <td>
          <label for="title">标题：</label>
        </td>
        <td>
          <input id="title" v-model="data.title"/>
        </td>
      </tr>
      <tr>
        <td>
          <label for="content" class="content-label">内容：</label>
        </td>
        <td>
          <textarea id="content" v-model="data.content"></textarea>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ContactMeSetting',
  props: {
    data: Object
  }
}
</script>
<style scoped>
label {
  font-size: 13px;
}
.content-label {
  vertical-align: top;
}
.box {
  padding-top: 20px;
}
table {
  margin: 0 auto;
}
#title {
  width: 320px;
  margin-bottom: 5px;
}
#content {
  width: 320px;
  height: 250px;
  resize: none;
}
</style>
