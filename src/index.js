document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let createForm = document.querySelector('#create-task-form')
  createForm.addEventListener('submit', handleCreateForm)
});

function handleCreateForm(e) {
  e.preventDefault()
  let task = {user: e.target["new-task-description"].value}
  createList(task)
}

function createList(task) {
  let list = document.querySelector("#tasks")
  let li = document.createElement('li')
  li.innerHTML = task.user
  list.appendChild(li)
}