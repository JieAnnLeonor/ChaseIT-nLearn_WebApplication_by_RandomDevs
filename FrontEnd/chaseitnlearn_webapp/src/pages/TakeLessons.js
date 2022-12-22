import React from 'react'
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"

function TakeLessons() {
  return (
    <>
    <StudentNavbar/>   
      <div className = "back">
        <Link to="/readallcourses">
          <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
    </div>     
      <Sidebar/> 
    </>
  )
}

export default TakeLessons
