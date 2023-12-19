document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ourForm = document.getElementById("create-task-form")
  ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = document.getElementById("new-task-description").value
    createNode(inputValue)
    ourForm.reset()
  })
});

const ulList = document.getElementById("tasks")

function createNode(inputValue){
    const li = document.createElement("li")
    const btn = document.createElement("button")
    li.textContent = `${inputValue} `
    btn.textContent = " X"
    li.appendChild(btn)
    ulList.appendChild(li)

    btn.addEventListener("click", (e) =>{
        e.target.parentNode.remove()
    })
}