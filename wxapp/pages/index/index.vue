<template>
	<view class="pub_wrap">
		<view class="content">
			<!--搜索 -->
			<view class="search" @click="goSearch">
				<image src="../../static/image/search.png"></image>
				<text>去你想去的地方</text>
			</view>
			<view class="banner">
				<swiper class="swiper" circular :indicator-dots="true" indicator-color="#ffffff" indicator-active-color="#02a9f0"
				 :autoplay="true" :interval="3000" :duration="500">
					<swiper-item class="swiper-item" v-for="(item, index) in banner" :key="index" @click="goToWhat">
						<image class="img bannerImg" mode="aspectFill" :src="item.photo"></image>
					</swiper-item>
				</swiper>
			</view>

			<!-- 留白 -->
			<view class="line">
			</view>
			<view class="main">
				<view class="tbs">
					<van-tabs custom-class="gen-tab" :border="false" nav-class="nav-tab" tab-class="tab-tab" sticky @change="handleTabsChange">
						<!-- 人气景区 -->
						<van-tab title="人气景区">
							<scroll-view class="tbs-box">
								<view class="sc-list-item" v-for="(item, index) in hotPage.scHotList" :key="index" @click="getScDetail(item)">
									<view class="sc-list-img">
										<image :src="item.photo" mode="aspectFill" lazy-load></image>

										<view class="sc-list-name">
											<text>{{item.scenicName}}</text>
										</view>
										<view class="info">
											<text v-if="item.voiceTotal">讲解：{{item.voiceTotal}}个景点</text><text v-if="item.narratorPrice && MoneyHide">
												{{item.narratorPrice}}元/份</text>
										</view>
									</view>
									<view class="pop" v-if="item.popularityTotal">
										<image src="../../static/image/hot.png" lazy-load></image>
										<view class="pop-text">
											<text>人气：{{item.popularityTotal}}</text>
										</view>
									</view>
									<view class="sc-list-site" v-if="item.address">
										<image src="../../static/image/posi.png"></image><text>{{item.address}}</text>
									</view>

									<view class="sc-list-info">
										<text>{{item.summary}}</text>
									</view>
									<view class="sc-list-tag">
										<text v-for="(tag, inx) in item.scenicTags" :key="inx">{{tag}}</text>
									</view>
								</view>
								<wux-divider>
									{{hotPage.rqStatus}}
								</wux-divider>
							</scroll-view>
						</van-tab>

						<!-- 附近景区 -->
						<van-tab title="附近景区">
							<!-- 滑动标签 -->
							<view class="scroll-tags-box" v-if="nearbyTags.length != 0 && locationAuth">
								<scroll-view class="scroll-tags" scroll-x>
									<view class="scroll-tag" @click="setNearbyActive(item)" :class="item.id == norPage.nearbyActive ? 'scroll-tag-active' : ''"
									 v-for="(item, index) in nearbyTags" :key="item.id">
										<text>{{item.typeName}}</text>
									</view>
								</scroll-view>
							</view>
							<!-- 未授权 -->
							<template v-if="!locationAuth">
								<view class="locationAuth">
									<image src="../../static/image/loca.png" mode=""></image>
									<text>您还未授权地理定位</text>
									<text>无法获取附近景区</text>
									<view class="btn" style="position: relative;">
										去授权
										<button style="width: 100%;height: 100%;opacity: 0;position: absolute;top: 0;left: 0;" @opensetting="opensetting" open-type="openSetting">打开授权设置页</button>
									</view>

								</view>
							</template>
							<!-- 地图 -->
							<template v-if="locationAuth">
								<view class="showMap">
									<view class="map">
										<map id="map" v-show="tbsActiveDataType == '附近景区'" style="width: 100%; height: 100%;" @tap="handleTabMap"
										 @markertap="handleScMark" :show-location="true" :latitude="center.latitude" :markers="norPage.markers"
										 :longitude="center.longitude">
											<cover-view class="siteInfo" v-if="norPage.scMarkObj.show" @click="goMapDetail">
												<cover-image :src="norPage.scMarkObj.info['photo']"></cover-image>
												<cover-view class="siteTextInfo">
													<cover-view class="siteInfo-name els">
														{{norPage.scMarkObj.info['scenicName']}}
													</cover-view>
													<cover-view class="siteInfo-site">
														距您 {{norPage.scMarkObj.info['distance']}} km | {{norPage.scMarkObj.info['address']}}
													</cover-view>
												</cover-view>
											</cover-view>
										</map>

									</view>
								</view>

							</template>


						</van-tab>
						<!-- 更多景区 -->
						<van-tab title="更多景区">
							<!-- 滑动标签 -->
							<view class="scroll-tags-box" v-if="nearbyTags.length != 0">
								<scroll-view class="scroll-tags" scroll-x>
									<view class="scroll-tag" @click="setNearbyActive2(item)" :class="item.id == morePage.nearbyActive ? 'scroll-tag-active' : ''"
									 v-for="(item, index) in nearbyTags" :key="item.id">
										<text>{{item.typeName}}</text>
									</view>
								</scroll-view>
							</view>
							<scroll-view class="tbs-box">
								<view class="sc-list-item2" v-for="(item, index) in morePage.moreSpotList" :key="index" @click="getScDetail(item)">
									<view class="sc-list-img">
										<image class="bf" src="../../static/image/bf.png"></image>
										<image :src="item.photo" mode="aspectFill" lazy-load></image>
										<view class="sc-list-name els">
											<text>{{item.scenicName}}</text>
										</view>
										<view class="info">
											<text v-if="item.voiceTotal">讲解：{{item.voiceTotal}}个景点</text><text>收听量：{{item.listenTotal}}</text><text v-if="item.narratorPrice && MoneyHide">
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
								<wux-divider>
									{{morePage.rqStatus}}
								</wux-divider>
							</scroll-view>
						</van-tab>
					</van-tabs>
				</view>
			</view>
			<!-- me -->
			<view class="goToMe" @click="goToMe">
				<image src="../../static/image/circle.png"></image>
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
				banner: [], // banner集合
				locationAuth: false, // 位置授权状态
				tbsActiveDataType: '人气景区', // 自定义保存tabActive的状态
				// 人气景区标签页数据
				hotPage: {
					scHotList: [],
					pageNumber: 1,
					pageSize: 10,
					rqStatus: '上拉加载更多',
				},
				morePage: {
					moreSpotList: [],
					nearbyActive: '',
					pageNumber: 1,
					pageSize: 10,
					rqStatus: '上拉加载更多',
				},
				// 附近景区
				norPage: {
					nearbyActive: '', // 人气景区
					markers: [],
					// 点击景点mark时显示的景区信息对象
					scMarkObj: {
						show: false,
						info: {

						}
					},
				},

				nearbyTags: [], // 标签集合

				center: {
					longitude: 106.63,
					latitude: 26.65
				}, // 当前位置

				httpCount: 0, // 请求次数


			}
		},
		onPullDownRefresh() {
			// 开启下拉刷新 
			// 重置页面数据
			this.banner = [];
			if (this.tbsActiveDataType == '人气景区') {
				this.hotPage = {
					scHotList: [],
					pageNumber: 1,
					pageSize: 10,
					rqStatus: '上拉加载更多'
				}
				this.getBanner()
				this.getScHotList()
			}
			if (this.tbsActiveDataType == '附近景区') {
				this.nearbyTags = []
				this.norPage = {
					nearbyActive: '', // 人气景区
					markers: [],
					// 点击景点mark时显示的景区信息对象
					scMarkObj: {
						show: false,
						info: {

						}
					},
				};

				this.getScTypes()
				this.getBanner()
				this.getLocationAuth()
			}
			if (this.tbsActiveDataType == '更多景区') {
				this.nearbyTags = []
				this.morePage = {
					moreSpotList: [],
					nearbyActive: '',
					pageNumber: 1,
					pageSize: 10,
					rqStatus: '上拉加载更多',
				};

				this.getScTypes()
				this.getBanner()
				this.getMoreSpotList()
			}

		},
		onReachBottom() {
			if (this.tbsActiveDataType == '人气景区') {
				this.hotPage.pageNumber = this.hotPage.pageNumber + 1;
				this.getScHotList()
			} else if (this.tbsActiveDataType == '更多景区') {
				this.morePage.pageNumber = this.morePage.pageNumber + 1;
				this.getMoreSpotList()
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
			
			this.getBanner()
			this.getScHotList()
			this.getScTypes()
		},
		onHide() {},
		onShow() {
			
		},
		methods: {
			// 点击景区类型事件
			setNearbyActive(item) {
				this.norPage.markers = []
				if (this.norPage.nearbyActive == item.id) {
					this.norPage.nearbyActive = ''
				} else {
					this.norPage.nearbyActive = item.id
				}
				this.getScMarks()
			},
			// 点击景区类型事件
			setNearbyActive2(item) {
				if (this.morePage.nearbyActive == item.id) {
					this.morePage.nearbyActive = ''
				} else {
					this.morePage.pageNumber = 1;
					this.morePage.pageSize = 10;
					this.morePage.nearbyActive = item.id
				}
				this.morePage.moreSpotList = []
				this.morePage.rqStatus = '上拉加载更多'
				this.getMoreSpotList()
			},
			// 获取 banner
			getBanner() {
				this.httpCount++;

				http.rq({
					url: allApi.banner
				}).then(res => {
					this.httpCount--;
					// 下拉刷新操作
					if (this.httpCount < 0) {
						this.httpCount = 0
					} else if (this.httpCount == 0) {
						uni.stopPullDownRefresh()
					}
					if (res.code === 200) {
						this.banner = res.data
					} else {
						this.banner = []
					}
				})


			},
			// 获取景区类型
			getScTypes() {
				this.httpCount++;

				http.rq({
					url: allApi.getScType
				}).then(res => {
					this.httpCount--;
					// 下拉刷新操作
					if (this.httpCount < 0) {
						this.httpCount = 0
					} else if (this.httpCount == 0) {
						uni.stopPullDownRefresh()
					}

					if (res.code === 200) {
						this.nearbyTags = res.data
					} else {
						this.nearbyTags = []
					}
				})

			},

			getMoreSpotList() {
				this.httpCount++;
				this.morePage.rqStatus = '加载中...'
				http.rq({
					url: allApi.moreSpotList,
					data: {
						pageNumber: this.morePage.pageNumber,
						pageSize: this.morePage.pageSize,
						scenicTypeId: this.morePage.nearbyActive
					}
				}).then(res => {
					this.httpCount--;
					// 下拉刷新操作
					if (this.httpCount < 0) {
						this.httpCount = 0
					} else if (this.httpCount == 0) {
						uni.stopPullDownRefresh()
					}

					if (res.code === 200) {
						res.data.forEach(a => {
							a['scenicTags'] = a.tag ? a.tag.split(',') : [];
							a['popularityTotal'] = tools.handleNumber(a['popularityTotal']);
							a['listenTotal'] = tools.handleNumber(a['listenTotal']);
						})

						this.morePage.moreSpotList = this.morePage.moreSpotList.concat(res.data)
						if (this.morePage.moreSpotList.length >= res.total) {
							this.morePage.rqStatus = '没有更多了'
						} else {
							this.morePage.rqStatus = '上拉加载更多'
						}
					} else {
						if (this.morePage.pageNumber > 1) {
							this.morePage.pageNumber = this.morePage.pageNumber - 1;
						}
						this.morePage.rqStatus = '没有更多了'
					}
				})


			},
			// get sc hot List
			getScHotList() {
				this.httpCount++;
				this.hotPage.rqStatus = '加载中...'

				http.rq({
					url: allApi.scHotList,
					data: {
						pageNumber: this.hotPage.pageNumber,
						pageSize: this.hotPage.pageSize,
					}
				}).then(res => {
					this.httpCount--;
					// 下拉刷新操作
					if (this.httpCount < 0) {
						this.httpCount = 0
					} else if (this.httpCount == 0) {
						uni.stopPullDownRefresh()
					}

					if (res.code === 200) {
						res.data.forEach(a => {
							a['scenicTags'] = a.tag ? a.tag.split(',') : [];
							a['popularityTotal'] = tools.handleNumber(a['popularityTotal'])
						})

						this.hotPage.scHotList = this.hotPage.scHotList.concat(res.data)
						if (this.hotPage.scHotList.length >= res.total) {
							this.hotPage.rqStatus = '没有更多了'
						} else {
							this.hotPage.rqStatus = '上拉加载更多'
						}
					} else {
						if (this.hotPage.pageNumber > 1) {
							this.hotPage.pageNumber = this.hotPage.pageNumber - 1;
						}
						this.hotPage.rqStatus = '没有更多了'
					}
				})
			},

			// 关闭获取用户信息授权框
			goSearch() {
				uni.navigateTo({
					url: "../search/search"
				})
			},
			goToMe() {
				uni.navigateTo({
					url: "../my/my"
				})
			},
			handleTabsChange({
				detail
			}) {
				this.tbsActiveDataType = detail.title;
				if (detail.title == '附近景区') {
					this.norPage = {
						nearbyActive: '', // 人气景区
						markers: [],
						// 点击景点mark时显示的景区信息对象
						scMarkObj: {
							show: false,
							info: {

							}
						},
					};
					this.getLocationAuth()

				}

				if (detail.title == '更多景区') {
					if (this.morePage.moreSpotList.length == 0) {
						this.getMoreSpotList()
					}
				}

			},
			// 获取位置授权
			getLocationAuth() {
				let _this = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						_this.locationAuth = true
						_this.getlocation()
					},
					fail() {
						_this.locationAuth = false
					}
				})
			},
			// 获取地理位置
			getlocation() {
				let _this = this
				uni.getLocation({
					success(res) {
						_this.center['longitude'] = res.longitude;
						_this.center['latitude'] = res.latitude;
						_this.getScMarks()

						// 自动滚动到底部展示地图
						const query = uni.createSelectorQuery()
						query.select('.content').boundingClientRect()
						query.selectViewport().scrollOffset()
						query.exec(function(res) {
							uni.pageScrollTo({
								scrollTop: res[0].bottom,
								duration: 300
							})
						})

					},
					fail() {

					}
				})
			},
			// 后天获取景点坐标
			getScMarks() {
				let mapContext = uni.createMapContext('map', this);
				this.httpCount++;

				http.rq({
					url: allApi.getNearbySc,
					data: {
						pageNumber: 1,
						pageSize: 1000,
						lat: this.center['latitude'],
						lon: this.center['longitude'],
						scenicTypeId: this.norPage.nearbyActive
					}
				}).then(res => {
					this.httpCount--;
					// 下拉刷新操作
					if (this.httpCount < 0) {
						this.httpCount = 0
					} else if (this.httpCount == 0) {
						uni.stopPullDownRefresh()
					}

					if (res.code === 200) {
						let p = []
						res.data.forEach(a => {
							this.norPage.markers.push({
								id: a.id,
								latitude: a.lat,
								longitude: a.lon,
								iconPath: '../../static/image/xuanzhong.png',
								width: 30,
								height: 40,
								scenicName: a.scenicName,
								photo: a.photo,
								distance: (a.distance / 1000).toFixed(1),
								address: a.address,
							})
							p.push({
								latitude: a.lat,
								longitude: a.lon
							})

						})
						p.push(this.center)
						mapContext.includePoints({
							points: p,
							padding: [40, 40, 40, 40]

						})
					} else {
						this.norPage.markers = []
					}
				})

			},
			// 点击mark 会返回mark 的 id
			handleScMark({
				mp
			}) {
				// 根据 mp.markerId 获取数据
				this.norPage.markers.forEach(a => {
					if (a.id == mp.markerId) {
						
						this.norPage.scMarkObj = {
							show: true,
							info: a
						}
					}
				})

			},
			// 点击地图触发，此处做 scmarkobj.show = false
			handleTabMap() {
				this.norPage.scMarkObj = {
					show: false,
					info: {}
				}
			},
			// 前往景区地图详情页
			goMapDetail() {
				uni.navigateTo({
					url: '../scMapDetail/scMapDetail?id=' + this.norPage.scMarkObj.info['id']
				})
			},
			getScDetail(item) {
				uni.navigateTo({
					url: '../scMapDetail/scMapDetail?id=' + item.id
				})
			},
			// 
			goToWhat() {
				uni.navigateTo({
					url: '../banner/banner'
				})
			},
			// 打开设置后的回调
			opensetting({detail}){
				if(detail.authSetting['scope.userLocation']){
					this.locationAuth = true
					this.getlocation()
				}else{
					this.locationAuth = false
				}
			}
		},
		computed: {
			...mapState(['MoneyHide'])  
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #ffffff;
	}

	.gujia {
		padding: 20upx;
		overflow: hidden;
	}

	.goToMe {
		position: fixed;
		width: 116upx;
		height: 116upx;
		right: 33upx;
		bottom: 66upx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.search {
		width: 688upx;
		height: 91upx;
		margin-left: 32upx;
		background-color: #fffffe;
		box-shadow: 3upx 5upx 20upx 2upx rgba(38, 38, 38, 0.19);
		border-radius: 24upx;
		display: flex;
		align-items: center;
		margin-top: 10upx;

		image {
			width: 33upx;
			height: 33upx;
			margin-left: 25upx;
			margin-right: 24upx;
		}

		text {
			font-size: 35upx;
			color: #c4c4c4;
		}
	}

	.banner {
		margin-top: 25upx;
		margin-left: 32upx;
		width: 686upx;
		height: 321upx;
		box-shadow: 3px 5px 20px 2px rgba(38, 38, 38, 0.19);
		border-radius: 24upx;
		overflow: hidden;

		swiper {
			border-radius: 24upx;
			width: 686upx;
			height: 321upx;
		}

		.swiper {
			border-radius: 24upx;
			overflow: hidden;
		}

		.swiper-item {
			border-radius: 24upx;
		}

		.bannerImg {
			border-radius: 24upx;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.line {
		width: 684upx;
		height: 1upx;
		margin-left: 33upx;
		margin-top: 33upx;
	}

	.gen-tab {
		padding-top: 104upx !important;

		.van-tabs__line {
			display: none;
		}

		.nav-tab {
			height: 104upx;
			display: flex;
			align-items: center;

			.van-tab__title {
				height: 100%;
				color: #ababab;
				font-size: 35upx;
			}
		}

		.van-tab--active {
			.van-tab__title {
				font-weight: bold;
				color: #333333;
				font-size: 45upx;
			}
		}

		.van-tabs__wrap {
			height: 104upx !important;
		}
	}

	.tbs {
		// margin: 0 32upx;
	}

	.tbs-box {
		.sc-list-item {
			margin-bottom: 36upx;
			margin-left: 35upx;
		}

		.sc-list-item2 {
			margin-left: 35upx;
			margin-bottom: 30upx;
		}
	}

	.scroll-tags-box {
		height: 64upx;
		overflow: hidden;
		background-color: #ffffff;
	}

	.scroll-tags {
		white-space: nowrap;
		overflow: hidden;
		height: 64upx;

		.scroll-tag {
			width: 117upx;
			height: 46upx;
			background-color: #f0f0f0;
			border-radius: 10upx;
			font-size: 24upx;
			color: #999999;
			margin-right: 20upx;
			display: inline-block;

			text {
				width: 100%;
				height: 100%;
				display: inline-block;
				text-align: center;
				line-height: 46upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		.scroll-tag:first-child {
			margin-left: 34upx;
		}

		.scroll-tag-active {
			background-image: linear-gradient(75deg,
				#017fe6 0%,
				#01e6de 100%),
				linear-gradient(#04bb82,
				#04bb82);
			background-blend-mode: normal,
				normal;
			color: #f0f0f0;
			font-weight: bold
		}
	}

	.locationAuth {
		width: 685upx;
		height: 507upx;
		background-color: #ffffff;
		box-shadow: 3upx 5upx 20upx 2upx rgba(38, 38, 38, 0.19);
		border-radius: 24upx;
		margin-left: 33upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 30upx;
		margin-top: 10upx;

		image {
			width: 125upx;
			height: 163upx;
			margin-bottom: 30upx;
		}

		text {
			font-size: 30upx;
			color: #999999;
		}

		.btn {
			width: 348upx;
			height: 90upx;
			background-image: linear-gradient(75deg,
				#017fe6 0%,
				#01e6de 100%),
				linear-gradient(#04bb82,
				#04bb82);
			background-blend-mode: normal,
				normal;
			box-shadow: 0px 0px 29upx 3upx rgba(3, 131, 232, 0.27);
			border-radius: 45upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #ffffff;
			margin-top: 36upx;
		}
	}

	.showMap {
		width: 750upx;
		height: 834upx;
		background-color: #ffffff;
		box-shadow: 3upx 5upx 20upx 2upx rgba(38, 38, 38, 0.19);
		margin-top: 10upx;
		position: relative;

		.map {
			width: 100%;
			height: 100%;
			position: relative;
		}
	}

	.siteInfo {
		min-height: 140upx;
		width: 100%;
		z-index: 99999;
		background-color: #ffffff;
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;

		.siteTextInfo {
			display: flex;
			flex-direction: column;
			padding-left: 10upx;

			.siteInfo-name {
				margin-bottom: 12upx;
				font-size: 30upx;
				color: #333333;
				font-weight: bold;
			}

			.siteInfo-site {
				font-size: 24upx;
				color: #999999;
				white-space: pre-wrap;
			}
		}

		cover-image {
			min-width: 141upx;
			min-height: 105upx;
			width: 141upx;
			height: 105upx;
			margin-left: 33upx;
			background-color: #ffffff;
			border-radius: 10upx;
		}

	}
</style>
