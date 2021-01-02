function EnableSpellCheck() {
	var x = document.getElementsByClassName("CodeMirror-code");
	x[0].setAttribute("spellcheck", "on"); 
}
setTimeout(EnableSpellCheck, 3000); //very ugly, wait for XHR so the div with CodeMirror-code class will be created.
