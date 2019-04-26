<template>
	<view class="content">
		<view class="card">
			<image src="../../static/image/kf.png" mode=""></image>
			<view class="card-right">
				<text>微信客服：点击可直接联系知四方客服</text>
			</view>
			<button style="opacity: 0;width: 100%;height: 100%;position: absolute;top: 0;left: 0;" type="primary" open-type="contact" @contact="contact"></button>
		</view>
		<view class="card">
			<image src="../../static/image/kf2.png" mode=""></image>
			<view class="card-right">
				<text>客服热线：0854-235498787</text>
				<text>工作时间：9：00-17：00</text>
			</view>
		</view>
	</view>
</template>

<script>
	import allApi from '../../common/allApi.js'
	import http from '../../common/http.js'
	let tools = require('../../common/tools.js');
	export default {
		data() {
			return {
				
			}
			
		},
		async onLoad() {
			let yes = await tools.isLogin()
			if (!yes) { // 验证失败
				let register = await tools.logining()
				if (!register) { // 需要注册
					// 设置登录or注册完成后的返回地址
					let pages = getCurrentPages();
					let path = (pages[pages.length - 1].route).slice((pages[pages.length - 1].route).lastIndexOf('/') + 1)
					uni.redirectTo({
						url: '../userInfoAuth/userInfoAuth?goBack=' + path
					})
				}
			}
			// 获取 MoneyHide
			this.$store.commit('setMoneyHide', await tools.getMoneyHide())
		},
		onShow() {
			

		},
		methods: {
			contact(res){
				console.log(res)
			}
		},
		watch: {
			
		}
	}
</script>

<style lang="scss">
	.content {
		overflow: hidden;
		.card{
			margin: 15upx 0 15upx 33upx;
			width: 685upx;
			height: 100upx;
			background-color: #ffffff;
			box-shadow: 3upx 5upx 20upx 2upx 
				rgba(38, 38, 38, 0.19);
			border-radius: 24upx;
			display: flex;
			align-items: center;
			position: relative;
			image{
				width: 50upx;
				height: 50upx;
				margin: 0 19upx 0 21upx;
			}
			.card-right{
				display: flex;
				flex-direction: column;
				justify-content: center;
				// align-items: center;
				text:nth-child(1){
					font-size: 28upx;
					color: #333333;
				}
				text:nth-child(2){
					font-size: 24upx;
					color: #999999;
				}
			}
		}
	}

	
</style>
