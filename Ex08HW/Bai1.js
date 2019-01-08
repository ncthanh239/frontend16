function mouseOver(a){
	a.style.backgroundColor="#4BDC67";
}
function mouseOut(a){
	a.style.backgroundColor="";
}
function checkall(){
	for(var i=0; i<document.getElementsByName('check').length;i++){
		document.getElementsByName('check')[i].checked=true;
	}
}
function uncheckall(){
	for(var i=0; i<document.getElementsByName('check').length;i++){
		document.getElementsByName('check')[i].checked=false;
	}
}