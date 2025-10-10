const statesData = [
    { name: "Acre", abbr: "AC", region: "Norte" }, { name: "Amapá", abbr: "AP", region: "Norte" }, { name: "Amazonas", abbr: "AM", region: "Norte" }, { name: "Pará", abbr: "PA", region: "Norte" }, { name: "Rondônia", abbr: "RO", region: "Norte" }, { name: "Roraima", abbr: "RR", region: "Norte" }, { name: "Tocantins", abbr: "TO", region: "Norte" },
    { name: "Alagoas", abbr: "AL", region: "Nordeste" }, { name: "Bahia", abbr: "BA", region: "Nordeste" }, { name: "Ceará", abbr: "CE", region: "Nordeste" }, { name: "Maranhão", abbr: "MA", region: "Nordeste" }, { name: "Paraíba", abbr: "PB", region: "Nordeste" }, { name: "Pernambuco", abbr: "PE", region: "Nordeste" }, { name: "Piauí", abbr: "PI", region: "Nordeste" }, { name: "Rio Grande do Norte", abbr: "RN", region: "Nordeste" }, { name: "Sergipe", abbr: "SE", region: "Nordeste" },
    { name: "Goiás", abbr: "GO", region: "Centro-Oeste" }, { name: "Mato Grosso", abbr: "MT", region: "Centro-Oeste" }, { name: "Mato Grosso do Sul", abbr: "MS", region: "Centro-Oeste" }, { name: "Distrito Federal", abbr: "DF", region: "Centro-Oeste" },
    { name: "Espírito Santo", abbr: "ES", region: "Sudeste" }, { name: "Minas Gerais", abbr: "MG", region: "Sudeste" }, { name: "Rio de Janeiro", abbr: "RJ", region: "Sudeste" }, { name: "São Paulo", abbr: "SP", region: "Sudeste" },
    { name: "Paraná", abbr: "PR", region: "Sul" }, { name: "Rio Grande do Sul", abbr: "RS", region: "Sul" }, { name: "Santa Catarina", abbr: "SC", region: "Sul" },
];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const flagImage = document.getElementById("flag-image");
const triesCount = document.getElementById("tries-count");
const feedbackMessage = document.getElementById("feedback-message");
const finalScore = document.getElementById("final-score");
const playAgainBtn = document.getElementById("play-again-btn");
const progressBarInner = document.getElementById("progress-bar-inner");
const questionText = document.getElementById("question-text");
const progressBar = document.getElementById("progress-bar");
const comboText = document.getElementById("combo-text");
const practiceSuggestion = document.getElementById("practice-suggestion");
const normalModeQuestion = document.getElementById("normal-mode-question");
const normalModeOptions = document.getElementById("normal-mode-options");
const reverseModeOptions = document.getElementById("reverse-mode-options");
const optionsGridNormal = document.getElementById("options-grid-normal");
const optionsGridReverse = document.getElementById("options-grid-reverse");
const mainMenu = document.getElementById("main-menu");
const modalOverlay = document.getElementById("modal-overlay");
const modeModal = document.getElementById("mode-modal");
const regionModal = document.getElementById("region-modal");
const quitModal = document.getElementById("quit-modal");
const settingsModal = document.getElementById("settings-modal");
const modeNormalBtn = document.getElementById("mode-normal-btn");
const modeReverseBtn = document.getElementById("mode-reverse-btn");
const modeModalBackBtn = document.getElementById("mode-modal-back-btn");
const modalRegionSelection = document.getElementById("modal-region-selection");
const regionModalBackBtn = document.getElementById("region-modal-back-btn");
const ingameBackBtn = document.getElementById("ingame-back-btn");
const quitConfirmBtn = document.getElementById("quit-confirm-btn");
const quitCancelBtn = document.getElementById("quit-cancel-btn");
const settingsBtn = document.getElementById("settings-btn");
const settingsModalBackBtn = document.getElementById("settings-modal-back-btn");
const startScreenSettingsBtn = document.getElementById("start-screen-settings-btn");
const timerDisplay = document.getElementById("timer");
const avgTimeDisplay = document.getElementById("avg-time");
const totalTimeEndDisplay = document.getElementById("total-time-end");
const avgTimeEndDisplay = document.getElementById("avg-time-end");
const soundToggle = document.getElementById("sound-toggle");
const musicToggle = document.getElementById("music-toggle");
const musicPlayer = document.getElementById("music-player");

