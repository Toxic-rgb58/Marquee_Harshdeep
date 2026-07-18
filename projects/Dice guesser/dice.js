function roll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    let guess = document.getElementById("guess").value;
    if (guess == dice) {
        document.getElementById("result").textContent = "You Guessed Correct!";
    } else {
        document.getElementById("result").textContent = "You Guessed Wrong!";
    }
}