
document.addEventListener("DOMContentLoaded", runTaskLister)

const newTask = document.querySelector("#new-task-description")
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

function runTaskLister(){
taskForm.addEventListener("submit", addTask)
}

function addTask(e){
  e.preventDefault()
const formTasks = document.getElementById("tasks")
const li = document.createElement("li")
li.innerText = e.target["new-task-description"].value
formTasks.appendChild(li)

}
