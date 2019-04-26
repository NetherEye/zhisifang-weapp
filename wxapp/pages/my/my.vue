<template>
	<view class="content">
		<view class="nickname">
			<view class="tou" v-show="role">
				<image :src="userInfo.avatarUrl"></image>
			</view>
			<view v-if="!role" class="getRole">
				<button open-type="getUserInfo" style="width: 100%;height: 100%;opacity: 0;position: absolute;top: 0;left: 0;" lang="zh_CN" @getuserinfo="onGotUserInfo">
				</button>
				<image src="../../static/image/getTou.png">
				</image>
			</view>
			
			<text v-show="role">{{userInfo.nickName}}</text>
			<view class="concat" @click="goTel">
				<image src="../../static/image/ipone.png"></image>
				<text>联系我们</text>
			</view>
		</view>
		<view class="tip" v-if="MoneyHide">
			<view class="tip-header">
				<image src="../../static/image/lock.png"></image>
				<text>已解锁景区</text>
			</view>
			<view class="noloack" v-if="popData.length == 0">
				<image src="../../static/image/jqjs.png" mode=""></image>
				<text>
					目前还没有解锁景区
				</text>
			</view>
			<view class="sc-list-item2" v-for="(item, index) in popData" :key="index" @click="getScDetail(item)">
				<view class="sc-list-img">
					<image class="bf" src="../../static/image/bf.png"></image>
					<image :src="item.photo" mode="aspectFill" lazy-load></image>
					<view class="sc-list-name els">
						<text>{{item.scenicName}}</text>
					</view>
					<view class="info">
						<text v-if="item.voiceTotal">讲解：{{item.voiceTotal}}个景点</text><text>收听量：{{item.listenTotal}}</text><text v-if="item.narratorPrice">
							{{item.narratorPrice}}元/份</text>
					</view>
					<view class="sc-list-site">
						<image src="../../static/image/posi.png"></image><text class="els">{{item.address}}</text>
					</view>
					<view class="sc-list-info">
						<text>{{item.summary}}</text>
						<view class="sc-list-info-opc">
			
						</view>
					</view>
					<view class="sc-list-tag">
						<text v-for="(tag, inx) in item.scenicTags" :key="inx">{{tag}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import allApi from '../../common/allApi.js'
	import http from '../../common/http.js'
	let tools = require('../../common/tools.js');
	import {  
	    mapState
	} from 'vuex';
	
	export default {
		data() {
			return {
				popData: [
					
				],
				userInfo: {
					
				},
				role: true, // 是否有权限获取用户信息
				
			}
			
		},
		onPullDownRefresh(){
			this.getData()
		},
		async onLoad() {
			let yes = await tools.isLogin()
			if(!yes){ // 验证失败
				let register = await tools.logining()
				if(!register){ // 需要注册
					// 设置登录or注册完成后的返回地址
					let pages = getCurrentPages();
					let path = (pages[pages.length - 1].route).slice((pages[pages.length - 1].route).lastIndexOf('/') + 1)
					uni.redirectTo({
						url: '../userInfoAuth/userInfoAuth?goBack=' + path 
					})
				}
			}
			this.getData()
			let _th = this
			uni.getUserInfo({
				success(res) {
					_th.userInfo = res.userInfo
				},
				fail(err) {
					// 没有授权
				}
			})
			
			// 获取 MoneyHide
			this.$store.commit('setMoneyHide', await tools.getMoneyHide())
			
		},
		async onShow() {
			let _this = this
			uni.getSetting({
				success(res) {
					if(res.authSetting['scope.userInfo']){
						_this.role = true
					}else{
						_this.role = false
					}
				},
				fail() {
					_this.role = false
				}
			})
		},
		
		methods: {
			goTel(){
				uni.navigateTo({
					url: '../tel/tel'
				})
			},
			getData(){
				let par = {
					pageNumber: 1,
					pageSize: 10000
				};
				http.rq({
					url: allApi.unlockScenic,
					data: par,
					loading: true
				}).then(res => {
					uni.stopPullDownRefresh()
					if(res.code === 200){
						this.popData = res.data
					}else{
						this.popData = []
					}
				})
				
			},
			getScDetail(item){
				uni.navigateTo({
					url:'../scMapDetail/scMapDetail?id=' + item.id
				})
			},
			onGotUserInfo(e){
				if(e.detail.userInfo){
					this.userInfo = e.detail.userInfo
					this.role = true
				}else{
					this.role = false
				}
			}
		},
		watch: {
			
		},
		computed: {
			...mapState(['MoneyHide'])  
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #ffffff;
		.nickname{
			width: 702upx;
			height: 300upx;
			background: url(../../static/image/myBj.png) no-repeat center center;
			background-size: 100% 100%;
			border-radius: 10upx;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			.getRole{
				width: 148upx;
				height: 166upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.tou{
				width: 128upx;
				height: 128upx;
				background-color: skyblue;
				border-radius: 50%;
				image{
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
				margin-bottom: 10upx;
				
			}
			text{
				font-size: 30upx;
				font-weight: 500;
				color: #ffffff;
			}
			.concat{
				width: 176upx;
				height: 66upx;
				background-color: #ffffff;
				box-shadow: 0px 0px 38upx 2upx 
					rgba(0, 160, 83, 0.17);
				border-top-left-radius: 33upx;
				border-bottom-left-radius: 33upx;
				position: absolute;
				top: 46upx;
				right: 0upx;
				display: flex;
				align-items: center;
				image{
					width: 24upx;
					height: 24upx;
					margin-right: 8upx;
					margin-left: 28upx;
				}
				text{
					font-size: 24upx;
					color: #1d92dd;
					
					
				}
			}
		}
		
		.noloack{
			width: 686upx;
			height: 545upx;
			background-color: #ffffff;
			box-shadow: 3upx 5upx 20upx 2upx 
				rgba(38, 38, 38, 0.19);
			border-radius: 24upx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 32upx;
			flex-direction: column;
			margin-bottom: 20upx;
			image{
				margin-bottom: 30upx;
				width: 128upx;
				height: 173upx;
			}	
			text{
				font-size: 30upx;
				color: #999999;
			}
		}
		
		.tip{
			.sc-list-item{
				margin-bottom: 38upx;
			}
			.tip-header{
				margin-left: 33upx;
				display: flex;
				align-items: center;
				margin-bottom: 21upx;
				margin-top: 36upx;
				image{
					margin-right: 13upx;
					width: 28upx;
					height: 37upx;
				}
				text{
					font-size: 36upx;
					color: #333333;
					font-weight: 500;
				}
			}
		}
		.sc-list-item2{
			margin-left: 35upx;
			margin-bottom: 30upx;
		}
	}

	
</style>
