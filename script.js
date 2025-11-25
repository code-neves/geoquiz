const statesData = [
    { name: "Acre", abbr: "AC", region: "Norte" }, 
    { name: "Amapá", abbr: "AP", region: "Norte" }, 
    { name: "Amazonas", abbr: "AM", region: "Norte" }, 
    { name: "Pará", abbr: "PA", region: "Norte" }, 
    { name: "Rondônia", abbr: "RO", region: "Norte" }, 
    { name: "Roraima", abbr: "RR", region: "Norte" }, 
    { name: "Tocantins", abbr: "TO", region: "Norte" },
    { name: "Alagoas", abbr: "AL", region: "Nordeste" }, 
    { name: "Bahia", abbr: "BA", region: "Nordeste" }, 
    { name: "Ceará", abbr: "CE", region: "Nordeste" }, 
    { name: "Maranhão", abbr: "MA", region: "Nordeste" }, 
    { name: "Paraíba", abbr: "PB", region: "Nordeste" }, 
    { name: "Pernambuco", abbr: "PE", region: "Nordeste" }, 
    { name: "Piauí", abbr: "PI", region: "Nordeste" }, 
    { name: "Rio Grande do Norte", abbr: "RN", region: "Nordeste" }, 
    { name: "Sergipe", abbr: "SE", region: "Nordeste" },
    { name: "Goiás", abbr: "GO", region: "Centro-Oeste" }, 
    { name: "Mato Grosso", abbr: "MT", region: "Centro-Oeste" }, 
    { name: "Mato Grosso do Sul", abbr: "MS", region: "Centro-Oeste" }, 
    { name: "Distrito Federal", abbr: "DF", region: "Centro-Oeste" },
    { name: "Espírito Santo", abbr: "ES", region: "Sudeste" }, 
    { name: "Minas Gerais", abbr: "MG", region: "Sudeste" }, 
    { name: "Rio de Janeiro", abbr: "RJ", region: "Sudeste" }, 
    { name: "São Paulo", abbr: "SP", region: "Sudeste" },
    { name: "Paraná", abbr: "PR", region: "Sul" }, 
    { name: "Rio Grande do Sul", abbr: "RS", region: "Sul" }, 
    { name: "Santa Catarina", abbr: "SC", region: "Sul" },
];

