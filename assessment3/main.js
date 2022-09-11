import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

const question = fetchQuestion();
const $question = createQuestion(question);

const $app = document.getElementById('app');
$app.innerHTML = '';
$app.appendChild($question);