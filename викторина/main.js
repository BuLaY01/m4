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

let question_now = 0; // индес текущего вопроса
let count_r_answers = 0; // колво паривльных ответов

function start_work() { // вызывается при запуске программы
  result.classList.add("none"); // доьавляем класс none, в резултате элеметн исчезает
  container.classList.remove("none");// убиарем класс none, в результате элемент появляется
  start.classList.add("none"); //

  question_generate();
}
// start_work();

start.addEventListener("click", start_work);

function question_generate() {
  let text = questions[question_now].text; // обпащаемся к ключу текста
  container.innerHTML = `<h1 class="question">${text}</h1>`;
  let btns = "";
  let allAnswers = questions[question_now].answers;
  for (i of allAnswers) {
    btns += `<button class="btn" onclick = "check_r_answer(${i})">${i}</button>`;
  }
  container.innerHTML += `<nav class="btn_block">${btns}</nav>`;
}

function check_r_answer(answer) {
  let r_answer = questions[question_now].r_answer;
  if (r_answer == answer) {
    count_r_answers += 1;
  }
  question_now += 1; // увеличиваем индекс и переходим к след вопросу

  if (questions.length > question_now) { // чтобы индекс не был больше максимального
    question_generate();
  } else {
  count()
  }
}

function count() {
  start.classList.remove('none')
  container.classList.add('none')
  result.classList.remove('none')
  result.innerHTML = `Результат ${count_r_answers} / ${questions.length}`
  count_r_answers = 0
  question_now = 0
}

