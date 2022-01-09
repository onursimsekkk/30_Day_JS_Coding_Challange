// Get Out Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelector(".player__slider");

// Build out functions
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  // toggle button's innerHtml
  if (method === "pause") {
    toggle.innerHTML = "►";
  } else {
    toggle.innerHTML = "||";
  }
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

// Hook up the event listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));
