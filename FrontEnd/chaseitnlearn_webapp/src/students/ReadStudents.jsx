import React, { Component } from 'react';
import StudentService from "../services/StudentService";

class ReadStudents extends Component {
    constructor(props){
        super(props)
        this.state ={
            students: []
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((res) =>{
        this.setState({students: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2>List of all Students</h2>
                    <div className='row'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>FIRSTNAME</th>
                                    <th>LASTNAME</th>
                                    <th>MIDDLENAME</th>
                                    <th>YEARLEVEL</th>
                                    <th>CONTACT</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.firstname}</td>
                                        <td>{student.lastname}</td>
                                        <td>{student.middlename}</td>
                                        <td>{student.yearlevel}</td>
                                        <td>{student.contact}</td>
                                        <td></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>           
            </div>
        );
    }
}

export default ReadStudents;