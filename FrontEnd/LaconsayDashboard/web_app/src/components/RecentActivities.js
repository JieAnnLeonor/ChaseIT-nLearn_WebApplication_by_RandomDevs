import React, { Component } from 'react';
import RecentActivitiesBox from './RecentActivitiesBox';
import RecentTitleStyle from './RecentTitleStyle.css'

class RecentActivities extends Component {
    render() {
        return(
            <>
            <div className="RecentTitleStyle-header">
                Recent Activities
            </div>
            <div className='container-activities'>
                <RecentActivitiesBox activity = "Quiz 1" title = "Applications Development" />
                <RecentActivitiesBox activity = "Exercise" title = "Automata" />
            </div>
            </>
        )
    }

}
export default RecentActivities;