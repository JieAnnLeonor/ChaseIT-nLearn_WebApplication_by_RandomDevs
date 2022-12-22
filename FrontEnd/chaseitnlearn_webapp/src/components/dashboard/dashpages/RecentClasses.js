import React, { Component } from 'react';
import "../dashdesigns/RecentTitleStyles.css"
import RecentClassesBox from './RecentClassesBox';

class RecentClasses extends Component {
    render() {
        return(
            <>
            <div className="RecentTitleStyle-header">
                Recent Classes
            </div>
            <div className='container'>
                <RecentClassesBox title = "AppDev" lessons = "2" activities = "1"/>                
                <RecentClassesBox title = "Automata" lessons = "4" activities = "3"/>
                <RecentClassesBox title = "Techno" lessons = "4" activities = "3"/>          
            </div>
            </>
        )
    }

}
export default RecentClasses;