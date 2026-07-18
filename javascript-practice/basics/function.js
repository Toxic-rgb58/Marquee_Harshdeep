function greet(){
    console.log("Hello, welcome to JavaScript!");
}
btn.addEventListener("click", greet);
btn.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});