const stateInfoDB = {
    "Acre": {
        missed: "Fica no extremo oeste do Brasil, faz fronteira com o Peru e Bolívia. É coberto pela Floresta Amazônica e tem economia baseada em borracha, madeira e pecuária.",
        correct: "No extremo oeste, fronteira com Peru e Bolívia. Tem clima quente e úmido, com vastas áreas de Floresta Amazônica. A economia gira em torno da borracha, madeira e pecuária. Rio Branco é a capital e concentra a vida urbana."
    },
    "Amapá": {
        missed: "Está perto da Guiana Francesa e do Oceano Atlântico. Muito da área é preservada, e o destaque é o Parque Nacional do Tumucumaque.",
        correct: "Localizado no extremo norte, banhado pelo Atlântico e fronteira com a Guiana Francesa. Grande parte é protegida por reservas ambientais. A economia vem de mineração, pesca e extrativismo. Capital: Macapá, cortada pela Linha do Equador."
    },
    "Amazonas": {
        missed: "O maior estado do país, com a maior parte da Floresta Amazônica e o famoso Rio Amazonas. A capital Manaus é um polo industrial e turístico.",
        correct: "O maior estado do país, com o poderoso Rio Amazonas e floresta densa. Manaus é uma metrópole industrial e turística, famosa pela Zona Franca. Cultura marcada por festas folclóricas como o Boi de Parintins."
    },
    "Pará": {
        missed: "Tem a cidade de Belém e o Círio de Nazaré. Rico em minérios e floresta, é grande produtor de açaí e castanha-do-pará.",
        correct: "Riquíssimo em recursos naturais, com o Rio Tocantins e o Rio Xingu. Belém é uma capital com forte influência indígena e portuguesa. O estado exporta minérios, açaí e castanha-do-pará."
    },
    "Rondônia": {
        missed: "Região de floresta e agropecuária. Teve forte migração nas décadas de 1970-80. Capital: Porto Velho.",
        correct: "Teve grande crescimento populacional nos anos 1970 com a migração do sul. Hoje é um estado agropecuário e com boa infraestrutura. Porto Velho, às margens do Rio Madeira, é a capital."
    },
    "Roraima": {
        missed: "O mais ao norte do Brasil, faz fronteira com a Venezuela e Guiana. É conhecido pelo Monte Roraima.",
        correct: "O estado mais ao norte do Brasil, com clima tropical e paisagens de savana. Faz fronteira com Venezuela e Guiana. O Monte Roraima é um dos pontos mais altos e impressionantes do país."
    },
    "Tocantins": {
        missed: "Estado mais novo (criado em 1988). Combina cerrado e áreas de transição da Amazônia. A capital é Palmas, planejada e moderna.",
        correct: "Criado em 1988, mistura Amazônia e Cerrado. A capital, Palmas, é planejada e moderna. O Jalapão é um dos destinos turísticos mais famosos do estado."
    },
    "Alagoas": {
        missed: "Pequeno, mas com praias lindas e cultura forte. Maceió é uma das capitais mais turísticas do Brasil.",
        correct: "Pequeno, mas cheio de belezas naturais. Suas praias são das mais bonitas do Brasil, com águas claras e coqueiros. Maceió é a capital e centro turístico. A cultura tem forte presença africana."
    },
    "Bahia": {
        missed: "Estado grande e culturalmente riquíssimo: berço do samba e do acarajé. Salvador é histórica e vibrante.",
        correct: "Grande e culturalmente vibrante. Salvador é histórica, foi a primeira capital do Brasil, e mistura religião, música, culinária e dança afro-brasileira. O interior tem cidades coloniais e o sertão."
    },
    "Ceará": {
        missed: "Conhecido por suas praias e pelo humor nordestino. Fortaleza é uma cidade turística e industrial.",
        correct: "Conhecido por praias famosas como Jericoacoara e Canoa Quebrada. Fortaleza é moderna e movimentada. O povo é alegre e o humor cearense é reconhecido em todo o país."
    },
    "Maranhão": {
        missed: "Tem o Parque dos Lençóis Maranhenses e cultura com influências africanas e indígenas.",
        correct: "Com forte diversidade cultural, une influências indígenas, africanas e portuguesas. Os Lençóis Maranhenses são uma das paisagens mais belas do Brasil. São Luís, a capital, tem centro histórico colonial."
    },
    "Paraíba": {
        missed: "João Pessoa é uma das capitais mais verdes do país. Famosa pelo forró e festas juninas.",
        correct: "João Pessoa é uma cidade tranquila, arborizada e com praias urbanas. O estado tem tradições fortes em forró e festas juninas, além de rica produção artesanal."
    },
    "Pernambuco": {
        missed: "Tem o frevo, o maracatu e o Carnaval de Olinda. Recife é moderna e culturalmente rica.",
        correct: "Estado de cultura intensa: o frevo, o maracatu e o Carnaval de Olinda são símbolos nacionais. Recife é moderna e histórica, e o Porto de Suape é um dos mais importantes do país."
    },
    "Piauí": {
        missed: "Estado de clima quente e povo acolhedor. Tem o Parque Nacional da Serra da Capivara, cheio de pinturas rupestres.",
        correct: "O litoral é pequeno, mas bonito. O interior abriga a Serra da Capivara, um dos sítios arqueológicos mais antigos das Américas. Teresina é a única capital do Nordeste que não fica no litoral."
    },
    "Rio Grande do Norte": {
        missed: "Natal tem dunas e praias lindas. O estado é um dos maiores produtores de energia eólica.",
        correct: "Clima quente e ensolarado o ano inteiro. Natal é famosa pelas dunas e pelo turismo. O estado se destaca também na produção de sal e energia eólica."
    },
    "Sergipe": {
        missed: "O menor estado do Brasil, com capital Aracaju, tranquila e bem planejada.",
        correct: "O menor estado brasileiro, mas com muito charme. Aracaju é uma capital organizada e com belas praias. A economia é baseada em petróleo, turismo e agricultura."
    },
    "Distrito Federal": {
        missed: "Onde está Brasília, a capital do Brasil. Cidade planejada e centro político do país.",
        correct: "Onde fica Brasília, a capital do Brasil. Cidade planejada, com arquitetura de Oscar Niemeyer e urbanismo de Lúcio Costa. É o centro político e administrativo do país."
    },
    "Goiás": {
        missed: "Centro geográfico do Brasil. Forte na agropecuária e na cultura sertaneja.",
        correct: "Região central, com forte presença do Cerrado. A agropecuária e a mineração são base da economia. Goiânia é moderna e conhecida pela música sertaneja."
    },
    "Mato Grosso": {
        missed: "Tem o Pantanal, o Cerrado e a Amazônia. Produz muita soja e gado.",
        correct: "Um dos maiores estados, abriga três biomas: Amazônia, Cerrado e Pantanal. Forte na produção de soja, milho e gado. Cuiabá é a capital, muito quente e próxima a belas paisagens."
    },
    "Mato Grosso do Sul": {
        missed: "Conhecido pelo turismo ecológico em Bonito e pelo Pantanal sul. Agricultura e pecuária fortes.",
        correct: "Conhecido por paisagens naturais incríveis, como Bonito e o Pantanal Sul. A economia é agropecuária e turística. Campo Grande é a capital e tem boa qualidade de vida."
    },
    "Espírito Santo": {
        missed: "Tem praias, montanhas e porto importante. Vitória é uma ilha capital. Produz café e minério.",
        correct: "Pequeno, com litoral bonito e regiões montanhosas no interior. Vitória é uma ilha-capital, e Vila Velha é vizinha e turística. O estado produz café, petróleo e minério."
    },
    "Minas Gerais": {
        missed: "Terra de montanhas, queijo, ouro e cidades históricas como Ouro Preto. Gente acolhedora e culinária famosa.",
        correct: "Montanhoso, cheio de cidades históricas como Ouro Preto e Tiradentes. Conhecido pela hospitalidade, culinária (pão de queijo!) e pela importância na mineração. Belo Horizonte é a capital."
    },
    "Rio de Janeiro": {
        missed: "Famoso por suas praias, o Cristo Redentor e o Carnaval. Mistura de beleza natural e urbana.",
        correct: "Mistura natureza e cidade. Famoso mundialmente pelo Cristo Redentor, o Pão de Açúcar e o Carnaval. É um centro cultural e turístico. A economia envolve indústria, turismo e petróleo."
    },
    "São Paulo": {
        missed: "O estado mais rico e populoso. Centro econômico, com grande diversidade cultural e industrial.",
        correct: "O coração econômico do Brasil. Estado mais populoso e industrializado, com grande diversidade cultural e econômica. A capital é o maior centro financeiro da América do Sul."
    },
    "Paraná": {
        missed: "Tem a cidade de Curitiba e as Cataratas do Iguaçu. Forte em agricultura e indústria.",
        correct: "Une indústria forte, agricultura e natureza exuberante. As Cataratas do Iguaçu são um dos maiores atrativos do país. Curitiba é referência em urbanismo e transporte."
    },
    "Rio Grande do Sul": {
        missed: "Terra do chimarrão e da cultura gaúcha. Economia baseada em pecuária e indústria.",
        correct: "Influência europeia marcante, principalmente alemã e italiana. O povo valoriza o chimarrão, o churrasco e a tradição gaúcha. Porto Alegre é a capital."
    },
    "Santa Catarina": {
        missed: "Conhecido por praias, montanhas e influência europeia. Florianópolis é uma das capitais mais bonitas.",
        correct: "Mistura praias, montanhas e cidades com influência alemã e italiana. Florianópolis é uma das capitais mais belas, e Blumenau é famosa pela Oktoberfest."
    }
};

