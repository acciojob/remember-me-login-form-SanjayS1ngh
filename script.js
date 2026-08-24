let name = document.querySelector("#username");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let submitBtn = document.querySelector("#submit");
let existingBtn = document.querySelector("#existing");

// Show existing user button if credentials are saved
if (localStorage.getItem("user") !== null) {
    existingBtn.style.display = "block";
}

// Submit login
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = name.value;
    let pass = password.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem(
            "user",
            JSON.stringify({
                username: username,
                password: pass
            })
        );

        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("user");
        existingBtn.style.display = "none";
    }
}); 

// Login using saved credentials
existingBtn.addEventListener("click", () => {
    let savedUser = JSON.parse(localStorage.getItem("user"));

    alert(`Logged in as ${savedUser.username}`);
});