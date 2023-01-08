const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // object, array 등을 string으로 변환
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // 변수는 태그 이름일 필요 없음
  li.id = newTodo.id;
  const span = document.createElement("span"); // 변수는 태그 이름일 필요 없음
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖︎";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault(); // submit의 기본동작인 새로고침 안됌 
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { // 객체임
    text: newTodo,
    id: Date.now()     // li item 구별
  };
  toDos.push(newTodoObj); 
  paintToDo(newTodoObj); 
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const saved = localStorage.getItem(TODOS_KEY);


if (saved) {
  const parsedToDos = JSON.parse(saved); // string이 아닌 object로 변환
  // parsedToDos.forEach((item) => console.log(item));  배열에 있는 각각에 아이템에 대해 함수 적용
                  // arrow function(화살표 함수)
  toDos = parsedToDos;       // 전에 있던 todo 리스트 복원          
  parsedToDos.forEach(paintToDo);
}


