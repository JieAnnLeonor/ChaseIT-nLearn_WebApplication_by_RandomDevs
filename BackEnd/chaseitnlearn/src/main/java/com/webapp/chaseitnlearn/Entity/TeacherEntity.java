package com.webapp.chaseitnlearn.Entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tbl_teacher")
public class TeacherEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String firstname;
	private String lastname;
	private String middlename;
	private String contact;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "tcourse")
	Set<CourseEntity> courses;
	
	public TeacherEntity() {}

	public TeacherEntity(int id, String firstname, String lastname, String middlename, String contact,
			Set<CourseEntity> courses) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.middlename = middlename;
		this.contact = contact;
		this.courses = courses;
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
