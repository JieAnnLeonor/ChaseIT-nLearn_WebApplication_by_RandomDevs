import React, { Component } from 'react';
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
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