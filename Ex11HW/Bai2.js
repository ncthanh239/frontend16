var allp = $('#divone p');
allp.hide();
var allmin=$('#divone div .fa-minus');
allmin.hide();

$('#divone div>.fa-plus').click(function(){
	$(this).parent().next().slideDown();
	$(this).val('.fa-plus').hide();
	$(this).next().show();

	$(this).parent().children('#text').css('color','#AECA61');
});

$('#divone div>.fa-minus').click(function(){
	$(this).parent().next().slideUp();
	$(this).val('.fa-minus').hide();
	$(this).prev().show();
	$(this).parent().children('#text').css('color','white');
});