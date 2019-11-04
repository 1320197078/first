<template>
 <div>
     <div class="content">
 <ul class="fl">
     <li>
         <router-link  class="nav"  v-for="item in navLeft" :to="item.uri">{{item.name}}</router-link>
     </li>
 </ul>

  <ul class="fr">
     <li>
         <router-link :to="item.uri" class="nav navs"  v-for="item in navRight">{{item.name}}</router-link>
     </li>
 </ul>
 </div>

 </div>
</template>

<script>
   export default {
  name: 'CateGories',
  data(){
      return{
          navLeft:[
                    {name: "商品分类",uri:'/fenlei'}
                  
                  
                    ],
          navRight:[
                    {name: "面部护理",uri:'/facailcare'},
                    {name: "身体护理",uri:'/bodycare'},
                    {name: "彩妆",uri:'/cosmetics'},
                    {name: "领券中心",uri:'/securities'},
                    {name: "积分兑换",uri:'/integral'},
                    {name: "中国极速仓",uri:'/fenlei'},
                    {name: "品牌馆",uri:'/fenlei'},
                    {name: "LG企划套装",uri:'/fenlei'},
                    {name: "真假辨别",uri:'/fenlei'}
                    
                    ]
      }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
body, button, input, select, textarea {
    
    font: 12px/1.5 "Microsoft YaHei",Tahoma,Helvetica,Arial,simsun;
}

.content{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    background-color: #f8f8f8;
    line-height: 40px;
    
   
}
ul,
li{
    list-style: none;
}
.fl{
    float: left;
}
.fr{
    float:right;
}

.nav{
    text-decoration: none;
    margin: 0 20px;
    font-size: 13px;
    color: #333;
}
.navs:hover{
    color:#e93b78;
}

</style>
