/*
    tools:
        - getElementById()
        - createElement()
        - onclick
        - classList
        - appendChild()
        - innerText
        - innerHTML
*/

const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");
const list = document.getElementById("to-do-list");
const pendingTxt = document.getElementById("pending");

let pending = 0;

btnAdd.onclick = function () {
  const task = prompt("task:");

  const newLi = document.createElement("li");
  newLi.innerText = task;

  newLi.onclick = function () {
    newLi.classList.add("completed");
  };

  list.appendChild(newLi);

  pending++;

  pendingTxt.innerText = pending;
};

btnClear.onclick = function () {
  list.innerHTML = "";
  pendingTxt.innerText = 0;
};
