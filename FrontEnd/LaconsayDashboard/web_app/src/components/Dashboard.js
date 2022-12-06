import React, { Component } from 'react';
import DashboardStyle from './DashboardStyle.css'
import RecentClasses from './RecentClasses';

class Dashboard extends Component {
    render() {
        return(
            <><div className="Dashboard-header">
                Dashboard
                
            </div>
            <RecentClasses />
            </>         
        )
    }

}
export default Dashboard;