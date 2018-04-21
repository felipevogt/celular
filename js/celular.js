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

	$("#btn3").click(function(){
		if (!buscar(char2, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char2[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char2[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn4").click(function(){
		if (!buscar(char3, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char3[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char3[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn5").click(function(){
		if (!buscar(char4, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char4[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char4[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn6").click(function(){
		if (!buscar(char5, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char5[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char5[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn7").click(function(){
		if (!buscar(char6, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 4){
			aux = char6[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char6[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn8").click(function(){
		if (!buscar(char7, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 3){
			aux = char7[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char7[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn9").click(function(){
		if (!buscar(char8, aux)) {
			cont = 0;
			cadena = cadena + aux;
		}
		if(cont < 4){
			aux = char8[cont];
			$("#contenido").html(cadena + aux);
			cont++;
		} else {
			cont = 1;
			aux = char8[0];
			$("#contenido").html(cadena + aux);
		}
	});

	$("#btn0").click(function(){
		if (aux != char9 && aux!= "") {
			cont = 0;
			cadena = cadena + aux;
		}
		cadena = cadena + " ";
		aux = "";
		$("#contenido").html(cadena + aux);
	});

	$("#btnC").click(function(){
		cont = 0;
		cadena = cadena + aux;
		aux = "";
	});
});

function buscar (array, aux){
	return array.find(function(element){
		return element == aux;
	})
}

