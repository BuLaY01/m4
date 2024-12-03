let start = document.getElementById("start");
let result = document.getElementById("result");
let container = document.getElementById("container");

let questions = [
  {
    text: "43 * 54",
    r_answer: "2322",
    answers: ["2344", "3121", "2432", "2322"],
  },
  {
    text: "2 + 2 * 2",
    r_answer: "6",
    answers: ["2", "8", "6", "10"],
  },
];

let question_now = 0
let count_r_answers = 0

function start_work() {
  result.classList.add("none");
  container.classList.remove("none");
  start.classList.add("none");

  question_generate();
}
// start_work();

start.addEventListener("click", start_work);

function question_generate() {
  let text = questions[question_now].text;
  container.innerHTML += `<h1 class="question">${text}</h1>`;
  let btns = "";
  let allAnswers = questions[question_now].answers;
  for (i of allAnswers) {
    btns += `<button class="btn">${i}</button>`
  }
  container.innerHTML += `<nav class="btn_block">${btns}</nav>`
}

function check_r_answer(answer) {
    let r_answer = questions[question_now].r_answer
    if (r_answer == answer) {
        count_r_answers += 1
    }
    question_now += 1
    
    if (questions.length > count_r_answers) {
        question_generate()
    }
    else {
        console.log('Вопросы закончились')
    }
}
check_r_answer('2222')
{
  /* <h1 class="question">Вопрос 1: ближайшая к Земле звезда</h1>
      <nav class="btn_block">
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
      </nav> */
}
