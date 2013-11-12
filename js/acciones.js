// JavaScript Document
$(document).ready(function(e){// e de evento
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton =(($(this).attr('class')).split(' '))[1];
			switch (boton){
				case 'b1': 
				navigator.notification.beep(2);
				break;
				case 'v1': 
				navigator.notification.vibrate(1000);
				break;
				}//switch
			$('#izg').swipeleft(function (){
				navigator.notification.alert("Deslizó a la izquierda",function(){"prueba4","Aceptar"});//alert
			});//barrer a la izquierda
			$('#der').swipelrigth(function (){
				navigator.notification.alert("Deslizó a la derecha",function(){"prueba4","Aceptar"});//alert
			});//barrer a la izquierda
		});//tap
	},false);// deviceready
});// ready