<template>
  <div>
    <div class="footer">
      <div class="contents">
        <div class="footerbox">
          <dl>
            <dt>新手上路</dt>
            <dd>
              <router-link class="nav" v-for="item in List1" :to="item.uri">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>付款及配送</dt>
            <dd>
              <router-link class="nav" v-for="item in List2" :to="item.uri">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>品牌列表</dt>
            <dd>
              <router-link class="nav" v-for="item in List3" :to="item.uri">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>售后服务</dt>
            <dd>
              <router-link class="nav" v-for="item in List4" :to="item.uri">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>真假辨别图</dt>
            <dd>
              <router-link class="nav" v-for="item in List5" :to="item.uri">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>韩国现场直播</dt>
            <dd>
              <img src alt />
            </dd>
          </dl>
        </div>
        <p class="copyright">© 2005-2019 韩妆网 版权所有，并保留所有权利。 本网站解释权： E-mail: hanzhuangwang@126.com</p>
         <div class="List6">
        <ul>
          <li>
            <router-link class="nav6" :to="item.uri" v-for="item in List6 ">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootersNav",
  data() {
    return {
      List1: [
        { name: "交易流程", uri: "/" },
        { name: "韩妆网百科", uri: "/" },
        { name: "联系方式", uri: "/" },
        { name: "常见问题", uri: "/" },
        { name: "注册新会员", uri: "/" },
        { name: "CEO微博", uri: "/" }
      ],
      List2: [
        { name: "支付方式说明", uri: "/" },
        { name: "EMS国际快递", uri: "/" },
        { name: "包裹跟踪查询", uri: "/" },
        { name: "退货退款说明", uri: "/" },
        { name: "通关及报税问题 ", uri: "/" }
      ],
      List3: [
        { name: "innisfree悦诗风吟", uri: "/" },
        { name: "LANEIGE兰芝", uri: "/" },
        { name: "It‘s skin伊思", uri: "/" },
        { name: "Dr.Jart+/蒂佳婷", uri: "/" },
        { name: "伊蒂之屋", uri: "/" },
        { name: "A.H.C", uri: "/" }
      ],
      List4: [
        { name: "韩国仓代发合作", uri: "/" },
        { name: "100%正品保障", uri: "/" },
        { name: "淘宝官方店铺", uri: "/" },
        { name: "百度一下：韩妆网", uri: "/" },
        { name: "洋码头官方店", uri: "/" }
      ],
      List5: [
        { name: "WHOO后真假辨别", uri: "/" },
        { name: "欧美货真假辨别", uri: "/" },
        { name: "日妆真假辨别", uri: "/" },
        { name: "韩妆真假辨别", uri: "/" }
      ],
      List6: [
        { name: "免责条款", uri: "/" },
        { name: "品牌馆", uri: "/" },
        { name: "韩妆资讯", uri: "/" },
        { name: "SITEMAP", uri: "/" },
        { name: "关于我们", uri: "/" },
        { name: "所有品牌", uri: "/" },
        { name: "配送方式", uri: "/" }
      ],
      List7: [
        { name: "LG生活健康韩国总公司", uri: "/" },
        { name: "韩妆网洋码头官方店", uri: "/" },
        { name: "OHUI欧惠韩国直邮", uri: "/" },
        { name: "护肤品加盟", uri: "/" },
        { name: "精品批发", uri: "/" },
        { name: "美容加盟", uri: "/" },
        { name: "化妆品厂家", uri: "/" },
        { name: "口红热卖排行榜10强", uri: "/" },
        { name: "花生日记", uri: "/" }
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
  font: 12px "Microsoft YaHei", Tahoma, Helvetica, Arial, simsun;
}
.footer {
  width: 100%;
  background-color: #333;
}
.contents {
  width: 1200px;
  height: 313px;
  margin: 0 auto;
  background-color: #333;
  line-height: 21px;
}
.footerbox {
  width: 1200px;
  height: 170px;
  padding: 40px 0 20px;
}
dl {
  width: 190px;
  list-style: none;
  color: aliceblue;
  float: left;
  text-align: center;
}
dt {
  width: 190px;
  height: 21px;
  font-size: 16px;
  margin-bottom: 10px;
}
dd {
  width: 190px;
  margin: 0 0 6px;
  /* text-align: left; */
}
.nav {
  display: block;
  text-decoration: none;
  color: #ccc;
  font-size: 12px;
}
.nav:hover{
  color: #e93b78
}
p {
  color: #ccc;
  font-size: 12px;
}
.nav6 {
  margin: 0 20px;
  color: rgb(235, 226, 226);
  text-decoration: none;
  font-size: 12px;
}

/* .nav,
.navs {
  display: block;
  color: rgb(235, 226, 226);
  text-decoration: none;
  margin: 0 66px;
}
.nav:hover {
  color: #e93b78;
}
.navtop {
  height: 30px;
}
.navList {
  height: 30px;
  font-size: 12px;
} */

/* .copyright {
  height: 30px;
  color: aliceblue;
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
}

.List6 {
  width: 800px;
  height: 30px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
}
.nav6 {
  margin: 0 20px;
  color: rgb(235, 226, 226);
  text-decoration: none;
}

.List7 {
  height: 60px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
} */
</style>
