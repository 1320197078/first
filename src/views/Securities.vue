<template>
  <div>
    <div class="icon">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="icon">
        <el-breadcrumb-item :to="{ path: '/fenlei' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/securities' }">领劵中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img src="./banner.png" alt />
    <div class="cle"></div>
  </div>
</template>

<script>
export default {
  name: "Securities"
};
</script>

<style scoped>
.icon {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}

.cle {
  height: 140px;
  background-color: rgb(216, 134, 67);
}
</style>