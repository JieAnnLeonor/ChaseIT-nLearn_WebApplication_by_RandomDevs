import React, { Component } from 'react';
import RecentClassesBoxStyle from './RecentClassesBoxStyle.css'

class RecentActivitiesBox extends Component {
    render() {
        return(
            <>
            <a href='#' className="item-activities">
                <h2>{this.props.activity} | {this.props.title}</h2>
            </a>            
            </>
        )
    }

}
export default RecentActivitiesBox;