var nroAsientos = document.getElementsByTagName('td');
for (var i = 0; i < nroAsientos.length; i++) 
{
    nroAsientos[i].addEventListener('click',redirect,false);
}

var pasajeros = new Array(32);
for(var i=0;i<pasajeros.length;i++)
{
	pasajeros[i]=undefined;
} 

var asientoSelect;
function redirect(event)
{
    asientoSelect=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asientoSelect;
}
var pasajero;
function reservar()
{
	var nombre = document.getElementById("name").value;
	var lastname = document.getElementById("last_name").value;
	var dni = document.getElementById("dni").value;
	//var guardar=document.getElementById("reservar");	
	//numAsiento = 
	pasajero = 
	{
		nombre : nombre,
		apellido : lastname,
		dni : dni
	}
	pasajeros[asientoSelect-1] = pasajero;
	console.log(pasajeros);
	//guardar.innerHTML += <h3>"<center><div><p>Nombre: "+nombre+"</p></div><p>Apellido :"+last_name+"</p><p>Dni :"+dni+"</p></center>";
	alert("Asiento reservado");
	
	for(var i=0; i<nroAsientos.length; i++)
	{
		if(nroAsientos[i].textContent==asientoSelect)
		{
			nroAsientos[i].style.backgroundColor = '#F8ED50';
		}
	}
	limpiar();
}
function limpiar()
{
	document.getElementById("name").value="";
	document.getElementById("last_name").value="";
	document.getElementById("dni").value="";
} 
function buscar(ingreso)
{
	var ingreso=document.getElementById("nro_dni").value;
 	//var operacion=ingreso*2;
  	//document.getElementById("nro_dni").value=operacion;
  	
	var mostrarBuscar=document.getElementById("mostrarBuscar");
  	for(var i=0; i<pasajeros.length;i++)
  	{
  		if(pasajeros[i]!=undefined)
  		{
  			if(ingreso==pasajeros[i].dni)
  			{
    			mostrarBuscar.innerHTML="<h1> Asiento Reservado:</h1>" + "Numero de Asiento: " + nroAsientos + " Nombre: " + pasajeros[i].nombre + "Apellidos: " + pasajeros[i].apellido + "Dni: " + pasajeros[i].dni;
  				console.log("Nombre: " + pasajeros[i].nombre + "Apellidos: " + pasajeros[i].apellido + "Dni: " + pasajeros[i].dni);
  			}	
  		}
  	}
}