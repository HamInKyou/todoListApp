const loginForm = document.querySelector("#login-form");

//받아온 loginForm html 내부에서 또 querySelector 통해서 찾음!
const nameInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

function onLoginBtnClick() {
    console.log("Hello" + nameInput.value)
}

loginBtn.addEventListener("click", onLoginBtnClick);