//se solicita el json memesinfo y se lo parsea, para posteriormente consultar al objeto

function pedirDatos(datos) {
	let request = new XMLHttpRequest();

	request.onload = function() {
        let datosMemes = JSON.parse(request.responseText);	//aca se parsea y se guarda en la variable dotaMemes
        
		datos(datosMemes);
		console.log(datosMemes); 		// verificamos en consola que retorna el obj de la consulta
		 
	};

	request.open('GET', '/infomemes');
	request.send();

}

