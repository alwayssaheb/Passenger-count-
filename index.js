//document.getElementById("count").innerText = 6;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0

function increment(){
    count = count + 1;
    countEl.innerText = count;
}
function save(){
    let susu  = count + " - ";
    saveEl.textContent += susu;
    count = 0;
    countEl.innerHTML = count;
}




