<template>
  <div>
    <div class="list">
      <div class="grid-content" v-for="(el,index) in goods" v-if="index <8">
        <img :src="el.imgsource" class="img" />
        <div class="text">
          <p class="text1">{{el.goodsname}}</p>
          <p class="text2">{{el.description1}}</p>
          <p class="text3">{{el.description2}}</p>
          <el-button class="btn">立即疯抢</el-button>
        </div>
      </div>
    </div>
    <div class="grid-s">

    <div class="grid-four" v-for="(el,index) in goods" v-if="index >8">
      <img :src="el.imgsource" class="gridimg" />
      <div class="xiangqing"></div>
      <span class="span1">{{el.price}}</span>
      <span class="span2">{{el.price1}}</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FenLei",
  data() {
    return {
      goods: []
    };
  },
  mounted() {
    var that = this;
    this.$http
      .get("http://yangyunjiao:81/index")
      .then(function(response) {
        console.log(response.data);
        response.data.forEach(el => {
          that.goods.push(el);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.goods);
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  background: #ececec;
}
.list {
  width: 1250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.grid-content {
  width: 600px;
  border-radius: 4px;
  min-height: 36px;
  height: 260px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.img {
  width: 360px;
  height: 260px;
}
.text {
  background-color: #ffffff;
  width: 230px;
  height: 260px;
  text-align: center;
}
.text1 {
  margin-top: 60px;
  font-size: 22px;
  color: #e93b78;
}
.text2 {
  color: #5a5a5a;
  font-size: 17px;
  /* margin-top: 10px; */
}
.text3 {
  color: #5a5a5a;
  font-size: 13px;
  margin-top: -10px;
}
.btn {
  background: #e93b78;
  color: #fff;
  margin-top: 20px;
}
.grid-s{
  display: flex;
  justify-content: left;
   flex-wrap: wrap;

}
.grid-four {
  width: 289px;
  height: 380px;
  margin: 10px;
  background-color: #ffffff;

}
.grid-four:hover {
  border: 1px solid #e93b78;
}
.gridimg {
  width: 260px;
  height: 270px;
  margin: 20px;
}
.xiangqing{
   background-color: #ffffff;
}
span {
  float: left;
  margin-top: 20px;
  padding-left: 5px;
  
}
.span1 {
  font-size: 18px;
  color: #fc3f83;
}
.span2 {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  padding: 5px;
  box-sizing: border-box;
}
</style>