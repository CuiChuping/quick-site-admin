<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div class="content">
      <div v-if="consultOnlineList.length === 0" class="item">
        <div class="head-img">
          <img src="../../assets/default.png"/>
        </div>
        <dl class="info">
          <dt class="consult-title">公司咨询标题</dt>
          <dd class="consult-time">发布时间</dd>
        </dl>
      </div>
      <div v-for="(consult, index) in consultOnlineList" class="item" :key="index">
        <div class="head-img">
          <img :src="consult.headImg === null || consult.headImg === '' ? defaultImage : consult.headImg"/>
        </div>
        <dl class="info">
          <dt class="consult-title">{{ consult.title }}</dt>
          <dd class="consult-time">{{ consult.time }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultImage from '../../assets/default.png'
export default {
  name: 'CompanyConsultPreview',
  props: {
    data: {
      title: String,
      consultList: Array
    }
  },
  data: function () {
    return {
      defaultImage: DefaultImage
    }
  },
  computed: {
    consultOnlineList: function () {
      return this.data.consultList.filter(consult => consult.online)
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 14px;
  padding: 15px 0 5px 15px;
  background-color: #eff2f7;
  font-weight: normal;
  color: #666;
}
.content {
  background-color: white;
  padding: 0 15px;
}
.item {
  font-size: 14px;
  padding: 15px 0;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.item:last-child {
  border-bottom: 0
}
.head-img {
  float: left;
  width: 100px;
  height: 80px;
  background-color: #dddee1;
  text-align: center;
  line-height: 80px;
}
.head-img img {
  width: 80%;
  vertical-align: middle;
}
.info {
  margin: 0;
  text-indent: 1em;
}
.info dt, .info dd {
  margin: 0;
  padding: 0;
}
.info .consult-title {
  font-size: 14px;
  line-height: 25px;
  height: 63px;
}
.info .consult-time {
  font-size: 12px;
  color: #666;
}
</style>
