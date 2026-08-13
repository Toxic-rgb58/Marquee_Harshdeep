const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('score');
const coinsEl = document.getElementById('coins');
const livesEl = document.getElementById('lives');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const leaderScore = document.getElementById('leaderScore');
const startBtn = document.getElementById('startBtn');

const groundY = 452;
const groundHeight = 88;

let score = 0;
let coins = 0;
let worldProgress = 30;
let isRunning = false;
let flagReached = false;

const keys = {
  left: false,
  right: false
};

const clouds = [
  { x: 85, y: 60, speed: 0.35, scale: 1.0 },
  { x: 380, y: 95, speed: 0.42, scale: 0.88 },
  { x: 730, y: 42, speed: 0.38, scale: 1.10 }
];

const platforms = [
  { x: 0, y: 452, w: 960, h: 88, type: 'ground' },
  { x: 170, y: 396, w: 95, h: 20, type: 'brick' },
  { x: 308, y: 360, w: 105, h: 20, type: 'brick' },
  { x: 530, y: 350, w: 110, h: 20, type: 'brick' },
  { x: 690, y: 324, w: 105, h: 20, type: 'brick' }
];

const questionBlocks = [
  { x: 198, y: 330, w: 40, h: 40, value: 1, active: true },
  { x: 330, y: 300, w: 40, h: 40, value: 1, active: true },
  { x: 560, y: 283, w: 40, h: 40, value: 1, active: true },
  { x: 732, y: 262, w: 40, h: 40, value: 1, active: true }
];

const coinSeed = [
  { x: 135, y: 395, r: 10, taken: false },
  { x: 228, y: 350, r: 10, taken: false },
  { x: 330, y: 307, r: 10, taken: false },
  { x: 405, y: 348, r: 10, taken: false },
  { x: 558, y: 305, r: 10, taken: false },
  { x: 655, y: 300, r: 10, taken: false },
  { x: 728, y: 275, r: 10, taken: false },
  { x: 814, y: 295, r: 10, taken: false }
];

let coinsOnMap = coinSeed.map(coin => ({ ...coin }));

const enemies = [
  { x: 492, y: groundY - 24, w: 30, h: 24, minX: 450, maxX: 570, direction: 1, speed: 52, alive: true, bob: 0 },
  { x: 705, y: 314 - 24, w: 30, h: 24, minX: 700, maxX: 780, direction: -1, speed: 58, alive: true, bob: 0 }
];

const player = {
  x: 88,
  y: groundY - 50,
  w: 38,
  h: 50,
  speed: 270,
  vx: 0,
  vy: 0,
  jumpPower: 770,
  onGround: false,
  facing: 1,
  lives: 3,
  frame: 0
};

const goal = {
  x: 896,
  y: 250,
  w: 10,
  h: 202
};

function updateHud() {
  scoreEl.textContent = String(score).padStart(4, '0');
  coinsEl.textContent = String(coins).padStart(2, '0');
  livesEl.textContent = '♥'.repeat(player.lives) || '0';
  leaderScore.textContent = String(score).padStart(4, '0');

  const progress = Math.max(0, Math.min(100, worldProgress));
  progressFill.style.width = progress + '%';
  progressText.textContent = Math.round(progress) + '%';
}

function resetGame() {
  score = 0;
  coins = 0;
  worldProgress = 30;
  isRunning = false;
  flagReached = false;
  player.x = 88;
  player.y = groundY - player.h;
  player.vx = 0;
  player.vy = 0;
  player.onGround = false;
  player.lives = 3;
  player.frame = 0;

  coinsOnMap = coinSeed.map(coin => ({ ...coin }));

  enemies.forEach(enemy => {
    enemy.alive = true;
  });

  startBtn.textContent = 'Start Run';
  updateHud();
}

