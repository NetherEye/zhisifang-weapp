let httpCount = 0;

class http {
	rq(obj = {}){
		if(httpCount < 0){
			httpCount = 0;
		}
		
		if(obj.loading){
			if(httpCount === 0){
				uni.showLoading({
					title: '加载中'
				});
			}
			httpCount++;
		}
		
		if(!obj['header']){
			obj['header'] = {
				'content-type': 'application/x-www-form-urlencoded', // 默认值
				'token': uni.getStorageSync('login-token')
			}
		}
		
		return new Promise(reslove => {
			uni.request({
				url: obj['url'],
				data: obj['data'],
				header: obj['header'],
				method: obj['method'],
				dataType: obj['dataType'],
				responseType: obj['responseType'],
				success: res => {
					
					// token 过期
					if (res.data.code === 214) {
						uni.showToast({
							title: '登录过期，请重新登录',
							icon: 'none'
						})
						let pages = getCurrentPages();
						let path = (pages[pages.length - 1].route).slice((pages[pages.length - 1].route).lastIndexOf('/') + 1)
						uni.redirectTo({
							url: '/pages/userInfoAuth/userInfoAuth?goBack=' + path + (obj['goBackWithParmas'] ? ('&goBackWithParmas=' + JSON.stringify(obj['goBackWithParmas'])) : '')
						})
						return
					}
					
					reslove(res.data)
				},
				fail: err => {
					reslove({
						code: 666,
						message: 'fail级别错误'
					})
				},
				complete: () => {
					if(obj.loading){
						httpCount--;
						if(httpCount === 0){
							uni.hideLoading()
						}
					}
				}
			})
		})
	}
}

export default new http()