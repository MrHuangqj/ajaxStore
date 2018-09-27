<template>
    <div id="main">
      <header>
        <img src="@/svg/图标 68.svg"/>
        <img src="@/svg/图标 69.svg"/>
        <div></div>
        <div id="bar">
          <span>宝贝</span>
          <span>详情</span>
          <span>推荐</span>
        </div>
      </header>
      <div style="height: 9.59rem;">
      </div>
      <section id="picture">
        <img src=""/>
        <div id="page">
          <p>1/5</p>
        </div>
      </section>
      <section id="message">
        <div class="content">
          <h2>商品：￥{{good.productName}}</h2>
          <div>{{good.description}}</div>
          <div>
            <p>售价：{{good.price}}</p>
          </div>
        </div>
      </section>
      <div id="recommend">
        <h2>———推荐———</h2>
        <div id="goods">
          <div class="good" v-for="(item,index) in remmend">
            <img src="#"/>
            <div>{{remmend[index].description}}</div>
            <p>{{remmend[index].price}}</p>
          </div>
        </div>
      </div>
      <div style="height: 5.86rem;width: 1px;"></div>
      <footer id="footbar">
        <div id="btn">
          <div @click="add" class="lbtn">
            加入购物车
          </div>
          <div @click="buy" class="rbtn">
            立即购买
          </div>
        </div>

      </footer>
    </div>
</template>

<style>

  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 10px;
  }

  #main {
    position: relative;
  }

  body {
    margin: 0 auto;
    max-width: 120rem;
  }

  #recommend {
    background: rgba(245, 245, 245, 1);
    width: 100%;
  }

  #recommend > h2 {
    text-align: center;
    height: 3.52rem;
    width: 100%;
    line-height: 3.52rem;
  }

  #goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .good {
    box-sizing: border-box;
    font-size: 1.4rem;
    float: left;
    width: 50%;
    /*height: 26.41rem;*/
    background: rgba(255, 255, 255, 1);
    padding-top: 0.7rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }

  .good > img {
    min-height: 16.64rem;
    min-width: 95%;
    text-align: center;
    background: rgba(162, 162, 162, 1);
  }

  .good > div {
    text-align: left;
    margin: 0 auto;
    line-height: 2.34rem;
    width: 95%;
    height: 4.69rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .good > p {
    text-align: left;
    padding: -1rem;
  }

  header {
    height: 8.39rem;
    width: 100%;
    background: rgba(233, 100, 100, 1);
    position: fixed;
    z-index: 10;
    top: 0;
  }

  header > img {
    width: 4.26rem;
    height: 3.44rem;
    border-radius: 24rem;
    margin: 0.8rem;
  }
  header > img{
  }
  header > img:nth-child(1) {
    float: left;
  }

  header > img:nth-child(2) {
    float: right;
  }
  header > div:nth-child(3){
    background: white;
    height: 2rem;
    width: 2rem;
    float: right;
    position: absolute;
    border-radius: 50%;
    right: 0.5rem;
  }


  #bar {
    height: 3.29rem;
    width: 100%;
    line-height: 3.29rem;
    background: white;
    margin-top: 5.1rem;
    padding: 0.6rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-around;
  }

  #picture {
    background: rgba(217, 217, 217, 1);
    height: 22rem;
    width: 100%;
    position: relative;
  }

  #page {
    position: absolute;
    width: 6.68rem;
    height: 3.59rem;
    top: 75%;
    left: 75%;
    background: rgba(80, 80, 80, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16rem;
  }

  #message {
    width: 100%;
    height: 12rem;
    background: rgba(255, 255, 255, 1);
  }

  .content {
    width: 95%;
    margin: 0 auto;
  }

  .content > h2 {
    margin-top: 1.41rem;
    color: rgba(226, 92, 92, 1);
  }

  .content > div:nth-child(2) {
    width: 100%;
    height: 4.2rem;
    line-height: 2.1rem;
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.79rem;
  }

  .content > div:nth-child(3) {
    margin-top: 1.56rem;
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
  }

  #footbar {
    background: white;
    height: 5.86rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
  }

  #btn {
    height: 4.8rem;
    width: 17.6rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 4.8rem;
  }

  .lbtn {
    height: 100%;
    width: 50%;
    background: rgba(233, 100, 100, 1);
    border-radius: 3rem 0 0 3rem;
  }

  .rbtn {
    height: 100%;
    background: rgba(231, 169, 107, 1);
    width: 50%;
    border-radius: 0 3rem 3rem 0;
  }

  /*@media only screen and (max-width: 392px) {
            .good {
                width: 32rem;
            }
            .good>div {
                width: 31rem;
            }
            .good>img {
                min-width: 31rem;
            }
        }*/
</style>

<script type="text/ecmascript-6">
  export default {
    props:['num'],
    data() {
      return{
        good: {},
        remmend:{}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get('/api/msg').then((res) => {
          this.remmend=res.body.data.product
          console.log(this.remmend)
          sessionStorage.selected = '{"productName":"iphoneXS","imgUrl":["img/iphone/iphonexs.jpg","img/iphone/xs_1.jpg","img/iphone/xs_2.jpg","img/iphone/xs_3.jpg","img/iphone/xs_4.jpg"],"description":"Apple iPhone XS 64G 移动联通电信4G手机","price":"8699.00"}'
          this.good = JSON.parse(sessionStorage.selected)
          console.log(this.good)

        })
      },
      buy(){},
      add(){

      }

    }
  }
</script>
