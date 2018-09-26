<template>
  <div class="box">
    <table width="430">
      <tr>
        <td width="60" align="right">
          <label for="title">标题：</label>
        </td>
        <td>
          <input id="title" v-model="data.title"/>
        </td>
      </tr>
      <tr>
        <td align="right">
          <label class="content-label">合作商：</label>
        </td>
        <td>
          <div class="image-box">
            <el-upload
              v-for="(image, index) in data.imageList"
              :key="index"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess" class="image">
              <div class="image-upload">
                <img v-if="image" :src="image"/>
                <img v-else src="../../assets/image-upload.jpg" style="background-color: #dddee1"/>
              </div>
            </el-upload>
          </div>
          <div class="image-btn-add" @click="handleAddBtnClick">+</div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CompanyPartnerSetting',
  props: {
    data: Object
  },
  methods: {
    handleAddBtnClick: function () {
      this.data.imageList.push('')
    },
    handleAvatarSuccess: function () {
      console.log()
    }
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
  width: 340px;
  margin-bottom: 5px;
}
.image-box {
  padding-top: 20px;
}
.image {
  float: left;
  margin: 0px 20px 20px 0;
}
.image-btn-add {
  float: left;
  height: 100px;
  line-height: 100px;
  text-align: center;
  width: 100px;
  border-radius: 5px;
  border: 1px dotted #58b7ff;
  font-size: 20px;
  cursor: pointer;
}
</style>
