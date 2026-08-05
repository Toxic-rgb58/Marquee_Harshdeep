const container = document.getElementById("container");
const result = document.getElementById("result");

// update student count
function updateCount() {
  result.innerText = "Total Students : " + container.children.length;
}

updateCount();

// Delete Card
// closest()

const deleteButtons = document.querySelectorAll(".deleteBtn");

for (let button of deleteButtons) {
  button.addEventListener("click", function () {
    this.closest(".card").remove();
    updateCount();
  });
}

// favorite Card

const favoriteButton = document.querySelectorAll(".favoriteBtn");

for (let button of favoriteButton) {
  button.addEventListener("click", function () {
    this.closest(".card").classList.toggle("favorite");
  });
}

const nextBtn = document.querySelectorAll(".nextBtn");

for (let button of nextBtn) {
  button.addEventListener("click", function () {
    let currentCard = this.closest(".card");
    let nextCard = currentCard.nextElementSibling;

    if (nextCard) {
      alert("Next Student: " + nextCard.children[0].innerText);
    } else {
      alert("No next student");
    }
  });
}

const prevBtn = document.querySelectorAll(".prevBtn");

for (let button of prevBtn) {
  button.addEventListener("click", function () {
    let currentCard = this.closest(".card");
    let prevCard = currentCard.previousElementSibling;

    if (prevCard) {
      alert("Prev Student: " + prevCard.children[0].innerText);
    } else {
      alert("No previous student");
    }
  });
}

const firstBtn = document.getElementById("firstBtn");
const lastBtn = document.getElementById("lastBtn");
const highlightBtn = document.getElementById("highlightBtn");
const resetBtn = document.getElementById("reset");
const countBtn = document.getElementById("countBtn");

firstBtn?.addEventListener("click", () => {
  const firstCard = container.querySelector(".card");
  if (firstCard) {
    alert("First Student: " + firstCard.querySelector("h2").innerText);
  } else {
    alert("No students available");
  }
});

lastBtn?.addEventListener("click", () => {
  const cards = container.querySelectorAll(".card");
  if (cards.length) {
    const lastCard = cards[cards.length - 1];
    alert("Last Student: " + lastCard.querySelector("h2").innerText);
  } else {
    alert("No students available");
  }
});

highlightBtn?.addEventListener("click", () => {
  container.querySelectorAll(".card").forEach((card) => {
    card.classList.add("favorite");
  });
});

resetBtn?.addEventListener("click", () => {
  container.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("favorite");
  });
  updateCount();
});

countBtn?.addEventListener("click", updateCount);