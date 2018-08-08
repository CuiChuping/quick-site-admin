<template>
  <div class="box">
    <label for="title">标题：</label>
    <input id="title" v-model="data.title"/>
    <div class="item" v-for="(item, index) in data.manageList" :key="index">
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
            <p class="tip">最佳尺寸：500x400px</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="name">姓名：</label>
          </td>
          <td>
            <input id="name" v-model="item.name"/>
          </td>
        </tr>
        <tr>
          <td>
            <label for="job">职位：</label>
          </td>
          <td>
            <input id="job" v-model="item.job"/>
          </td>
        </tr>
        <tr>
          <td>
            <label for="description">简介：</label>
          </td>
          <td>
            <input id="description" v-model="item.description"/>
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: left">
      <el-button type="primary" size="mini" @click="handleAddBtnClick">添加人员</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManageTeamSetting',
  props: {
    data: Object
  },
  methods: {
    handleAddBtnClick: function () {
      this.data.manageList.push({
        avatar: '',
        name: '姓名',
        job: '职位',
        description: '简介'
      })
    }
  }
}
</script>
<style scoped>
label {
  font-size: 13px;
}
.box {
  padding: 35px;
}
#title {
  width: 385px;
  margin-bottom: 5px;
}
.item {
  padding: 20px 15px 15px 10px;
  background-color: #f9fafc;
  position: relative;
  border-radius: 6px;
  border: 1px solid #ededed;
  margin: 20px 0;
}
#name, #job, #description {
  width: 350px;
  margin: 10px 0;
}
</style>
