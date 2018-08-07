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
        <td colspan="2">
          <el-table :data="data.consultList">
            <el-table-column prop="title" label="咨询标题" width="80"></el-table-column>
            <el-table-column label="咨询封面" width="80">
              <template slot-scope="item">
                <img class="head-img" :src="item.row.headImg === null || item.row.headImg === '' ? defaultImage : item.row.headImg"/>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="发布时间" width="110"></el-table-column>
            <el-table-column label="状态" width="60">
              <template slot-scope="item">
                <el-switch v-model="item.row.online" active-color="#13ce66" inactive-color="#999999">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="110">
              <template slot-scope="item">
                <el-button-group>
                  <el-button size="mini" icon="el-icon-edit" @click="handleEditBtnClick(item)"></el-button>
                  <el-button size="mini" icon="el-icon-delete" @click="handleDelBtnClick(item)"></el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </td>
      </tr>
      <tr style="height: 80px">
        <td colspan="2">
          <el-button type="primary" size="mini" @click="handleAddBtnClick">添加咨询</el-button>
        </td>
      </tr>
    </table>
    <el-dialog
        title="编辑咨询"
        :visible.sync="dialogShow"
        width="900px">
      <el-form label-width="80px">
        <el-form-item label="咨询标题">
          <el-input v-model="editing.title"></el-input>
        </el-form-item>
        <el-form-item label="封面图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <div class="image-upload">
              <img v-if="editing.headImg" :src="editing.headImg"/>
              <img v-else src="../../assets/image-upload.jpg" style="background-color: #dddee1"/>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="详细内容">
          <editor :content.sync="editing.content"></editor>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSaveBtnClick">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import DefaultImage from '../../assets/default.png'
import Editor from '../base/Editor'

export default {
  name: 'CompanyConsultSetting',
  components: { Editor },
  props: {
    data: {
      consultList: []
    }
  },
  data: function () {
    return {
      defaultImage: DefaultImage,
      dialogShow: false,
      editing: {
        title: '',
        headImg: '',
        time: '',
        content: '',
        online: false
      }
    }
  },
  methods: {
    handleDelBtnClick: function (item) {
      this.data.consultList.splice(item.$index, 1)
      Notification.success({message: '删除咨询成功', title: '删除成功'})
    },
    handleAddBtnClick: function () {
      this.editing = {
        title: '',
        headImg: '',
        time: '',
        content: '',
        online: false,
        index: -1
      }
      this.dialogShow = true
    },
    handleEditBtnClick: function (editing) {
      this.editing = { ...editing.row, index: editing.$index }
      this.dialogShow = true
    },
    handleAvatarSuccess: function (res, file) {
      this.editing.headImg = URL.createObjectURL(file.raw)
    },
    handleSaveBtnClick: function () {
      if (this.editing.index === -1) {
        this.data.consultList.push(this.editing)
      } else {
        this.data.consultList.splice(this.editing.index, 1, this.editing)
      }
      this.dialogShow = false
      delete this.editing.index
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
  width: 360px;
  margin-bottom: 5px;
}
.head-img {
  height: 30px;
  background-color: #dddee1;
  padding: 5px 10px;
}
.dialog-footer {
  text-align: center;
}
</style>
