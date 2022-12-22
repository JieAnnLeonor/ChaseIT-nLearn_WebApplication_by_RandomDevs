import React, { Component } from 'react';
import "../dashdesigns/StudentDashStyles.css";
import StudentNavbar from './StudentNavbar'
import RecentActivities from './RecentActivities';
import RecentClasses from './RecentClasses';

class StudentDashboard extends Component {
    render() {
        return (
            <>
            <StudentNavbar />
            <div className="Dashboard-header">
                Dashboard
                
            </div>
            <RecentClasses />
            <RecentActivities />
            </>  
        );
    }
}

export default StudentDashboard;