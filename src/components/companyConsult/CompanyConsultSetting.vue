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
                  <el-button size="mini" icon="el-icon-edit"></el-button>
                  <el-button size="mini" icon="el-icon-delete" @click="handleDelBtnClick(item)"></el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import DefaultImage from '../../assets/default.png'
import {
  Table,
  TableColumn,
  Switch,
  ButtonGroup,
  Button,
  Notification
} from 'element-ui'
export default {
  name: 'CompanyConsultSetting',
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn,
    ElSwitch: Switch,
    ElButtonGroup: ButtonGroup,
    ElButton: Button
  },
  props: {
    data: Object
  },
  data: function () {
    return {
      defaultImage: DefaultImage
    }
  },
  methods: {
    handleDelBtnClick: function (item) {
      this.data.consultList.splice(item.$index, 1)
      Notification.success({message: '删除咨询成功', title: '删除成功'})
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
</style>
