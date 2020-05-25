inicio();
var Color = function(canvas) {
		this.canvas = canvas.getContext("2d");
		}

var secuenciaHumano = new Array;
var maquina = new Array;

function inicio()
{
	var b = document.getElementById("boton");
	b.addEventListener("click",juego);
}

function juego()
{
	var canvas1 = document.getElementById("rojo");
	var canvas2 = document.getElementById("azul");
	var canvas3 = document.getElementById("amarillo");
	var canvas4 = document.getElementById("verde");

	var rojo = new Color(canvas1);
	var azul = new Color(canvas2);
	var amarillo = new Color(canvas3);	
	var verde = new Color(canvas4);

	rojo.marco("#F00");
	azul.marco("#00F");
	amarillo.marco("#FFFF00");
	verde.marco("#0F0");	
	
	maquina.push(secuencia());
	
	animar(rojo, azul, amarillo, verde);
	
	canvas1.addEventListener("click", identificar);
	canvas2.addEventListener("click", identificar);
	canvas3.addEventListener("click", identificar);
	canvas4.addEventListener("click", identificar);
}

function secuencia()
{
	var opciones = ["rojo", "azul", "amarillo", "verde"];
	var color =  aleatorio(0,3);
	var secuencia = opciones[color];
	return secuencia;
}

function aleatorio(min,max)
{
	var numero = Math.floor(Math.random()*(max - min + 1) + min);
	return numero;
}

Color.prototype.marco = function(color)
{
	var marco = this.canvas;
	marco.beginPath();
	marco.moveTo(0,0);
	marco.lineTo(250,0);
	marco.lineTo(250,250);
	marco.lineTo(0,250);
	marco.lineTo(0,0);
	marco.strokeStyle ="#000";
	marco.fillStyle = color;
	marco.stroke();
	marco.fill();
	marco.closePath();
}

function identificar(datos)
{
	var canvas = datos.target
	var color = escogerColor(canvas.id);
	seleccion = new Color(canvas);

	seleccion.activar();
	setTimeout(function() {seleccion.marco(color)},500);

	secuenciaHumano.push(canvas.id);
	var resultado = true;

	for(i in secuenciaHumano)
	{
		if(secuenciaHumano[i] != maquina[i])
			resultado = false;
	}
	
		if(maquina.length == 6 && secuenciaHumano.length == 6){
			alert("Ganaste");
			maquina.length = 0;
			secuenciaHumano.length = 0;
			window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "/hisBoti/";

    }, 3000);
		
		}	
		if(!resultado)
		{
			alert("Perdiste :(\n" + "Sobreviviste " + (maquina.length - 1) + " rondas");
			maquina.length = 0;
			secuenciaHumano.length = 0;
			inicio();
		}	
	
	if(secuenciaHumano.length == maquina.length && resultado)
		{
			secuenciaHumano.length = 0;
			setTimeout(function() {juego(resultado)}, 1000);
		}

}

Color.prototype.activar = function()
{
	var marco = this.canvas;
	marco.beginPath();
	marco.moveTo(0,0);
	marco.lineTo(250,0);
	marco.lineTo(250,250);
	marco.lineTo(0,250);
	marco.lineTo(0,0);
	marco.strokeStyle ="#000";
	marco.fillStyle = "#FFFFFF";
	marco.stroke();
	marco.fill();
	marco.closePath();
}

function animar(rojo, azul, amarillo, verde)
{
	var prender;
	setTimeout(function () {
		for(i in maquina)
		{
			var tiempo1 = i * 700
			var tiempo2 = tiempo1 + 500; 
			prender = maquina[i];
			if(prender == rojo.canvas.canvas.id)
			{
			setTimeout(function() {rojo.activar()},tiempo1);
			setTimeout(function() {rojo.marco("#F00")},tiempo2);
			}		
			else if(prender == azul.canvas.canvas.id)
			{
			setTimeout(function() {azul.activar()},tiempo1);
			setTimeout(function() {azul.marco("#00F")},tiempo2);
			}
			else if(prender == amarillo.canvas.canvas.id)
			{
			setTimeout(function() {amarillo.activar()},tiempo1);
			setTimeout(function() {amarillo.marco("#FFFF00")},tiempo2);
			}
			else if(prender == verde.canvas.canvas.id)
			{	
			setTimeout(function() {verde.activar()},tiempo1);
			setTimeout(function() {verde.marco("#0F0")},tiempo2);
			}
		}
	}, 1000);
}

function escogerColor(id)
{
	var color;
	if(id == "rojo")
		color = "#F00";
	else if(id == "azul")
		color = "#00F"
	else if(id == "amarillo")
		color = "#FFFF00";
	else if(id == "verde")
		color = "#0F0"

	return color;
}