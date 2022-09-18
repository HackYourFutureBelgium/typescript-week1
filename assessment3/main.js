import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

const question = await fetchQuestion();  
const $question = createQuestion(question);

const $app = document.getElementById('app');
$app.innerHTML = '';
$app.appendChild($question);

//window.addEventListener("beforeunload", () => localStorage.removeItem('count'));
  