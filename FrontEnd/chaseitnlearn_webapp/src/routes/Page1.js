import React from 'react';
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"
import "./Chapter1.css"
import MyImage from "../components/frontpage/assets/us.png"

const Page1 = () => {
    return (
        <> 
        <div className='body1'>
        <StudentNavbar/>   
          <div className = "back1">
            <Link to="/takelessons">
              <button><i class="fa-solid fa-arrow-left"></i></button>
            </Link>  
        </div>   
        <div className='next'>
            <Link to="/lesson1/chapter1">
              <button><i class="fa-solid fa-less-than"></i>previous page</button>
            </Link>
            <Link to="/lesson1/chapter1/page2">
              <button>next page<i class="fa-solid fa-greater-than"></i></button>
            </Link> 
        </div>  
          <Sidebar/> 
          <div className='chap1'>
            <h1> Lesson1: Chapter 1</h1>
              <h5> 
                Use Case Diagram  
              </h5>
              <h6>
              A use case diagram is a graphical depiction of a user's possible interactions with a system. 
              A use case diagram shows various use cases and different types of users the system has
               and will often be accompanied by other types of diagrams as well.
                The use cases are represented by either circles or ellipses. 
              The actors are often shown as stick figures.
              </h6>
              <img src={MyImage} alt="horse" />
          </div>
          </div>
        </>
      )
}

export default Page1