let gameStates = [], currentIndex = 0, tries = 3, score = 0, totalQuestions = 0;
let gameMode = "normal";
let gameType = "marathon";
let timerInterval, questionStartTime, totalElapsedTime = 0;
let comboStreak = 0;
let comboTimeout;
let missedStatesByRegion = {};
let audioCtx;
let isSoundEnabled = true;
let isMusicEnabled = true;
const songs = [];
let currentSongIndex = 0;
let isMusicInitialized = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

function playCorrectSound() {
    if (!audioCtx || !isSoundEnabled) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    oscillator.start(audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.2);
    oscillator.stop(audioCtx.currentTime + 0.2);
}

function playNextSong() {
    if (!isMusicEnabled || songs.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    musicPlayer.src = `songs/${songs[currentSongIndex]}`;
    musicPlayer.play().catch((e) => console.error("Music play failed:", e));
}

function toggleMusic() {
    if (isMusicEnabled && songs.length > 0) {
        if (musicPlayer.paused) {
            musicPlayer.play().catch((e) => console.error("Music play failed:", e));
        }
    } else {
        musicPlayer.pause();
    }
}

function startGame(region) {
    if (region === "all") {
        gameStates = [...statesData];
    } else {
        gameStates = statesData.filter((state) => state.region === region);
    }
    shuffleArray(gameStates);
    currentIndex = 0;
    score = 0;
    tries = 3;
    totalQuestions = gameStates.length;
    totalElapsedTime = 0;
    comboStreak = 0;
    missedStatesByRegion = { Norte: 0, Nordeste: 0, "Centro-Oeste": 0, Sudeste: 0, Sul: 0 };
    updateComboDisplay();
    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    gameScreen.style.display = "flex";
    updateTriesDisplay();
    avgTimeDisplay.textContent = "0.0s";
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= gameStates.length || tries <= 0) {
        endGame();
        return;
    }
    updateProgressBar();
    feedbackMessage.textContent = "";
    feedbackMessage.className = "feedback-message";
    const currentState = gameStates[currentIndex];
    resumeTimer();
    if (gameMode === "normal") {
        questionText.textContent = "Qual estado tem esta bandeira?";
        normalModeQuestion.classList.remove("hidden");
        normalModeOptions.classList.remove("hidden");
        reverseModeOptions.classList.add("hidden");
        flagImage.src = `flags/${currentState.abbr.toLowerCase()}.svg`;
        generateOptionsNormal(currentState);
    } else {
        questionText.textContent = `Qual é a bandeira de ${currentState.name}?`;
        normalModeQuestion.classList.add("hidden");
        normalModeOptions.classList.add("hidden");
        reverseModeOptions.classList.remove("hidden");
        generateOptionsReverse(currentState);
    }
}

function generateOptionsNormal(correctState) {
    optionsGridNormal.innerHTML = "";
    const options = generateOptionSet(correctState);
    options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.name;
        button.className = "option-button-text solid-shadow";
        button.onclick = (event) => checkAnswer(option.name, correctState.name, button, optionsGridNormal, event);
        optionsGridNormal.appendChild(button);
    });
}

function generateOptionsReverse(correctState) {
    optionsGridReverse.innerHTML = "";
    const options = generateOptionSet(correctState);
    options.forEach((option) => {
        const button = document.createElement("button");
        button.dataset.name = option.name;
        button.className = "option-button-image solid-shadow";
        const img = document.createElement("img");
        img.src = `flags/${option.abbr.toLowerCase()}.svg`;
        img.alt = `Bandeira de ${option.name}`;
        img.className = "option-button-image__img";
        button.appendChild(img);
        button.onclick = (event) => checkAnswer(option.name, correctState.name, button, optionsGridReverse, event);
        optionsGridReverse.appendChild(button);
    });
}

