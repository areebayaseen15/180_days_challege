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
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const scoreBox = document.getElementById("scoreBox");

// Show the question and options
function showQuestion() {
  const q = questions[index];
  questionEl.textContent = q.question;
  btn1.textContent = q.answers[0];
  btn2.textContent = q.answers[1];
  btn3.textContent = q.answers[2];

  // Enable buttons for new question
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
}

// Check answer and go to next question
function handleAnswer(e) {
  const selected = e.target.textContent;
  const correct = questions[index].correct;

  // Check and update score
  if (selected === correct) {
    score++;
  }

  // Disable buttons after answer is selected
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;

  // Wait for 0.5 second then show next question
  setTimeout(() => {
    index++;
    if (index < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "🎉 Quiz Completed!";
      btn1.style.display = "none";
      btn2.style.display = "none";
      btn3.style.display = "none";
      scoreBox.textContent = `✅ Your score: ${score} / ${questions.length}`;
    }
  }, 500);
}

// Attach event listeners
btn1.addEventListener("click", handleAnswer);
btn2.addEventListener("click", handleAnswer);
btn3.addEventListener("click", handleAnswer);

// Start quiz
showQuestion();
