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