<template>
  <div class="box">
    <table>
      <tr>
        <td align="right">
          <label for="title">标题：</label>
        </td>
        <td>
          <input id="title" v-model="data.title"/>
        </td>
      </tr>
      <tr>
        <td align="right">
          <label for="content" class="content-label">详细地址：</label>
        </td>
        <td>
          <input v-if="data.addressDetail" id="content" v-model="data.addressDetail"/>
          <p>
            <el-button type="primary" size="mini" @click="handleSelectBtnClick">{{data.addressDetail ? '重新定位' : '选择定位'}}</el-button>
            <span class="tip">*只用于获取位置坐标</span>
          </p>
        </td>
      </tr>
    </table>
    <el-dialog
      title="选择地址"
      :visible.sync="dialogShow"
      width="800px"
      :close-on-click-modal="false"
      @close="handlerDialogClose">
      <iframe id="mapPage" width="100%" height="600px" frameborder="0"
              src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
      </iframe>
    </el-dialog>
  </div>
</template>
<script>
let currentSelected = null
export default {
  name: 'AddressSetting',
  props: {
    data: Object
  },
  data: function () {
    return {
      dialogShow: false
    }
  },
  mounted: function () {
    window.addEventListener('message', event => {
      let loc = event.data
      if (loc && loc.module === 'locationPicker' && currentSelected === this) {
        this.data.lat = loc.latlng.lat
        this.data.lng = loc.latlng.lng
        this.data.addressDetail = loc.poiaddress
        this.dialogShow = false
      }
    }, false)
  },
  destroyed: function () {
    console.log('destroyed')
  },
  methods: {
    handleSelectBtnClick: function () {
      this.dialogShow = true
      currentSelected = this
    },
    handlerDialogClose: function () {
      currentSelected = null
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
  width: 320px;
  margin-bottom: 5px;
}
#content {
  width: 320px;
}
tr {
  height: 60px;
}
</style>
