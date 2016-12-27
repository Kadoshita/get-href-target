var a=document.getElementsByTagName('a');

for (var i = a.length - 1; i >= 0; i--) {
	a[i].onmouseover=function (e) {
		if(e.target.target==='_blank'){
			var beforetext=e.target.innerHTML;
			e.target.innerHTML+=' [別タブ!!] ';
			e.target.onmouseout=function () {
				e.target.innerHTML=beforetext;
			};
		}
	};
}