function generateOptionSet(correctState) {
    const options = [correctState];
    let otherStates = statesData.filter((s) => s.name !== correctState.name);
    if (gameType === "region") {
        const statesInRegion = statesData.filter((s) => s.region === correctState.region && s.name !== correctState.name);
        if (statesInRegion.length >= 3) otherStates = statesInRegion;
    }
    shuffleArray(otherStates);
    for (let i = 0; options.length < 4 && i < otherStates.length; i++) {
        if (!options.some((opt) => opt.name === otherStates[i].name))
            options.push(otherStates[i]);
    }
    return shuffleArray(options);
}

function checkAnswer(selectedName, correctName, button, grid, event) {
    const guessTime = (Date.now() - questionStartTime) / 1000;
    const timeFloatEl = document.createElement("span");
    timeFloatEl.textContent = `${guessTime.toFixed(1)}s`;
    timeFloatEl.className = "time-float font-mono-custom";
    timeFloatEl.style.left = `${event.pageX}px`;
    timeFloatEl.style.top = `${event.pageY}px`;
    document.body.appendChild(timeFloatEl);
    timeFloatEl.addEventListener("animationend", () => timeFloatEl.remove());
    clearInterval(timerInterval);
    totalElapsedTime += Date.now() - questionStartTime;
    timerDisplay.textContent = formatTime(totalElapsedTime / 1000);
    Array.from(grid.children).forEach((btn) => (btn.disabled = true));
    if (selectedName === correctName) handleCorrectAnswer(button, grid);
    else handleWrongAnswer(button, correctName, grid);
}

function handleCorrectAnswer(button, grid) {
    playCorrectSound();
    button.classList.add("solid-shadow-correct");
    feedbackMessage.textContent = "Correto!";
    feedbackMessage.classList.add("text-green-600");
    score++;
    comboStreak++;
    updateComboDisplay();
    updateAverageTime();
    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 1500);
}

function handleWrongAnswer(button, correctName, grid) {
    tries--;
    comboStreak = 0;
    updateComboDisplay();
    updateTriesDisplay();
    if (gameType === "marathon") {
        const missedState = gameStates[currentIndex];
        missedStatesByRegion[missedState.region]++;
    }
    button.classList.add("solid-shadow-wrong");
    if (gameMode === "normal") {
        feedbackMessage.textContent = `A resposta era ${correctName}.`;
    } else {
        feedbackMessage.textContent = "Errado!";
    }
    feedbackMessage.classList.add("text-red-600");
    Array.from(grid.children).forEach((btn) => {
        const btnName = gameMode === "reverse" ? btn.dataset.name : btn.textContent;
        if (btnName === correctName) {
            btn.classList.add("solid-shadow-correct");
        }
    });
    if (tries <= 0) {
        if (gameMode === 'normal') {
            feedbackMessage.textContent = `Você ficou sem vidas! A resposta era ${correctName}.`;
        } else {
            feedbackMessage.textContent = `Você ficou sem vidas!`;
        }
        setTimeout(endGame, 2500);
    } else {
        gameStates.push(gameStates[currentIndex]);
        setTimeout(() => {
            currentIndex++;
            loadQuestion();
        }, 2000);
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameScreen.style.display = "none";
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    const endTitle = document.querySelector("#end-screen h2");
    const avgTime = score > 0 ? totalElapsedTime / 1000 / score : Infinity;
    if (tries <= 0) {
        endTitle.textContent = "Você ficou sem vidas!";
    } else {
        if (avgTime < 3) {
            endTitle.textContent = "Incrível! Você é um mestre!";
        } else if (avgTime < 5) {
            endTitle.textContent = "Muito bem! Continue assim!";
        } else {
            endTitle.textContent = "Bom jogo! Continue praticando!";
        }
    }
    practiceSuggestion.textContent = "";
    if (gameType === "marathon") {
        const totalMisses = Object.values(missedStatesByRegion).reduce((sum, count) => sum + count, 0);
        if (totalMisses > 0) {
            let worstRegion = "";
            let maxMisses = -1;
            for (const [region, count] of Object.entries(missedStatesByRegion)) {
                if (count > maxMisses) {
                    maxMisses = count;
                    worstRegion = region;
                }
            }
            practiceSuggestion.textContent = `Você precisa praticar mais a região ${worstRegion}!`;
        }
    }
    const totalTime = totalElapsedTime / 1000;
    finalScore.textContent = `${score} / ${totalQuestions}`;
    totalTimeEndDisplay.textContent = formatTime(totalTime);
    avgTimeEndDisplay.textContent = `${avgTime === Infinity ? 0 : avgTime.toFixed(1)}s`;
}

function updateTriesDisplay() {
    triesCount.textContent = tries;
}

function updateProgressBar() {
    const progress = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    progressBarInner.style.width = `${progress}%`;
}

function updateAverageTime() {
    const currentAvg = score > 0 ? (totalElapsedTime / 1000 / score).toFixed(1) : "0.0";
    avgTimeDisplay.textContent = `${currentAvg}s`;
}

function updateComboDisplay() {
    clearTimeout(comboTimeout);
    if (comboStreak >= 2) {
        progressBar.classList.add("combo-active");
        comboText.textContent = `${comboStreak}X`;
        const shakeIntensity = Math.min(1.5, (comboStreak - 1) * 0.25);
        const rotateIntensity = Math.min(2, (comboStreak - 1) * 0.4);
        comboText.style.setProperty("--shake-x", `${shakeIntensity}px`);
        comboText.style.setProperty("--shake-y", `${shakeIntensity}px`);
        comboText.style.setProperty("--shake-rotate", `${rotateIntensity}deg`);
        comboTimeout = setTimeout(() => {
            progressBar.classList.remove("combo-active");
        }, 2000);
    } else {
        progressBar.classList.remove("combo-active");
        comboText.style.setProperty("--shake-x", `0px`);
        comboText.style.setProperty("--shake-y", `0px`);
        comboText.style.setProperty("--shake-rotate", `0deg`);
    }
}

function resumeTimer() {
    questionStartTime = Date.now();
    timerInterval = setInterval(() => {
        const currentQuestionTime = Date.now() - questionStartTime;
        const newTotalTime = totalElapsedTime + currentQuestionTime;
        timerDisplay.textContent = formatTime(newTotalTime / 1000);
    }, 1000);
}

const openModal = (modal) => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
};

