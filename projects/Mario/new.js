let player = document.querySelector(".player-img");
let pipe = document.querySelector(".pipe-img");
let game = document.querySelector(".game");
let world = document.querySelector(".world");

let playerX = 50;
let playerY = 70;
let worldX = 0;
let moveRight = false;
let moveLeft = false;

let isJumping = false;
let velocityY = 0;
let gravity = 1;

function hasPipeCollision() {
    const playerRect = player.getBoundingClientRect();
    const pipeRect = pipe.getBoundingClientRect();

    const isHorizontalOverlap = playerRect.right > pipeRect.left && playerRect.left < pipeRect.right;
    const isVerticalOverlap = playerRect.bottom > pipeRect.top && playerRect.top < pipeRect.bottom;

    return isHorizontalOverlap && isVerticalOverlap;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveRight = true;
    }
    if (e.key === "ArrowLeft") {
        moveLeft = true;
    }

    if (e.key === "Spacebar" || e.key === " ") {
        if (!isJumping) {
            velocityY = 14;
            isJumping = true;
        }
    }
});



document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        moveRight = false;
    }
    if (e.key === "ArrowLeft") {
        moveLeft = false;
    }
});

function gameLoop() {
    const previousPlayerX = playerX;
    const previousWorldX = worldX;

    if (moveRight) {
        playerX += 5;
        worldX -= 5;
    }
    if (moveLeft) {
        playerX -= 5;
        worldX += 5;
    }

    if (isJumping) {
        playerY += velocityY;
        velocityY -= gravity;

        if (playerY <= 70) {
            playerY = 70;
            velocityY = 0;
            isJumping = false;
        }
    }

    player.style.left = playerX + "px";
    player.style.bottom = playerY + "px";
    world.style.transform = `translateX(${worldX}px)`;

    if (hasPipeCollision()) {
        playerX = previousPlayerX;
        worldX = previousWorldX;

        player.style.left = playerX + "px";
        world.style.transform = `translateX(${worldX}px)`;
    }

    requestAnimationFrame(gameLoop);
}
gameLoop();