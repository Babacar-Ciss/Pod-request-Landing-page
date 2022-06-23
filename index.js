const inputField = document.getElementById("input");
const requestButton = document.getElementById("submit");
const warningMessage = document.getElementById("warning");
let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let result = true;


requestButton.addEventListener("click", () => {
    result = regex.test(inputField.value);

    if(result) {
        warningMessage.classList.add("hidden");
        alert("Votre email est valide!")    
    }
    else {
        warningMessage.classList.remove("hidden");
    }
})
