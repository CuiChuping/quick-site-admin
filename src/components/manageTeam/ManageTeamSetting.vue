<template>
  <div class="box">
    <label for="title">标题：</label>
    <input id="title" v-model="data.title"/>
    <div class="item" v-for="item in data.manageList">
      <table>
        <tr>
          <td>
            <label>头像：</label>
          </td>
          <td align="left">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <div class="image-upload">
                <img v-if="item.avatar" :src="item.avatar"/>
                <img v-else src="../../assets/image-upload.jpg" style="background-color: #dddee1"/>
              </div>
            </el-upload>
          </td>
        </tr>
        <tr>
          <td>
            <label for="name">姓名：</label>
          </td>
          <td>
            <input id="name" v-model="data.title"/>
          </td>
        </tr>
        <tr>
          <td>
            <label for="job">职位：</label>
          </td>
          <td>
            <input id="job" v-model="data.title"/>
          </td>
        </tr>
        <tr>
          <td>
            <label for="description">简介：</label>
          </td>
          <td>
            <input id="description" v-model="data.title"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManageTeamSetting',
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
  padding-top: 20px;
  text-align: center;
}
#title {
  width: 380px;
  margin-bottom: 5px;
}
.item {
  margin: 30px;
  background-color: red;
}
#name, #job, #description {
  width: 380px;
}
</style>
