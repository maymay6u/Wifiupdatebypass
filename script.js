const screen = document.getElementById('screen');
const content = document.getElementById('content');
const startBtn = document.getElementById('startBtn');
const message = document.getElementById('message');
const finalMessage = document.getElementById('finalMessage');
const telegramLink = document.getElementById('telegramLink');
const sound = document.getElementById('hackingSound');

const steps = [
  { text: 'Your System been hacked ⚠️', duration: 20000 },
  { text: 'Hacking by Htetmyat!', duration: 15000 },
  { text: 'Scanning all data...', duration: 15000 },
  { text: 'Your Telegram account been hacked ⚠️', duration: 15000 },
  { text: 'Processing...', duration: 10000 },
  { text: 'Your Mobilelegend account been hacked ⚠️', duration: 10000 },
  { text: 'System error detected...', duration: 7000 },
  { text: 'Sorry for about that – from Htetmyat Aung', duration: 10000 },
  { text: 'Good bye', duration: 5000 }
];

startBtn.onclick = () => {
  screen.style.display = 'none';
  startBtn.style.display = 'none';
  message.classList.remove('hidden');
  sound.play();
  let i = 0;

  function nextStep() {
    if (i < steps.length) {
      message.dataset.text = steps[i].text;
      message.textContent = steps[i].text;
      setTimeout(() => {
        i++;
        nextStep();
      }, steps[i].duration);
    } else {
      message.classList.add('hidden');
      finalMessage.textContent = 'Come Chatbox 👇';
      finalMessage.classList.remove('hidden');
      telegramLink.classList.remove('hidden');
    }
  }

  nextStep();
};

setTimeout(() => {
  screen.style.display = 'none';
  content.classList.remove('hidden');
}, 3000); // 3 sec black screen
