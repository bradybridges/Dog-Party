function addName(){
	var dogName = document.getElementById("name").value;
	var changeName = document.getElementById("change-name");
	changeName.innerText = dogName;
}

function toggleHow(){
	var how = document.getElementById("how");
	var howButton = document.getElementById("how-button");

	if(how.style.display === "none"){
		how.style.display = "block";
		howButton.style.marginTop = "2em";
	}else{
		how.style.display = "none";
		howButton.style.marginTop = "5em";
	}
}

function toggleWhat(){
	var what = document.getElementById("what");
	var whatButton = document.getElementById("what-button");

	if(what.style.display === "none"){
		what.style.display = "block";
		whatButton.style.marginTop = "2em";
	}else{
		what.style.display = "none";
		whatButton.style.marginTop = "5em";
	}
}

function toggleFacts(){
	var facts = document.getElementById("facts");
	var factsButton = document.getElementById("facts-button");

	if(facts.style.display === "none"){
		facts.style.display = "block";
		factsButton.style.marginTop = "2em";
	}else{
		facts.style.display = "none";
		factsButton.style.marginTop = "5em";
	}
}