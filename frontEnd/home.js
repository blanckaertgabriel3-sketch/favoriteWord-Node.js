const storedUser = localStorage.getItem("user");
const parsedUser = storedUser ? JSON.parse(storedUser) : {};
let logOut = document.getElementById("logOut");
let newWord = document.getElementById("newWord");
let validateNewWord = document.getElementById("validateNewWord");
let favoriteWord = document.getElementById("favoriteWord");
let username = document.getElementById("username");

username.textContent = parsedUser.name;
console.log(parsedUser);
parsedUser.favoriteWord ? favoriteWord.textContent = parsedUser.favoriteWord : favoriteWord.textContent = "No favorite Word";
logOut.addEventListener("click", () => {
	window.location = "form.html";
})
validateNewWord.addEventListener("click", () => {
	favoriteWord.textContent = newWord.value;
	newWord.value = "";
})
