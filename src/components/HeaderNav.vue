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
         <router-link :to="item.uri" class="nav"  v-for="item in navRight">{{item.name}}</router-link>
     </li>
 </ul>
 </div>

 </div>
</template>

<script>
   export default {
  name: 'HeaderNav',
  data(){
      return{
          navLeft:[
                    {name: "欢迎光临本店",uri:'/fenlei'},
                    {name: "请登录",uri:'/login'},
                    {name: "免费注册",uri:'/'}
                  
                    ],
          navRight:[
                     {name: "我的信息",uri:'/'},
                     {name: "小程序代理",uri:'/'},
                     {name: "网站导航",uri:'/'},
                     {name: "收藏本站",uri:'/'}
                    
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
    font-size: 12px;
    color: #999999;
}
.nav:hover{
    color:#e93b78;
    text-decoration: underline;
}

</style>
