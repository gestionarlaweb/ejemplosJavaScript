     var myObjetoJson = {
            "nombre": "david", 
            "apellido": "rabassa"
     };

     var jsonString = JSON.stringify(myObjetoJson); // Paso a string myObjetoJson
     var objetoDesdeJson = JSON.parse( jsonString); // Pasamos a string el json


	function comprobar()
	{
	   var nombre = document.formu.nombre.value;
	  // var nombre document.getElementById("nombre");
	   var apellido = document.formu.apellido.value;
	  // var apellidodocument.getElementById("apellido")

	   

	   if (nombre != objetoDesdeJson.nombre )
	   {
	      alert("Tu nombre no es correcto.");
	      return false;
	   }
	   
	   if (apellido != objetoDesdeJson.apellido)
	   {
	      alert("Tu apellido no es correcto.");
	      return false;
	   }
	   	
		document.getElementById("nom").innerHTML = nombre;
	    document.getElementById("ape").innerHTML = apellido;
  	 	
		//return true;

	   
	}

	

