import React from 'react'
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"
import "./Chapter1.css"

const Quiz1 = () => {
  return (
    <>
      <StudentNavbar/>   
      <div className = "back">
        <Link to="/takelessons">
          <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
    </div>     
      <Sidebar/> 
      <div className='chap1'>
        <h1>Lesson 1: Quiz </h1>
        <h2>Use Case Diagram Quiz</h2> 
        <Link to="/takequiz">
          <button>Start</button>
        </Link> 
      </div>
    </>
  )
}

export default Quiz1
