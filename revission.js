const newTask = document.querySelector('#new-task');
const form =document.querySelector('form');
const completeUl =document.querySelector("#items");
const complete = document.querySelector('.complete-list ul');

//functions
let createTask =function(task){
    let listitem = document.createElement('li');
    let checkbox =document.createElement('input');
    let lebel = document.createElement('lebel');
    lebel.innerText = task;
    checkbox.type = 'checkbox';
    listitem.appendChild(checkbox);
    listitem.appendChild(lebel);
    return listitem;
}
//add item in ict

let addTask = function (event){
    event.preventDefault();
    let listItem =createTask(newTask.value);
    completeUl.appendChild(listItem);
    newTask.value = "";
    bindincompleteUl(listItem,compleateTask);

}
let compleateTask = function(){
    let listItem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = "Delete";
    deletebtn.className = 'delete';
    listItem.appendChild(deletebtn);
    complete.appendChild(listItem);
    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    bindcompleate(listItem,deleteCompleate);
}
let deleteCompleate = function(){
    let listItem =this.parentNode;
    let ul =listItem.parentNode;
    ul.removeChild(listItem);

}
let bindcompleate = function(taskItem,compleatelydelete){
    let listItem = taskItem.querySelector('.delete');
    listItem.onclick = compleatelydelete;

}

let bindincompleteUl =function(taskItem,compleateStage){
    let checkbok = taskItem.querySelector('input[type="checkbox"]');
    checkbok.onchange = compleateStage;

}
for( let i =0; i <completeUl.children.length ; i++){
    bindincompleteUl(completeUl.children[i],compleateTask)
}

for( let i =0; i <complete.children.length ; i++){
    bindcompleate (complete.children[i], deleteCompleate)
}

form.addEventListener('submit',addTask);


// console.log(completeUl.children.length)