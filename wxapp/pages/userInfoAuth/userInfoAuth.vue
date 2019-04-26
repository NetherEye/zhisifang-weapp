<template>
	<view class="content">
		<image src="../../static/image/authbg.png" mode=""></image>
		<view style="text-align: center;">
			<text>点击授权获取微信用户信息</text>
		</view>
		<button class="btn" @getuserinfo="isUserInfo" open-type="getUserInfo">授权登录</button>
	</view>
</template>

<script>
	import allApi from '../../common/allApi.js';
	let tools = require('../../common/tools.js');
	export default {
		data(){
			return {
				goBack: '',
				goBackWithParmas: {}, // 返回页面携带的参数
			}
		},
		onLoad(ops) {
			if(ops.goBack){
				this.goBack = ops.goBack
			}else{
				this.goBack = 'index'
			}
			
			if(ops.goBackWithParmas){
				this.goBackWithParmas = JSON.parse(ops.goBackWithParmas)
			}
		},
		onShow() {
			
		},
		methods: {
			async isUserInfo(ev){
				if (ev.detail.rawData) {
					uni.showLoading({
						title: '登录中'
					})
					let f = await tools.registering()
					uni.hideLoading()
					if(f){
						// 如果返回页面需要携带参数
						if(Object.keys(this.goBackWithParmas).length != 0){
							let str = '?'
							for(var key in this.goBackWithParmas) {
								str += key + '=' + this.goBackWithParmas[key] + '&'
							}
							str = str.substring(0, str.length)
							uni.redirectTo({
								url: '../' + this.goBack + '/' + this.goBack + str
							})
						}else{
							uni.redirectTo({
								url: '../' + this.goBack + '/' + this.goBack
							})
						}
					}else{
						uni.showToast({
							title: '登录失败',
							icon: 'none'
						})
					}
					
				} else {
					// 失败
					uni.showToast({
						title: '需要授权才能登录。',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #ffffff;
		image{
			display: inline-block;
			width: 500upx;
			height: 500upx;
			margin-top: 90upx;
			margin-bottom: 60upx;
			margin-left: 124upx;
		}
		text{
			display: inline-block;
			font-size: 48upx;
			color: #999999;
			margin: 0 auto;
			
		}
		.btn{
			width: 348upx;
			height: 90upx;
			background-image: linear-gradient(75deg, 
				#017fe6 0%, 
				#01e6de 100%), 
			linear-gradient(
				#04bb82, 
				#04bb82);
			background-blend-mode: normal, 
				normal;
			box-shadow: 0px 0px 29upx 3upx 
				rgba(3, 131, 232, 0.27);
			border-radius: 45upx;
			font-size: 30upx;
			color: #ffffff;
			line-height: 90upx;
			margin-top: 38upx;
		}
	}


</style>
