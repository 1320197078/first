<template>
<div>
 <div class="icon">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="icon">
        <el-breadcrumb-item :to="{ path: '/fenlei' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cosmetics' }">彩妆</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

</div>
</template>

<script>
  
   export default{
      name:"Cosmetics"
       }
 
</script>

<style scoped>
div{
    height: 100px;
    background-color: rgb(214, 86, 146);
}
.icon {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}
</style>