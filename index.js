const inputField = document.getElementById("input");
const requestButton = document.getElementById("submit");
let email = [];
let regexBefore = /^[a-zA-Z]*?\w/g;
let regexAfter = "";
let result = true;


requestButton.addEventListener("click", () => {
    console.log(email[0]);
    email = inputField.value.split("@");
    result = regexBefore.test(email[0]);

    console.log(result);

})
