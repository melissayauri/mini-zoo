var img = document.getElementsByClassName('animal');
var select = document.getElementById('selection');

selection.onchange = function (){
	if (selection.value == "original") {
		removeClass();
	}
	if (selection.value == "blanco-negro") {
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("blanco-negro");
		}
	}

	if (selection.value == "invertir-colores") {
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("invertir-colores");
		}
	}
	else if (selection.value == "sepia"){
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("sepia");
		}
	}
}
/*
function removeClass(){
	for (var i = 0; i < img.length; i++) {
			img[i].classList.remove("blanco-negro");
			img[i].classList.remove("invertir-colores");
			img[i].classList.remove("sepia");
		}*/
}
