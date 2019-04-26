<script>
	import allApi from './common/allApi.js';
	let tools = require('./common/tools.js');
	export default {
		
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onAudioInterruptionBegin(){
			console.log('audio全局被中断')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./common/public.scss";
</style>
