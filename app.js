const loginForm = document.querySelector("#login-form");
const nameInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //진짜 상수는 변수 이름을 대문자로 하는게 관례

//이벤트에 대한 정보도 받아서 활용할 수 있도록, event를 인자로 받아 사용하자.
//JS가 실행시켜주니, event를 받을 자리만 만들어두자!
function onLoginSubmit(event) {
	event.preventDefault(); //event에 대한 브라우저의 기본 동작을 막아준다! (submit -> 새로고침)  
    loginForm.classList.add(HIDDEN_CLASSNAME) //form 숨기기
    const username = nameInput.value; //input으로 받은 유저의 이름을 저장
    localStorage.setItem('username', username);//휘발성으로 사라지는 username을 localStorage에 저장해서 브라우저에 남게!
    greeting.innerText = `Hello ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

//submit은 텍스트에 대해 엔터를 누르거나, form 내의 버튼을 눌렀을 때 이루어진다!
loginForm.addEventListener("submit", onLoginSubmit);
//eventListener는 두번째 인자인 함수를 호출할 때,
//빈값으로 [ex. onLoginSubmit() ] 부르는 것이 아니다!
//인자로 발생한 이벤트에 대한 정보를 담아 보낸다! [ex. onLoginSubmit(event) ]
