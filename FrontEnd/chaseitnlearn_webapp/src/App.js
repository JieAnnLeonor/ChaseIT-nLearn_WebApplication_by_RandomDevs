import "./index.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/frontpage/routes/Home";
import About from "./components/frontpage/routes/About";
import Pricing from "./components/frontpage/routes/Pricing";
import Contact from "./components/frontpage/routes/Contact";
import SignUp from "./components/frontpage/routes/SignUp";
import Register from "./components/frontpage/routes/Register"
import StudentDashboard from "./components/dashboard/dashpages/StudentDashboard";
import MyCourses from "./pages/MyCourses";

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
        <Route path="/readallcourses" element={<MyCourses />} />
      </Routes>
    </div>
  );
}

export default App;
