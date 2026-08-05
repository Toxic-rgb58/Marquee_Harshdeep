const box = document.querySelector('.cursor-box');
const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');
const modeToggle = document.querySelector('.mode');
const modeText = modeToggle.querySelector('span');
let stopTimer = null;

function setHeroBlur(state) {
  if (state) {
    hero.classList.add('blur');
  } else {
    hero.classList.remove('blur');
  }
}

function resetStopTimer() {
  if (stopTimer) {
    clearTimeout(stopTimer);
  }
  stopTimer = setTimeout(() => {
    setHeroBlur(false);
  }, 2000);
}

window.addEventListener('mousemove', (e) => {
  const offsetX = 30;
  const offsetY = 30;
  const x = e.clientX + offsetX;
  const y = e.clientY + offsetY;
  const overNavbar = e.target.closest('.navbar');
  const overVideoEmbed = e.target.closest('.video-embed');
  const overHero = e.target.closest('.hero');

  if (overNavbar || overVideoEmbed || !overHero) {
    box.classList.remove('visible');
    setHeroBlur(false);
    return;
  }

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
  box.classList.add('visible');
  setHeroBlur(true);
  resetStopTimer();
});

window.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget) {
    box.classList.remove('visible');
    setHeroBlur(false);
  }
});

window.addEventListener('mouseleave', () => {
  box.classList.remove('visible');
  setHeroBlur(false);
});

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  modeText.textContent = isDark ? 'LIGHT' : 'DARK';
});

const detailHover = document.querySelector('.home_intro_hover.is-first');
const detailCards = detailHover ? detailHover.querySelectorAll('.hover-popup img') : null;
let detailCycleTimer = null;
let detailTopIndex = 0;
let detailRevealIndex = 0;

function setDetailStackOrder(index) {
  if (!detailCards) return;
  const count = detailCards.length;
  detailCards.forEach((card, idx) => {
    card.classList.remove('position-top', 'position-middle', 'position-bottom');
    const relative = (idx - index + count) % count;
    if (relative === 0) {
      card.classList.add('position-top');
    } else if (relative === 1) {
      card.classList.add('position-middle');
    } else {
      card.classList.add('position-bottom');
    }
  });
}

function resetDetailCards() {
  detailCards.forEach((card) => {
    card.classList.remove('visible', 'position-top', 'position-middle', 'position-bottom');
  });
}

function detailCycleStep() {
  if (detailRevealIndex < detailCards.length) {
    detailCards[detailRevealIndex].classList.add('visible');
    detailRevealIndex += 1;
    return;
  }

  detailTopIndex = (detailTopIndex + 1) % detailCards.length;
  setDetailStackOrder(detailTopIndex);
}

function startDetailCycle() {
  if (!detailCards.length) return;
  clearInterval(detailCycleTimer);
  detailTopIndex = 0;
  detailRevealIndex = 0;
  resetDetailCards();
  setDetailStackOrder(detailTopIndex);
  detailCards[0].classList.add('visible');
  detailRevealIndex = 1;
  detailCycleTimer = setInterval(detailCycleStep, 1000);
}

function stopDetailCycle() {
  clearInterval(detailCycleTimer);
  detailCycleTimer = null;
  resetDetailCards();
  detailTopIndex = 0;
  setDetailStackOrder(detailTopIndex);
}

if (detailHover) {
  detailHover.addEventListener('mouseenter', startDetailCycle);
  detailHover.addEventListener('mouseleave', stopDetailCycle);
}

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const threshold = 20;

  if (currentScroll > threshold) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }

  lastScrollY = currentScroll;
});