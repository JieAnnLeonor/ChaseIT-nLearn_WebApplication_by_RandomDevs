import React, { Component } from 'react';
import StudentNavbar from '../StudentNAVBAR';
import StudentProfileContent from './StudentProfileContent';


class StudentProfile extends Component{
    render(){
        return(
            <>
            <StudentNavbar />
            <StudentProfileContent />            
            </>
        )
    }
}

export default StudentProfile;