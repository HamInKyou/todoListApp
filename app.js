const loginForm = document.querySelector("#login-form");
const nameInput = loginForm.querySelector("input");

//이벤트에 대한 정보도 받아서 활용할 수 있도록, event를 인자로 받아 사용하자.
//JS가 실행시켜주니, event를 받을 자리만 만들어두자!
function onLoginSubmit(event) {
	event.preventDefault(); //event에 대한 브라우저의 기본 동작을 막아준다! (submit -> 새로고침)
  
	const username = nameInput.value;
	console.log(username);
}

//submit은 텍스트에 대해 엔터를 누르거나, form 내의 버튼을 눌렀을 때 이루어진다!
loginForm.addEventListener("submit", onLoginSubmit);
//eventListener는 두번째 인자인 함수를 호출할 때,
//빈값으로 [ex. onLoginSubmit() ] 부르는 것이 아니다!
//인자로 발생한 이벤트에 대한 정보를 담아 보낸다! [ex. onLoginSubmit(event) ]
