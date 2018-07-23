<template>
  <div>
    <h1>官网编辑-XX科技有限责任公司</h1>
    <button>保存并发布</button>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  div {
    background-color: #324057;
    height: 60px;
  }
  h1 {
    font-size: 22px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    margin: 0;
    padding-left: 2em;
    float: left;
    font-weight: normal;
  }
  button {
    display: block;
    float: right;
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    width: 130px;
    height: 32px;
    margin-top: 15px;
    margin-right: 24px
  }

  button:hover {
    color: #58b7ff;
    border: 1px solid #58b7ff
  }
</style>