const appContainer = document.getElementById("app-container");
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
const quitModal = document.getElementById("quit-modal");
const settingsModal = document.getElementById("settings-modal");
const infoModal = document.getElementById("info-modal");

const modeNormalBtn = document.getElementById("mode-normal-btn");
const modeReverseBtn = document.getElementById("mode-reverse-btn");
const modeModalBackBtn = document.getElementById("mode-modal-back-btn");

const ingameBackBtn = document.getElementById("ingame-back-btn");
const quitConfirmBtn = document.getElementById("quit-confirm-btn");
const quitCancelBtn = document.getElementById("quit-cancel-btn");
const settingsModalBackBtn = document.getElementById("settings-modal-back-btn");
const startScreenSettingsBtn = document.getElementById("start-screen-settings-btn");
const infoNextBtn = document.getElementById("info-next-btn");

const timerDisplay = document.getElementById("timer");
const avgTimeDisplay = document.getElementById("avg-time");
const totalTimeEndDisplay = document.getElementById("total-time-end");
const avgTimeEndDisplay = document.getElementById("avg-time-end");
const statsBar = document.querySelector(".stats-bar");

const soundToggle = document.getElementById("sound-toggle");

const infoModalTitle = document.getElementById("info-modal-title");
const infoModalText = document.getElementById("info-modal-text");
const infoFlagContainer = document.getElementById("info-flag-container");
const infoFlagImg = document.getElementById("info-flag-img");

