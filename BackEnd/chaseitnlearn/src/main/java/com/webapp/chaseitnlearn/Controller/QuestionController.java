package com.webapp.chaseitnlearn.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.webapp.chaseitnlearn.Entity.QuestionEntity;
import com.webapp.chaseitnlearn.Service.QuestionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/question")
public class QuestionController {
	@Autowired
	QuestionService queserv;
	
	//Create a Question
	@PostMapping("/postQuestion")
	public QuestionEntity insertQuestion(@RequestBody QuestionEntity Question) {
		return queserv.insertQuestion(Question);
	}
	
	//Get all Question records
	@GetMapping("/getAllQuestions")
	public List<QuestionEntity> getAllQuestionzes() {
		return queserv.getAllQuestions();
	}
	
	//Get Question record by id
	@GetMapping("/getQuestion/{id}")
	public Optional<QuestionEntity> getQuestion(@RequestParam int id) {
		return queserv.getQuestionById(id);
	}
	
	//Update a record
	@PutMapping("/putQuestion")
	public QuestionEntity putQuestion(@RequestParam int id, @RequestBody QuestionEntity newQuestionDetails) throws Exception{
		return queserv.putQuestion(id, newQuestionDetails);
	}
		
	//Delete a record
	@DeleteMapping("/deleteQuestion/{id}")
	public String deleteQuestion(@PathVariable int id) {
		return queserv.deleteQuestion(id);
	}
}
