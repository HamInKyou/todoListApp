const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span); //생성한 li태그 안에 span태그를 집어넣는다!
  span.innerText = newTodo; //생성된 span태그 안에 인자로 받아온 toDo집어넣기
  toDoList.appendChild(li); //그렇게 만들어놓은 toDo 하나를, toDoList 안에 집어넣기!
}

function handleToDoSubmit(event) {
  event.preventDefault(); //submit 기본 액션->새로고침 방지
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  paintToDo(newTodo); //저장한 toDo 화면에 그려주기
}

toDoForm.addEventListener("submit", handleToDoSubmit);
