function displayPeriocidad() {

	// id_tipoPeriodo
	// id_Periocidad

    // 1. Detectar el valor de tipo_periodo
   		var selectElem = document.getElementById('id_tipoPeriodo')
		var resultado = selectElem.value;
		
		

	// 2. Si es "periodico", entonces... hacer visible el otro select
       var e = document.getElementById("id_Periocidad");

	    if (  resultado == "periodico" ){
	  	 console.log("es periodico, activa el menú"); 
	  	e.removeAttribute("disabled");	 
		}
	// 3. Else... ocultarlo de nuevo!!!
		else{
		 console.log("no es periodico, sigue sin activar el menú");
		 e.setAttribute('disabled','disabled');
		 // QUIERO QUE POR DEFECTO Se quede seleccionado puntual cuando esté desactivado
		 var corregido = e.value.innerHTML=("puntual");
		 console.log(corregido);

		 
		}
}