function drawSky() {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, '#78d3ef');
  sky.addColorStop(0.75, '#d1f1ce');
  sky.addColorStop(1, '#aeefaf');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fffde8';
  clouds.forEach(c => {
    c.x -= c.speed;
    if (c.x < -90) c.x = canvas.width + 80;

    const x = c.x;
    const y = c.y;
    const s = c.scale;

    ctx.beginPath();
    ctx.ellipse(x, y, 38 * s, 18 * s, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 28 * s, y, 24 * s, 14 * s, 0, 0, Math.PI * 2);
    ctx.ellipse(x - 28 * s, y + 2, 24 * s, 13 * s, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#fffefb';
    ctx.fill();
  });
}

function drawSun() {
  ctx.beginPath();
  ctx.arc(780, 86, 38, 0, Math.PI * 2);
  ctx.fillStyle = '#ffd43c';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(780, 86, 48, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 225, 105, 0.9)';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function drawMountains() {
  const mountains = [
    { points: [60, 330, 150, 160, 245, 330], color: '#21533c' },
    { points: [250, 330, 340, 160, 432, 330], color: '#244b37' },
    { points: [460, 330, 560, 160, 655, 330], color: '#21533c' },
    { points: [665, 330, 760, 160, 850, 330], color: '#244b37' }
  ];

  mountains.forEach((m, i) => {
    const [x1, y1, x2, y2, x3, y3] = m.points;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = m.color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 + 8, y3);
    ctx.lineTo(x2 - 8, y3);
    ctx.closePath();
    ctx.fillStyle = 'rgba(31, 95, 50, 0.84)';
    ctx.fill();
  });
}

function drawCastle() {
  const x = 790;
  const y = 260;
  ctx.fillStyle = '#b06f30';
  ctx.fillRect(x, y, 120, 180);

  ctx.fillStyle = '#4d3017';
  ctx.fillRect(x - 12, y + 8, 152, 24);

  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = '#222';
    ctx.fillRect(x + 12 + i * 27, y + 48, 12, 36);
  }

  ctx.fillStyle = '#ecf7ed';
  ctx.fillRect(x + 16, y + 128, 20, 44);
  ctx.fillRect(x + 84, y + 128, 20, 44);
}

function drawFlag() {
  const x = goal.x;
  const y = 240;

  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x, y - 28);
  ctx.lineTo(x, y + 150);
  ctx.stroke();

  ctx.fillStyle = '#f2d747';
  ctx.beginPath();
  ctx.moveTo(x, y - 28);
  ctx.lineTo(x + 58, y - 10);
  ctx.lineTo(x, y + 16);
  ctx.closePath();
  ctx.fill();
}

function drawPlatforms() {
  platforms.forEach(p => {
    if (p.type === 'ground') {
      ctx.fillStyle = '#ac6d22';
      ctx.fillRect(p.x, p.y, p.w, p.h);

      ctx.fillStyle = '#40944d';
      ctx.fillRect(p.x, p.y + 15, p.w, p.h - 15);

      ctx.strokeStyle = '#66401b';
      ctx.strokeRect(p.x, p.y, p.w, p.h);

      ctx.fillStyle = '#b98226';
      for (let x = 0; x < p.w; x += 40) {
        ctx.fillRect(p.x + x, p.y + 9, 3, p.h - 5);
      }
    } else {
      ctx.fillStyle = '#b07a2d';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = '#3a2110';
      ctx.strokeRect(p.x, p.y, p.w, p.h);

      ctx.strokeStyle = '#ffd46d';
      ctx.beginPath();
      ctx.moveTo(p.x + 2, p.y + 3);
      ctx.lineTo(p.x + p.w - 2, p.y + 3);
      ctx.stroke();
    }
  });
}

function drawBlocks() {
  questionBlocks.forEach(block => {
    ctx.fillStyle = '#bd621d';
    ctx.fillRect(block.x, block.y, block.w, block.h);
    ctx.strokeStyle = '#ffd867';
    ctx.strokeRect(block.x, block.y, block.w, block.h);
    ctx.fillStyle = '#ffd967';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('?', block.x + 13, block.y + 27);
  });
}

