document.addEventListener("DOMContentLoaded", loadPage)

function loadPage(){

 let form = document.querySelector("#create-task-form")
 form.addEventListener("submit", handleSubmit)

}

function handleSubmit(e){

 e.preventDefault()

 let task = {task: e.target["new-task-description"].value}

 // e.target
 // e["target"]

   createTask(task.task)
  console.log(task)
 // console.log("title", e.target.title.value)
 // console.log("author", e.target.author.value)
 // console.log("cover", e.target.cover.value)
}

function createTask(task){
 const tasks = document.querySelector("#tasks")

 let li = document.createElement("li")
 li.innerText = task

 tasks.appendChild(li)

}