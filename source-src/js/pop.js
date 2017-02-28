var popAlert = {
	popAlertFun: function(content) {

		//
		var popDom = document.createElement('div');
		popDom.classList.add('popbg');

		if(Array.isArray(content)) {
			content.forEach((ele, i) => {
				var dom = document.createElement('div');
				dom.innerHTML = ele.href
				popDom.appendChild(dom);
			})
		}

		



		//输出到页面
		document.body.appendChild(popDom);
	}
}

module.exports = popAlert;