function drawPlayer() {
  const x = Math.round(player.x);
  const y = Math.round(player.y);

  const bob = player.onGround ? Math.round(Math.sin(player.frame / 7) * 2) : 0;

  ctx.fillStyle = '#e6382e';
  ctx.fillRect(x + 6, y + bob, player.w - 10, 22);

  ctx.fillStyle = '#1b2465';
  ctx.fillRect(x, y + 24 + bob, player.w, 24);

  ctx.fillStyle = '#f2b184';
  ctx.fillRect(x + 4, y + 2 + bob, player.w - 8, 20);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(x + 3, y + 45 + bob, 5, 10);
  ctx.fillRect(x + player.w - 7, y + 45 + bob, 5, 10);

  ctx.fillStyle = '#fff';
  ctx.fillRect(x + 11, y + 8 + bob, 5, 5);

  ctx.strokeStyle = '#3b210a';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x + 8, y + 34 + bob);
  ctx.lineTo(x - 6, y + 42 + bob);
  ctx.moveTo(x + 27, y + 34 + bob);
  ctx.lineTo(x + 36, y + 42 + bob);
  ctx.stroke();
}

function drawCoins() {
  coinsOnMap.forEach(coin => {
    if (coin.taken) return;

    ctx.beginPath();
    ctx.arc(coin.x, coin.y, coin.r, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd52a';
    ctx.fill();
    ctx.strokeStyle = '#9a6e10';
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function drawEnemies() {
  enemies.forEach(enemy => {
    if (!enemy.alive) return;

    const x = enemy.x;
    const y = enemy.y;

    ctx.fillStyle = '#458d32';
    ctx.fillRect(x, y + 4, enemy.w, enemy.h);

    ctx.strokeStyle = '#234d12';
    ctx.strokeRect(x, y + 4, enemy.w, enemy.h);

    ctx.fillStyle = '#8b5a2b';
    ctx.fillRect(x + 3, y + 3, enemy.w - 6, 5);

    ctx.fillStyle = '#fff';
    ctx.fillRect(x + 5, y + 9, 4, 4);
    ctx.fillRect(x + enemy.w - 9, y + 9, 4, 4);
  });
}

function drawGameStatus() {
  if (!isRunning && !flagReached) {
    ctx.fillStyle = 'rgba(20, 30, 25, 0.55)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px Arial';
    ctx.fillText('Press Start', canvas.width / 2, canvas.height / 2);
  }

  if (flagReached) {
    ctx.fillStyle = 'rgba(0,0,0,0.76)';
    ctx.fillRect(120, 145, canvas.width - 240, 210);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 38px Arial';
    ctx.fillText('Castle Reached!', canvas.width / 2, 230);
    ctx.font = 'bold 22px Arial';
    ctx.fillText('You won the run!', canvas.width / 2, 278);
    ctx.fillText('Score: ' + score, canvas.width / 2, 314);
  }
}

function drawWorld() {
  drawSky();
  drawSun();
  drawMountains();
  drawCastle();
  drawFlag();
  drawPlatforms();
  drawBlocks();
  drawCoins();
  drawEnemies();
  drawPlayer();
  drawGameStatus();
}

function updateGame(dt) {
  if (!isRunning) return;

  if (keys.left) {
    player.vx = -player.speed;
    player.facing = -1;
  } else if (keys.right) {
    player.vx = player.speed;
    player.facing = 1;
  } else {
    player.vx *= 0.82;
    if (Math.abs(player.vx) < 5) player.vx = 0;
  }

  player.vy += 2100 * dt;

  const previousY = player.y;

  player.x += player.vx * dt;

  if (player.x < 0) player.x = 0;
  if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;

  player.y += player.vy * dt;
  player.onGround = false;

  platforms.forEach(p => {
    if (!rectsIntersect(player, p)) return;

    const playerBottom = player.y + player.h;
    const previousBottom = previousY + player.h;

    if (player.vy > 0 && previousBottom <= p.y + 7) {
      player.y = p.y - player.h;
      player.vy = 0;
      player.onGround = true;
    } else if (player.vy < 0 && previousY >= p.y + p.h - 7) {
      player.y = p.y + p.h;
      player.vy = 0;
    }
  });

  enemies.forEach(enemy => {
    if (!enemy.alive) return;

    enemy.x += enemy.direction * enemy.speed * dt;
    enemy.bob += dt * 6;

    if (enemy.x <= enemy.minX) {
      enemy.x = enemy.minX;
      enemy.direction = 1;
    } else if (enemy.x + enemy.w >= enemy.maxX) {
      enemy.x = enemy.maxX - enemy.w;
      enemy.direction = -1;
    }
  });

  coinsOnMap.forEach(coin => {
    if (!coin.taken && circleRectCollision(coin.x, coin.y, coin.r, player.x, player.y, player.w, player.h)) {
      coin.taken = true;
      coins += 1;
      score += 25;
      worldProgress = Math.min(100, worldProgress + 3);
    }
  });

  enemies.forEach(enemy => {
    if (enemy.alive && rectsIntersect(player, enemy)) {
      enemy.alive = false;
      player.lives -= 1;
      score = Math.max(0, score - 30);

      if (player.lives <= 0) {
        isRunning = false;
        startBtn.textContent = 'Restart Run';
      } else {
        player.x = Math.max(20, player.x - 60);
        player.y = groundY - player.h;
        player.vy = 0;
      }
    }
  });

  if (player.x + player.w >= goal.x) {
    flagReached = true;
    isRunning = false;
    score += 500;
    startBtn.textContent = 'Run Again';
  }

  if (worldProgress < 100 && player.x > 20) {
    worldProgress = Math.min(100, 30 + Math.round((player.x / (canvas.width - 100)) * 70));
  }

  player.frame++;
  updateHud();
}

function circleRectCollision(cx, cy, radius, rx, ry, rw, rh) {
  const closestX = Math.max(rx, Math.min(cx, rx + rw));
  const closestY = Math.max(ry, Math.min(cy, ry + rh));

  const dx = cx - closestX;
  const dy = cy - closestY;

  return dx * dx + dy * dy < radius * radius;
}

function rectsIntersect(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

function jump() {
  if (player.onGround) {
    player.vy = -player.jumpPower;
    player.onGround = false;
    score += 2;
    updateHud();
  }
}

function animate(time = 0) {
  if (!animate.last) animate.last = time;

  const dt = Math.min(0.024, (time - animate.last) / 1000 || 0);
  animate.last = time;

  updateGame(dt);
  drawWorld();
  requestAnimationFrame(animate);
}

function addControls() {
  window.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
      keys.left = true;
      event.preventDefault();
    }

    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
      keys.right = true;
      event.preventDefault();
    }

    if (event.key === ' ' || event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
      event.preventDefault();
      jump();
    }
  });

  window.addEventListener('keyup', event => {
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
      keys.left = false;
    }

    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
      keys.right = false;
    }
  });

  document.getElementById('leftBtn').addEventListener('click', () => {
    keys.left = true;
    setTimeout(() => { keys.left = false; }, 80);
  });

  document.getElementById('rightBtn').addEventListener('click', () => {
    keys.right = true;
    setTimeout(() => { keys.right = false; }, 80);
  });

  document.getElementById('jumpBtn').addEventListener('click', () => {
    jump();
  });
}

startBtn.addEventListener('click', () => {
  if (flagReached || player.lives <= 0) {
    resetGame();
  }

  isRunning = !isRunning;
  startBtn.textContent = isRunning ? 'Pause Run' : 'Start Run';

  if (isRunning) {
    score += 10;
    worldProgress = Math.min(100, worldProgress + 5);
    updateHud();
  }
});

function init() {
  updateHud();
  addControls();
  drawWorld();
  requestAnimationFrame(animate);
}

init();
