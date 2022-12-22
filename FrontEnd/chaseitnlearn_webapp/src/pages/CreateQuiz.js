import React from 'react'
import {useNavigate} from "react-router-dom"
import TeacherNavbar from '../components/dashboard/dashpages/TeacherNavbar';
import '../designs/CreateQuiz.css';

/*
const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', event => {
  event.preventDefault();
  const quizTitle = document.getElementById('quiz-title').value;
  console.log(`Quiz Title: ${quizTitle}`);
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
    const questionText = question.querySelector('[name^="question"]').value;
    console.log(`Question ${index + 1}: ${questionText}`);
  });
});
*/

function CreateQuiz(){
    return(
      <>
        <TeacherNavbar/>
        <div className = "back">
        <Link to="/teacherdashboard">
            <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
        </div> 

          <form id="quiz-form">
            <label for="quiz-title">Quiz Title:</label><br/>
              <input type="text" id="quiz-title" name="quiz-title"/>
              <br></br>
            <div id="questions">
              <div class="question">
                <label for="question-1">Question 1:</label><br/>
                  <input type="text" id="question-1" name="question-1"/>
                  <br></br>
                <label for="answer-1-1">Answer 1:</label><br/>
                  <input type="text" id="answer-1-1" name="answer-1-1"/>
                  <br></br>
                <label for="answer-1-2">Answer 2:</label><br/>
                  <input type="text" id="answer-1-2" name="answer-1-2"/>
                  <br></br>
                <label for="answer-1-3">Answer 3:</label><br/>
                  <input type="text" id="answer-1-3" name="answer-1-3"/>
                  <br></br>
                <label for="answer-1-4">Answer 4:</label><br/>
                  <input type="text" id="answer-1-4" name="answer-1-4"/>
                  <br></br>
                <label for="correct-answer-1">Correct Answer:</label><br/>
                  <select id="correct-answer-1" name="correct-answer-1">
                    <option value="1">Answer 1</option>
                    <option value="2">Answer 2</option>
                    <option value="3">Answer 3</option>
                    <option value="4">Answer 4</option>
                  </select>
              </div>
            </div>
          <button type="button" id="add-question">Add Question</button>
          <button type="submit">Create Quiz</button>
        </form>
      </>
    );
}

export default CreateQuiz;