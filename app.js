//login-form 아이디를 가진 요소부터 일단 불러보자
const loginForm = document.querySelector("#login-form");

//받아온 loginForm html 내부에서 또 querySelector 통해서 찾음!
const nameInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

//로그인 버튼에 대해, 유저이름 유효성 검사까지 해주자.
function onLoginBtnClick() {
  const username = nameInput.value;
	if(username === ""){
		alert("Please write your name");
	} else if (username.length > 15){
		alert("Your name is too long.");
	}
}

//로그인 버튼에 대한 이벤트 등록
loginBtn.addEventListener("click", onLoginBtnClick);