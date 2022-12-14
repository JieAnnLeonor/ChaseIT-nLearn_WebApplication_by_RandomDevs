import http from "../http"
import 'bootstrap/dist/css/bootstrap.min.css';

class CourseService {
    getCourses(){
        return http.get("/course/getAllCourses");
    }
}

export default new CourseService;