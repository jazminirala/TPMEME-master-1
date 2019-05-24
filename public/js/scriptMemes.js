//AJAX ARCHIVOS DONDE HACEMOS TODOS NUESTROS PEDIDOS//
let artCatalogo = document.getElementById("catalogo");
let botonTendencia = document.getElementById("tendencias");
let botonClasico = document.getElementById("clasicos")


// se le asigna a un clickleble una funcion por id (clasico) declarado en el html 
botonClasico.addEventListener("click", function(){
	pedirDatos(dibujaMemeClasico)
})

// se le asigna a un clickleble una funcion por id (tendencia)declarado en el html 
botonTendencia.addEventListener("click", function(){
	pedirDatos(dibujaMemeTendencia)
})


function dibujaMemeClasico(datos){

	artCatalogo.innerHTML = "";
	
	    for (let i = 0; i < datos.length; i ++) {
		
		if (datos[i].clasicos == true) {
		    // se crea elemento div e img, y se apendea ambos al elemento articulo ya declarado en el html
	
			artCatalogo.innerHTML += 
			`<div class="collage">
				<img class="img_meme" src="${datos[i].imagen}">
				<div class="titulo-corazon">${datos[i].nombre}</div>
				<span>
					<a class="icon-favorito"></a>
					<div class="favoritos"></div>
				</span>
			 </div>
			`
		}
		else{
		    console.log("memes que no son tendecia");
		}
	
    }
}

function dibujaMemeTendencia(datos){

	artCatalogo.innerHTML = "";
	
	    for (let i = 0; i < datos.length; i ++) {
		
		if (datos[i].tendencia == true) {
		    // se crea elemento div e img, y se apendea ambos al elemento articulo ya deckarado en el html
			artCatalogo.innerHTML += 
			`<div class="collage">
                <img id="myImg" class="img_meme" alt="${datos[i].imagen}" src="${datos[i].imagen}" style="width:100%;max-width:300px">
                <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01">
                    <div id="caption">Favoritos, Retwitear</div>
                </div>
				<div class="titulo-corazon">${datos[i].nombre}</div>
				<span>
					<a class="icon-favorito"></a>
					<div class="favoritos"></div>
				</span>
			 </div>
			`

			// Get the modal
			var modal = document.getElementById("myModal");
					
			// Get the image and insert it inside the modal - use its "alt" text as a caption
			var img = document.getElementById("myImg");
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}
		}else{
		    console.log("memes que no son clasicos");
		}
	
    }


};