let gameStates = [];
let currentIndex = 0;
let tries = 3;
let score = 0;
let totalQuestions = 0;
let gameMode = "normal"; 
let gameType = "marathon"; 
let timerInterval;
let questionStartTime;
let totalElapsedTime = 0;
let comboStreak = 0;
let comboTimeout;
let missedStatesByRegion = {};

let audioCtx;
let isSoundEnabled = true;

const N_C4 = 261.63;
const N_D4 = 293.66;
const N_E4 = 329.63;
const N_F4 = 349.23;
const N_G4 = 392.00;

const melody = [
    N_E4, N_E4, N_F4, N_G4,
    N_G4, N_F4, N_E4, N_D4,
    N_C4, N_C4, N_D4, N_E4,
    N_E4, N_D4, N_D4
];
let melodyIndex = 0;

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

    const frequency = melody[melodyIndex];

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    
    oscillator.start(audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
    oscillator.stop(audioCtx.currentTime + 0.3);

    melodyIndex = (melodyIndex + 1) % melody.length;
}

function initAudio() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API não suportada.");
        }
    }
}

function preloadNextImages() {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= gameStates.length) return; 
    
    const nextState = gameStates[nextIndex];
    const normalModeImage = new Image();
    normalModeImage.src = `flags/${nextState.abbr.toLowerCase()}.svg`;
    
    const nextOptions = generateOptionSet(nextState);
    nextOptions.forEach(option => {
        const reverseModeImage = new Image();
        reverseModeImage.src = `flags/${option.abbr.toLowerCase()}.svg`;
    });
}

function startGame() {
    appContainer.classList.add('in-game');
    
    gameStates = [...statesData];
    shuffleArray(gameStates);

    currentIndex = 0;
    score = 0;
    tries = 3;
    totalQuestions = gameStates.length;
    totalElapsedTime = 0;
    comboStreak = 0;
    melodyIndex = 0; 
    missedStatesByRegion = { Norte: 0, Nordeste: 0, "Centro-Oeste": 0, Sudeste: 0, Sul: 0 };
    
    updateComboDisplay();
    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    gameScreen.style.display = "flex";
    
    updateTriesDisplay();
    avgTimeDisplay.textContent = "0.0s";
    
    if (gameType === 'learning') {
        statsBar.classList.add('hidden'); 
    } else {
        statsBar.classList.remove('hidden'); 
    }
    
    loadQuestion();
    preloadNextImages();
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
    
    if (gameType === "marathon") {
        resumeTimer();
    } else {
        clearInterval(timerInterval);
    }

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

    preloadNextImages();
}

function generateOptionsNormal(correctState) {
    optionsGridNormal.innerHTML = "";
    const options = generateOptionSet(correctState);
    
    options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.name;
        button.className = "option-button-text solid-shadow";
        button.onclick = (event) => checkAnswer(option.name, correctState.name, button, optionsGridNormal, event, correctState);
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
        button.onclick = (event) => checkAnswer(option.name, correctState.name, button, optionsGridReverse, event, correctState);
        optionsGridReverse.appendChild(button);
    });
}

function generateOptionSet(correctState) {
    const options = [correctState];
    let otherStates = statesData.filter((s) => s.name !== correctState.name);
    
    shuffleArray(otherStates);
    
    for (let i = 0; options.length < 4 && i < otherStates.length; i++) {
        options.push(otherStates[i]);
    }
    
    return shuffleArray(options);
}

function checkAnswer(selectedName, correctName, button, grid, event, stateDataObj) {
    
    if (gameType === "marathon") {
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
    }
    
    Array.from(grid.children).forEach((btn) => (btn.disabled = true));

    const isCorrect = selectedName === correctName;

    if (isCorrect) {
        handleCorrectAnswer(button, grid, stateDataObj);
    } else {
        handleWrongAnswer(button, correctName, grid, stateDataObj);
    }
}

function handleCorrectAnswer(button, grid, stateObj) {
    playCorrectSound();
    button.classList.add("solid-shadow-correct");
    
    feedbackMessage.textContent = "Correto!";
    feedbackMessage.classList.add("text-green-600");
    
    score++;
    comboStreak++;
    updateComboDisplay();

    if (gameType === "marathon") {
        updateAverageTime();
    }

    if (gameType === "learning") {
        setTimeout(() => showLearningModal(true, stateObj), 500);
    } else {
        setTimeout(() => {
            currentIndex++;
            loadQuestion();
        }, 300); 
    }
}

