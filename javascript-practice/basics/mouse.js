let btn = document.getElementById("btn");
let message = document.getElementById("message");
btn.addEventListener("click", () => {
    message.textContent = "Click Event";
});
btn.addEventListener("dblclick", () => {
    message.textContent = "Double Click Event";
});
btn.addEventListener("mousedown", () => {
    message.textContent = "Mouse Down Event";
});
btn.addEventListener("mouseup", () => {
    message.textContent = "Mouse Up Event";
});
btn.addEventListener("mouseover", () => {
    message.textContent = "Mouse Over Event";
});
btn.addEventListener("mouseout", () => {
    message.textContent = "Mouse Out Event";
});
btn.addEventListener("mousemove", () => {
    message.textContent = "Mouse Move Event";
});
btn.addEventListener("mouseenter", () => {
    message.textContent = "Mouse Enter Event";
});
btn.addEventListener("mouseleave", () => {
    message.textContent = "Mouse Leave Event";
});