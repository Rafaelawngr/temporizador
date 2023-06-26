// ------ interações da tela -------

const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const close = document.querySelector("#close");

function newTimer() {
    page2.style.display = "flex";
    page1.style.display = "none";
}

function closeWindow() {
    page2.style.display = "none";
    page1.style.display = "block";
}

// ----- interações do temporizador ------

let temporizador = Number(document.querySelector("#tempo").value);

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const stop = document.querySelector("#cancel");

let inputHoras;
let inputMin;
let inputSeg;

let tempoRestante;
let intervalo;

function displayTimer(hh, mm, ss) {
    let resultado = document.querySelector("#tempo");

    if (hh < 10) {
        hh = "0" + hh;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }

    if (ss < 10) {
        ss = "0" + ss;
    }

    resultado.textContent = `${hh}:${mm}:${ss}`;
}

function userInputs() {
    inputHoras = Number(document.querySelector("#inputHora").value);
    inputMin = Number(document.querySelector("#inputMin").value);
    inputSeg = Number(document.querySelector("#inputSeg").value);
}

function addTimer() {
	
    userInputs();

    displayTimer(inputHoras, inputMin, inputSeg);

    closeWindow();
}

function startTimer() {
    tempoRestante = inputHoras * 3600 + inputMin * 60 + inputSeg;

    intervalo = setInterval(function () {
        tempoRestante--;
        if (tempoRestante <= 0) {
            clearInterval(intervalo);
        }

        inputHoras = Math.floor(tempoRestante / 3600);
        inputMin = Math.floor((tempoRestante % 3600) / 60);
        inputSeg = tempoRestante % 60;

        displayTimer(inputHoras, inputMin, inputSeg);
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalo);
}

function resetTimer() {
	userInputs()
	pauseTimer()
    displayTimer(inputHoras, inputMin, inputSeg);
}
