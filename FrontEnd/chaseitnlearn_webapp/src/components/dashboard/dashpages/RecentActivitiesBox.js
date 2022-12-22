import React, { Component } from 'react';
import "../dashdesigns/RecentClassesBoxStyles.css";

class RecentActivitiesBox extends Component {
    render() {
        return(
            <>
            <a href='/takelesson' className="item-activities">
                <h2>{this.props.activity} | {this.props.title}</h2>
            </a>            
            </>
        )
    }

}
export default RecentActivitiesBox;