$(document).ready(function(){

	$( "#voz" ).on( "click", function() {

		let texto = $('#text').val();
		let input = 'Acceso al sistema';

		let resultado = texto == input;

		if(texto=="")
		{
			$( ".modal-body" ).html( "<p>Ingrese un texto.<p>");
			$('#danger').modal('show');
			$("#text").focus();
			return false;
		}
		else if(resultado==true)
		{
			hablar(document.getElementById('text').value);
			document.getElementById('text').value = '';
			setTimeout(function(){ 
				window.location.href = "https://www.google.com/?hl=es_419";
			}, 4000);
		}
		else
		{
			$( ".modal-body" ).html( "<p>Ingreso no autorizado.<p>");
			$('#danger').modal('show');
			$("#text").val("");
			$("#text").focus();
			return false;
		}

	});

})

function hablar(text)
{
	speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}