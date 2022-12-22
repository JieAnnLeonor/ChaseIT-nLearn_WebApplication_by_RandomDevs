import { Link } from "react-router-dom";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../pagedesigns/MyCourses.css";
import StudentNavbar from "../components/dashboard/dashpages/StudentNavbar";
import data from "../components/navagation/Data";

function MyCourses() {
  let navigate = useNavigate();

  const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(search);
    };

  const[noOfElemennt, setnoOfElement] = useState(4);

    const loadMore = () =>{
      setnoOfElement(noOfElemennt + noOfElemennt);
    }

    const loadLess = () =>{
      setnoOfElement(noOfElemennt - 1);
    }

    const less = () =>{
      setnoOfElement(noOfElemennt - noOfElemennt);
    }

  const slice = data.cardData.slice(0, noOfElemennt);

  return ( 
    <>
    <StudentNavbar/>
      <div className = "back">
        <Link to="/studentdashboard">
            <button><i class="fa-solid fa-arrow-left"></i></button>
        </Link>  
      </div>  

        <div className = "search">
          <form onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search here..."
              id="search"
              name="search"
            />
            <Link to="/course">
              <button>Search</button>
            </Link>        
          </form>

          <h1>My Courses</h1>
        </div>     

      <button className="btn d-block w-100"
          onClick={() => less()}
        >
          Delete All
      </button>  

      <section className="py-4 container">
        <div className="row justify-content-center">

          {slice.map((item, index)=>{
            return(
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} alt="img" className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>   
                    <div className="btn-btn">  
                      <button onClick={() => loadLess()}>
                        Delete
                      </button> 
                      <button onClick={() =>{
                        navigate("/takelessons");
                      }}>
                        View
                      </button>         
                    </div>
                  </div>
                </div>
              </div>
            )
          })}   
        </div>  

              <button 
          className="btn1 btn-dark padding-top-20rem d-block w-100"
          onClick={() => loadMore()}
        >Load More</button>

      </section>     



      <div className="enroll">


        <Link to="/enrollcourse">
          <button>Enroll</button>
        </Link>
      </div>
    </>  
    
  )
}

export default MyCourses
