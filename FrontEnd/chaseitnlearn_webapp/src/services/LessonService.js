import http from "../http"
import 'bootstrap/dist/css/bootstrap.min.css';

class LessonService {
    getLessons(){
        return http.get("/lesson/getAllLessons");
    }
}

export default new LessonService;