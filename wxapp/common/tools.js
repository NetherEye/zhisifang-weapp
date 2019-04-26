import allApi from './allApi.js'

// 校验是否存在 登录态及是否过期
let isLogin = async () => {
	let key = uni.getStorageSync('login-token');
	return new Promise(reslove => {
		if (key) {
			// 存在key，则校验是否过期
			uni.request({
				url: allApi.checkToken,
				header: {
					'content-type': 'application/x-www-form-urlencoded', // 默认值
					'token': key
				},
				success(res) {
					if (res.data.code === 200) {
						reslove(true)
					} else if (res.data.code === 214) {
						reslove(false) // 过期
					}
				},
				fail(err) {
					reslove(false) // 过期
				}
			})


		} else {
			reslove(false)
		}
	})
}


// 登录 ？ 登录最好实在 登录态失效或者没有时发起 并保证失效静默登录
let logining = async () => {
	return new Promise(reslove => {
		uni.login({
			success(res) {
				// 开始后台登录
				uni.request({
					url: allApi.login,
					data: {
						code: res.code
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' // 默认值
					},
					success(res) {
						if (res.data.code === 200) {
							uni.setStorageSync('login-token', res.data.data.token)
							reslove(true)
						} else if (res.data.code === 1000) {
							reslove(false) // 需要注册
						}
					},
					fail(err) {
						// 登录失败直接跳转
						uni.reLaunch({
							url: '/pages/userInfoAuth/userInfoAuth'
						})
					}
				})

			},
			fail() {
				// 登录失败直接跳转
				uni.reLaunch({
					url: '/pages/userInfoAuth/userInfoAuth'
				})
			}
		})
	})
}

// 注册 : 注册行为只会在授权页面进行 
let registering = async () => {
	return new Promise(reslove => {
		uni.getUserInfo({
			success(res) {
				let userInfo = res
				uni.login({
					success(res) {
						let loginCode = res.code
						uni.request({
							url: allApi.register,
							method: 'POST',
							data: {
								code: loginCode,
								...userInfo
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded' // 默认值
							},
							success(res) {
								if (res.data.code === 200) {
									uni.setStorageSync('login-token', res.data.data.token)
								}
								reslove(true)
							},
							fail() {
								reslove(false)
							}
						})
					},
					fail() {
						reslove(false)
					}
				})
			},
			fail() {
				reslove(false)
			}
		})
	})
}

let handleNumber = function(val) {
	if(val >= 10000){
		let cVal = String((val / 10000).toFixed(1));
		if(cVal.slice(cVal.indexOf('.') + 1)[0] == '0'){
			cVal = cVal.slice(0, cVal.indexOf('.'))
		}
		return cVal + '万'
	}else{
		return val
	}
}

// 获取 MoneyHide
let getMoneyHide = function(){
	return new Promise(reslove => {
		uni.request({
			url: allApi.getMoneyHide,
			method: 'GET',
			header: {
				'content-type': 'application/x-www-form-urlencoded' // 默认值
			},
			success(res) {
				
				if (res.data.code === 200) {
					res.data.data.appSwitch == 'OFF' ? reslove(false) : reslove(true)
				}else{
					reslove(false)
				}
			},
			fail() {
				reslove(false)
			}
		})
	})
}

module.exports = {
	isLogin: isLogin,
	registering: registering,
	logining: logining,
	handleNumber: handleNumber,
	getMoneyHide: getMoneyHide
}
