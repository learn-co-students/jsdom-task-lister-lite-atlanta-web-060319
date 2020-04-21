document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", handleSubmit)
  })
  


function handleSubmit(e){
  e.preventDefault()
  let input = e.target.querySelector('#new-task-description').value
  let priority = e.target.querySelector("#priority-level").value



  let newLi = document.createElement('li')
  newLi.textContent = input

  if(priority === "high"){
    newLi.style["color"] = "red"
  } else if (priority === "medium"){
    newLi.style["color"] = "orange"
  } else if (priority === "low"){
    newLi.style["color"] = "green"
  }

  let ul = document.querySelector("#tasks")
  ul.appendChild(newLi)

  let button = document.createElement("button")
  button.innerHTML = "X"

  newLi.appendChild(button)

  button.addEventListener('click', e => {
    e.target.parentElement.remove()
  })


};

let items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener("click", e => {
      e.target.remove();
    })
})


