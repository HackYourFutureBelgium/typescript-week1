import { fetchQuestion } from "./modules/question.api.js";
import { createQuestion } from "./modules/question.component.js";

const quiz = await fetchQuestion();

const data = quiz[0];
const { category, question, correctAnswer, incorrectAnswers } = data;
const $question = createQuestion(data);

const $app = document.getElementById("app");
$app.innerHTML = "";
$app.appendChild($question);
