import React, { Component } from 'react';
import RecentTitleStyle from './RecentTitleStyle.css'
import RecentClassesBox from './RecentClassesBox';

class RecentClasses extends Component {
    render() {
        return(
            <>
            <div className="RecentTitleStyle-header">
                Recent Classes
            </div>
            <div className='container'>
                <RecentClassesBox title = "Applications Development"/>                
                <RecentClassesBox title = "Automata"/>
                <RecentClassesBox title = "Techno"/>          
            </div>
            </>
        )
    }

}
export default RecentClasses;