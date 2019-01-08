var box = document.getElementById('lightbox');
var img = document.getElementById('anh');
var img1= document.getElementById('anhbig');
var but=document.getElementById('button');
var clo=document.getElementById('close');
$(function(){
	$(but).click(function(){
		$(img1).show(500,function(){
			$('#lightbox').slideToggle();
		})
	})
	$(clo).click(function(){
		$(img1).hide(10,function(){
			$('#lightbox').hide();
		})
	})
});