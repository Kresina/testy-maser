let currentQuestion = 0;
let incorrectQuestions = new Set();
let correctQuestions = new Set();
let score = 0;

const questionEl = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const questionList = document.getElementById("questionList");

function loadQuestion(index) {
    currentQuestion = index;
    questionEl.innerText = quizData[currentQuestion].question;
    answersDiv.innerHTML = "";

    quizData[currentQuestion].answers.forEach((answer, i) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.classList.add("answer");
        btn.onclick = () => {
            document.querySelectorAll(".answer").forEach(el => {
                el.classList.remove("correct", "incorrect");
            });

            if (i === quizData[currentQuestion].correct) {
                btn.classList.add("correct");
                incorrectQuestions.delete(currentQuestion);
                correctQuestions.add(currentQuestion);
                score++;
            } else {
                btn.classList.add("incorrect");
                document.querySelectorAll(".answer")[quizData[currentQuestion].correct].classList.add("correct");
                incorrectQuestions.add(currentQuestion);
                correctQuestions.delete(currentQuestion);
            }

            updateSidebar();
        };
        answersDiv.appendChild(btn);
    });

    updateNavButtons();
    highlightActiveQuestion();
}

function updateNavButtons() {
    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === quizData.length - 1;
}

function highlightActiveQuestion() {
    document.querySelectorAll(".sidebar button").forEach((btn, index) => {
        btn.classList.toggle("active", index === currentQuestion);
    });
}

function updateSidebar() {
    document.querySelectorAll(".sidebar button").forEach((btn, index) => {
        btn.classList.toggle("incorrect", incorrectQuestions.has(index));
        btn.classList.toggle("correct", correctQuestions.has(index));
    });
}

quizData.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.innerText = `Q${index + 1}: ${q.question}`;
    btn.onclick = () => loadQuestion(index);
    questionList.appendChild(btn);
});

prevButton.onclick = () => {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
};

nextButton.onclick = () => {
    if (currentQuestion < quizData.length - 1) {
        loadQuestion(currentQuestion + 1);
    }
};

loadQuestion(0);