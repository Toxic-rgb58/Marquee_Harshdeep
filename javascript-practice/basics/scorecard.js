let score=0
function IncrementScore(){
    score++;
    document.getElementById("score").textContent=score;
}
function DecrementScore(){
    if (score>0){
        score--;
        document.getElementById("score").textContent=score;
    }
}
document.getElementById("inc").addEventListener("click", IncrementScore);
document.getElementById("dec").addEventListener("click", DecrementScore);
