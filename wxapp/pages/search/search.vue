<template>
	<view class="content">
		<view class="search">
			<image src="../../static/image/search.png"></image>
			<input class="uni-input" v-model="searchVal" @confirm="handleSearch" confirm-type="search" placeholder="去你想去的地方" />
		</view>
		<template v-if="searching == 'search'">
			<view>
				<view class="no-find" v-show="searchResult.length === 0">
					<image src="../../static/image/nosc.png"></image>
					<text>抱歉，没有您想找的景区</text>
					<text>你可以看看其他景区</text>
				</view>
				<view class="tip search-result" v-show="searchResult.length != 0">
					<view class="sc-list-item" v-for="(item, index) in searchResult" :key="index" @click="getScDetail(item)">
						<view class="sc-list-img">
							<image :src="item.photo" mode="aspectFill" lazy-load></image>
					
							<view class="sc-list-name">
								<text>{{item.scenicName}}</text>
							</view>
							<view class="info">
								<text v-if="item.voiceTotal">讲解：{{item.voiceTotal}}个景点</text><text v-if="item.narratorPrice && MoneyHide"> {{item.narratorPrice}}元/份</text>
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
				</view>
				<view class="tip" v-show="popData.length != 0">
					<view class="tip-header">
						<image src="../../static/image/tj.png"></image>
						<text>为您推荐的景区</text>
					</view>
					<view class="sc-list-item" v-for="(item, index) in popData" :key="index" @click="getScDetail(item)">
						<view class="sc-list-img">
							<image :src="item.photo" mode="aspectFill" lazy-load></image>
					
							<view class="sc-list-name">
								<text>{{item.scenicName}}</text>
							</view>
							<view class="info">
								<text v-if="item.voiceTotal">讲解：{{item.voiceTotal}}个景点</text><text v-if="item.narratorPrice && MoneyHide"> {{item.narratorPrice}}元/份</text>
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
				</view>
			</view>
		</template>
		<template v-if="searching ==  'noSearch'">
			<view>
				<view class="card" v-show="hotTags.length != 0">
					<view class="card-header">
						<text>热门搜索</text>
					</view>
					<view class="sc-list-tag">
						<text v-for="(tag, index) in hotTags"  @click="clickTag(tag.keyWords)" :key="tag.id">{{tag.keyWords}}</text>
					</view>
				</view>
				<view class="card" v-show="historyTags.length != 0">
					<view class="card-header">
						<text>历史搜索</text>
						<image class="card-header-del" src="../../static/image/del.png" @click="clearHistory"></image>
					</view>
					<view class="sc-list-tag">
						<text v-for="(tag, index) in historyTags" @click="clickTag(tag)" :key="index">{{tag}}</text>
					</view>
				</view>
			</view>
		</template>
		
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
				searching: 'noSearch',  // 是否处于搜索,不处于则显示热门和历史记录
				searchVal: '',
				hotTags: [],
				historyTags: [],
				searchResult: [],
				popData: [
					
				],
				pageSize: 30,
				pageNumber: 1,
				rqStatus: '上拉加载更多'
			}
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
			
			this.getSeach()
			const searchList = uni.getStorageSync('search_list');
			if (searchList) {
				this.historyTags = searchList
			}
			
			// 获取 MoneyHide
			this.$store.commit('setMoneyHide', await tools.getMoneyHide())
		},
		async onShow() {
			
		},
		methods: {
			clickTag(val){
				this.searchVal = val;
				this.search()
			},
			search(){
				const searchList = uni.getStorageSync('search_list');
				if (searchList) {
					for (let i = 0; i < searchList.length; i++) {
						if(searchList[i] == this.searchVal){
							searchList.splice(i, 1)
							break
						}
					}
					searchList.push(this.searchVal)
					searchList.reverse()
					if(searchList.length > 10){
						searchList.length = 10;
					}
					searchList.reverse()
					uni.setStorageSync('search_list', searchList);
					this.historyTags = searchList
				}else{
					uni.setStorageSync('search_list', [this.searchVal]);
					this.historyTags = [this.searchVal]
				}
				
				this.searching = 'searching';
				let par = {
					pageSize: this.pageSize,
					pageNumber: this.pageNumber,
					scenicName: this.searchVal
				}
				
				http.rq({
					url: allApi.search,
					data: par
				}).then(res => {
					this.searching = 'search'
					if(res.code === 200){
						res.data.recommend.forEach(a => {
							a['scenicTags'] = a.tag ? a.tag.split(',') : [];
							a['popularityTotal'] = tools.handleNumber(a['popularityTotal']);
						})
						res.data.scenic.forEach(a => {
							a['scenicTags'] = a.tag ? a.tag.split(',') : [];
							a['popularityTotal'] = tools.handleNumber(a['popularityTotal']);
						})
						this.searchResult = res.data.scenic
						this.popData = res.data.recommend
					}
				})
				
				
			},
			getSeach(){
				
				http.rq({
					url: allApi.searchList
				}).then(res => {
					if(res.code === 200){
						this.hotTags = res.data
					}else{
						this.hotTags = []
					}
				})
			
			},
			clearHistory(){
				uni.removeStorageSync('search_list');
				this.historyTags = []
			},
			handleSearch(){
				if(this.searchVal === ''){
					return
				}
				this.search()
			},
			getScDetail(item){
				uni.navigateTo({
					url:'../scMapDetail/scMapDetail?id=' + item.id
				})
			}
		},
		watch: {
			searchVal(v){
				if(v === ''){
					this.searching = 'noSearch'
					this.popData = []
					this.searchResult = []
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

	.search {
		width: 688upx;
		height: 91upx;
		margin-left: 32upx;
		background-color: #fffffe;
		box-shadow: 3upx 5upx 20upx 2upx 
			rgba(38, 38, 38, 0.19);
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
		input{
			width: 580upx;
			color: #c4c4c4;
		}
	}
	.search-result{
		padding-top: 24upx;
	}
	
	.img {
		width: 100%;
		height: 100%;
	}
	
	.card{
		width: 687upx;
		background-color: #fffffe;
		box-shadow: 3upx 5upx 20upx 2upx 
			rgba(38, 38, 38, 0.19);
		border-radius: 24upx;
		margin-left: 33upx;
		overflow: hidden;
		min-height: 224upx;
		margin-top: 24upx;
		.card-header{
			display: flex;
			justify-content: space-between;
			margin: 28upx 21upx 10upx 19upx;
			align-items: center;
			text{
				color: #333333;
				font-size: 30upx;
			}
			.card-header-del{
				width: 32upx;
				height: 31upx;
				
			}
		}
	}
	
	.no-find{
		width: 685upx;
		height: 369upx;
		background-color: #ffffff;
		box-shadow: 3upx 5upx 20upx 2upx 
			rgba(38, 38, 38, 0.19);
		border-radius: 24upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-left: 33upx;
		margin-top: 24upx;
		margin-bottom: 36upx;
		image{
			width: 133upx;
			height: 111upx;
		}
		text{
			font-size: 30upx;
			color: #999999;
			
		}
		text:nth-child(2){
			margin-top: 20upx;
			margin-bottom: 10upx;
		}
	}
	
	.tip{
		margin-left: 8upx;
		.sc-list-item{
			margin-bottom: 38upx;
		}
		.tip-header{
			margin-left: 24upx;
			display: flex;
			align-items: center;
			margin-bottom: 21upx;
			image{
				margin-right: 7upx;
				width: 34upx;
				height: 32upx;
			}
			text{
				font-size: 36upx;
				color: #333333;
				font-weight: 500;
			}
		}
	}
	
	.sc-list-tag{
		text{
			margin-bottom: 24upx;
		}
	}
	

</style>
