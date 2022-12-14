package com.webapp.chaseitnlearn.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;

import com.webapp.chaseitnlearn.Entity.StudentEntity;
import com.webapp.chaseitnlearn.Repository.StudentRepository;

public class StudentService {

	@Autowired
	StudentRepository srepo;
	
	public StudentEntity insertStudent(StudentEntity student) {
		return srepo.save(student);
	}
			
	//R-Read a record from the table named tbl_student
	public List<StudentEntity> getAllStudents() {
		return srepo.findAll();
	}
	
	//R-Read or search student record by Firstname
	public StudentEntity findByFirstname(String firstname) {
		if (srepo.findByFirstname(firstname) != null) 
			return srepo.findByFirstname(firstname);
		else 
			return null;
	}
	
	//U-Update a student record
	public StudentEntity putStudent(int id, StudentEntity newStudentDeatails) throws Exception{
		
		StudentEntity student = new StudentEntity();
		
		try {
			//steps in updating
			//step 1 -search the id number of the student
			student = srepo.findById(id).get();
			
			//Step 2 - update the record
			student.setYearlevel(newStudentDeatails.getYearlevel());
			student.setContact(newStudentDeatails.getContact());
			
			//Step 3 - save the information and return the value --refer to finally block
			return srepo.save(student);
			
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + " does not exist!");
		}
	}
	
	//D - Delete a student record
	public String deleteStudent(int id) {
		String msg;
		if(srepo.findById(id) != null) {      //Step 1 - find the record
			srepo.deleteById(id);             //Step 2 - delete the record
		
			msg = "Student ID Number " + id + " is successfully deleted!";
		}
		else {
			msg = "Student ID Number " + id + " is NOT found!";
		}		
		return msg;
	}
}
