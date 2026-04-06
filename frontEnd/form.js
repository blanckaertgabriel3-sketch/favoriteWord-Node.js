let btnValidate = document.getElementById("btnValidate");

btnValidate.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value;

    fetch(`http://localhost:5000/login?name=${name}`)
        .then(res => res.json())
        .then(data => {
            if (data.user) {
				localStorage.setItem("user", JSON.stringify(data.user));
                window.location = "./home.html";
            } else {
                alert("User not found");
            }
        });
});