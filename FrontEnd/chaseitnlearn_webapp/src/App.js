import "./index.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/frontpage/routes/Home";
import About from "./components/frontpage/routes/About";
import Pricing from "./components/frontpage/routes/Pricing";
import Contact from "./components/frontpage/routes/Contact";
import SignUp from "./components/frontpage/routes/SignUp";
import Register from "./components/frontpage/routes/Register"
import TeacherDashboard from "./components/dashboard/dashpages/TeacherDashboard";
import StudentDashboard from "./components/dashboard/dashpages/StudentDashboard";
import MyCourses from "./pages/MyCourses";
import EnrollCourse from "./pages/EnrollCourse";
import TakeLessons from "./pages/TakeLessons";
import Chapter1 from "./routes/Chapter1";
import Introduction from "./routes/Introduction";
import Chapter2 from "./routes/Chapter2";
import Quiz1 from "./routes/Quiz1";
import Resources from "./pages/Resources";
import TakeQuiz from "./pages/TakeQuiz";
import CreateCourse from "./pages/TeacherPage/CreateCourse";
import CreateResources from "./pages/TeacherPage/CreateResources";
import ReadResources from "./pages/TeacherPage/ReadResources";
import CreateQuiz from "./pages/CreateQuiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentdashboard" element={<StudentDashboard/>}/>   
        <Route path="/teacherdashboard" element={<TeacherDashboard/>}/>       
        <Route path="/readallcourses" element={<MyCourses />} />
        <Route path="/enrollcourse" element={<EnrollCourse />} />
        <Route path="/takelessons" element={<TakeLessons />} />       
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/lesson1/chapter1" element={<Chapter1/>}/>
        <Route path="/lesson1/chapter2" element={<Chapter2/>}/>       
        <Route path="/lesson1/quiz1" element={<Quiz1/>}/>           
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/takequiz" element={<TakeQuiz/>}/>
        <Route path="/course/add" element={<CreateCourse/>}/>
        <Route path="/resources/add" element={<CreateResources/>}/>
        <Route path="/resources/list" element={<ReadResources/>}/>
        <Route path="/createquiz" element={<CreateQuiz />}/>
      </Routes>
    </div>
  );
}

export default App;
