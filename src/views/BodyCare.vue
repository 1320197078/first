<template>
<div>
 <div class="icon">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="icon">
        <el-breadcrumb-item :to="{ path: '/fenlei' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/bodycare' }">身体护理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

</div>
</template>

<script>
  
   export default{
      name:"BodyCare"
       }
 
</script>

<style scoped>
div{
    height: 100px;
    background-color: rgb(184, 214, 86);
}
.icon {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}
</style>