import React, { Component } from 'react';

class ViewCourses extends Component {
    constructor(props){
        super(props)
        this.state ={
            courses: []
        }
    }

    componentDidMount(){
        CourseService.getCourses().then((res) =>{
        this.setState({courses: res.data});
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
                                    <th>COURSECODE</th>
                                    <th>COURSENAME</th>
                                    <th>COURSEDESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.courses.map(
                                    course =>
                                    <tr key = {course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.coursecode}</td>
                                        <td>{course.coursename}</td>
                                        <td>{course.coursedescription}</td>
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

export default ViewCourses;