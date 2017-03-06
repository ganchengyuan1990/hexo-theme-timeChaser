// 样式
import '../css/main.scss'
// 上报
//import './report'
// 图片查看器
import Viewer from './viewer'
// 分享
import Share from './share'

import {addLoadEvent} from './util'

debugger
import oClockAnalog from './clock'

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" }) //setting scope of sw
	.then(function(registration) {
	  console.info('Service worker is registered!');
	})
	.catch(function(error) {
	  console.error('Service worker failed ', error);
	});
}


addLoadEvent(function() {
	Share.init()
	Viewer.init()
})
