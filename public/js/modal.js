// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img01");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function abrirModal(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function abrirModal() { 
  modal.style.display = "none";
}