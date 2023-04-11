const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const aumentarButton = document.getElementById("aumentar");
const diminuirButton = document.getElementById("diminuir");

let intervalId;

//Events
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);

//functions
function startTimer() {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");

  let timeLeft = parseInt(minutosElement.value) * 60;

  intervalId = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    minutosElement.value = minutes;
    segundosElement.value = seconds;

    if (timeLeft === 0) {
      clearInterval(intervalId);
      playButton.classList.remove("hide");
      pauseButton.classList.add("hide");
    } else {
      timeLeft--;
    }
  }, 1000);
}

function pauseTimer() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  clearInterval(intervalId);
}
