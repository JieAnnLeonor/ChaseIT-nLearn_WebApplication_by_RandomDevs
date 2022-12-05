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
import com.webapp.chaseitnlearn.Entity.QuizEntity;
import com.webapp.chaseitnlearn.Service.QuizService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/quiz")
public class QuizController {
	@Autowired
	QuizService qserv;
	
	//Create a Quiz
	@PostMapping("/postQuiz")
	public QuizEntity insertQuiz(@RequestBody QuizEntity quiz) {
		return qserv.insertQuiz(quiz);
	}
	
	//Get all Quiz records
	@GetMapping("/getAllQuizzes")
	public List<QuizEntity> getAllQuizzes() {
		return qserv.getAllQuizzes();
	}
	
	//Get Quiz record by id
	@GetMapping("/getQuiz/{id}")
	public Optional<QuizEntity> findByQuizname(@RequestParam int id){
		return qserv.findQuizById(id);
	}
	
	//Update a record
	@PutMapping("/putQuiz")
	public QuizEntity putQuiz(@RequestParam int id, @RequestBody QuizEntity newQuizDetails) throws Exception{
		return qserv.putQuiz(id, newQuizDetails);
	}
		
	//Delete a record
	@DeleteMapping("/deleteQuiz/{id}")
	public String deleteQuiz(@PathVariable int id) {
		return qserv.deleteQuiz(id);
	}
}
