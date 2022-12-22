import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pagedesigns/EnrollCourse.css"
import StudentNavbar from "../components/dashboard/dashpages/StudentNavbar";


function EnrollCourse() {
    const [code, setCode] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(code);
    };
    
    return (
      <>
      <StudentNavbar />
      <div className = "back">
        <Link to="/readallcourses">
              <button><i class="fa-solid fa-arrow-left"></i></button>
            </Link>  
      </div>
      <div className="enroll-container">
        <form onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <h2>To enroll in this course, you need Achieve Access</h2>
          <button>Request Achieve Access</button>
          <h3>---------ALREADY HAVE A CODE---------</h3>
          <div className="Enter">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="code"
              placeholder="Enter Access Code"
              id="code"
              name="code"
            />
            <Link to="/readallcourses">
              <button>ENTER</button>
            </Link>
          </div>
          <></>
        </form>
      </div>
      </>
    )
}

export default EnrollCourse
