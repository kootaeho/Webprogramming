const clock = document.querySelector("h2#clock");

function paintClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");


    clock.innerText =`${hour}:${minute}:${second}`;
    //console.log(hour + ":" + minute + ":" + second);


}

paintClock();
setInterval(paintClock, 1000);