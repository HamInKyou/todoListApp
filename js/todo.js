const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
  //오직 toDos 배열을 localStorage에 저장하는 역할만 하는 함수!
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //이벤트에 대해, 인자로 명시한 event에서 이벤트에 대한 정보를 얻어올 수 있다.
  //event.target은 그 이벤트가 발생한 html요소를 가리켜준다.
  //html요소.parentElement는 그 요소를 감싸는 부모요소를 가리킨다!
  const li = event.target.parentElement;
  li.remove(); //해당 html요소를 지워버린다!
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; //생성된 span태그 안에 인자로 받아온 toDo집어넣기

  const button = document.createElement("button");
  button.innerText = "❌"; //생성된 button 태그 안에 글자 집어넣기

  li.appendChild(span); //생성한 li태그 안에 span태그를 집어넣는다!
  li.appendChild(button); //생성한 li태그 안에 button태그를 집어넣는다!

  button.addEventListener("click", deleteToDo);

  toDoList.appendChild(li); //그렇게 만들어놓은 toDo 하나를, toDoList 안에 집어넣기!
}

function handleToDoSubmit(event) {
  event.preventDefault(); //submit 기본 액션->새로고침 방지
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  toDos.push(newTodo); //toDos 배열 끝에 새로운 todo를 추가하자.
  paintToDo(newTodo); //저장한 toDo 화면에 그려주기
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에서 저장된 toDoList를 들고오자

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); //저장된 String을 array꼴로 되바꾸어주자
  toDos = parsedToDos; //새로고침했을 때 빈 toDos 배열에서 시작하는게 아니라, localStorage에 저장되었던 배열로 초기화한 다음 시작하게 하자!
  parsedToDos.forEach((toDo) => paintToDo(toDo)); //위에서 이미 만든 toDo를 그리는 함수를 각 toDo마다 실행해주자!
}
