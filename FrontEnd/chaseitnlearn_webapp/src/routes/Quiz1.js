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
      <div className='intro'>
        <h1>Lesson 1: Quiz </h1>
        <h6>Attepmts allowed: 1</h6>
        <h6>Are you sure you want to start the quiz?</h6>
        <Link to="/takequiz">
          <button>Start</button>
        </Link> 
      </div>
    </>
  )
}

export default Quiz1
