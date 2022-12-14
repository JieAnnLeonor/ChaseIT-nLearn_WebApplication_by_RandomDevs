package com.webapp.chaseitnlearn.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_resources")
public class ResourceEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int r_id;
	private String r_title;
	private String r_name;
	private String r_type;
	private String r_description;
	
	@Lob
	private byte[] r_data;
	
	@ManyToOne
	@JoinColumn(name="teacher_id", referencedColumnName="id")
	TeacherEntity teacher;
	
	public ResourceEntity() {}

	public ResourceEntity(int r_id, String r_title, String r_name, String r_type, String r_description, byte[] r_data, TeacherEntity teacher) {
		super();
		this.r_id = r_id;
		this.r_title = r_title;
		this.r_name = r_name;
		this.r_type = r_type;
		this.r_description = r_description;
		this.r_data = r_data;
		this.teacher = teacher;
	}

	public int getR_id() {
		return r_id;
	}

	public String getR_title() {
		return r_title;
	}

	public void setR_title(String r_title) {
		this.r_title = r_title;
	}

	public String getR_name() {
		return r_name;
	}

	public void setR_name(String r_name) {
		this.r_name = r_name;
	}

	public String getR_type() {
		return r_type;
	}

	public void setR_type(String r_type) {
		this.r_type = r_type;
	}

	public String getR_description() {
		return r_description;
	}

	public void setR_description(String r_description) {
		this.r_description = r_description;
	}

	public byte[] getR_data() {
		return r_data;
	}

	public void setR_data(byte[] r_data) {
		this.r_data = r_data;
	}

	public TeacherEntity getTeacher() {
		return teacher;
	}

	public void setTeacher(TeacherEntity teacher) {
		this.teacher = teacher;
	}
	
}