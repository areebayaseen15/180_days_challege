const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: "4"
  },
  {
    question: "Which language is used to style web pages?",
    answers: ["JavaScript", "HTML", "CSS"],
    correct: "CSS"
  },
  {
    question: "Which tag is used for headings in HTML?",
    answers: ["<head>", "<h1>", "<p>"],
    correct: "<h1>"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const scoreBox = document.getElementById("scoreBox");
const answerContainer = document.getElementById("answers");
const answerButtons = document.querySelectorAll(".answer-btn");

// Show current question
const showQuestion = () => {
  const { question, answers } = questions[index];
  questionEl.textContent = question;

  answerButtons.forEach((btn, i) => {
    btn.textContent = answers[i];
    btn.disabled = false;
  });
};

// Handle button clicks
answerContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("answer-btn")) {
    const selectedAnswer = e.target.textContent;
    const { correct } = questions[index];

    if (selectedAnswer === correct) score++;

    answerButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
      index++;
      if (index < questions.length) {
        showQuestion();
      } else {
        questionEl.textContent = "🎉 Quiz Completed!";
        answerContainer.style.display = "none";
        scoreBox.textContent = `✅ Your score: ${score} / ${questions.length}`;
      }
    }, 500);
  }
});

// Start quiz
showQuestion();
