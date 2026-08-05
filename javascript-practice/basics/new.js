const form = document.getElementById("form")
const output = document.getElementById("output")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const user = {
        name : document.getElementById("name").value,
        age  : document.getElementById("age").value,
        email : document.getElementById("email").value
    }
    console.log(user)
    output.innerText = JSON.stringify(user)
});