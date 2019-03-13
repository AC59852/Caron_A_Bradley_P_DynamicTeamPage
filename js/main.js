var info = ["Born 1992, Amanda Lee is known for creating English covers of Anime songs. Her most listened to songs are Crossing Field from Sword Art Online, Guren no Yumiya from Attack on Titan, and Papermoon from Soul Eater. My top favourite songs are listed to the left. Hover over them to see a fancy transition. Click on them to be redirected to YouTube"],
	para = document.querySelector("#test");


function addStuff() {
	para.innerHTML += info;
}

document.getElementById("testButton").addEventListener("click", addStuff);