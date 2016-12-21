var sueldo_Semanal=null;
var sueldo_Hora=null;
var cant_Horas=null;


sueldo_Hora = prompt("Por favor ingresa el sueldo que ganas por hora");
cant_Horas = prompt("Por favor ingresa la cantidad de horas que trabajas a la semana");

sueldo_Semanal=(parseFloat(sueldo_Hora)*parseFloat(cant_Horas));
alert(sueldo_Semanal);