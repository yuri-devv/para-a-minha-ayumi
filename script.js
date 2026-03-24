
const container = document.getElementById('petals');
const symbols = ['🌸','🌷','💕','🌺','✿'];

for (let i = 0; i < 22; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
  p.style.animationDuration = (6 + Math.random() * 10) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  container.appendChild(p);
}

// Day counter
const start = new Date('2025-12-03T00:00:00');
const today = new Date();
const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
document.getElementById('days').textContent = diff;

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  });
}, { threshold: 0.15 });

reveals.forEach(r => obs.observe(r));