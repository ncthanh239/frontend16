function tab1(){
	document.getElementById('content1').style.display='block';
	document.getElementById('content2').style.display='none';
	document.getElementById('content3').style.display='none';
	document.getElementById('but1').style.backgroundColor='white';
	document.getElementById('but2').style.backgroundColor='#666666';
	document.getElementById('but3').style.backgroundColor='#666666';

	
}
function tab2(){
	document.getElementById('content1').style.display='none';
	document.getElementById('content2').style.display='block';
	document.getElementById('content3').style.display='none';
	document.getElementById('but1').style.backgroundColor='#666666';
	document.getElementById('but2').style.backgroundColor='white';
	document.getElementById('but3').style.backgroundColor='#666666';
	
	
}
function tab3(){
	document.getElementById('content1').style.display='none';
	document.getElementById('content2').style.display='none';
	document.getElementById('content3').style.display='block';
	document.getElementById('but1').style.backgroundColor='#666666';
	document.getElementById('but2').style.backgroundColor='#666666';
	document.getElementById('but3').style.backgroundColor='white';

}
