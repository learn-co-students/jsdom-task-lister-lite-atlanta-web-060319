document.addEventListener("DOMContentLoaded", () => {
  let createForm = document.querySelector("#create-task-form");
  createForm.addEventListener("submit", handleCreateForm);
});

function handleCreateForm(e) {
  e.preventDefault()
  let task = {user: e.target["new-task-description"].value}
  createList(task)
}

function createList(task){
  let ul = document.querySelector("#tasks")
  let li = document.createElement('li')
  //Below line is accessing the hash we made inside of handleCreateForm fcn
  li.innerHTML = task.user
  ul.appendChild(li)
}


