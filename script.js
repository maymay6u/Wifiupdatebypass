let prankStarted = false;

function startPrank() {
  if (!prankStarted) {
    prankStarted = true;
    document.getElementById('black-screen').style.display = 'block'; // Black screen appears
    showHackingText("Your System been hacked⚠️", "green");
    
    setTimeout(() => {
      showHackingText("Hacking by Htetmyat!", "red");
      playHackingSound();
      
      setTimeout(() => {
        showHackingText("Scanning...", "red");
        
        setTimeout(() => {
          showHackingText("Your Telegram account been hacked⚠️", "red");
          
          setTimeout(() => {
            showHackingText("Your Mobilelegend account been hacked⚠️", "red");
            
            setTimeout(() => {
              showHackingText("Sorry for about that – from Htetmyat Aung", "red");
              
              setTimeout(() => {
                showHackingText("Good bye", "green");
                setTimeout(() => {
                  showChatboxLink();
                }, 3000); // After "Good bye", show chatbox link
              }, 5000); // Display Good bye for 5 seconds
            }, 7000); // Display Mobilelegend hacked for 7 seconds
          }, 10000); // Display Telegram hacked for 10 seconds
        }, 15000); // Display Scanning for 15 seconds
      }, 15000); // Display Hacking by Htetmyat for 15 seconds
    }, 3000); // Display Your System hacked for 3 seconds
  }
}

function showHackingText(text, color) {
  let prankText = document.getElementById('prank-text');
  prankText.innerHTML = text;
  prankText.style.color = color;
}

function playHackingSound() {
  let sound = new Audio('assets/hacking.mp3');
  sound.play();
}

function showChatboxLink() {
  let prankText = document.getElementById('prank-text');
  prankText.innerHTML = 'Come chatbox: <a href="https://t.me/ano5s4" target="_blank">t.me/ano5s4</a>';
  prankText.style.color = 'blue';
  prankText.style.fontSize = '18px';
}
