var info = ["Born 1992, Amanda Lee is known for creating English covers of Anime songs. Her most listened to songs are Crossing Field from Sword Art Online, Guren no Yumiya from Attack on Titan, and Papermoon from Soul Eater. My top favourite songs are listed to the left. Hover over them to see a fancy transition. Click on them to be redirected to YouTube"],
	para = document.querySelector("#test"),
	ausInfo = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos voluptatem tenetur quod officiis, autem doloribus ex earum suscipit, perspiciatis quis? Similique fugit inventore fuga tempora velit iure maxime. Nulla."];


function patBio() {
	if (para.innerHTML = ausInfo) {
		para.innerHTML -= ausInfo;
		para.innerHTML += info;
		para.classList.add("testAnimation");
		return false;
	}
	else {
	}
}

document.getElementById("testButton").addEventListener("click", patBio);


var imgCon = document.querySelector("#img1");

function changeImg() {
	para.innerHTML -= info;
	para.classList.remove("testAnimation");
	if (imgCon.classList.contains('testAnimation2')) {
		imgCon.classList.remove('testAnimation2');
		imgCon.classList.add('testAnimation');
		imgCon.src = "images/patrick_headshot.jpg";
	}
	else {
		imgCon.src = "images/patrick_headshot.jpg";
		imgCon.classList.add('testAnimation');
	}
}


document.getElementById("testButton2").addEventListener("click", changeImg);

function changeImg2() {

	para.innerHTML -= info;
	para.classList.remove("testAnimation");
	if (imgCon.classList.contains('testAnimation')) {
		imgCon.classList.remove('testAnimation');
		imgCon.classList.add('testAnimation2');
		imgCon.src = "images/austin_headshot.jpg";
	}
	else {
		imgCon.src = "images/austin_headshot.jpg";
		imgCon.classList.add('testAnimation2');
	}
}

document.getElementById("testButton3").addEventListener("click", changeImg2);


var austinTitle = document.createElement('p'),
    patrickTitle = document.createElement('p'),
	title = document.querySelector("#testLoadAnim");

	austinTitle.textContent = 'Austin';
	patrickTitle.textContent = 'Patrick';
	austinTitle.setAttribute("id", "austinsTitle")
	patrickTitle.setAttribute("id", "patricksTitle")


function changeTitle() {
	if (title.hasChildNodes(document.getElementById("patricksTitle"))) {
		title.removeChild(document.getElementById("patricksTitle"));
		title.appendChild(austinTitle);
	}
		else {
			return false;
		}
} 

document.getElementById("testButton3").addEventListener("click", changeTitle);

function changeTitle2() {
	if (title.hasChildNodes(document.getElementById("austinsTitle"))) {
		title.removeChild(document.getElementById("austinsTitle"));
		title.appendChild(patrickTitle);
	}
		else {
			return false;
		}
} 

document.getElementById("testButton2").addEventListener("click", changeTitle2);

var bck = document.querySelector("#bck")

function changeBck() {
	if (bck.classList.contains('ausBck')) {
		bck.classList.remove('ausBck');
		bck.classList.add('patBck');
	}
	else {
		bck.classList.add('patBck');
	}
}

document.getElementById("testButton2").addEventListener("click", changeBck);

function changeBck2() {
	if (bck.classList.contains('patBck')) {
		bck.classList.remove('patBck');
		bck.classList.add('ausBck');
	}
	else {
		bck.classList.add('ausBck');
	}
}

document.getElementById("testButton3").addEventListener("click", changeBck2);
