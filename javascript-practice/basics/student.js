const form = document.getElementById("form")
const studentlist = document.getElementById("studentlist")
const users = [];
form.addEventListener("submit", function(event){
    event.preventDefault();
    const user = {
        name : document.getElementById("name").value,
        age  : document.getElementById("age").value,
        email : document.getElementById("email").value
    }
    users.push(user);
    console.log(users)
    studentlist.innerHTML=''
    users.forEach(function(srno){
        studentlist.innerHTML += `
        <li>
        ${srno.name} |
        ${srno.age} |
        ${srno.email}
        </li>
        `
    })
    form.reset();
});