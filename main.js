function addName(){
	var dogName = document.getElementById("name").value;
	var changeName = document.getElementById("change-name");
	changeName.innerText = dogName;
}

function toggleHow(){
	var how = document.getElementById("how");

	if(how.style.display === "none"){
		how.style.display = "block";
	}else{
		how.style.display = "none";
	}
}

function toggleWhat(){
	var what = document.getElementById("what");

	if(what.style.display === "none"){
		what.style.display = "block";
	}else{
		what.style.display = "none";
	}
}

function toggleFacts(){
	var facts = document.getElementById("facts");

	if(facts.style.display === "none"){
		facts.style.display = "block";
	}else{
		facts.style.display = "none";
	}
}