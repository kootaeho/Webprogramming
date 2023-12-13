/*const title  = document.getElementById("title");

//title.innerText = "Got you!";

console.log(title.className);

document.title = "Hello from js";
title.className = "HIIII";
console.log(title.className);*/

/*const title = document.getElementsByTagName("h1");

console.log(title);*/

/*const title = document.querySelector(".hello h1"); //css 스타일로 가져오기

console.log(title);*/

/*const title = document.querySelector("#hello") == const title = document.getElementById("hello"); 둘은 같은 기능을함.
*/

/*const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.style.color = "blue";*/

/*

const h1 = document.querySelector("div.hello:first-child h1");
const title = document.querySelector("div.hello:first-child h1");


function handletitleclick(){
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    }
    else{
        h1.style.color = "blue";
    }
}

function mousee(){
    h1.style.color = "blue";
}

function mouse(){
    h1.style.color = "black";
}

function handlewindowresize(){
    document.body.style.backgroundColor = "tomato";
}

function handlewindowcopy(){
    alert("copier!");
}

function handlewindowoffline(){
    alert("No WIFI!");
}

function handlewindowonline(){
    alert("Connected WIFI");
}

/*title.addEventListener("click",handletitleclick);  // == title.onclick = handletitleclick;
title.addEventListener("mouseenter",mousee);
title.addEventListener("mouseleave",mouse);


window.addEventListener("resize",handlewindowresize);
window.addEventListener("copy", handlewindowcopy);
window.addEventListener("offline",handlewindowoffline);
window.addEventListener("online", handlewindowonline);*/
//h1.addEventListener("click",handletitleclick);

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const activeclass = "active";
    /*if(h1.classList.contains(activeclass)){
        h1.classList.remove(activeclass);
    }else{
        h1.classList.add(activeclass);
    }*/
    /*h1.classList.toggle("active");  //이 한줄이 위 주석처리된 4줄과 같은 역할을 함.
}

h1.addEventListener("click",handleTitleClick);
*/

/*

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event){
    //console.log(loginInput.value);
    //console.log("click");
    /*const username = loginInput.value; 
    if(username === ""){
        alert("Please write your name")
    }else if(username.length > 15){
        alert("Your name is too long.");
    }*/
    //const username = loginInput.value;
    //console.log(username);
    //event.preventDefault();
    //console.log (loginInput.value);
//}
//loginButton.addEventListener("click",Buttonclick)

//loginForm.addEventListener("submit",onLoginSubmit)




const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "Username";


function onLoginSubmit(info){
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY , username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `환영합니다  ${username} 님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit",onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    //show the greeting
    paintGreeting(savedUsername);
}

