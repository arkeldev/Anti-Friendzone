jQuery(document).on('submit', '#formLogin', function(event){
	event.preventDefault();
	
	jQuery.ajax({
		url: 'php/login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			console.log("ENtro a beforeSend");
			$('#btnLogin').val('Validando...');
			$('#cerrar').val('Cerrar');
			}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if(!respuesta.error){
			if(respuesta.Tipo == 'user'){
				location.href = 'perfil.php'
			} else if (respuesta.Tipo == 'Admin'){
			
			}
		} else {
			console.log("Etro aqui alv");
			$('#cerrar').val('Datos Incorrectos');
			setTimeout(function(){
				$('#cerrar').val('Datos Incorrectos');
				}, 1000);
				$('#btnLogin').val('Entrar');
				$('#cerrar').val('Cerrar');
		}
	})
	.fail(function(resp){
			console.log(resp.responseText);
	})	
	.always(function() {
		console.log("complete");
	});
});