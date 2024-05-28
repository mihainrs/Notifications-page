let number = document.querySelector(".number");
let dot = document.querySelectorAll(".dot");
let markasread = document.querySelector(".mark-as-read");
let notifline = document.getElementsByClassName("notif-line");
let type = document.querySelectorAll(".type");

number.value = notifline.length;
number.innerHTML = number.value;



markasread.addEventListener("click", () => {
    for(let i = 0; i < dot.length; i++){
        dot[i].style.display="none";
        notifline[i].style.backgroundColor="white";
        number.innerHTML = number.value - [i]-1;
    }
})