function handleWrongAnswer(button, correctName, grid, stateObj) {
    tries--;
    comboStreak = 0;
    melodyIndex = 0; 
    updateComboDisplay();
    updateTriesDisplay();
    
    const missedState = gameStates[currentIndex];
    missedStatesByRegion[missedState.region]++;

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
        feedbackMessage.textContent = "Você ficou sem vidas!";
        setTimeout(endGame, 1500);
    } else {
        gameStates.push(gameStates[currentIndex]);
        totalQuestions = gameStates.length;

        if (gameType === "learning") {
            setTimeout(() => showLearningModal(false, stateObj), 800);
        } else {
            setTimeout(() => {
                currentIndex++;
                loadQuestion();
            }, 1200);
        }
    }
}

function showLearningModal(isCorrect, stateObj) {
    const info = stateInfoDB[stateObj.name];
    
    if (isCorrect) {
        infoModalTitle.textContent = `Você acertou ${stateObj.name}!`;
        infoModalTitle.className = "modal__title--small modal__title--correct";
        infoModalText.innerHTML = `<strong>${stateObj.name} (${stateObj.region}):</strong> ${info.correct}`;
    } else {
        infoModalTitle.textContent = `Mais atenção em ${stateObj.name}...`;
        infoModalTitle.className = "modal__title--small modal__title--wrong";
        infoModalText.innerHTML = `<strong>${stateObj.name} (${stateObj.region}):</strong> ${info.missed}`;
    }

    infoFlagContainer.classList.remove("hidden");
    infoFlagImg.src = `flags/${stateObj.abbr.toLowerCase()}.svg`;

    openModal(infoModal);
}

infoNextBtn.addEventListener("click", () => {
    closeModal(infoModal);
    if (tries > 0) {
        currentIndex++;
        loadQuestion();
    } else {
        endGame();
    }
});


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
        practiceSuggestion.textContent = `Dica: Estude mais a região ${worstRegion}!`;
    }

    const totalTime = totalElapsedTime / 1000;
    finalScore.textContent = `${score} / ${totalQuestions}`;
    totalTimeEndDisplay.textContent = formatTime(totalTime);
    avgTimeEndDisplay.textContent = `${avgTime === Infinity ? 0 : avgTime.toFixed(1)}s`;

    if (gameType === "learning") {
        totalTimeEndDisplay.parentNode.classList.add("hidden");
        avgTimeEndDisplay.parentNode.classList.add("hidden");
    } else {
        totalTimeEndDisplay.parentNode.classList.remove("hidden");
        avgTimeEndDisplay.parentNode.classList.remove("hidden");
    }
}

function updateTriesDisplay() {
    triesCount.textContent = tries;
}

function updateProgressBar() {
    const progress = totalQuestions > 0 ? (currentIndex / totalQuestions) * 100 : 0;
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
    startGame();
});

modeReverseBtn.addEventListener("click", () => {
    gameMode = "reverse";
    closeModal(modeModal);
    startGame();
});

modeModalBackBtn.addEventListener("click", () => closeModal(modeModal));

ingameBackBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    if (gameType === "marathon") {
        totalElapsedTime += Date.now() - questionStartTime;
    }
    openModal(quitModal);
});

quitConfirmBtn.addEventListener("click", () => {
    appContainer.classList.remove('in-game');
    closeModal(quitModal);
    closeModal(infoModal);
    comboStreak = 0;
    updateComboDisplay();
    gameScreen.style.display = "none";
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

quitCancelBtn.addEventListener("click", () => {
    closeModal(quitModal);
    if (infoModal.classList.contains("hidden") && gameType === "marathon") {
        resumeTimer();
    }
});

startScreenSettingsBtn.addEventListener("click", () => openModal(settingsModal));
settingsModalBackBtn.addEventListener("click", () => closeModal(settingsModal));

soundToggle.addEventListener("change", () => {
    isSoundEnabled = soundToggle.checked;
});


modalOverlay.addEventListener("click", () => {
    if (!infoModal.classList.contains("hidden")) return;

    closeModal(modeModal);
    closeModal(quitModal);
    closeModal(settingsModal);
});

playAgainBtn.addEventListener("click", () => {
    appContainer.classList.remove('in-game');
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    comboStreak = 0;
    updateComboDisplay();
});