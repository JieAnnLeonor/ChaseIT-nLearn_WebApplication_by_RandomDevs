import React from 'react'
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"
import "./Chapter1.css"

const Chapter1 = () => {
  return (
    <> 
    <div className='body'>
    <StudentNavbar/>   
      <div className = "back">
        <Link to="/takelessons">
          <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
    </div>     
      <Sidebar/> 
      <div className='chap1'>
        <h1> Lesson1: Chapter 1</h1>
        <h3> "Use Case Diagram"</h3>
          <h5> 
            What is a use case diagram?  
          </h5>
          <h6>
          In the Unified Modeling Language (UML), a use case diagram can summarize the 
          details of your system's users (also known as actors) and their interactions with the system. 
          To build one, you'll use a set of specialized symbols and connectors. 
          </h6>
          <h4>
          When to apply use case diagrams?
          </h4>
          <h6>
          A use case diagram doesn't go into a lot of detail—for example, don't expect it to model the order in which steps are performed. 
          Instead, a proper use case diagram depicts a high-level overview of the relationship between use cases, actors, and systems. 
          Experts recommend that use case diagrams be used to supplement a more descriptive textual use case.
          </h6>
          <h6>
          UML is the modeling toolkit that you can use to build your diagrams. Use cases are represented with a labeled oval shape. 
          Stick figures represent actors in the process, and the actor's participation in the system is modeled with a line between 
          the actor and use case. To depict the system boundary, draw a box around the use case itself.
          </h6>
      </div>
      </div>
    </>
  )
}

export default Chapter1
