import React, { Component } from 'react';
import RecentClassesBoxStyle from './RecentClassesBoxStyle.css'

class RecentClassesBox extends Component {
    render() {
        return(
            <>
            <a href='#' className="item-classes" boxcolor = {this.props.boxcolor}>
                <h2>{this.props.title}</h2>
                <hr></hr>
                <h3>Lessons: {this.props.lessons}</h3>
                <br></br>
                <h3>Activities: {this.props.activities}</h3>
            </a>            
            </>
        )
    }

}
export default RecentClassesBox;