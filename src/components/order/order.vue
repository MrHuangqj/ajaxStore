<template>
	<div id = "order">
		<!-- 顶部红色区域 -->
		<div class="head"></div>  
		<!-- 中上部信息 -->
		<div class="content">
			<div class="content-top">
				<!-- 交易情况 -->
				<div class="content-top-item">
					<p>交易完成</p>
          <p>订单在XXX时间自动确定送达</p>
				</div>
			</div>
			<div class="content-middle">
				<span>已支付</span>
				<span>已接单</span>
				<span>已送达</span>
			</div>
			<div class="content-foot">
				<div class="content-foot-item">
					<img class="bgimg" :src="icon1">
					<p class="shr">收货人</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" :src="icon1">
					<p class="shr">收货地址</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" :src="icon2">
					<p class="shr">期望送达时间</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" :src="icon3">
					<p class="shr">买家留言</p>
					<p class="shr-message">xxx</p>
				</div>
			</div>
		</div>
		<!-- 商品信息通知栏 -->
		<div class="middle">
			商品信息
		</div>
		<!-- 商品信息 -->
		<div class="message">
			<div class="message-item">
				<p>商品总价</p>
				<p>xxx</p>
			</div>
			<div class="message-item">
				<p>订单总价</p>
				<p>xxx</p>
			</div>
			<div class="message-item">
				<p>卖付款</p>
				<p>xxx</p>
			</div>
		</div>
		<!-- 联系商家、联系客服 -->
		<div class="foot">
			<div class="foot-left">
				<img :src="icon4">
				<p>联系商家</p>
			</div>
			<div class="foot-right">
				<img :src="icon4">
				<p>联系客服</p>
			</div>
		</div>
	</div>
</template>

<script>
	import icon1 from './icon_1.png'
	import icon2 from './icon_2.png'
	import icon3 from './icon_3.png'
	import icon4 from './icon_4.png'
	export default {
		data() {
			return {
				msg: {},
				icon1: icon1,
				icon2: icon2,
				icon3: icon3,
				icon4: icon4
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				this.$http.get('/api/msg').then((res) => {
					console.log(res.body.data)
				})
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		font-size: 10px;
	}
	img{
		width: 2rem;
		height: 2.5rem;
		line-height: 2rem;
	}
	#order{
		width: 100%;
		font-size: 1rem;
		color: rgba(80, 80, 80, 1);
		background: rgba(255, 255, 255, 1);
	}
	.head{
		width: 100%;
		height: 6rem;
		background: rgba(231, 34, 80, 1);
	}
	.content{

	}
	.content-top{
		width: 85%;
		height: 4rem;
		padding: 1rem 0 1rem 0;
	}
	.content-top-item{
		position: absolute;
		height: 2rem;
		left: 10%;
	}
	.content-top p{
		width: 100%;
	}
	.content-middle{
		display: flex;
		width: 100%;
		height: 3rem;
	}
	.content-middle span{
		flex: 1;
		text-align: center;
	}
	.content-foot{
		width: 100%;
		height: 12rem;
	}
	.content-foot-item{
		padding-left: 2.5rem;
		display: flex;
		line-height: 3rem;
	}
	.bgimg{
		flex: 1;
	}
	.shr{
		flex: 4;
		width: 5.7rem;
	}
	.shr-message{
		flex: 5;
	}
	.middle{
		height: 5rem;
		width: 100%;
		text-align: center;
		line-height: 5rem;
	}
	.message{
		width: 100%;
		height: 8rem;
	}
	.message-item{
		display: flex;
		color: rgba(80, 80, 80, 1);
		padding-left: 2.5rem;
		line-height: 2.5rem;
	}
	.message-item p:nth-of-type(1){
		flex: 5;
	}
	.message-item p:nth-of-type(2){
		flex: 5;
	}
	.foot{
		width: 100%;
		height: 5rem;
		display: flex;
		text-align: center;
		line-height: 5rem;
	}
	.foot-left{
		flex: 1;
		width: 50%;
		height: 5rem;
		position: relative;
	}
	.foot-left img{
		position: absolute;
		left: 30%;
		top: 30%;
	}
	.foot-left p{
		position: absolute;
		left: 50%;
		top: 0%;
	}
	.foot-right{
		flex: 1;
		width: 50%;
		height: 5rem;
		position: relative;
	}
	.foot-right img{
		position: absolute;
		left: 30%;
		top: 30%;
	}
	.foot-right p{
		position: absolute;
		left: 50%;
		top: 0%;
	}
</style>