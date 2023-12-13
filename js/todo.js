const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const deleteCheckedButton = document.getElementById("delete-checked-todos");
const CheckCount = document.getElementById("CheckCount");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function updateCheckCount() {
    const savedCount = parseInt(localStorage.getItem('checkCount')) || 0; // 기존 카운트 불러오기
    const newCount = savedCount + 1; // 카운트 1 증가
    localStorage.setItem('checkCount', newCount); // 새 카운트 저장
    CheckCount.innerText = "당신의 완료 갯수는: "+ newCount; // 화면에 새 카운트 표시
}

function paintCheckCount(){
    const savedCount = parseInt(localStorage.getItem('checkCount')) || 0;
    CheckCount.innerText = "당신의 완료 갯수는: "+savedCount;
}

function deleteCheckedTodos() {
    // 체크되지 않은 항목들만 필터링
    toDos = toDos.filter(toDo => !toDo.checked);

    // 변경 사항 로컬 스토리지에 저장
    saveToDos();

    // 화면에서 체크된 항목들 제거
    const checkedItems = toDoList.querySelectorAll(".checked-todo");
    checkedItems.forEach(item => {
        item.parentElement.remove();
    });
}

function deleteTodo(info){
    const li = info.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkTodo(info, button_check, li){
    const liId = parseInt(li.id);
    const toDoIndex = toDos.findIndex(toDo => toDo.id === liId);

    if (toDoIndex > -1) {
        toDos[toDoIndex].checked = true; // 체크 상태 업데이트
        li.querySelector("span").classList.add("checked-todo"); // 취소선 추가
    }
    button_check.hidden = true; // 버튼 숨김
    saveToDos(); // 변경 사항 저장
    updateCheckCount();
    //const count_a = localStorage.getItem('checkCount'); // count 값을 업데이트하고 가져옴
    loadAndUpdateCount();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button_check = document.createElement("button");
    const button_delete = document.createElement("button");

    button_check.innerText = "✅";
    button_delete.innerText = "❌";
    button_delete.addEventListener("click", deleteTodo);
    button_check.addEventListener("click", (event) => {
        checkTodo(event, button_check,li);
    });
    
    li.appendChild(span);
    if (!newTodo.checked) {
        li.appendChild(button_check);
    }
    li.appendChild(button_delete);
    span.innerText = newTodo.text + "  " + newTodo.time;
    if (newTodo.checked) { // 체크 상태에 따라 버튼 숨김 여부 결정
        span.classList.add("checked-todo");
    }
    toDoList.appendChild(li);
}


function handleToDoSubmit(info){
    info.preventDefault();
    if(toDoInput.value === "") return;
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const now = new Date();
    const dateString = now.toDateString(); // "Mon Dec 11 2023"
    const timeString = now.toTimeString().split(' ')[0]; // "13:16:43"
    const daytime = `${dateString} ${timeString}`;

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        time : daytime,
        checked: false, // 초기 체크 상태는 false로 설정
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);
deleteCheckedButton.addEventListener("click", deleteCheckedTodos);

const savedToDos = localStorage.getItem(TODOS_KEY);

loadAndUpdateCount(); // 초기 count 로드 및 Tier 이미지 설정


if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

paintCheckCount(); 

