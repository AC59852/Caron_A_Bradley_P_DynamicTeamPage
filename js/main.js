
/* Arrays for bio info*/
var patInfo = ["Hi, my name is William Patrick Bradley. I am named after my great grandfather and it is a tradition to have the first name William but to go by our middle name! I’m 19 years old, born in Ajax Ontario, lived in Whitby for one year and moved to London at close to 2 years old. I am currently studying Interactive Media Design at Fanshawe College while working part time at McDonalds to pay for my schooling. With a deep interest in technology, I love producing my own and listening to music, playing videogames (collecting old videogames too) and playing and watching hockey (Go Flames Go!). I initially decided to enroll in IDP because of my interest in film and photography and I wanted to be able to add to my portfolio with improved videography skills, but along the way I sparked an interest in graphic design and coding (2 major parts of the program.)  With technology advancing more and more throughout the years, I am excited to be so heavily involved in this field. Thanks for reading my bio!"],
	para = document.querySelector("#para"),
	ausInfo = ["Hi, my name is Austin Caron. I am 21 years old, studying Interactive Media Design at Fanshawe College, and I am Patrick’s partner for the FiP and subsequently, this project. I come from Chatham, Ontario where both of my parents were born. Although I was born in Chatham, my heritage stems from Irish, British and (heavy) French backgrounds. My grandfather moved from Dublin to Canada around the time he was a child, so European culture is engrained heavily in my home lifestyle. The hobbies I revolve around the most would be gaming, reading Manga (Japanese graphic novel) and now, coding! Gaming is the hobby I would most associate myself with. Some of my top games are Portal 2, Super Smash Bros. Melee, Super Mario and Sunshine, and Animal Crossing. I also find myself watching a lot of Anime. Things like Sword Art Online, Code Geass, Kill La Kill, and countless others. I have enjoyed my time at Fanshawe a ton, meeting some incredible people, and gaining the knowledge and skills I had wanted to previously have. I am still indecisive of what specialist course I might take, but it’s hard to think I would dislike either"],
	desc = document.querySelector("#test2")
/* Every trigger that occurs is broken up into their own function to more easily manage 
what to change, and what to review*/



/* Start of head shot image changing*/ 
var imgCon = document.querySelector("#img1");
para.classList.remove("stretchOne");

function changeImg() {
	para.innerHTML = '';
	para.innerHTML += patInfo;
	imgCon.classList.add('stretchTwo');
	if (imgCon.classList.contains('stretchOne')) {
		imgCon.classList.remove('stretchOne');
		imgCon.src = "images/patrick_headshot.jpg";
	}
	else {
		imgCon.src = "images/patrick_headshot.jpg";
	}
}


document.getElementById("ausBtn").addEventListener("click", changeImg);

function changeImg2() {
		para.innerHTML = '';
		para.innerHTML += ausInfo;
	if (imgCon.classList.contains('stretchTwo')) {
		imgCon.classList.remove('stretchTwo');
		imgCon.classList.add('stretchOne');
		imgCon.src = "images/austin_headshot.jpg";
	}
	else {
		imgCon.src = "images/austin_headshot.jpg";
		imgCon.classList.add('stretchOne');
	}
}

document.getElementById("patBtn").addEventListener("click", changeImg2);
/* end of head shot image changing*/



/* Start of title change on button press*/
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
		return false;
	}
} 

document.getElementById("patBtn").addEventListener("click", changeTitle);

function changeTitle2() {
	if (title.hasChildNodes(document.getElementById("austinsTitle"))) {
		title.removeChild(document.getElementById("austinsTitle"));
		title.appendChild(patrickTitle);
		return false;
	}
} 

document.getElementById("ausBtn").addEventListener("click", changeTitle2);
/* end of title change on button press*/


/* start of background change on button press*/
var bck = document.querySelector("#bck")

function changeBck() {
	if (bck.classList.contains('ausBck')) {
		bck.classList.remove('ausBck');
		bck.classList.add('patBck');
	}
}

document.getElementById("ausBtn").addEventListener("click", changeBck);

function changeBck2() {
	if (bck.classList.contains('patBck')) {
		bck.classList.remove('patBck');
		bck.classList.add('ausBck');
	}
}

document.getElementById("patBtn").addEventListener("click", changeBck2);
/* end of background change on button press*/
