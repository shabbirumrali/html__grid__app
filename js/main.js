// focus
const inputs = document.querySelectorAll(".form_input")

// Add FOcus
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

// remove focus
function remfocus() {
    let parent = this.parentNode.parentNode
    if(this.value == "") {
        parent.classList.remove("focus")
    }
}

// TO call function
inputs.forEach (input => {
    input.addEventListener("focus", addfocus)
    input.addEventListener("blur", remfocus)
})