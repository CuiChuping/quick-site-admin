<template>
  <div class="card" @click="$emit('click')">
    <i :class="icon"></i>
    <h5 class="name">{{name}}</h5>
  </div>
</template>

<script>
export default {
  name: 'ComponentCard',
  props: {
    icon: String,
    name: String
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 110px;
  height: 110px;
  border-bottom: 1px dotted #e1e1e1;
  border-right: 1px dotted #e1e1e1;
  text-align: center;
  padding: 29px 0;
  cursor: pointer;
  color: #687382;
}

.card:hover {
  background-color: #eff2f7;
  color: #58b7ff;
}

.card i {
  font-size: 30px;
  font-weight: 100;
}

.name {
  font-size: 14px;
  font-weight: normal;
  height: 20px;
  line-height: 20px;
  margin: 0;
}

</style>
