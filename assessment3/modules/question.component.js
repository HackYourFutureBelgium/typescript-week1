 const createQuestion = ({ category, question, correctAnswer, incorrectAnswers }) => {
	const allAnswers = [correctAnswer, ...incorrectAnswers]
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);


    var count = localStorage.getItem("count");
    
	const $question = document.createElement('section');
	// Here you will need to modify the code
	// Add an element with id "questionCategory" to the HTML and set the value to based on the category property
	$question.innerHTML = `
    <div class="score">Your score: <label class=count >${count == null ? 0 : count} </label></div>
    <h1 id="questionCategory" >Category: ${category}</h1>
        <h2>${question}</h2>
        <form class="question-options" action="">
            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}">
            <label for="answer1">${allAnswers[0]}</label><br>
            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}">
            <label for="answer2">${allAnswers[1]}</label><br>
            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}">
            <label for="answer3">${allAnswers[2]}</label><br>
            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}">
            <label for="answer4">${allAnswers[3]}</label><br>
            <input id="submitAnswer" type="submit" value="Submit" />
            <button class="next">Next</button>
        </form> 
    `;

	// Handle the submission of the form and validate the answer
	const $form = $question.querySelector('.question-options');
    
	$form.addEventListener('submit', (event) => {
		event.preventDefault();
		const answer = $form.querySelector('input[name="answer"]:checked').value;

        let $next = $question.querySelector('.next');
		let $response = $question.querySelector('.bad-response');
        let $answer = $question.querySelector('.error');
       
		if (!$response) {
			$response = document.createElement('p');  
            $answer = document.createElement('p');
		}
		$response.classList.add('bad-response');
		$response.innerHTML = 'Sorry wrong answer';

        $answer.classList.add('answer');
        $answer.innerHTML = 'Correct answer is: ' + correctAnswer;
		if (answer === correctAnswer) {
            $response.classList.remove('bad-response');
            $response.classList.add('good-response');
			$response.innerHTML = 'Correct !!';
            $answer.innerHTML = '';

            var score = localStorage.getItem("count");
            score=Number(count)+1;
            localStorage.setItem("count", score);  
		}
        
		$question.appendChild($response);
        $question.appendChild($answer);

		 $next.addEventListener('click', () => {
            window.location.reload();
            
		});
       
	});
    
	return $question;
};

export { createQuestion };