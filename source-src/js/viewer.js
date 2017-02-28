
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoSwipe/dist/photoswipe-ui-default'
import 'photoSwipe/dist/default-skin/default-skin.css'
import 'photoSwipe/dist/photoswipe.css'

import popAlert from "./pop"


window.PhotoSwipe = PhotoSwipe
window.PhotoSwipeUI_Default = PhotoSwipeUI_Default
window.popAlert = popAlert

function init() {
	let pswpElement = document.querySelectorAll('.pswp')[0];
	let $imgArr = document.querySelectorAll(('.article-entry img:not(.reward-img)'));

	//gototop button
	let $gototop = document.querySelectorAll('.gotop')[0];

	let $zhuabao = document.querySelectorAll('.special');

	$zhuabao.forEach(($em, i) => {
		$em.onclick = () => {
			var url = 'https://jasongan.cn/api/spurs';
			fetch(url).then(function(respose) {
				return respose.json();
			}).then(function(respose) {
				popAlert.popAlertFun(respose);
				/*respose.forEach((ele, i) => {
					debugger
				})*/
			})
			return false;
		}
	});

	$gototop.onclick = () => {
		goToTop(50,10);
	}


	function goToTop(step,stepTime){
		//var yoff =  window.pageYOffset;
		var yoff = document.body.scrollHeight;
		var cnt = Math.ceil(yoff/step);
		var timer1=setInterval(function(){
			if(yoff>0){
				window.scrollBy(0,-step);
			}
		}, stepTime);
		setTimeout(function(){clearInterval(timer1);}, (stepTime+1)*cnt);
	}

	$imgArr.forEach(($em, i) => {
		$em.onclick = () => {
			// slider展开状态
			// todo: 这样不好，后面改成状态
			if (document.querySelector('.left-col.show')) return
			let items = []
			$imgArr.forEach(($em2, i2) => {
				let img = $em2.getAttribute('data-idx', i2)
				let src = $em2.getAttribute('data-target') || $em2.getAttribute('src')
				let title = $em2.getAttribute('alt')
				items.push({
					src: src,
					w: $em2.width,
					h: $em2.height,
					title: title
				})
			})
			var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
				index: parseInt(i)
			});
			gallery.init()
		}
	})
}

module.exports = {
	init: init
}