<template>
  <div>
    <div class="headers">
      <!-- 顶部导航栏 -->
      <header-nav v-if="isShow"></header-nav>
    </div>

    <div class="cate">
      <!-- 中间导航栏 -->

      <cate-gories></cate-gories>

      <!-- 中间主体区域 -->
      <router-view v-if="isShow" ></router-view>
    </div>

    <div class="footers">
      <!-- 底部导航栏 -->

      <footer-nav></footer-nav>
      <footers-nav></footers-nav>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";
import FootersNav from "./FootersNav";
import CateGories from "./CateGories";

export default {
  name: "Home",
  data() {
    return {
      isShow:true
    };
  },
  components: {
    "header-nav": HeaderNav,
    "footer-nav": FooterNav,
    "footers-nav": FootersNav,
    "cate-gories": CateGories
  }
};
</script>

<style scoped>
.headers {
  height: 50px;
}



</style>
