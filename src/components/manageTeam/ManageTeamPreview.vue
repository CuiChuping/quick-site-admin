<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div class="content">
      <div v-if="data.manageList.length === 0" class="item">
        <img src="../../assets/image-upload.jpg"/>
        <div class="info">
          <div class="name">姓名</div>
          <div class="job">职位</div>
          <div class="description">简介</div>
        </div>
      </div>
      <div v-else v-for="(item, index) in data.manageList" class="item" :key="index">
        <img src="../../assets/image-upload.jpg"/>
        <div class="info">
          <div class="name">{{item.name}}</div>
          <div class="job">{{item.job}}</div>
          <div class="description">{{item.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManageTeamPreview',
  props: {
    data: Object
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
  font-size: 14px;
  padding: 6px 7px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
}
.item {
  float: left;
  width: 50%;
  padding: 6px 7px;
  font-size: 0;
}
.item img {
  width: 100%;
}
.info {
  padding: 12px;
  background-color: #f9fafc;
}
.name {
  color: #333;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 4px;
}
.job {
  color: #666;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.description {
  color: #666;
  font-size: 12px;
  padding-top: 10px;
}
</style>
