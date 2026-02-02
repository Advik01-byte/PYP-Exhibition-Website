let credits = 100;
let heat = 0;
let aiActive = false;
let gameActive = true;
const houses = [];

const gridDiv = document.getElementById('grid');
for (let i = 0; i < 9; i++) {
  const d = document.createElement('div');
  d.className = 'house powered';
  d.innerText = '🏠';
  d.onmousedown = () => clickHouse(i);
  gridDiv.appendChild(d);
  houses.push({ el: d, status: 'on' });
}

function clickHouse(i) {
  if (!gameActive || aiActive) return;
  if (houses[i].status === 'leak') {
    houses[i].status = 'on';
    credits += 20;
  } else if (houses[i].status === 'off') {
    houses[i].status = 'on';
    credits += 5;
  }
  refreshVisuals();
}

function activateAI() {
  if (credits >= 110 && !aiActive && gameActive) {
    credits -= 110;
    aiActive = true;
    let timeLeft = 7000;
    
    const aiTicker = setInterval(() => {
      timeLeft -= 100;
      document.getElementById('timer-fill').style.width = (timeLeft / 70) + "%";
      
      if (timeLeft <= 0 || !gameActive) {
        clearInterval(aiTicker);
        aiActive = false;
        document.getElementById('timer-fill').style.width = "0%";
      }
    }, 100);
  }
}

function refreshVisuals() {
  houses.forEach(h => {
    h.el.className = 'house';
    if (aiActive) {
      h.status = 'on';
      h.el.classList.add('ai-mode');
    } else {
      if (h.status === 'on') h.el.classList.add('powered');
      if (h.status === 'off') h.el.classList.add('off');
      if (h.status === 'leak') h.el.classList.add('leak');
    }
  });
  
  document.getElementById('credits').innerText = Math.floor(credits);
  document.getElementById('heat').innerText = Math.floor(heat);
  document.getElementById('heat').className = heat > 70 ? 'danger' : '';
  
  const btn = document.getElementById('ai-btn');
  if (credits >= 110 && !aiActive) btn.classList.add('can-afford');
  else btn.classList.remove('can-afford');
}

setInterval(() => {
  if (!gameActive) return;

  if (!aiActive) {
    let darkCount = 0;
    houses.forEach(h => {
      if (Math.random() < 0.08) h.status = 'off';
      if (Math.random() < 0.03) h.status = 'leak';
      if (h.status === 'off') darkCount++;
      if (h.status === 'leak') credits -= 0.5;
    });
    heat += (darkCount * 0.5);
    heat -= 0.2;
  } else {
    heat -= 0.8;
  }

  if (heat < 0) heat = 0;
  if (heat >= 100) endGame("Grid Meltdown!");
  if (credits <= 0) endGame("Economy Collapsed!");
  
  refreshVisuals();
}, 500);

function endGame(m) {
  gameActive = false;
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('over-msg').innerText = m;

}

