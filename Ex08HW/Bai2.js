var dem=0;
function bigfont(){
	for (var i=0; i<document.getElementsByClassName('text').length; i++){
		dem+=50;
		document.getElementsByClassName('text')[i].style.fontSize=(dem+50)+"%";
	}
}
function deffont(){
	for(var i=0; i<document.getElementsByClassName('text').length;i++){
		document.getElementsByClassName('text')[i].style.fontSize="100%";
	}
}
function smallfont(){
		for (var i=0; i<document.getElementsByClassName('text').length; i++){
		dem-=50;
		document.getElementsByClassName('text')[i].style.fontSize=(dem+50)+"%";
	}
}