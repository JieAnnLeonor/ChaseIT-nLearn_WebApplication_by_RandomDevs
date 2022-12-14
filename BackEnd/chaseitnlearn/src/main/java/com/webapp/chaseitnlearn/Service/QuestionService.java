package com.webapp.chaseitnlearn.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.webapp.chaseitnlearn.Entity.QuestionEntity;
import com.webapp.chaseitnlearn.Repository.QuestionRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository quesrepo;
	
	//create
	public QuestionEntity insertQuestion(QuestionEntity question) {
		return quesrepo.save(question);
	}
	
	//read
	public List<QuestionEntity> getAllQuestions(){
		return quesrepo.findAll();
	}
	
	//read by id
	public Optional<QuestionEntity> getQuestionById(int id){
		return quesrepo.findById(id);
	}
	
	//update
	public QuestionEntity putQuestion(int id, QuestionEntity newQuestionDetails) throws Exception{
		QuestionEntity question = new QuestionEntity();
		
		try {
			question = quesrepo.findById(id).get();
			
			question.setQuestionnumber(newQuestionDetails.getQuestionnumber());
			question.setContent(newQuestionDetails.getContent());
			question.setAnswer(newQuestionDetails.getAnswer());
			question.setCorrectanswer(newQuestionDetails.getCorrectanswer());
			
			return question;
			
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + " does not exist!");
		}
	}
	
	//delete
	public String deleteQuestion(int id) {
		String msg;
		if(quesrepo.findById(id) != null) {
			quesrepo.deleteById(id);
			msg = "Question ID Number " + id + " is successfully deleted!";
		}
		else msg = "Question ID Number " + id + " does not exist!";
		
		return msg;
	}
}
