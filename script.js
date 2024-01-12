var draggable = document.querySelector("#draggable")
var dropper = document.querySelector("#dropper")

dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})

dropper.addEventListener('dragenter', (event) => {
    dropper.style.backgroundColor = 'white'
})

dropper.addEventListener('dragleave', (event) => {
    dropper.style.backgroundColor = 'dodgerblue'
})

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', draggable.innerHTML)
})

dropper.addEventListener('drop', (event) => {
    const data = event.dataTransfer.getData('text/plain')
    dropper.innerHTML = `${data}  ${dropper.innerHTML}`
    dropper.style.backgroundColor = 'dodgerblue'
})