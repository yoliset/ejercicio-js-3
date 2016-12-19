var Sueldo_Semanal=null;
var Sueldo_Hora=null;
var Cant_Horas=null;


Sueldo_Hora=prompt("Por favor ingresa un el sueldo por hora que ganas");
Cant_Horas=prompt("Por favor ingresa la cantidad de horas trabajadas a la semana");

 Sueldo_Semanal=(parseFloat(Sueldo_Hora)*parseFloat(Cant_Horas));
  alert(Sueldo_Semanal);