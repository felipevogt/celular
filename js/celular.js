$(document).ready(function(){
	var cont = 0;
	var char1 = ["a", "b", "c"];
	var char2 = ["d", "e", "f"];
	var char3 = ["g", "h", "i"];
	var char4 = ["j", "k", "l"];
	var char5 = ["m", "n", "o"];
	var char6 = ["p", "q", "r", "s"];
	var char7 = ["t", "u", "v"];
	var char8 = ["w", "x", "y", "z"];
	var char9 = " ";
	var cadena = "";
	var aux = "";


	$("#btn2").click(function(){
		if (!buscar(char1, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char1[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char1[0];
			$("#contenido").html(cadena + aux);
		}
	});

	
});

function buscar (array, aux){
	return array.find(function(element){
		return element == aux;
	})
}

