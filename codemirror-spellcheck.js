console.log("Spellcheck loaded")

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function EnableSpellCheck() {
	let x = document.getElementsByClassName("cm-content");
	while(x == null) await sleep(1000);
	x[0].setAttribute("spellcheck", "on"); 
}

EnableSpellCheck();
