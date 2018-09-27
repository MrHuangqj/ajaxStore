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
					<img class="bgimg" src="icon_1.svg">
					<p class="shr">收货人</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" src="icon_1.svg">
					<p class="shr">收货地址</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" src="icon_2.svg">
					<p class="shr">期望送达时间</p>
					<p class="shr-message">xxx</p>
				</div>
				<div class="content-foot-item">
					<img class="bgimg" src="icon_3.svg">
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
				<p>运费（快递）</p>
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
				<img src="icon_4.svg">
				<span>联系商家</span>
			</div>
			<div class="foot-right">
				<img src="icon_4.svg">
				<span>联系客服</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: {}
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
	}
	#order{
		width: 100%;
		font-size: 10px;
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
		font-size: 1.6rem;
		padding: 1rem 0 1rem 0;
	}
	.content-top-item{
		position: absolute;
		height: 2rem;
		width: 100%;
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
		font-size: 1.4rem;
	}
	.content-foot{
		width: 100%;
		height: 14rem;
		font-size: 1.4rem;
	}
	.content-foot-item{
		margin-top: 1rem;
		padding-left: 3.4rem;
		display: flex;
		line-height: 2.5rem;
	}
	.bgimg{
		flex: 1;
	}
	.shr{
		flex: 4;
		width: 5.7rem;
	}
	.shr-message{
		flex: 7;
	}
	.middle{
		height: 8.5rem;
		width: 100%;
		text-align: center;
		line-height: 8.5rem;
		font-size: 1.4rem;
	}
	.message{
		width: 100%;
		height: 10rem;
	}
	.message-item{
		width: 100%;
		display: flex;
		font-size: 1.4rem;
		color: rgba(80, 80, 80, 1);
		padding-left: 3.4rem;
		line-height: 2.5rem;
	}
	.message-item p:nth-of-type(1){
		flex: 4;
	}
	.message-item p:nth-of-type(2){
		flex: 7;
	}
	.foot{
		width: 100%;
		height: 5rem;
		display: flex;
		text-align: center;
		line-height: 5rem;
		font-size: 1.4rem;
	}
	.foot-left{
		flex: 1;
	}
	.foot-right{
		flex: 1;
	}
</style>
