import http from "../http"
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentService{

    getStudents(){
        return http.get("/student/getAllStudents");
    }
    
}

export default new StudentService()