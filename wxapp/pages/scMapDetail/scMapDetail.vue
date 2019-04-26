<template>
	<view class="content">
		<view class="map" v-show="!showRead && !drawerShow">
			<map id="map" style="width: 100%;height: 100%;" @updated="mapUpdate" @markertap="handleScMark" :markers="what.markers"
			>
				<!-- 页面栈只存在当前页时显示前往首页 -->
				<cover-view class="goIndex" v-if="goIndex" @click="goToIndex">
					前往首页
				</cover-view>

				<cover-view class="player-lock" v-if="player.playerShow" @click="closePlayer">
				</cover-view>

				<!-- 未解锁禁止操作层 -->
				<cover-view class="lock" v-if="isUnloack !== 2 && MoneyHide">
				</cover-view>

				<!-- 价格 -->
				<cover-view class="scInfo" v-if="isUnloack === 1 && detail.voiceTotal && detail.narratorPrice && MoneyHide">
					共{{detail.voiceTotal}}个景点讲解 {{detail.narratorPrice}}元/份
				</cover-view>

				<!-- 详情 -->
				<cover-view src="../../static/image/xz.png" class="drawerBtn" @click="showDrawer">
					景区详情
				</cover-view>

				<!-- 解锁 -->
				<cover-view class="unlock" v-if="isUnloack === 1 && MoneyHide" @click="showPay">
					尚未解锁该景区，去解锁
				</cover-view>

				<cover-view class="cust-drawer-zz" @click.stop="closeDrawer" v-show="payDialogShow">
				</cover-view>

				<cover-view class="cust-pay" v-if="payDialogShow && MoneyHide">
					<cover-view class="cust-pay-title">解锁提示</cover-view>
					<cover-view class="cust-pay-p">你尚未解锁该景区语音讲解</cover-view>
					<cover-view class="cust-pay-p">支付{{detail.narratorPrice}}元后可解锁该景区</cover-view>
					<cover-view class="cust-pay-btn" @click="mackPay">去支付</cover-view>
					<cover-view class="cust-pay-xy" @click="read">
						<cover-image :src="isXy ? '../../static/image/sleing.png' : '../../static/image/noslecing.png'"></cover-image>
						<cover-view>《用户购买协议》</cover-view>
					</cover-view>
				</cover-view>

				<!-- 播放 -->
				<cover-view class="player" v-if="player.playerShow">
					<cover-view class="player-top">
						<cover-image class="player-bg" :src="player.img"></cover-image>
						<cover-image class="player-btn" @click="audioPlay" :src="player['play'] === 1 ? '../../static/image/play.png' : '../../static/image/stop.png'"></cover-image>

					</cover-view>
					<cover-view class="player-bottom els">
						{{player.spotName}}
					</cover-view>
				</cover-view>
			</map>
		</view>


		<!-- 侧拉pop -->
		<van-popup :show="drawerShow" :z-index="2000" @close="closeDrawerShow" position="right">
			<view class="cust-drawer">
				<view class="introduce">
					<view class="introduce-cap">
						<view class="introduce-cap-icon">

						</view>
						<view class="introduce-cap-txt">
							景区介绍
						</view>
					</view>
					<view class="introduce-txt">
						<text class="introduce-txt-p">
							{{detail.introduction}}
						</text>
					</view>
					<view class="introduce-cap">
						<view class="introduce-cap-icon">

						</view>
						<view class="introduce-cap-txt">
							开放时间
						</view>
					</view>
					<view class="introduce-txt">
						<text class="introduce-txt-p">
							{{detail.openTime}}
						</text>
					</view>
					<view class="introduce-cap">
						<view class="introduce-cap-icon">

						</view>
						<view class="introduce-cap-txt">
							门票售价
						</view>
					</view>
					<view class="introduce-txt">
						<text class="introduce-txt-p">
							{{detail.ticketPrice}}元/人
						</text>
					</view>
					<view class="introduce-cap" v-if="detail.busRoutes">
						<view class="introduce-cap-icon">

						</view>
						<view class="introduce-cap-txt">
							公交路线
						</view>
					</view>
					<view class="introduce-txt" v-if="detail.busRoutes">
						<text class="introduce-txt-p">
							{{detail.busRoutes}}
						</text>
					</view>
				</view>
			</view>
		</van-popup>

		<van-popup :show="showRead" position="right">
			<view class="xy-container">
				<view class="article">
					<view class="bigCap">
						知四方用户服务协议
					</view>
					<view>
						<view class="txt suojin">
							欢迎您注册并使用贵州紫光科技有限公司提供的服务，本协议由贵州紫光科技有限公司（以下简称我公司）与用户（指注册、登录、使用本服务的个人，以下简称为“您”）就知四方平台（以下简称“本产品”）提供的服务所订立的相关权利义务规范。请您认真阅读此服务协议的内容（特别是粗体、下划线标注内容）。如不同意此服务协议，请勿使用或注册该服务。用户在注册过程中勾选“我已认真阅读并接受用户服务协议”，并填写用户信息完成注册。即表示用户完全接受本协议中的全部内容，此后，用户不得以未阅读本服务条款内容作任何形式的抗辩。除非另有明确规定，本产品所推出的新功能、新服务，均无条件的使用本协议。
						</view>
					</view>
					<view class="cap">
						一、用户注册
					</view>
					<view>
						<text class="txt">
							1、用户使用本产品的前提是认真阅读本协议并通过注册。用户注册是指用户登录本平台，按用户注册流程要求填写相关信息并同意接受本服务协议的过程。
						</text>
					</view>
					<view>
						<text class="txt">
							2、使用该服务的用户必须是完全民事行为能力人，具备相应的权利能力和行为能力，能够独立承担法律责任。限制民事行为能力人和无民事行为能力人不能注册或使用该服务。如经发现，本产品有权立即停止与该用户的交易、注销该用户账户。
						</text>
					</view>
					<view>
						<text class="txt">
							3、用户在注册时需要完善个人资料，保证遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实，不得在资料中出现违法和不良信息。若用户注册资料存在违法和不良信息的，本平台有权采取通知限期改正、暂停使用、注销用户、向政府主管部门报告等措施。
						</text>
					</view>
					<view>
						<text class="txt">
							4、用户应提供真实有效的个人信息并进行实名认证，未经实名认证，不能使用本产品服务。
						</text>
					</view>
					<view class="cap">
						二、账号和密码安全
					</view>

					<view>
						<text class="txt">
							1、用户应负责保管其账号和密码，对该账户下的所有活动和时间负全部责任。如果用户未保管好自己的账号和密码而对用户本人、本产品或第三方造成损害，用户承担全部责任。
						</text>
					</view>
					<view>
						<text class="txt">
							2、用户同意若发现任何非法使用用户账号或安全漏洞的情况，应立即通知我们。
						</text>
					</view>

					<view class="cap">
						三、账号和密码安全
					</view>
					<view>
						<text class="txt">
							1、本服务的具体内容由本产品根据实际情况提供，包括但不限于用户使用本产品的景点介绍、语音讲解等。本产品可以对提供的服务予以变更，且本产品提供的服务内容可随时变更，用户将会受到关于服务变更的通知。
						</text>
					</view>
					<view>
						<text class="txt">
							2、除非本协议另有其他明示规定，本公司推出的新产品、新功能、新服务，均受到本协议条款之规范。
						</text>
					</view>
					<view class="cap">
						四、账号和密码安全
					</view>
					<view>
						<text class="txt">
							1、如系统发生故障影响到用户服务的正常运行，我公司承诺及时处理进行修复。但用户因此而产生的损失，本公司不承担责任。
						</text>
					</view>
					<view>
						<text class="txt">
							2、涉及到互联网服务，可能会受到各个环节不稳定因素的影响，存在因不可抗力、计算机病毒、黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何网络、技术、通信线路等原因造成的服务中断或不能满足用户要求的风险，用户须自行承担以上风险，本公司不承担任何责任。
						</text>
					</view>
					<view>
						<text class="txt">
							3、用户明确同意使用本产品服务的风险由用户个人承担。本公司明确表示不提供任何类型的担保，不论是明确的或隐含的。用户理解并接受由其承担系统受损、资料丢失以及其它任何风险。
						</text>
					</view>

					<view>
						<view class="txt">
							4、用户享有言论自由权利，但用户在本产品中不得发表含有如下内容的言论，否则本产品有权删除用户所发言论，并有权采取停止用户服务、拒绝用户参加所有抢宝商品项目等措施：
							<view>
								<text class="txt">
									（1）反对宪法所确定的基本原则，煽动、抗拒、破坏宪法和法律、行政法规的；
								</text>
							</view>
							<view>
								<text class="txt">
									（2）煽动颠覆国家政权，推翻社会主义制度，煽动、分裂国家，破坏国家统一的；
								</text>
							</view>
							<view>
								<text class="txt">
									（3）损害国家荣誉和利益的；
								</text>
							</view>
							<view>
								<text class="txt">
									（4）煽动民族仇恨、民族歧视，破坏民族团结的；
								</text>
							</view>
							<view>
								<text class="txt">
									（5）任何包含对种族、性别、宗教、地域内容等歧视的；
								</text>
							</view>
							<view>
								<text class="txt">
									（6）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；
								</text>
							</view>

							<view>
								<text class="txt">
									（7）宣扬封建迷信、邪教、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；
								</text>
							</view>
							<view>
								<text class="txt">
									（8）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；
								</text>
							</view>
							<view>
								<text class="txt">
									（9）损害国家机关信誉的；
								</text>
							</view>
							<view>
								<text class="txt">
									（10）其他违反宪法和法律行政法规的。
								</text>
							</view>
						</view>
					</view>
					<view class="cap">
						五、服务条款的变更与修订
					</view>
					<view>
						<text class="txt">
							我公司保留在任何时候修改本协议条款的权利，且无需另行通知。我公司修改协议条款后，如果您不接受修改后的条款，请立即停止使用本产品提供的服务，继续使用本产品提供的服务将被视为接受修改后的协议。用户在享受该服务时，应当及时查阅了解修改的内容，并自觉遵守本服务协议。
						</text>
					</view>
					<view class="btns">
						<button @click="agree('no')" size="mini" plain type="primary">拒绝</button>
						<button @click="agree('yes')" size="mini" type="primary">同意</button>
					</view>
				</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
	import allApi from '../../common/allApi.js';
	import http from '../../common/http.js';
	let tools = require('../../common/tools.js');

	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				isUnloack: 0, // 是否解锁 0 默认不予显示 优化解锁or未解锁体验 1 确定未解锁 2 确定已解锁 
				mapId: '',
				payDialogShow: false,
				drawerShow: false,
				isXy: true, // 协议
				markers: [],
				what: {
					markers: []
				},
				showRead: false,
				detail: {}, // 景区详情数据
				player: {
					id: '', // 播放的音频#
					playerShow: false,
					play: 1, // 1 暂停 2 播放
					img: '',
					spotName: '',
					voiceUrl: '',
					voiceName: ''
				},
				audio: uni.getBackgroundAudioManager(),
				goIndex: false

			}
		},
		async onLoad(option) {

			let yes = await tools.isLogin()
			if (!yes) { // 验证失败
				let register = await tools.logining()
				if (!register) { // 需要注册
					// 设置登录or注册完成后的返回地址
					let pages = getCurrentPages();
					let path = (pages[pages.length - 1].route).slice((pages[pages.length - 1].route).lastIndexOf('/') + 1)
					uni.redirectTo({
						url: '../userInfoAuth/userInfoAuth?goBack=' + path + '&goBackWithParmas=' + JSON.stringify({
							id: this.mapId
						})
					})
				}
			}

			this.mapId = option.id
			if (this.mapId) {
				this.getDetail()
			}


			// 获取 MoneyHide
			this.$store.commit('setMoneyHide', await tools.getMoneyHide())
		},
		onShow() {
			this.what = {
				markers: []
			}
			// 暂时解决锁屏后无法点击mark的问题，但marker无法动态更新（微信问题）会导致叠加，后续版本讲跳转二级页面所有版本迭代可解决
			if (this.mapId) {
				this.getDetail()
			}
			
			let pages = getCurrentPages();
			// 说明只存在
			if (pages.length === 1) {
				this.goIndex = true
			} else {
				this.goIndex = false
			}
		},
		onUnload() {
			this.audio.stop()
			this.player = {
				id: '', // 播放的音频#
				playerShow: false,
				play: 1, // 1 暂停 2 播放
				img: '',
				spotName: '',
				voiceUrl: '',
				voiceName: ''
			}

		},
		onHide() {
			
		},
		methods: {
			mapUpdate(e){
// 				console.log(e)
// 				if (this.mapId) {
// 					this.getDetail()
// 				}
			},
			goToIndex() {
				uni.redirectTo({
					url: '../index/index'
				})
			},
			closeDrawerShow() {
				this.drawerShow = false
			},
			audioPlay() {
				// 暂停操作
				if (this.audio.paused === false) {
					this.audio.stop()
					this.player['play'] = 1
					return
				}

				if (this.audio.paused === undefined || this.audio.paused === true) {
					// 开始播放
					this.audio.src = this.player.voiceUrl;
					this.audio.title = this.player.voiceName;
					this.audio.play()

					this.audio.onPlay(() => {
						this.player['play'] = 2
					});

					this.audio.onError((res) => {
						uni.showToast({
							title: '播放错误',
							icon: 'none'
						});
						this.player['play'] = 1
					});
					this.audio.onEnded((res) => {
						this.player['play'] = 1
					});
				}


			},
			// 关闭播放器
			closePlayer() {
				// 关闭播放器初始化数据及销毁实例
				this.player['playerShow'] = false
				this.audio.stop()
				this.player = {
					id: '', // 播放的音频#
					playerShow: false,
					play: 1,
					img: '',
					spotName: '',
					voiceUrl: '',
					voiceName: ''
				}

			},
			// 阅读协议
			read() {
				this.isXy = true;
				this.showRead = true
			},
			getDetail() {
				let mapContext = uni.createMapContext('map', this);
				http.rq({
					url: allApi.moreSpotList + '/' + this.mapId,
					goBackWithParmas: {
						id: this.mapId
					}
				}).then(res => {
					if (res.code === 200) {
						this.detail = res.data
						this.isUnloack = this.detail.orderId ? 2 : 1;
						let viewArray = []

						res.data.scenicSpotList.forEach(p => {
							this.what.markers.push({
								id: p.id,
								latitude: p.lat,
								longitude: p.lon,
								iconPath: '../../static/image/spot.png',
								width: 40,
								height: 48,
								photo: p.photo,
								spotName: p.spotName,
								label: {
									content: p.spotName,
									anchorX: -((p.spotName.length / 2).toFixed(2) * 16),
									fontSize: 12,
									borderWidth: 1,
									borderColor: '#019ce4',
									padding: 4,
									bgColor: '#fff',
									color: '#019ce4',
									borderRadius: 10,
									textAlign: 'center'
								}
							});
							viewArray.push({
								latitude: p.lat,
								longitude: p.lon
							})
						})
						mapContext.includePoints({
							points: viewArray,
							padding: [40, 40, 40, 40]
						})
					} else {
						this.what.markers = []
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
						this.isUnloack = 1
						this.detail = {}
					}

				})
			},

			showDrawer() {
				this.drawerShow = true
			},

			showPay() {
				this.payDialogShow = true
			},
			closeDrawer() {
				this.payDialogShow = false
			},
			handleScMark({
				mp
			}) {
				// 根据 mp.markerId 获取数据 
				// this.showAudioPop = true
				http.rq({
					url: allApi.voice,
					data: {
						scenicId: this.detail.id,
						spotId: mp.markerId,
						narratorId: this.detail.narratorId
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded', // 默认值
						'token': uni.getStorageSync('login-token')
					},
					goBackWithParmas: {
						id: this.mapId
					},
					loading: true
				}).then(res => {
					if (res.code === 200) {
						if (!res.data) {
							uni.showToast({
								title: '没有语音',
								icon: 'none'
							});
							return
						}

						this.player['id'] = res.data.id;
						this.player['voiceUrl'] = res.data.voiceUrl;
						this.player['voiceName'] = res.data.voiceName;

						this.what.markers.forEach(a => {
							if (a.id === mp.markerId) {
								this.player['img'] = a.photo;
								this.player['spotName'] = a.spotName;
							}
						})

						this.player['playerShow'] = true

					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
					}
				})
			},
			agree(type) {
				if (type == 'yes') {
					this.isXy = true
				} else {
					this.isXy = false
				}
				this.showRead = false
			},
			mackPay() {
				if (!this.$store.state.MoneyHide) {
					return
				}

				if (!this.isXy) {
					uni.showToast({
						title: '请阅读协议并同意',
						icon: 'none'
					})
					return
				}

				// 獲取後台訂單數據
				this.formSubmit()

			},
			formSubmit(e) {
				let _this = this
				let par = {
					narratorId: this.detail.narratorId,
					scenicId: this.detail.id,
				}
				uni.showLoading({
					title: '生成订单中'
				});

				http.rq({
					url: allApi.createOrder,
					method: 'POST',
					data: par,
					goBackWithParmas: {
						id: this.mapId
					}
				}).then(res => {
					uni.hideLoading();
					if (res.code === 200) {
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.timeStamp,
							nonceStr: res.data.nonceStr,
							package: res.data.packageValue,
							signType: res.data.signType,
							paySign: res.data.paySign,
							success: function(res) {
								uni.showToast({
									title: '支付成功',
									icon: 'none'
								})
								_this.payDialogShow = false
								_this.getDetail()
							},
							fail: function(err) {}
						});

					} else {
						uni.showToast({
							title: '生成订单失败',
							icon: 'none'
						})
					}

				})


			},

		},
		watch: {
			payDialogShow(v) {
				if (v === true) {
					this.isXy = true
				}
			},

		},
		computed: {
			...mapState(['MoneyHide'])
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #ffffff;
		width: 100vw;
		height: 100vh;

		.map {
			width: 100%;
			height: 100%;
			position: relative;
		}

		.lock {
			width: 100vw;
			height: 100vh;
			position: absolute;
			opacity: 0;
			z-index: 999;
		}

		.scInfo {
			width: 702upx;
			height: 90upx;
			border-radius: 24upx;
			font-size: 30upx;
			color: #1d92dd;
			text-align: center;
			line-height: 90upx;
			position: absolute;
			top: 20upx;
			left: 25upx;
			z-index: 100;
			background-color: #ffffff;

		}

		.drawerBtn {
			width: 196upx;
			height: 66upx;
			border-top-left-radius: 33upx;
			border-bottom-left-radius: 33upx;
			position: absolute;
			top: 470upx;
			right: -40upx;
			z-index: 1001;
			text-align: center;
			line-height: 66upx;
			font-size: 24upx;
			color: #ffffff;
			background-color: #ff9168;
		}

		.unlock {
			width: 685upx;
			height: 90upx;
			border-radius: 24upx;
			font-size: 30upx;
			color: #ffffff;
			text-align: center;
			line-height: 90upx;
			position: absolute;
			bottom: 20upx;
			left: 33upx;
			z-index: 1001;
			background-color: #017fe6;
		}

		.cust-drawer {
			height: 100vh;
			width: 80vw;
			background-color: #ffffff;
			z-index: 1010;
			position: relative;

			.introduce {
				width: 100%;
				height: 100%;
				overflow: auto;
				position: relative;

				.introduce-close {
					width: 55upx;
					height: 55upx;
					position: absolute;
					right: 30upx;
					top: 10upx;
					z-index: 99;
				}

				.introduce-cap {
					display: flex;
					align-items: center;
					margin-bottom: 22upx;
					flex-wrap: wrap;
					margin-left: 26upx;

					.introduce-cap-icon {
						width: 10upx;
						height: 30upx;
						background-color: #fe6c62;
						margin-right: 10upx;
					}

					.introduce-cap-txt {
						font-size: 30upx;
						color: #333333;
						font-weight: 500;

					}
				}

				.introduce-txt {
					margin-bottom: 40upx;
					margin-left: 40upx;
					position: relative;
					margin-right: 40upx;

					.introduce-txt-p {
						font-size: 24upx;
						color: #666666;
						line-height: 48upx;
					}
				}
			}
		}


		.cust-drawer-zz {
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.7);
			position: absolute;
			z-index: 1002;
		}

		.cust-pay {
			width: 500upx;
			height: 407upx;
			background-color: #ffffff;
			border-radius: 10px;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			z-index: 1003;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.cust-pay-title {
				font-size: 32upx;
				color: #1d92dd;
				margin: 40upx 0 30upx 0;

			}

			.cust-pay-p {
				font-size: 24upx;
				color: #666666;
				margin-bottom: 10upx;

			}

			.cust-pay-btn {
				width: 348upx;
				height: 90upx;
				background-color: #1d92dd;
				box-shadow: 0px 0px 29upx 3upx rgba(3, 131, 232, 0.27);
				border-radius: 45upx;
				text-align: center;
				line-height: 90upx;
				font-size: 30upx;
				color: #ffffff;
				margin: 20upx 0;
			}

			.cust-pay-xy {
				display: flex;
				align-items: center;

				cover-image {
					width: 22upx;
					height: 22upx;
					margin-right: 4upx;
				}

				cover-view {
					font-size: 24upx;
					color: #1d92dd;
					margin-right: 80upx;
				}
			}

		}

		.xy-container {
			width: 100vw;
			height: 100vh;
			overflow: auto;

			.article {
				padding: 20upx;
				overflow: hidden;

				.suojin {
					text-indent: 2em;
					line-height: 48upx;
				}

				.bigCap {
					font-size: 36upx;
					text-align: center;
					font-weight: bolder;
				}

				.cap {
					font-weight: bold;
				}

				.txt {
					font-size: 24upx;
					line-height: 48upx;
				}
			}


		}
	}

	.btns {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 140upx;
	}

	// 播放
	.player {
		width: 516upx;
		height: 418upx;
		background-color: #ffffff;
		border-radius: 10upx;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 1003;

		.player-top {
			position: relative;
			overflow: hidden;

			.player-bg {
				width: 479upx;
				height: 331upx;
				background-color: #ffffff;
				border-radius: 10upx;
				margin: 0 auto;
				margin-top: 20upx;
			}

			.player-btn {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				margin: auto;
				width: 100upx;
				height: 100upx;
			}
		}

		.player-bottom {
			font-size: 24upx;
			color: #333333;
			text-align: center;
			margin-top: 20upx;
			font-weight: 550;
		}
	}

	.player-lock {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		position: absolute;
		z-index: 1002;
	}

	.goIndex {
		position: fixed;
		top: 140upx;
		left: 20upx;
		width: 100upx;
		height: 50upx;
		text-align: center;
		line-height: 50upx;
		font-size: 20upx;
		color: #1d92dd;
		background: #ffffff;
		border-radius: 20upx;
	}
</style>
