import React from 'react'
import { Link } from "react-router-dom";
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import Sidebar from "../components/navagation/Sidebar"
import "./Chapter1.css"

const Introduction = () => {
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
        <h1> Introduction</h1>
        <h3> "Application Development"</h3>
        <h4>By: Unknown</h4> 
        <h6> 
        An application is software that is used to accomplish specific requirements of user. 
        For eg. To read PDF files, creating documents, gaming applications, applications to play audio and video files etc.  
        For all these types of different requirements different applications needs to be developed.
        </h6>
        <h6>
            Application development is the process of creating a computer program or a set of programs to 
            perform the different tasks that a business requires. From calculating monthly expenses to 
            scheduling sales reports, applications help businesses automate processes and increase efficiency. 
            Every app-building process follows the same steps: gathering requirements, designing prototypes, 
            testing, implementation, and integration.
        </h6>
        <h6>
          Application development also known as app development is the process of planning, designing, 
          creating, testing, and deploying a software application to perform various business operations.  
          It can be done by massive organizations with large teams working on projects, or by a single 
          freelance developer. Application development defines the process of how the application is made 
          and generally follows a standard methodology
        </h6>
        <h6>
        There are lots of factors that go into how application development is done. 
        You must consider the size of the project, how specific the requirements are, 
        how much the customer will want to change things, how large the development team is, 
        how experienced the development team is, and the deadline for the project.
        Application development is closely linked with the software development life-cycle (SDLC).
        </h6>
      </div>
    </>
  )
}

export default Introduction
