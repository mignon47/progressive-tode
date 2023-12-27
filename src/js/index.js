console.log('Hello World!');

// 1. TODO 리스트가 존재한다는 가정하에 보여주는 로직 작성
const todos = [
  "밥먹기",
  "영화보기", 
  "공부하기", 
  "일어나자마자 씻고 운동복 챙겨서 물한잔 마시고 공복상태로 운동가기", // 긴문장도 한번 넣어봤습니다.
  "장보기"
];

// Todo 리스트를 보여주는 함수
function showTodoList() {
  const todoList = document.getElementById('todoList');
  
  todos.forEach(todo => {
    const listTo = document.createElement('li');
    listTo.textContent = todo;
    todoList.appendChild(listTo);
  });
}

window.onload = showTodoList;

// 2. TODO 리스트에 새로운 TODO를 추가하는 로직 작성
function addTodo() {
  const todoInput = document.getElementById('todoWrite');
  const newTodo = todoInput.value; 


  if (newTodo.length != 0) {
    todoList.innerHTML += `<li>${newTodo}</li>`
    todoInput.value = ''; 

  } else {
    alert('할 일을 입력하세요!');
  }
}