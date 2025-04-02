let currentQuestion = 0;
let incorrectQuestions = new Set();
let correctQuestions = new Set();
let score = 0;
let testTimer;
let startTime;
let elapsedTime = 0;
let isTimerRunning = false;

const elements = {
    question: document.getElementById("question"),
    answers: document.getElementById("answers"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    generateTest: document.getElementById("generateTest"),
    toggleTimer: document.getElementById("toggleTimer"),
    questionList: document.getElementById("questionList"),
    numQuestions: document.getElementById("numQuestions"),
    timerDisplay: document.getElementById("timerDisplay"),
    quizContainer: document.querySelector(".quiz-container"),
    endTest: document.getElementById("endTest")
};

let quizDataSubset = [];

// Funkce pro správné náhodné zamíchání otázek
function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function toggleQuizVisibility(show) {
    elements.quizContainer.style.display = show ? "block" : "none";
}

function loadQuestion(index) {
    currentQuestion = index;
    elements.question.textContent = quizDataSubset[currentQuestion].question;
    elements.answers.innerHTML = "";

    quizDataSubset[currentQuestion].answers.forEach((answer, i) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.textContent = answer;
        btn.onclick = () => handleAnswer(i, btn);
        elements.answers.appendChild(btn);
    });

    updateNavButtons();
    updateSidebar();
}

function handleAnswer(selectedIndex, button) {
    const correctIndex = quizDataSubset[currentQuestion].correct;

    // Reset všech odpovědí
    document.querySelectorAll(".answer").forEach(btn => {
        btn.classList.remove("selected", "correct", "incorrect");
        btn.disabled = true; // Deaktivace tlačítek po výběru odpovědi
    });

    // Zvýraznění vybrané odpovědi
    button.classList.add("selected");

    // Vyhodnocení odpovědi
    const answers = document.querySelectorAll(".answer");
    answers.forEach((btn, i) => {
        if (i === correctIndex) btn.classList.add("correct"); // Správná odpověď
        if (i === selectedIndex && i !== correctIndex) btn.classList.add("incorrect"); // Špatná odpověď
    });

    if (selectedIndex === correctIndex) {
        correctQuestions.add(currentQuestion);
        incorrectQuestions.delete(currentQuestion);
        score++;
    } else {
        incorrectQuestions.add(currentQuestion);
        correctQuestions.delete(currentQuestion);
    }

    updateSidebar();

    // Zobrazení výsledků po poslední otázce
    if (currentQuestion === quizDataSubset.length - 1) {
        stopTimer(); // Zastavení časovače
        elements.toggleTimer.disabled = true; // Deaktivace tlačítka "Zastavit test"
        displayResults(); // Zobrazení výsledků
    } else {
        currentQuestion++; // Posun na další otázku, pokud existuje
        loadQuestion(currentQuestion); // Načtení další otázky
    }
}

function updateNavButtons() {
    elements.prev.disabled = currentQuestion === 0;
    elements.next.disabled = currentQuestion === quizDataSubset.length - 1;
}

function updateSidebar() {
    elements.questionList.innerHTML = "";
    quizDataSubset.forEach((q, index) => {
        const btn = document.createElement("button");
        btn.textContent = `Q${index + 1}: ${q.question.substring(0, 30)}...`;
        btn.className = "sidebar-question" + 
                        (correctQuestions.has(index) ? " correct" : "") + 
                        (incorrectQuestions.has(index) ? " incorrect" : "") + 
                        (index === currentQuestion ? " current" : "");
        btn.onclick = () => loadQuestion(index);
        elements.questionList.appendChild(btn);
    });
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    clearInterval(testTimer);
    
    testTimer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000).toString().padStart(2, "0");
        const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, "0");
        elements.timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(testTimer);
}

function toggleTimer() {
    if(isTimerRunning) {
        stopTimer();
        toggleQuizVisibility(false);
        elements.toggleTimer.textContent = "Spustit test";
        elements.endTest.disabled = true;
    } else {
        startTimer();
        toggleQuizVisibility(true);
        elements.toggleTimer.textContent = "Zastavit test";
        elements.endTest.disabled = false;
    }
    isTimerRunning = !isTimerRunning;
}

function displayResults() {
    const totalQuestions = quizDataSubset.length;
    const correctAnswers = correctQuestions.size;
    const incorrectAnswers = incorrectQuestions.size;

    // Vyčištění oblasti quiz-container a zobrazení výsledků
    elements.quizContainer.innerHTML = `
        <div class="results">
            <h2>Výsledky testu</h2>
            <p><strong>Správné odpovědi:</strong> ${correctAnswers} z ${totalQuestions}</p>
            <p><strong>Špatné odpovědi:</strong> ${incorrectAnswers}</p>
            <button id="restartTest">Spustit nový test</button>
        </div>
    `;

    // Přidání funkčnosti pro tlačítko restartu
    document.getElementById("restartTest").onclick = generateTest;
}

// Hlavní funkce pro generování testu
function generateTest() {
    const num = parseInt(elements.numQuestions.value, 10);
    
    if(!quizData?.length) {
        alert("Chybí data otázek!");
        return;
    }
    
    if(isNaN(num) || num < 1 || num > quizData.length) {
        alert(`Platný rozsah: 1-${quizData.length}`);
        return;
    }

    // Reset stavu
    stopTimer();
    elapsedTime = 0;
    elements.timerDisplay.textContent = "00:00";
    quizDataSubset = [...quizData];
    shuffleArray(quizDataSubset);
    quizDataSubset = quizDataSubset.slice(0, num);
    currentQuestion = 0;
    correctQuestions.clear();
    incorrectQuestions.clear();

    // Reset UI
    elements.quizContainer.innerHTML = `
        <div id="question"></div>
        <div id="answers"></div>
        <div class="nav-buttons">
            <button id="prev" disabled>Předchozí</button>
            <button id="next" disabled>Další</button>
        </div>
    `;

    // Nové přiřazení elementů
    elements.question = document.getElementById("question");
    elements.answers = document.getElementById("answers");
    elements.prev = document.getElementById("prev");
    elements.next = document.getElementById("next");

    // Nová vazba eventů
    elements.prev.onclick = () => currentQuestion > 0 && loadQuestion(currentQuestion - 1);
    elements.next.onclick = () => currentQuestion < quizDataSubset.length - 1 && loadQuestion(currentQuestion + 1);

    // Inicializace
    elements.toggleTimer.disabled = false;
    elements.toggleTimer.textContent = "Spustit test";
    elements.endTest.disabled = true;
    updateSidebar();
    loadQuestion(0);
    toggleQuizVisibility(false);
    
}

// Inicializace event listenerů
elements.generateTest.addEventListener("click", generateTest);
elements.toggleTimer.addEventListener("click", toggleTimer);
elements.endTest.addEventListener("click", () => {
    stopTimer(); // Zastavení časovače
    displayResults(); // Zobrazení výsledků testu
});