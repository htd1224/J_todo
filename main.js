'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
let clearButton = document.querySelector(".btnClear");
const input = document.querySelector('.item'); 
let list=document.getElementById('item_list');
let item
let value;



input.addEventListener('keypress',function(e){
  if (e.keyCode === 13) {
   e.preventDefault(); 
  addItem();
}  
});

inputButton.addEventListener("click", addItem);

// 데이터 입력
function addItem() {  
  item = document.querySelector(".item");
    if (item != null) {
        itemList.push(item.value);
        render(item.value);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }       
} 
 

function render(iValue) {
  
    let newEl = document.createElement("li");
    let checkbtn = document.createElement("button");
    let closebtn = document.createElement("button");

    checkbtn.innerHTML = "<i class=\"far fa-check-square\"></i>";
    closebtn.innerHTML = "<i class=\"fas fa-eraser\"></i>";
    closebtn.classList.add("close-box");
    checkbtn.classList.add("check-box");
    newEl.classList.add("list-group-item");
    newEl.append(iValue);
    newEl.append(checkbtn);
    newEl.append(closebtn);
    list.appendChild(newEl);

    createCheckButtons(); 
    createCloseButtons();
    store();
}

function store() {
  console.log(list.innerHTML);
  window.localStorage.myitems = list.innerHTML;
}


function getValues() {
  var storedValues = window.localStorage.myitems;
  if (!storedValues) {
    list.innerHTML ="";
  } else {
    list.innerHTML = storedValues;
  }
}


function createCloseButtons(){
  let createCloseButtons = document.querySelectorAll(".close-box");
  for (let i = 0; i < createCloseButtons.length; i++) {
    createCloseButtons[i].addEventListener("click", deleteItem);
 } 
}


function createCheckButtons(){
  let createCheckButtons = document.querySelectorAll(".check-box");
  for (let i = 0; i < createCheckButtons.length; i++) {
    createCheckButtons[i].addEventListener("click", checkItem);
 } 
}


//데이터 체크
function checkItem() {
  this.closest(".list-group-item").classList.toggle('checked');
  store();
}

//데이터 삭제

 function deleteItem() {
   this.closest(".list-group-item").remove();
   store();
}


clearButton.addEventListener("click", function(){
  localStorage.clear();
  list.innerHTML="";
  itemList = [];
});



function showItem() {  
  value = "<li class=lis>"+itemList[count]+"&nbsp&nbsp"+  "<button class='check'>" + "<i class=\"far fa-check-square\"></i>"+"</button>"+"&nbsp"+"<button class='close'>" + "<i class=\"fas fa-eraser\"></i>"+"</button></li>";
    
    item_list.insertAdjacentHTML("beforeend",value);
    let deleteButtons = document.querySelectorAll(".close");
    
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);   
    } 
    createCheckButtons();
  }


  function startTodo(){
    createCheckButtons(); 
    createCloseButtons();
  }
 
  getValues();
  startTodo();
