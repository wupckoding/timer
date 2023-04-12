const minutosDisplay = document.getElementById("minutos");
const segundosDisplay = document.getElementById("segundos");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const aumentarButton = document.getElementById("aumentar");
const diminuirButton = document.getElementById("diminuir");
const btns = document.querySelectorAll(".btn");

let btnAtivo = null; // variável para controlar qual botão está ativo
let intervalId;
let tempoTotal = 300; // 5 minutos em segundos
let tempoAtual = tempoTotal;
let isRunning = false;

// Events
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", pararTemporizador);
aumentarButton.addEventListener("click", aumentarTempo);
diminuirButton.addEventListener("click", diminuirTempo);

// Functions

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // remove a classe .btn-active de outros botões
    if (btnAtivo !== null && btnAtivo !== btn) {
      btnAtivo.classList.remove("btn-active");
    }

    // adiciona ou remove a classe .btn-active do botão clicado
    btn.classList.toggle("btn-active");

    // atualiza o botão ativo
    btnAtivo = btn;
  });
});

function startTimer() {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");

  intervalId = setInterval(() => {
    tempoAtual--;
    atualizarDisplay();
    if (tempoAtual === 0) {
      pararTemporizador();
    }
  }, 1000);
  isRunning = true;
}

function pauseTimer() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");

  clearInterval(intervalId);
  isRunning = false;
}

function atualizarDisplay() {
  const minutos = Math.floor(tempoAtual / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tempoAtual % 60).toString().padStart(2, "0");
  minutosDisplay.textContent = minutos;
  segundosDisplay.textContent = segundos;
}

function pararTemporizador() {
  clearInterval(intervalId);
  tempoAtual = tempoTotal;
  atualizarDisplay();
  isRunning = false;
}

function aumentarTempo() {
  if (!isRunning) {
    tempoTotal += 60;
    tempoAtual = tempoTotal;
    atualizarDisplay();
  }
}

function diminuirTempo() {
  if (!isRunning && tempoTotal > 60) {
    tempoTotal -= 60;
    tempoAtual = tempoTotal;
    atualizarDisplay();
  }
}


