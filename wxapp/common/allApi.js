// 接口
// let url = 'https://zsf.gzeducard.net',
// let url = 'https://bag.bftudou.com',
let url = 'https://inside.zhisifang.cn',
	proxy = '/wxapi';

export default {
	checkToken: url + proxy + '/validateToken', // 
	login: url + proxy + '/login',
	register: url + proxy + '/register',
	banner:  url + proxy + '/banner', // 
	scHotList:  url + proxy + '/hotScenic', // 人气景区
	moreSpotList: url + proxy + '/scenic', // 更多景区
	getScType: url + proxy + '/scenicType', // 景区类型
	getNearbySc: url + proxy + '/nearbyScenic', // 附近景区
	getNearbySc: url + proxy + '/nearbyScenic', // 附近景区
	searchList: url + proxy + '/searchList', // 搜索关键词
	search: url + proxy + '/search', // 搜索
	voice: url + proxy + '/voice', // 语音
	unlockScenic: url + proxy + '/unlockScenic', // 已解锁
	
	// 支付
	createOrder: url + proxy + '/createOrder', // 本地创建订单
	payOrder: url + proxy + '/local/orderPay',
	
	// 获取开关
	getMoneyHide: url + proxy + '/switch'
	
}