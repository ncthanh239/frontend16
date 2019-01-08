$(function(){
	$('#home-box').click(function(){
		$('#home-box').show(500,function(){
			$('#text-home').slideToggle();
		})
	});

	$('#service').click(function(){
		$('#service').show(500,function(){
			$('#text-service').slideToggle();
		})
	});
})
 $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
          $( "#menu" ).removeClass( "container" );
          $('#menu').addClass( "container-fluid" );
        
        
      } else {
          
          $( "#menu" ).removeClass( "container-fluid" );
          $('#menu').addClass( "container" );
          $('#menu').css("top","20px");
          
      }
      // Do something
  });