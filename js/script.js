document.getElementById("voz").addEventListener("click", function(){

	let texto = document.getElementById('text').value;
	let input = 'Acceso al sistema';

	let resultado = texto == input;

	if(texto=="")
	{
		alert("Ingrese un texto");
		document.getElementById('text').focus();
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
		hablar("Ingreso no autorizado");		
	}

});

function hablar(text)
{
	speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}