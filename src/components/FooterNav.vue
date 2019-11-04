<template>
  <div>
    <div class="contents">
        <div class="navtop">
      <ul>
        <li>
          <router-link class="nav" v-for="item in navtop" :to="item.uri">{{item.name}}</router-link>
        </li>
      </ul>
      </div>
      <div class="navbottom">
        <ul>
        <li>
          <router-link class="nav s" v-for="item in navbottom" :to="item.uri">{{item.name}}</router-link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      navtop: [
        { name: "满¥99包邮", uri: "/" },
        { name: "正品保证", uri: "/" },
        { name: "EMS韩国直邮", uri: "/" },
        { name: "7天退换保证", uri: "/" },
        { name: "高速成长", uri: "/" }
      ],
      navbottom:[
          {name:'韩国直邮满99元包邮',uri:'/'},
          {name:'专注韩妆10年',uri:'/'},
          {name:'100%通关包税金',uri:'/'},
          {name:'中国地址自由退换货',uri:'/'},
          {name:'10W真实会员',uri:'/'},
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5 "Microsoft YaHei", Tahoma, Helvetica, Arial, simsun;
  
}
.contents {
  width: 1200px;
  height: 116px;
  margin: 0 auto;
  /* background-color: #f3f3f3; */
  line-height: 116px;
 
}
ul,
li {
  list-style: none;
    }
.nav{
    text-decoration: none;
    margin: 0 70px;
    font-size: 18px;
    color: #000;
    white-space: nowrap;
}
.s{
    font-size: 12px;
    color: #999999;
  
}
.navtop{
    height: 20px; 
}

</style>
