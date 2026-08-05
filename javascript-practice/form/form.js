const form = document.getElementById("form")
form.addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
document.getElementById('output').innerText = "Welcome "
+name
});
// const box = document.getElementById('box')
// box.addEventListener('input', function(){
// document.getElementById('res').innerText = box.value
// });
// const box = document.getElementById('box')
// box.addEventListener('change', function(){
// res.innerText = box.value
// });
box.addEventListener('blur', function(){
    box.style.background = "black"
});
box.addEventListener('focus', function(){
    box.style.background = "white"
});
const username= document.getElementById("username")
username.addEventListener('invalid', function(){
    alert("Name Required")
});
const fullname = document.getElementById("fullname")
fullname.addEventListener("select",function(){
    alert("Text Selected")
});