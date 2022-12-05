package com.webapp.chaseitnlearn.Entity;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String firstname;
	private String lastname;
	private String middlename;
	private int yearlevel;
	private String contact;
	
	@ManyToMany
	@JoinTable(name = "student_course",
			   joinColumns = @JoinColumn(name = "student_id"),
			   inverseJoinColumns = @JoinColumn(name = "course_id"))
	Set<CourseEntity> courses;
	
	public StudentEntity() {}

	public StudentEntity(int id, String firstname, String lastname, String middlename, int yearlevel, String contact,
			Set<CourseEntity> courses) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.middlename = middlename;
		this.yearlevel = yearlevel;
		this.contact = contact;
		this.courses = courses;
	}
	
	@Override
	public String toString() {
		return super.toString();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public int getYearlevel() {
		return yearlevel;
	}

	public void setYearlevel(int yearlevel) {
		this.yearlevel = yearlevel;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Set<CourseEntity> getCourses() {
		return courses;
	}

	public void setCourses(Set<CourseEntity> courses) {
		this.courses = courses;
	}	
}
