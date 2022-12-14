import React from "react";
import { useState } from "react";
import '../quizcomponents/QuizDesign.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Quiz() {
    const questions = [
		{
			questionText: 'What is lorem ipsum?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: false },
				{ answerText: 'Answer 2', isCorrect: false },
				{ answerText: 'Answer 3', isCorrect: true },
				{ answerText: 'Answer 4', isCorrect: false },
			],
		},
		{
			questionText: 'What is lorem ipsum?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: false },
				{ answerText: 'Answer 2', isCorrect: true },
				{ answerText: 'Answer 3', isCorrect: false },
				{ answerText: 'Answer 4', isCorrect: false },
			],
		},
		{
			questionText: 'What is lorem ipsum?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: true },
				{ answerText: 'Answer 2', isCorrect: false },
				{ answerText: 'Answer 3', isCorrect: false },
				{ answerText: 'Answer 4', isCorrect: false },
			],
		},
		{
			questionText: 'What is lorem ipsum?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: false },
				{ answerText: 'Answer 2', isCorrect: false },
				{ answerText: 'Answer 3', isCorrect: false },
				{ answerText: 'Answer 4', isCorrect: true },
			],
		},
        {
			questionText: 'What is lorem ipsum?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: false },
				{ answerText: 'Answer 2', isCorrect: false },
				{ answerText: 'Answer 3', isCorrect: true},
				{ answerText: 'Answer 4', isCorrect: false },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}. 
                <div>
                    <button class="btn-success">
                        Submit
                    </button>
                </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;