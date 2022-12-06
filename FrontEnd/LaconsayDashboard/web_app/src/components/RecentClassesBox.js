import React, { Component } from 'react';
import RecentClassesBoxStyle from './RecentClassesBoxStyle.css'

class RecentClassesBox extends Component {
    render() {
        return(
            <>
            <a href='#' className="item" boxcolor = {this.props.boxcolor}>
                {this.props.title}
            </a>            
            </>
        )
    }

}
export default RecentClassesBox;