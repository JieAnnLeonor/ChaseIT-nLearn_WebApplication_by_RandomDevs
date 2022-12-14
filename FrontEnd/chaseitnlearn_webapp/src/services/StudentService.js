import axios from "axios";

const STUDENT_BASE_URL = "http://localhost:8080/student/getAllStudents"

class StudentService{

    getStudents(){
        return axios.get(STUDENT_BASE_URL);
    }
}

export default new StudentService()