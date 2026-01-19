const UPGRADES = {
  click: {
    1: { from: 1, to: 2, price: 50 },
    2: { from: 2, to: 5, price: 205 },
    3: { from: 5, to: 10, price: 350 },
    4: { from: 10, to: 'MAX', price: 0 }
  },
  auto: {
    1: { from: 0,  to: 1, price: 100 },
    2: { from: 1,  to: 2, price: 205 },
    3: { from: 2,  to: 5, price: 500 },
    4: { from: 5,  to: 10, price: 1200 },
    5: { from: 10, to: 'MAX', price: 0 }
  }
};

let money = parseInt(localStorage.getItem('score')) || 0;
let upgradeLevel = parseInt(localStorage.getItem('upgradeCounter')) || 1;
let autoLevel = parseInt(localStorage.getItem('autoclickerCounter')) || 1;
let isAutoRunning = localStorage.getItem('stopAutoclicker') !== 'true';
let isAutoVisible = localStorage.getItem('autoclickerVisibility') === 'true';
let intervalID;

function createFloatingText(amount, x, y) {
  const floatingText = document.createElement('div');
  floatingText.innerHTML = `+$${amount}`;
  floatingText.style.position = 'fixed';
  floatingText.style.left = x ? `${x}px` : '50%';
  floatingText.style.top = y ? `${y}px` : '50%';
  floatingText.style.transform = 'translate(-50%, -50%)';
  floatingText.style.color = '#2ecc71';
  floatingText.style.fontWeight = 'bold';
  floatingText.style.fontSize = '24px';
  floatingText.style.pointerEvents = 'none';
  floatingText.style.zIndex = '9999';
  floatingText.style.animation = 'floatUp 1s ease-out forwards';

  if (!document.getElementById('floating-style')) {
    const style = document.createElement('style');
    style.id = 'floating-style';
    style.innerHTML = `
      @keyframes floatUp {
        0% { opacity: 1; transform: translate(-50%, -50%); }
        100% { opacity: 0; transform: translate(-50%, -150%); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(floatingText);
  setTimeout(() => floatingText.remove(), 1000);
}

function saveData() {
  localStorage.setItem('score', money);
  localStorage.setItem('upgradeCounter', upgradeLevel);
  localStorage.setItem('autoclickerCounter', autoLevel);
  localStorage.setItem('stopAutoclicker', !isAutoRunning);
  localStorage.setItem('autoclickerVisibility', isAutoVisible);
}

function updateUI() {
  const moneyEl = document.querySelector('.user-money');
  if (moneyEl) moneyEl.innerHTML = money;

  const clickInfoEl = document.querySelector('.upgrade-info');
  if (clickInfoEl) {
    const cData = UPGRADES.click[upgradeLevel];
    clickInfoEl.innerHTML = upgradeLevel >= 4 
      ? `YOU HAVE MAX UPGRADED THIS ITEM!!!` 
      : `Upgrade from $${cData.from}/click to $${cData.to}/click | COST: $${cData.price}`;
  }

  const autoInfoEl = document.querySelector('.autoclicker-info');
  if (autoInfoEl) {
    const aData = UPGRADES.auto[autoLevel];
    const isMaxed = autoLevel >= 5;
    const actionText = !isAutoVisible ? "Buy" : "Upgrade";
    autoInfoEl.innerHTML = isMaxed 
      ? `YOU HAVE MAX UPGRADED THIS ITEM!!!` 
      : `${actionText} autoclicker: $${aData.to}/sec | COST: $${aData.price}`;
  }

  const stopBtn = document.querySelector('.stop-autoclicker');
  if (stopBtn) {
    stopBtn.style.display = isAutoVisible ? "initial" : "none";
    stopBtn.innerHTML = isAutoRunning ? 'Stop Autoclicker' : 'Start Autoclicker';
  }
}

function startAutoclicker() {
  clearInterval(intervalID);
  if (isAutoVisible && isAutoRunning && autoLevel > 1) {
    intervalID = setInterval(() => {
      const income = UPGRADES.auto[Math.min(autoLevel, 5)].from;
      money += income;
      createFloatingText(income);
      updateUI();
      saveData();
    }, 1000);
  }
}

const appleImg = document.getElementById('apple-image');
if (appleImg) {
  appleImg.addEventListener('click', (e) => {
    const clickPower = UPGRADES.click[Math.min(upgradeLevel, 4)].from;
    money += clickPower;
    createFloatingText(clickPower, e.clientX, e.clientY);
    updateUI();
    saveData();
  });
}

document.querySelector('.upgrade-button').addEventListener('click', () => {
  const data = UPGRADES.click[upgradeLevel];
  if (upgradeLevel >= 4) return alert("Already Maxed!");
  if (money >= data.price) {
    money -= data.price;
    upgradeLevel++;
    updateUI();
    saveData();
  } else {
    alert(`Need $${data.price - money} more!`);
  }
});

document.querySelector('.autoclicker-upgrade-button').addEventListener('click', () => {
  const data = UPGRADES.auto[autoLevel];
  if (autoLevel >= 5) return alert("Already Maxed!");
  if (money >= data.price) {
    money -= data.price;
    autoLevel++;
    isAutoVisible = true;
    isAutoRunning = true;
    startAutoclicker();
    updateUI();
    saveData();
  } else {
    alert(`Need $${data.price - money} more!`);
  }
});

document.querySelector('.stop-autoclicker').addEventListener('click', () => {
  isAutoRunning = !isAutoRunning;
  isAutoRunning ? startAutoclicker() : clearInterval(intervalID);
  updateUI();
  saveData();
});

document.querySelector('.reset-button').addEventListener('click', () => {
  clearInterval(intervalID);
  localStorage.clear();
  location.reload();
});

updateUI();
startAutoclicker();