let logOut = document.getElementById("logOut");
let newWord = document.getElementById("newWord");
let validateNewWord = document.getElementById("validateNewWord");
let favoriteWord = document.getElementById("favoriteWord");
let username = document.getElementById("username");

logOut.addEventListener("click", () => {
	window.location = "form.html";
})
validateNewWord.addEventListener("click", () => {
	favoriteWord.textContent = newWord.value;
	newWord.value = "";
})
