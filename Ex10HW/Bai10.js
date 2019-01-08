$(function(){
	$('#bar').click(function(){
		 $('#menu').animate({left:'0px'},1000);
		 $('#bar').hide();
		 $('#close').show();
	});
	$('#close').click(function(){
		$('#menu').animate({left:'-1000px'},1000);
		$('#bar').show();
		$('#close').hide();
	});
	$('#plus').click(function(){
		$('#support').show(500,function(){
			$('#text').slideToggle();
			$('#minus').show();
			$('#plus').hide();
		})
	});
	$('#minus').click(function(){
		$('#support').show(500,function(){
			$('#text').slideToggle();
			$('#minus').hide();
			$('#plus').show();
		})
	});
	
});










		// var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
		// var close = '<i class="fa fa-times" aria-hidden="true"></i>';
		// var cong = '<i class="fa fa-plus" aria-hidden="true"></i>';
		// var tru = '<i class="fa fa-minus" aria-hidden="true"></i>';

		// $(function()
		// {	
		// 	var check = true;
		// 	$('#bar').click(function()
		// 	{
				
		// 		if(check == true)
		// 		{
					
		// 			$('#bar').html(close).animate({  borderSpacing: -90 }, {
  //  					 step: function(now,fx) {
		// 		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		// 		      $(this).css('-moz-transform','rotate('+now+'deg)');
		// 		      $(this).css('transform','rotate('+now+'deg)');
  // 				    },
  //  					 duration:'slow'
		// 			},'linear');

		// 			$("#menu").animate({"left":"0px"}, "slow");
		// 			check = !check;

		// 		}else
		// 		{   
					
		// 			$('#bar').html(bar).animate({  borderSpacing: 180 }, {
  //  					 step: function(now,fx) {
		// 		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		// 		      $(this).css('-moz-transform','rotate('+now+'deg)');
		// 		      $(this).css('transform','rotate('+now+'deg)');
  // 				    },
  //  					 duration:'slow'
		// 			},'linear');
		// 			$("#menu").animate({"left":"-60%"}, "slow");
		// 			check = !check;
					
		// 		}

		// 		});
		// 	$('#plus').click(function(){
		// 		if(check == true)
		// 		{
					
		// 			$('#plus').html(tru).animate({  borderSpacing: -90 }, {
  //  					 step: function(now,fx) {
		// 		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		// 		      $(this).css('-moz-transform','rotate('+now+'deg)');
		// 		      $(this).css('transform','rotate('+now+'deg)');
  // 				    },
  //  					 duration:'slow'
		// 			},'linear');

		// 			$("#text").slideDown({"top":"20px"}, "slow");
		// 			check = !check;

		// 		}else
		// 		{   
					
		// 			$('#plus').html(cong).animate({  borderSpacing: 180 }, {
  //  					 step: function(now,fx) {
		// 		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		// 		      $(this).css('-moz-transform','rotate('+now+'deg)');
		// 		      $(this).css('transform','rotate('+now+'deg)');
  // 				    },
  //  					 duration:'slow'
		// 			},'linear');
		// 			$("#text").animate({"top":"-500px"}, "slow");
		// 			check = !check;
					
		// 		}
		// 	})
		// });