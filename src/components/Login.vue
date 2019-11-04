<template>
  <div>
    <div class="top">
      <div class="logo">
        <a href></a>
      </div>
    </div>

    <div class="middle">
      <div class="mainbox">
        <div>
          <router-link class="check all" to="/account">账号登录</router-link>
          <router-link class="all" to="/twocode">扫码登录</router-link>
          <div class="el_input">
            <el-input class="inputbox" v-model="input" placeholder="用户名 手机"></el-input>
            <el-input class="inputbox" placeholder="密码" v-model="input2" show-password></el-input>
            <el-checkbox class="check" v-model="checked">
              我已看过并接受《
              <a href>用户协议</a> 》

            </el-checkbox>
          </div>
			 <el-button class="inputbox el_buttons">登录</el-button>
        </div>
        <router-view class="main"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.top {
  width: 1130px;
  height: 70px;
  margin: 0 auto;
}
.logo {
  width: 200px;
  height: 100%;
  background-image: url(logo.png);
  background-size: 100% 100%;
}

.middle {
  width: 100%;
  height: 588px;
  background-color: rgb(228, 221, 221);
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
}

.mainbox {
  width: 980px;
  height: 497px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: 130px;
}
.all {
  width: 422px;
  font: 26px "黑体";
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-bottom: 1px solid #dddddd;
}
.check {
  color: #8a8a88;
}
.all:hover {
  color: #e93b78;
  border-bottom: 1px solid #e93b78;
}
.main {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: pink;
}
.el_input {
	width: 980px;
	margin: 10px auto;
	left:260px ;
  background-color: aqua;
}
.inputbox {
  width: 422px;
  margin: 30px;

}
.el_buttons{
	background-color: #e93b78;
	color: #fff;
	font-size: 18px;
}
</style>