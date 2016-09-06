function onClickApple() {
	document.getElementById("apple").innerHTML = "\
		<article>								  \
		  <h1>Apple</h1>						  \
		  <p>An apple looks like an apple, and it tastes like an apple</p> \
		</article>								  \
	";
	document.getElementById("orange").innerHTML = "";
	document.getElementById("mango").innerHTML = "";
}

function onClickOrange() {
	document.getElementById("apple").innerHTML = "";
	document.getElementById("orange").innerHTML = "\
		<article>								  \
		  <h1>Orange</h1>						  \
		  <p>An orange looks like an orange, and it tastes like an orange</p> \
		</article>								  \
	";
	document.getElementById("mango").innerHTML = "";
}

function onClickMango() {
	document.getElementById("apple").innerHTML = "";
	document.getElementById("orange").innerHTML = "";
	document.getElementById("mango").innerHTML = "\
		<article>								  \
		  <h1>Mango</h1>						  \
		  <p>An mango looks like an mango, and it tastes like an mango</p> \
		</article>								  \
	";
}

