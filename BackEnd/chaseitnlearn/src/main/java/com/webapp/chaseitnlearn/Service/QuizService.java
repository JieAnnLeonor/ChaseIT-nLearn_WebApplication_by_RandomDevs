package com.webapp.chaseitnlearn.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.webapp.chaseitnlearn.Entity.QuizEntity;
import com.webapp.chaseitnlearn.Repository.QuizRepository;

@Service
public class QuizService {
	@Autowired	
	QuizRepository qrepo;
	
	//create
	public QuizEntity insertQuiz(QuizEntity Quiz) {
		return qrepo.save(Quiz);
	}	
	
	//read
	public List<QuizEntity> getAllQuizzes() {
		return qrepo.findAll();
	}
	
	//read by id
	public Optional<QuizEntity> findQuizById(int id) {
		return qrepo.findById(id);
	}

	//update
	public QuizEntity putQuiz(int id, QuizEntity newQuizDetails) throws Exception{
			
		QuizEntity quiz = new QuizEntity();
			
		try {
			quiz = qrepo.findById(id).get();
				
			quiz.setQuizname(newQuizDetails.getQuizname());
			quiz.setQuestion(newQuizDetails.getQuestion());
			
			return qrepo.save(quiz);
				
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + " does not exist!");
		}
	}
	
	//delete
	public String deleteQuiz(int id) {
		String msg;
		if(qrepo.findById(id) != null) {
			qrepo.deleteById(id);
			msg = "Quiz ID Number " + id + " is successfully deleted!";
		}
		else msg = "Quiz ID Number " + id + " is NOT found!";
		return msg;
	}
}
