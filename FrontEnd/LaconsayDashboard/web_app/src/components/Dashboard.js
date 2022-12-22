import React, { Component } from 'react';
import DashboardStyle from './DashboardStyle.css'
import Navbar from './StudentNAVBAR';
import RecentActivities from './RecentActivities';
import RecentClasses from './RecentClasses';

class Dashboard extends Component {
    render() {
        return(
            <>
            <StudentNavbar />
            <div className="Dashboard-header">
                Dashboard
                
            </div>
            <RecentClasses />
            <RecentActivities />
            </>         
        )
    }

}
export default Dashboard;