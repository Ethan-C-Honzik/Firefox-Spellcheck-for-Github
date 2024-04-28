console.log("Spellcheck Extension Loaded");

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function EnableSpellCheck() {
	let x = document.getElementsByClassName("cm-content");
	while(x == null || x[0] == null) await sleep(1000);
	console.log("Spellcheck Loaded");
	x[0].setAttribute("spellcheck", "on"); 
}

EnableSpellCheck();
