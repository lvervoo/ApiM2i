var draggable = document.querySelector("#draggable")
var dropper = document.querySelector("#dropper")

dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})