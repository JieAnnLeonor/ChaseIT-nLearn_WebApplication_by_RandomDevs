import React from 'react';
import "../dashdesigns/StudentDashStyles.css";
import TeacherNavbar from "./TeacherNavbar";
import RecentActivities from './RecentActivities';
import RecentClasses from './RecentClasses';
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <>
        <TeacherNavbar/>
        <div className="Dashboard-header">
                Dashboard
                <Link to = "/createquiz">
                  <button className="button">Add Quiz</button>
                </Link>   
        </div>

            <RecentClasses />
            <RecentActivities />
    </>
  )
}

export default TeacherDashboard
