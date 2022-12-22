import React from 'react'
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"
import "../routes/Chapter1.css"

function TakeLessons() {
  return (
    <>
    <div className='body'>
    <StudentNavbar/>   
      <div className = "back">
        <Link to="/readallcourses">
          <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
    </div>     
      <Sidebar/>
      <div className='lesson'>
      <h1> Welcome</h1>
      <h1>to</h1>
      <h1>Application Development!</h1>
      </div>
      </div> 
    </>
  )
}

export default TakeLessons
