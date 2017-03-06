var popAlert = {
	popAlertFun: function(content) {



		var popDom = document.createElement('div');
		popDom.classList.add('popbg');
		popDom.innerHTML = content;




		if(Array.isArray(content)) {
			content.forEach((ele, i) => {
				var dom = document.createElement('div');
				dom.innerHTML = ele.href
				popDom.appendChild(dom);
			})
		}


		//输出到页面
		document.querySelector('.loadingMask').appendChild(popDom);
		document.querySelector('.loadingMask').classList.remove("hide_it");
	}
}

module.exports = popAlert;