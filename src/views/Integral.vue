<template>
<div>
 <div class="icon">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="icon">
        <el-breadcrumb-item :to="{ path: '/fenlei' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/integral' }">积分兑换</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

</div>
</template>

<script>
  
   export default{
      name:"Integral"
       }
 
</script>

<style scoped>
div{
    height: 100px;
    background-color: rgb(114, 67, 216);
}
.icon {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}
</style>