const closeModal = (modal) => {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
};

function initAudio() {
    if (!isMusicInitialized) {
        isMusicInitialized = true;
        if (!audioCtx) {
            try {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.error("Web Audio API is not supported.");
            }
        }
        toggleMusic();
    }
}

mainMenu.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button && button.dataset.type) {
        initAudio();
        gameType = button.dataset.type;
        openModal(modeModal);
    }
});

modeNormalBtn.addEventListener("click", () => {
    gameMode = "normal";
    closeModal(modeModal);
    gameType === "region" ? openModal(regionModal) : startGame("all");
});

modeReverseBtn.addEventListener("click", () => {
    gameMode = "reverse";
    closeModal(modeModal);
    gameType === "region" ? openModal(regionModal) : startGame("all");
});

modeModalBackBtn.addEventListener("click", () => closeModal(modeModal));

modalRegionSelection.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        closeModal(regionModal);
        setTimeout(() => startGame(e.target.dataset.region), 200);
    }
});

regionModalBackBtn.addEventListener("click", () => {
    closeModal(regionModal)
    openModal(modeModal)
});

ingameBackBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    totalElapsedTime += Date.now() - questionStartTime;
    openModal(quitModal);
});

quitConfirmBtn.addEventListener("click", () => {
    closeModal(quitModal);
    comboStreak = 0;
    updateComboDisplay();
    gameScreen.style.display = "none";
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

quitCancelBtn.addEventListener("click", () => {
    closeModal(quitModal);
    resumeTimer();
});

settingsBtn.addEventListener("click", () => openModal(settingsModal));
startScreenSettingsBtn.addEventListener("click", () => openModal(settingsModal));
settingsModalBackBtn.addEventListener("click", () => closeModal(settingsModal));

soundToggle.addEventListener("change", () => {
    isSoundEnabled = soundToggle.checked;
});

musicToggle.addEventListener("change", () => {
    isMusicEnabled = musicToggle.checked;
    toggleMusic();
});

musicPlayer.addEventListener("ended", playNextSong);

modalOverlay.addEventListener("click", () => {
    closeModal(modeModal);
    closeModal(regionModal);
    closeModal(quitModal);
    closeModal(settingsModal);
});

playAgainBtn.addEventListener("click", () => {
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    comboStreak = 0;
    updateComboDisplay();
});