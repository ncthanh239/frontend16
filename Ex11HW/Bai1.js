$(function(){
	account();
	profile();
	Finish();
});
function account(){
	var check;
	var check1;
	var check2;
	$('#username').on('blur',function(){
		var username= $('#username').val();
		if(username.length<6){
			$("#err-name").html('Username phải lớn hơn 6 kí tự');
			check=true;
		}else{
			$('#err-name').html('');
			check=false;
		}
		return false;	
	});
	$('#next').on('click',function(){
		var username= $('#username').val();
		var pass = $('#pass').val();
		var crepass=$('#crepass').val();
		if(check==false&&check1==false&&check2==false){
			$('#Aco').hide('slide',{duration:'right'},600);
			$('#Prof').show('slide',{duration:'right'},600);
			$('#War').hide();
			$('#Fin').hide();
			$('#tab2').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab1').css('backgroundColor','#eee');
		}else{
			// $('#Aco').show();
			// $('#Prof').hide();
			// $('#War').hide();
			// $('#Fin').hide();
			$('#next').on('click',function(){
				$('#tab1').css('backgroundColor','red');
			})
		}
	})


	$('#pass').on('blur',function(){
		var pass=$('#pass').val();
		if(pass==''){
			$('#err-pass').html('Yêu cầu nhập mật khẩu');
			check1=true;
			
		}else{
				$('#err-pass').html('');
				check1=false;
			}
			return false;
	})
	$('#crepass').on('blur', function(){
		var pass=$('#pass').val();
		var crepass=$('#crepass').val();
		if(pass==crepass){
			$('#err-crepass').html('');
			check2=false;

		}else {
			$('#err-crepass').html('Yêu cầu xác nhận mật khẩu');
			check2=true;
		}
	})
	return false;

}

function profile(){
	var check3;
	var check4;
	var check5;
	var check6;
	$('#fname').on('blur',function(){
		var fname=$('#fname').val();
		if(fname==''){
			$('#err-fname').html('Yêu cầu nhập first name');
			check3=true;

		}else{
			$('#err-fname').html('');
			check3=false;
		}
	});
	$('#lname').on('blur', function(){
		var lname=$('#lname').val();
		if(lname==''){
			$('#err-lname').html('Yêu cầu nhập last name');
			check4=true;
		}else{
			$('#err-lname').html('');
			check4=false;
		}
	})
	$('#email').on('blur',function(){
		var email=$('#email').val();
		if(email==''){
			$('#err-email').html('Yêu cầu nhập email');
			check5=true;

		}else{
			$('#err-email').html('');
			check5=false;
		}

		if(validateEmail(email)){
			$('#err-email').html('');
			check5=false
		}
		else{
			$('#err-email').html('Yêu cầu nhập email');
			check5=true;
		}
	})
	$('#age').on('blur',function(){
		var age= $('#age').val();
		if(age==''){
			$('#err-age').html('Yêu cầu nhập tuổi');
			check6=true;
		}else{
			$('#err-age').html('');
			check6=false;
		}
	})
	$('#next').on('click',function(){
		var fname= $('#fname').val();
		var lname = $('#lname').val();
		var email=$('#email').val();
		var age=$('#age').val();
		if(check3==false&&check4==false&&check5==false&&check6==false&&age<18){
			$('#Aco').hide('slide',{duration:'right'},600);
			$('#War').show('slide',{duration:'right'},600);
			$('#Prof').hide();
			$('#Fin').hide();
			$('#tab3').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab1').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').hide();

			$('#prev').on('click',function(){
			$('#Prof').hide('slide',{duration:'left'},600);
			$('#Aco').show('slide',{duration:'left'},600);
			$('#War').hide();
			$('#Fin').hide();
			$('#tab1').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab3').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').show();
		})
		}
		else{
			$('#next').on('click',function(){
				$('#tab2').css('backgroundColor','red');
			})
		}
	})
	$('#next').on('click',function(){
		var fname= $('#fname').val();
		var lname = $('#lname').val();
		var email=$('#email').val();
		var age=$('#age').val();
		if(check3==false&&check4==false&&check5==false&&check6==false&&age>=18){
			$('#Aco').hide('slide',{duration:'right'},600);
			$('#Fin').show('slide',{duration:'right'},600);
			$('#Prof').hide();
			$('#War').hide();
			$('#tab4').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab1').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').hide();
			$('#fin').show();


			$('#prev').on('click',function(){
			$('#Fin').hide('slide',{duration:'right'},600);
			$('#Prof').show('slide',{duration:'right'},600);
			$('#War').hide();
			$('#Aco').hide();
			$('#tab1').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab3').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').show();
		})
		}
	})
	$('#prev').on('click',function(){
			$('#Prof').hide('slide',{duration:'left'},600);
			$('#Aco').show('slide',{duration:'left'},600);
			$('#War').hide();
			$('#Fin').hide();
			$('#tab1').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab3').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').show();
		})


}
function validateEmail(email) {
   	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   	return re.test(String(email).toLowerCase());
}
function Finish(){
	$('#fin').on('click',function(){
		var oncheck= $('#oncheck').val();
		if(oncheck==1){
			$('#Aco').hide();
			$('#Fin').show();
			$('#Prof').hide();
			$('#War').hide();
			$('#tab4').css('cssText','background-color: #2184BE; !importain; color:white;');
			$('#tab1').css('backgroundColor','#eee');
			$('#tab2').css('backgroundColor','#eee');
			$('#next').hide();
			alert('Submit');
		}
	})
}



	