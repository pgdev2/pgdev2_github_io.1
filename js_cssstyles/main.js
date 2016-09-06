function onClickApple() {
	document.getElementById("apple").style.display = "initial";
	document.getElementById("orange").style.display = "none";
	document.getElementById("mango").style.display = "none";
}

function onClickOrange() {
	document.getElementById("apple").style.display = "none";
	document.getElementById("orange").style.display = "initial";
	document.getElementById("mango").style.display = "none";
}

function onClickMango() {
	document.getElementById("apple").style.display = "none";
	document.getElementById("orange").style.display = "none";
	document.getElementById("mango").style.display = "initial";
}

