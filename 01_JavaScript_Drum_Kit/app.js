function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; // stop the function if the pressed key is not assigned
  audio.currentTime = 0; // rewind to start - prevent waiting before audio finish
  key.classList.add("playing"); // Add press animation 
  audio.play();
  
  // Remove press animation
  setTimeout(function() {
    key.classList.remove("playing")
  }, 100);
}

document.addEventListener('keypress', playSound);