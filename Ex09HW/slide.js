var Kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyenslide")[0];

var chuyen =0;
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = Kichthuoc*Img.length;
Max -=Kichthuoc;
function Next(){
	if (chuyen<Max)
	chuyen+= Kichthuoc;
else chuyen=0;
	ChuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}
function Back(){
	if(chuyen==0)
		chuyen=Max;
	else
	chuyen-=Kichthuoc;
	ChuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}

setInterval(function(){
	Next();
},5000)